import React, { Component } from "react";
import DefaultValue from "../Layout/InputProps";
import Axios from "axios";

export default class EditContacts extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    error: {}
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await Axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const contact = res.data;
    this.setState({
      name: contact.name,
      email: contact.email,
      phone: contact.phone
    });
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  OnFormSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { email, name, phone } = this.state;
    if (name === "") {
      this.setState({ error: { name: "Name is Required" } });
      return;
    }
    if (email === "") {
      this.setState({ error: { email: "email is Required" } });
      return;
    }
    if (phone === "") {
      this.setState({ error: { phone: "phone is Required" } });
      return;
    }
    const updateCon = {
      name,
      email,
      phone
    };
    const { id } = this.props.match.params;
    const res = await Axios.put(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      updateCon
    );
    dispatch({ type: "UPDATE_CONTACT", payload: res.data });

    this.setState({
      name: "",
      email: "",
      phone: "",
      error: {}
    });

    {
      this.props.history.push("/");
    }
  };
  render() {
    const { name, email, phone, error } = this.state;

    return (
      <div className="card mb-4">
        <div className="card-header bg-danger text-light card-body ">
          Edit Contact
        </div>
        <div className="card-body">
          <form onSubmit={this.OnFormSubmit.bind(this)}>
            <DefaultValue
              lable="Name"
              value={name}
              placeholder="Enter Name"
              onChange={this.onChange}
              name="name"
              error={error.name}
            />

            <DefaultValue
              lable="Email"
              value={email}
              placeholder="Enter Email"
              onChange={this.onChange}
              name="email"
              type="email"
              error={error.email}
            />

            <DefaultValue
              lable="Phone"
              value={phone}
              placeholder="Enter Phone"
              onChange={this.onChange}
              name="phone"
              error={error.phone}
            />

            <button
              type="Submit"
              className="btn btn-block  mt-3 bg-danger text-light"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    );
  }
}
