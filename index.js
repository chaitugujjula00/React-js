import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => object => HTMLElement(render)

const heading = React.createElement("h1",{id:"heading"},"It is the heading");

// JSX in  React 
//JSX is not HTML, it is HTML - like syntax

const jsxheading = <h1>It is heading using JSX</h1>




//React component
//class based component - OLD
// Functional component - NEW( It is a function of javascript)
const HeadingComponent =() =>{
    return <h1>Heading Component</h1>
}
//or
const HeadingComponent2 =() => <h1>Component 2</h1>
const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent2/>);