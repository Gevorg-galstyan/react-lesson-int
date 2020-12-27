import React from 'react';
import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Dashboard from "./components/toDo/Dashboard";
import CreateToDo from "./components/toDo/layouts/CreateToDo"
// import Main from "./components/Main";

function App() {
  return (
    <div className="App"> 
      <Header />

      {/* <Main /> */}
      <Dashboard />
      <CreateToDo /> 
      <Footer />  
    </div>
  );
}

export default App;
