
import React from "react";
import ReactDOM from "react-dom/client";

// const headingJSX = <h1>Hi Praful from JSX</h1>

// const multilineHeading = (<h1>
//     Multi line heading from JSX using paranthesis
// </h1>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// // root.render(headingJSX);

// root.render(multilineHeading);


//react components
// 1.Functional component: normal javascript function but returns some JSX


const Title = () => (<h1> Title from title functional component</h1>);


const HeadingComponent = ()=>(<h1> Functional
    Component
    <Title></Title>
    {Title()}
    <Title/>
</h1>);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);


