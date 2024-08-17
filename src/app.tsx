import { Outlet } from "react-router-dom";
import Header from "./components/header/header";
import './app.scss'

function App() {
  return (
    <div className="app-root">
      <div className='app-header'>
        <Header/>
      </div> 
      <div className="app-section app-content"> 
        <Outlet/>
      </div>
      {/* <div className='app-section app-footer'>
        <Footer/>
      </div> */}
    </div>
  );
}

export default App
