import { createBrowserRouter, createRoutesFromElements, Navigate, Outlet, Route, RouterProvider } from "react-router-dom";
import Header from "./components/header/header";
import classes from './app.module.scss'
import { LanguageProvider } from "./providers/language-provider/language-provider";
import Contacts from "./pages/contacts/contacts";
import Home from "./pages/home/Home";
import Market from "./pages/market/market";
import Order from "./pages/order/order";

const appLayout = (
  <div className={classes.root}>
    <div className={classes.header}>
      <Header />
    </div>
    <div className={`${classes.section} ${classes.content}`}>
      <Outlet />
    </div>
  </div>
);

const router = createBrowserRouter(
  createRoutesFromElements(
    [
      <Route path="/" element={appLayout}>
        <Route index element={<Home />} />
        <Route path='market' element={<Market />} />
        <Route path='order' element={<Order />} />
        <Route path='contacts' element={<Contacts />} />
      </Route>
      ,
      <Route path="*" element={<Navigate to="/" />} />
    ]
  )
)

function App() {
  return (
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  );
}

export default App
