import React, { ReactNode } from "react";
import './box.css'

interface Props {
  children: ReactNode;
  className?: string; 
  style?: React.CSSProperties;
}

function Box({ children, style = {}, className = '' }: Props) {
  return ( 
    <div className={ 'box-root' + `${className.length ? ' ' : ''}${className}` } style={ style }>
      {children}
    </div>
   );
}

export default Box;