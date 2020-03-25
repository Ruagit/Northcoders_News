import React, { Component } from "react";
import * as api from "../Utils/api";
import "../App.css";
import { Link } from "@reach/router";

class Users extends Component {
  state = {
    users: [],
    currentUser: "",
    newUsername: "",
    newName: "",
    newAvatar: "",
    isLoading: true
  };

  getUsers = () => {
    api.fetchUsers().then(users => {
      this.setState({ users, isLoading: false });
    });
  };

  componentDidMount() {
    this.getUsers();
  }

  addUser = user => {
    this.setState(currentState => {
      return { users: [user, ...currentState.users] };
    });
  };
  handleChange = event => {
    const { value } = event.target;
    this.setState({ currentUser: value });
  };

  handleUserCreateChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { newUsername, newName, newAvatar } = this.state;
    api.postUser(newUsername, newName, newAvatar).then(user => {
      this.addUser(user);
      this.setState({ newUsername: "", newName: "", newAvatar: "" });
    });
  };

  render() {
    const { newUsername, newName, newAvatar } = this.state;
    return (
      <>
        <main className="usermain">
          <h3 className="login">Please Login</h3>
          <section className={"users-select"}>
            <label> User </label>
            <select onChange={this.handleChange}>
              <option value="">Select User</option>
              {this.state.users.map(user => {
                return (
                  <option key={user.username} value={user.username}>
                    {user.username}
                  </option>
                );
              })}
            </select>
            <Link to={`/${this.state.currentUser}/articles`}>
              <button>Login</button>
            </Link>
          </section>

          <form onSubmit={this.handleSubmit}>
            <br />
            <br />

            <h3>Sign Up</h3>
            <p>Please fill in this form to create a user.</p>
            <label htmlFor="newUsername">
              Username:
              <input
                className="crteurinput"
                value={newUsername}
                type="text"
                name="newUsername"
                placeholder="Enter a username"
                id="newUsername"
                required
                onChange={this.handleUserCreateChange}
              />
            </label>
            <br />
            <label htmlFor="newName">
              Name:
              <input
                className="crteurinput"
                value={newName}
                type="text"
                name="newName"
                placeholder="Enter your name"
                id="newName"
                required
                onChange={this.handleUserCreateChange}
              />
            </label>
            <br />
            <label htmlFor="newAvatar">
              Avatar:
              <input
                className="crteurinput"
                value={newAvatar}
                type="text"
                name="newAvatar"
                placeholder="Add your Avatar"
                id="newAvatar"
                required
                onChange={this.handleUserCreateChange}
              />
            </label>
            <br />
            <button className="submitbtn" type="submit">
              Create
            </button>
          </form>
        </main>
      </>
    );
  }
}

export default Users;
