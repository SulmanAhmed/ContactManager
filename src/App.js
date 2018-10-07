import React, { Component } from "react";
import Contacts from "./Components/Contacts/Contacts";
import HeaderText from "./Components/Layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./Components/Pages/About";
import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import AddContacts from "./Components/Contacts/AddContacts";
import NotFound from "./Components/Pages/NotFound";
import EditContacts from "./Components/Contacts/EditContacts";
//import AddContactRef from "./Components/Contacts/AddContactRef";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <Router>
            <React.Fragment>
              <HeaderText BrandName="Welcome to Contect Manager" />
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/add/contact" component={AddContacts} />
                <Route exact path="/about" component={About} />
                <Route
                  exact
                  path={`/Editcontacts/:id`}
                  component={EditContacts}
                />
                <Route component={NotFound} />
              </Switch>
            </React.Fragment>
          </Router>
        </div>
      </div>
    );
  }
}
