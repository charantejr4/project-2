import React from 'react';
import styles from './Button.module.css';

const Button = ({ text, icon, isOutline, ...rest }) => {
  const buttonClass = isOutline ? styles.outline_btn : styles.primary_btn;
  
  return (
    
    <button {...rest} className={buttonClass}>
      {icon}
      {text}
    </button>
  );
};

export default Button;