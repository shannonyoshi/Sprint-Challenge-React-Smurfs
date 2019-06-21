import React, { Component } from "react";
import {Link} from "react-router-dom";

import Smurf from "./Smurf";

class Smurfs extends Component {
  render() {
    return (
      <div className="smurfs-wrapper">
        <h1>Smurf Village</h1>
        <div className="smurfs">
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Link to={`/smurfs/${smurf.id}`} key={smurf.id}>
                <div className="smurf">
                  <h3>{smurf.name}</h3>
                  <strong>{smurf.height} tall</strong>
                  <p>{smurf.age} smurf years old</p>
                </div>
                {/* <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              /> */}
              </Link>
            );
          })}
        </ul>
        </div>
      </div>
    );
  }
}

Smurf.defaultProps = {
  smurfs: []
};

export default Smurfs;
