import React, { Component } from "react";
import axios from "axios";
import { Route, NavLink } from "react-router-dom";
import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import Smurf from "./components/Smurf";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      activeSmurf: null
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        this.setState({ smurfs: res.data, error: "" });
      })
      .catch(err => {
        console.log(err);
      });
  }

  addSmurf = (e, smurf) => {
    e.preventDefault();
    const newSmurf = {
      name: smurf.name,
      age: smurf.age,
      height: smurf.height
    };
    axios
      .post("http://localhost:3333/smurfs", newSmurf)
      .then(res => {
        this.setState({ smurfs: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };
  deleteSmurf = (e, id) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        this.setState({ smurfs: res.data });
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };
  setUpdateForm = (e, smurf) => {
    e.preventDefault();
    this.setState({
      activeSmurf: smurf
    });
    this.props.history.push("/smurf-form");
  };

  updateSmurf = (e, smurf) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
      .then(res => {
        console.log(res)
        this.setState({
          activeSmurf: null,
          smurfs: res.data
        });
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("smurf", smurf,err);
      });
  };
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <NavLink exact to="/" className="nav-link">
              Smurfs
            </NavLink>
            <NavLink exact to="/smurf-form" className="nav-link">
              {`${this.state.activeSmurf ? "Update" : "Add"} Smurf `}
            </NavLink>
          </nav>
        </header>

        <Route
          exact
          path="/"
          render={props => <Smurfs {...props} smurfs={this.state.smurfs} />}
        />
        <Route
          exact
          path="/smurf-form"
          render={props => (
            <SmurfForm
              {...props}
              addSmurf={this.addSmurf}
              activeSmurf={this.state.activeSmurf}
              updateSmurf={this.updateSmurf}
            />
          )}
        />
        <Route
          path="/smurfs/:id"
          render={props => (
            <Smurf
              {...props}
              smurfs={this.state.smurfs}
              deleteSmurf={this.deleteSmurf}
              setUpdateForm={this.setUpdateForm}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
