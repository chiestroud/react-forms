import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { addStudent, updateStudent } from './helpers/data/StudentData';

const StudentForm = ({
  formTitle,
  setStudents,
  name,
  teacher,
  grade,
  firebaseKey
}) => {
  const [student, setStudent] = useState({
    name: name || '', // use name if it is available and if not make an empty string
    teacher: teacher || '',
    grade: grade || 0,
    firebaseKey: firebaseKey || null
  });

  const handleInputChange = (e) => {
    setStudent((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.name === 'grade' ? Number(e.target.value) : e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (student.firebaseKey) {
      console.warn('You want to update this student');
      updateStudent(student).then((studentArray) => setStudents(studentArray));
    } else {
      addStudent(student).then((studentArray) => setStudents(studentArray));
    }
  };

  return (
    <>
      <div className='student-form'>
        <form
          id='addStudentForm'
          autoComplete='off'
          onSubmit={handleSubmit}
        >
          <h2>{formTitle}</h2>
          <label>Name: </label>
          <input
            name='name'
            type='text'
            placeholder='Name'
            value={student.name}
            onChange={handleInputChange}
          ></input>
          <label>Teacher: </label>
          <input
            name='teacher'
            type='text'
            placeholder='Teacher'
            value={student.teacher}
            onChange={handleInputChange}
          ></input>
          <label>Grade: </label>
          <input
            name='grade'
            type='number'
            placeholder='Grade'
            value={student.grade}
            onChange={handleInputChange}
          ></input>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </>
  );
};

StudentForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  setStudents: PropTypes.func,
  name: PropTypes.string,
  teacher: PropTypes.string,
  grade: PropTypes.number,
  firebaseKey: PropTypes.string
};

export default StudentForm;
