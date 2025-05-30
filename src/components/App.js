import React from "react";

function NavBar() {
  return (
    <nav className="navbar">
      <a href="#home">I'm a link!</a>
      <a href="#about">about</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}

function About (){
   return (
    <div id="about">
      <h2>About</h2>
      <p>Learn more about me and my work.</p>
    </div>
  );

}


function App() {
  return (
    <div className="App">
      <NavBar />
      <Home/>
      <About />
      </div>
  );


}

export default App;
