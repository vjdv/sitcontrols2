import React from "react";
import CSelect from "./cselect";
import s from "./../css/sitcontrol.scss";

export default function Select(props) {
  return <CSelect ss={s} {...props} />;
}
