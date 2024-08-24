import { Outlet } from "react-router-dom";
import Header from "./components/header/header";
import classes from './app.module.scss'

function App() {
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Header/>
      </div> 
      <div className={`${classes.section} ${classes.content}`}> 
        <Outlet/>
      </div>
      {/* <div className='app-section app-footer'>
        <Footer/>
      </div> */}
    </div>
  );
}

export default App
