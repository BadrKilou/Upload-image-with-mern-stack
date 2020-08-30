import React from 'react';
import { addPhoto } from '../../actions/clientAction';
import { connect } from 'react-redux'; 

const Photo = ({ id }) => {
  return (
    <div className="photo">
      <img
        variant="top"
        src={`http://localhost:5000/photos/${id}`}
        alt="quick"
      />
    </div>
  );
};

export default Photo;