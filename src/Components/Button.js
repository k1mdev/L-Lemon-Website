import React from 'react';
import './Button.css';
import { useNavigate, Link } from 'react-router-dom';


function Button(props) {


  return (
    <div className="button-container">
      <Link to={props.path}>
        <button>
            {props.text}
        </button>
      </Link>
    </div>
  );
}

export default Button;
