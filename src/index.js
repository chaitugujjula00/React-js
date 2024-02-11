import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout=()=>{
    return(
        <div className="layout">
            <Header/>
            <Body />
        </div>
        //body
        //footer
    )
};
const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);