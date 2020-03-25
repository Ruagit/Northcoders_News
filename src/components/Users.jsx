import React, { Component } from "react";
import * as api from "../Utils/api";
import "../App.css";
import { Link } from "@reach/router";

class Users extends Component {
  state = {
    users: [],
    currentUser: "",
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
  handleChange = event => {
    const { value } = event.target;

    this.setState({ currentUser: value });
  };

  render() {
    return (
      <>
        <form>
          <h3>Please Login</h3>
          <section className={"users-select"}>
            <label> User </label>
            <select onChange={this.handleChange}>
              <option value="">Select User</option>
              {this.state.users.map(user => {
                return (
                  <option key={user.id} value={user.username}>
                    {user.username}
                  </option>
                );
              })}
            </select>
            <Link to={`/${this.state.currentUser}/articles`}>
              <button>Login</button>
            </Link>
          </section>
        </form>
      </>
    );
  }
}

export default Users;
