import React from "react";
import ReactDOM from "react-dom/client";

// // React.createElement => object => HTMLElement(render)

// const heading = React.createElement("h1",{id:"heading"},"It is the heading");

// // JSX in  React 
// //JSX is not HTML, it is HTML - like syntax

// const jsxheading = <h1>It is heading using JSX</h1>

// //React component
// //class based component - OLD
// // Functional component - NEW( It is a function of javascript)
// const HeadingComponent =() =>{
//     return <h1>Heading Component</h1>
// }
// //or
// const HeadingComponent2 =() => <h1>Component 2</h1>
const Header = () =>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://dynamic.brandcrowd.com/asset/logo/5c6cee11-6c92-402c-bda4-e2c11ec15db3/logo-search-grid-1x?logoTemplateVersion=2&v=638336429437900000&text=Gujju%27s+Food"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>cart</li>
                </ul>
            </div>
        </div>
    )
}
const FoodCard =() =>{
    return(
        <div className="foodCard">
            <img src="https://imgs.search.brave.com/NgoSsmSxSYRrhpzNhdPCv-eyUJr2DL3oJ7ioVXBkh5I/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NTAzNjczNjMtZWEx/Mjg2MGNjMTI0P3E9/ODAmdz0xMDAwJmF1/dG89Zm9ybWF0JmZp/dD1jcm9wJml4bGli/PXJiLTQuMC4zJml4/aWQ9TTN3eE1qQTNm/REI4TUh4elpXRnlZ/Mmg4Tkh4OGNtVnpk/R0YxY21GdWRDVXlN/R1p2YjJSOFpXNThN/SHg4TUh4OGZEQT0.jpeg" />
            <h2>Resturant</h2>
            <h4>Cusines</h4>
            <h4>4.4 stars</h4>
            <h5>30mins Delivery</h5>
        </div>
    )
}
const Body = () =>{
    return(
        <div className="body">
            <FoodCard />
            <FoodCard />
        </div>
    )
}
const AppLayout=()=>{
    return(
        <div className="layout">
            <Header/>
            <Body />
        </div>
        //body
        //footer
    )
}
const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);