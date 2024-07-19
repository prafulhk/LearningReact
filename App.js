// const heading = React.createElement("h1",{},"Hello world from React from new file");
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading);

// const heading = React.createElement("h1",
//                                     {
//                                         id:"heading"
//                                     },
//                                     "Hello world from React from new file");
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading);


{/* <div id="parent">
    <div id="child">
        <h1>Hi</h1>
    </div>
</div> */}

const parent = React.reateElement("div",{id:"parent"},
                    React.createElement("div",{id:"child"},
                        React.createElement("h1",{},"Hi")
                    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent)