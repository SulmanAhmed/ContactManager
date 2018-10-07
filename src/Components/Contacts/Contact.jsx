import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default class Contact extends Component {
  //method for using This keyword
  // constructor() {
  //  super()
  //   this.OnclickProfile = this.OnclickProfile.bind(this);
  // }

  //using Arrow function
  state = {
    showContactInfo: false
  };
  onDeleteClick = async () => {};

  render() {
    const { showContactInfo } = this.state;
    const { name, phone, email, id } = this.props.contact;

    return (
      <div className="card card-body">
        <ul className="list-group">
          <li className="list-group-item">
            Name:
            {name}
            <i
              onClick={() =>
                this.setState({
                  showContactInfo: !this.state.showContactInfo
                })
              }
              className="fas fa-sort-down"
              style={{ cursor: "pointer" }}
            />
            <i
              className="fas fa-times"
              style={{ cursor: "pointer", float: "right", color: "red" }}
              onClick={this.onDeleteClick.bind(this, id)}
            />
            <Link to={`/Editcontacts/${id}`}>
              <i
                className="fas fa-edit"
                style={{
                  float: "right",
                  cursor: "pointer",
                  marginRight: "4px"
                }}
              />
            </Link>
          </li>

          {showContactInfo ? (
            <div>
              <li className="list-group-item">
                Email:
                {email}
              </li>
              <li className="list-group-item">
                Phone:
                {phone}
              </li>
            </div>
          ) : null}
        </ul>
      </div>
    );
  }
}
Contact.propTypes = {
  contact: PropTypes.object.isRequired
};
