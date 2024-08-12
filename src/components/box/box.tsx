import React, { ReactNode } from "react";
import './box.css'

interface Props {
  children: ReactNode;
  style?: React.CSSProperties;
}

function Box({ children, style = {} }: Props) {
  return ( 
    <div className='box-root' style={ style }>
      {children}
    </div>
   );
}

export default Box;