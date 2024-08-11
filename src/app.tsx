import { Outlet } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import './app.css'

function App() {
  return (
    <div className="flex-container">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App
