import React, { ReactNode } from "react";
import classes from './box.module.scss'

interface Props {
  children: ReactNode;
  className?: string; 
  style?: React.CSSProperties;
}

function Box({ children, style = {}, className = '' }: Props) {
  return ( 
    <div className={`${classes.root} ${className}` } style={ style }>
      {children}
    </div>
   );
}

export default Box;