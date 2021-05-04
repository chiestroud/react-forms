import React from 'react';
import PropTypes from 'prop-types';

export default function Home({ user }) {
  return (
    <div>
      { user
        ? <div><h1>Hello, {user.fullName}</h1>
          <img className='profileImage' src={user.profileImage} />
          <p>Your username is {user.username}</p>
        </div>
        : <h1>Hello, World!</h1>
      }
    </div>
  );
}

Home.propTypes = {
  user: PropTypes.any
};
