import React from 'react';
import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import CreateToDo from "./components/toDo/CreateToDo";
import DeleteToDoModal from "./components/modals/DeleteToDoModal";

// import Main from "./components/Main";

function App() {

    return (
        <div className="App">
            <Header/>

            {/* <Main /> */}
            <CreateToDo/>
            <Footer/>
        </div>
    );
}

export default App;
