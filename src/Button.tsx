import React from 'react';
import './Button.css';

interface IProps {
  size?: string;
  onClick?: React.MouseEventHandler;
}

const Button: React.FunctionComponent<IProps> = function(props) {
  return (
    <div className={`button ${props.size}`} onClick={props.onClick}>
      {props.children}
    </div>
  );
};

export default Button;
