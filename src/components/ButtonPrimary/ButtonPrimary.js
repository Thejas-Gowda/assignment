import React from "react";
import s from "./style.module.css";
const ButtonPrimary = ({ className, type, children, onClick, isDisabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      type={type || "button"}
      className={`btn btn-primary ${s.button} ${className}`}>
      {children}
    </button>
  );
};

export default ButtonPrimary;
