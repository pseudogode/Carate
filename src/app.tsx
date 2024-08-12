import { Outlet } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import './app.css'

function App() {
  return (
    <div className="app-root">
      <div className='app-header'>
        <Header/>
      </div> 
      <div className="app-section app-content"> 
        <Outlet/>
      </div>
      <div className='app-section app-footer'>
        <Footer/>
      </div>
    </div>
  );
}

export default App
