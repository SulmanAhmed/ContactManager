import React, { Component } from "react";
import Axios from "axios";

const Context = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        ContactInfo: state.ContactInfo.filter(
          contact => contact.id !== action.payload
        )
      };
    case "UPDATE_CONTACT":
      return {
        ...state,
        ContactInfo: state.ContactInfo.map(
          contact =>
            contact.id === action.payload.id
              ? (contact = action.payload)
              : contact
        )
      };
    case "ADD_CONTACT":
      return {
        ...state,
        ContactInfo: [action.payload, ...state.ContactInfo]
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    ContactInfo: [],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  async componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/users").then(res =>
      this.setState({
        ContactInfo: res.data
      })
    );
  }

  render() {
    return (
      <div>
        <Context.Provider value={this.state}>
          {this.props.children}
        </Context.Provider>
      </div>
    );
  }
}

export const Consumer = Context.Consumer;
