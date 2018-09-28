import React, { Component } from "react";
import { Consumer } from "../../context";
export default class AddContacts extends Component {
  state = {
    name: "",
    email: "",
    phone: ""
  };
  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }

  // onChange = e => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  // };

  OnFormSubmit = (dispatch, e) => {
    e.preventDefault();
    const newContact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    };
    // console.log(newContact);
    dispatch({ type: "ADD_CONTACT", payload: newContact });
  };
  render() {
    const { name, email, phone } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-4">
              <div className="card-header bg-danger text-light card-body">
                Add Contact
              </div>
              <div className="card-body">
                <form onSubmit={this.OnFormSubmit.bind(this, dispatch)}>
                  <label htmlFor="Name" className="text-danger">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={name}
                    ref={this.nameInput}
                    className="form-control form-control-lg"
                    placeholder="Enter Name"
                  />

                  <label htmlFor="Email" className="text-danger">
                    Email
                  </label>
                  <input
                    type="Email"
                    name="email"
                    defaultValue={email}
                    ref={this.emailInput}
                    className="form-control form-control-lg"
                    placeholder="Enter Email"
                  />

                  <label htmlFor="Phone" className="text-danger">
                    Phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    defaultValue={phone}
                    ref={this.phoneInput}
                    className="form-control form-control-lg"
                    placeholder="Enter Phone Number"
                  />
                  <button
                    type="Submit"
                    className="btn btn-block  mt-3 bg-danger text-light"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
