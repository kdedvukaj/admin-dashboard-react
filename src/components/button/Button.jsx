import React from "react";
import { Link } from "react-router-dom";

function Button(props) {
  return <Link className="btn-primary">{props.pageName}</Link>;
}

export default Button;
