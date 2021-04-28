import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { getStudent } from '../helpers/data/StudentData';
import Routes from '../helpers/Routes';

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudent().then((response) => setStudents(response));
  }, []);

  return (
    <>
      <Router>
        <NavBar />
        <Routes
          students={students}
          setStudents={setStudents}
        />
      </Router>
    </>
  );
}

export default App;
