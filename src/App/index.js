import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import NavBar from '../components/NavBar';
import { getStudent } from '../helpers/data/StudentData';
import Routes from '../helpers/Routes';

function App() {
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState(null);
  // null means the app is loading. false: not logger in. useObj means user is logged in.

  useEffect(() => {
    getStudent().then((response) => setStudents(response));
  }, []);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
          username: authed.email.split('@')[0]
        };
        setUser(userInfoObj);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);
  return (
    <>
      <Router>
        <NavBar user={user}/>
        <Routes
          user={user}
          students={students}
          setStudents={setStudents}
        />
      </Router>
    </>
  );
}

export default App;
