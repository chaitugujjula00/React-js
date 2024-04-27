import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestuarantMenu from "./components/RestuarantMenu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Signup from "./components/Signup";
const AppLayout = () => {
        const [user,setUser]=useState(null)
  return (
  <BrowserRouter>
  <Provider store={appStore}>
    <div className="layout">
      <Header user={user} setUser={setUser}/>
      <Routes>
        <Route exact path="/" element={
          user && user._id ? <Body user={user} setUser={setUser} />:<Login  setUser={setUser} />
        }/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/restuarants/:resId" element={<RestuarantMenu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  </Provider>
  </BrowserRouter>
  );
};

// const appRouter = createBrowserRouter([
//   {

//     element: <AppLayout />,
//     children: [
//       {
//         path: "/",
//         element: <Body />,
//       },
//       {
//         path: "/about",
//         element: <About />,
//       },
//       {
//         path: "/contact",
//         element: <Contact />,
//       },
//       {
//         path:'/restuarants/:resId',
//         element:<RestuarantMenu />
//       },
//       {
//         path:'/cart',
//         element:<Cart />
//       },
//       {
//         path:'/login',
//         element:<Login />
//       },
//       {
//         path:'/signup',
//         element:<Signup />
//       }
//     ],
//     errorElement: <Error />,
//   },
// ]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
