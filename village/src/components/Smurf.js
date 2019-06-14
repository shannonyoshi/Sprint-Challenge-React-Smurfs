import React from 'react';

const Smurf = ({smurfs, match}) => {
  const {id} = match.params;
  const smurf = smurfs.find(smurf => `${smurf.id}` === id);
  if (!smurf) {
    return <h2>Loading Smurfs...</h2>
  }
  
  return (
    <div className="Smurf">
      <h3>{smurf.name}</h3>
      <strong>{smurf.height} tall</strong>
      <p>{smurf.age} smurf years old</p>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

