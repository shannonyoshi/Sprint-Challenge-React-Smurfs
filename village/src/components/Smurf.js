import React from 'react';
import { FaTrashAlt, FaEdit } from "react-icons/fa";

const Smurf = ({smurfs, match, deleteSmurf, setUpdateForm}) => {
  const {id} = match.params;
  const smurf = smurfs.find(smurf => `${smurf.id}` === id);
  if (!smurf) {
    return <h2>Loading Smurfs...</h2>
  }
  return (
    <div className="Smurf">
        <FaTrashAlt
        onClick={e => {
          deleteSmurf(e, smurf.id);
        }}
        style={{ color: "black", fontSize: "1em", padding: "1em" }}
      />
      <FaEdit
        onClick={e => {
          setUpdateForm(e, smurf);
        }}
        style={{ color: "black", fontSize: "1em", padding: "1em" }}
      />
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

