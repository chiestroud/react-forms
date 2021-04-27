import React, { useState, useEffect } from 'react';
import './App.scss';
import StudentForm from '../StudentForm';
import { getStudent } from '../helpers/data/StudentData';
import StudentCard from '../components/StudentCard';

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudent().then((response) => setStudents(response));
  }, []);

  return (
    <div className='App'>
      <StudentForm
        formTitle='Form Title'
        setStudents={setStudents}
      />
      <hr />
      {students.map((studentInfo) => (
        <StudentCard key={studentInfo.firebaseKey}
          firebaseKey={studentInfo.firebaseKey}
          name={studentInfo.name}
          teacher={studentInfo.teacher}
          grade={Number(studentInfo.grade)}
          setStudents={setStudents}
        />
      ))}
    </div>
  );
}

/* <Card body key={studentInfo.firebaseKey}>
<CardTitle tag="h5">{studentInfo.name}</CardTitle>
<CardText>Teacher: {studentInfo.teacher}</CardText>
<CardText>Grade: {studentInfo.grade}</CardText>
<Button onClick={() => console.warn(`${studentInfo.name}'s teacher is ${studentInfo.teacher}`)}>Print Student</Button>
</Card> */

export default App;
