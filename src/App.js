import React from 'react';
import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import CreateToDo from "./components/toDo/CreateToDo";

// import Main from "./components/Main";

function App() {

    return (
        <div className="App">
            <Header/>
            <CreateToDo/>
            <Footer/>
        </div>
    );
}

export default App;
