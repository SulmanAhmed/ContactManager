import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

function HeaderText(props) {
  const { BrandName } = props;

  return (
    <nav className="navbar navbar-expand sm navbar-wrapper bg-danger mb-3 ">
      <div className="container">
        <Link to="/">
          <h1 className="text-light navbar-brand">{BrandName}</h1>
        </Link>
        <div>
          <ul className="navbar-nav mr-auto  ">
            <li className="nav-item">
              <Link to="/" className="nav-link text-light">
                Home <i className="fas fa-home" />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/add/contact" className="nav-link text-light">
                Add Contact <i className="fas fa-plus" />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link text-light">
                About <i className="fas fa-question" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

HeaderText.defaultProps = {
  BrandName: "My App"
};
HeaderText.prototypes = {
  BrandName: PropTypes.bool.isRequired
};
export default HeaderText;
