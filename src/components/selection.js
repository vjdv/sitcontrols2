import React from "react";
import PropTypes from "prop-types";

function Selection(props) {}

Selection.defaultProps = {
  mode: "single"
};
Selection.propTypes = {
  mode: PropTypes.oneOf(["single", "multiple"]),
  onBeforeChange: PropTypes.func,
  onChange: PropTypes.func,
  selected: PropTypes.array
};

export default Selection;
