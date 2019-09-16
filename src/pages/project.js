import React from 'react';

const Project = ({ match }) => {
  const name = match.params.name;
  return (
    <>
    <h1>Project {name}</h1>
    </>
  );
}

export default Project;