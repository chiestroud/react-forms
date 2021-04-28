import React from 'react';
import PropTypes from 'prop-types';
import '../App/App.scss';
import StudentCard from '../components/StudentCard';

function Students({ students, setStudents }) {
  return (
    <div className='App'>
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

Students.propTypes = {
  students: PropTypes.array.isRequired,
  setStudents: PropTypes.func.isRequired
};

export default Students;
