import React, { Component } from "react";
import { POINT_CONVERSION_COMPRESSED } from "constants";

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.activeSmurf.name || "",
      age: this.props.activeSmurf.age || "",
      height: this.props.activeSmurf.height || ""
    };
  }
  componentDidUpdate(prevProps) {
    if (
      this.props.activeSmurf &&
      prevProps.activeSmurf !== this.props.activeSmurf
    ) {
      this.setState({
        name: this.props.activeSmurf.name,
        age: this.props.activeSmurf.age,
        height: this.props.activeSmurf.height
      });
    }
  }

  addSmurf = event => {
    event.preventDefault();
    this.props.addSmurf(event, this.state);
    this.setState({
      name: "",
      age: "",
      height: ""
    });
  };

  handleInputChange = e => {
    e.persist();
    this.setState({ [e.target.name]: e.target.value });
  };

  submitSmurf = e => {
    if (this.props.activeSmurf) {
      this.props.updateSmurf(e, this.state);
    } else {
      this.props.addSmurf(e, this.state);
    }
    this.setState({
      name: "",
      age: "",
      height: ""
    })
  }

  render() {
    return (
      <div className="smurf-form">
        <h2>{`${this.props.activeSmurf ? "Update" : "Add New"} Smurf`} </h2>
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">{`${this.props.activeSmurf ? "Update" : "Add New"} Smurf`}</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
