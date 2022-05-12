import React from "react";
import "./style.css";

const InputField = () => {
  return (
    <form className="input">
      <input type="input" placeholder="Enter a task" className="input__box" />
      <button className="input__submit" type="submit">
        GO
      </button>
    </form>
  );
};

export default InputField;
