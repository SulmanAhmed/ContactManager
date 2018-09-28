import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";
export default class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { ContactInfo } = value;

          return (
            <React.Fragment>
              <h1 className="text-danger">Contacts List</h1>
              {ContactInfo.map(contact => (
                <Contact key={contact.id} contact={contact} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
