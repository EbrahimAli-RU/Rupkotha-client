import React from "react";

const Error = ({ show, message, handler }) => {
  return (
    <div
      className="error"
      style={{
        top: show ? "5rem" : "-50rem",
      }}
    >
      <div className="error__message">
        <p id="message">{message}</p>
        <p className="close__button" onClick={handler}>
          X
        </p>
      </div>
    </div>
  );
};

export default Error;
