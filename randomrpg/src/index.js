// 1) Import the react and reactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
// 2) Get a reference to the div with ID root
const element = document.getElementById('root');
// 3) Tell react to take control of that element
const root = ReactDOM.createRoot(element);
// 3) Create a react component
function App(){
    const minValue = 5;
    return <input type="number" min={minValue} max={6}></input>
}
// 4) Show the component on the screen
root.render(
    <App />,
);