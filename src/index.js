import React from 'react';
import ReactDOM from 'react-dom';

 
const App = () => {

    const APP_ID = "070f1f22";
    const APP_KEY = "17eea0a610a22800366f5e171ec74b55";

    const exampleReq = 
    `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

    return (
        <div className="App">
            <form className="search-form">
                <input className="search-bar" type="text" />
                <button className="search-btn" type="submit">Search</button>
            </form>
        </div>
    );
};


ReactDOM.render(App, document.getElementById('root'));