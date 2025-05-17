import React, { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

const ShowHideInput = () => {
  const [show, setShow] = useState(false);

  const setToggle = () => {
    setShow(!show);
  };
  return (
    <>
      <input
        type={show ? "text" : "password"}
        placeholder="Enter Your Password ..."
      />
      <button onClick={setToggle}>
        {show ? <FaRegEyeSlash /> :<FaRegEye />}
      </button>
    </>
  );
};

export default ShowHideInput;
