import React, { Component } from "react";
import Contact from "./Contact";

export default class Contacts extends Component {
  state = {
    ContactInfo: [
      {
        id: 1,
        name: "hasnain shah",
        email: "hasnainshah@gmail.com",
        phone: "2321321"
      },
      {
        id: 2,
        name: "sulman  ahmed",
        email: "sulman@gmail.com",
        phone: "32131231"
      },
      {
        id: 3,
        name: "sunny",
        email: "sunny@gmail.com",
        phone: 31233343242
      }
    ]
  };

  render() {
    const { ContactInfo } = this.state;
  

    return (
      <React.Fragment>
        <h1 className="text-danger">Contacts List</h1>
        {ContactInfo.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}
