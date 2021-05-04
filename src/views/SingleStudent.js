import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getSingleStudent } from '../helpers/data/StudentData';

export default function SingleStudent() {
  const [student, setStudent] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getSingleStudent(id)
      .then(setStudent);
  }, []);
  return (
    <div>
      <h2>{student.name}</h2>
      <h2>{student.teacher}</h2>
    </div>
  );
}

SingleStudent.propTypes = {
  id: PropTypes.string
};
