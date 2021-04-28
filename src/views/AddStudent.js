import React from 'react';
import PropTypes from 'prop-types';
import StudentForm from '../StudentForm';

const AddStudent = ({ setStudents }) => (
  <div>
      <h1>Adding a student</h1>
      <StudentForm
        formTitle='Form Title'
        setStudents={setStudents}
      />
    </div>
);

AddStudent.propTypes = {
  setStudents: PropTypes.func.isRequired
};

export default AddStudent;
