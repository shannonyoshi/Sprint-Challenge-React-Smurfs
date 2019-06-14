import React, { Component } from "react";


class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfInput: this.props.activeSmurf || {
        name: "",
        age: "",
        height: ""
      }
    };
  }
  componentDidUpdate(prevProps) {
    if (
      this.props.activeSmurf &&
      prevProps.activeSmurf !== this.props.activeSmurf
    ) {
      this.setState({
        smurfInput: this.props.activeSmurf
      });
    }
  }

  handleInputChange = e => {
    e.persist();
    this.setState(prevState => ({
      smurfInput: {
        ...prevState.smurfInput,
        [e.target.name]: e.target.value
      }
    }));
  };

  submitSmurf = e => {
    if (this.props.activeSmurf) {
      this.props.updateSmurf(e, this.state.smurfInput);
    } else {
      this.props.addSmurf(e, this.state.smurfInput);
    }
    this.setState({
      smurfInput: {
        name: "",
        age: "",
        height: ""
      }
    });
  };

  render() {
    return (
      <div className="smurf-form">
        <h2>{`${this.props.activeSmurf ? "Update" : "Add New"} Smurf`} </h2>
        <form onSubmit={this.submitSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.smurfInput.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.smurfInput.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.smurfInput.height}
            name="height"
          />
          <button type="submit">{`${
            this.props.activeSmurf ? "Update" : "Add New"
          } Smurf`}</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
