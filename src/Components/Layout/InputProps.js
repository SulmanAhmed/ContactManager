import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const DefaultValue = ({
  lable,
  name,
  placeholder,
  onChange,
  value,
  type,
  error
}) => {
  return (
    <div>
      <label htmlFor={name} className="text-danger">
        {lable}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        className={classnames("form-control form-control-lg", {
          "is-invalid": error
        })}
        placeholder={placeholder}
        onChange={onChange}
      />
      {error ? <div className="invalid-feedback">{error}</div> : null}
    </div>
  );
};

DefaultValue.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string
};

DefaultValue.defaultProps = {
  type: PropTypes.string.isRequired
};

export default DefaultValue;
