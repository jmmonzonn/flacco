import React from "react";
import { useHistory } from "react-router-dom";
const Button = props => {
  const history = useHistory();
  return (
    <button onClick={() => history.push(props.route)} className=" w-full p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer text-white">
        <i className="bi bi-house-door-fill"></i>
        <span className="text-[15px] ml-4 text-gray-200 hover:text-gray-100 font-bold">
          {props.text}
        </span>
    </button>
  );
};

export default Button;
