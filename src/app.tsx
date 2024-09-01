import { Outlet } from "react-router-dom";
import Header from "./components/header/header";
import classes from './app.module.scss'
import './i18n'
import { LanguageProvider } from "./providers/language-provider/language-provider";

function App() {
  return (
    <LanguageProvider>
      <div className={classes.root}>
        <div className={classes.header}>
          <Header/>
        </div> 
        <div className={`${classes.section} ${classes.content}`}> 
          <Outlet/>
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App
