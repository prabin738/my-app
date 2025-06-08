import "./App.css";

let name = "Prabin";
function App() {
  return (
    <>
      <div className="blank">
        <nav>
          <li>Home</li>
          <li>About</li>
          <li>Contact US</li>
        </nav>
      </div>
      <div className="container">
        <h1>Hello {name}</h1>
        <p>
          Bootstrap is a free, open-source CSS framework for web development,
          used to create responsive, mobile-first websites and web applications.
          It provides a collection of pre-designed templates, CSS styles, and
          JavaScript components that help developers efficiently and effectively
          create visually appealing and consistent interfaces.{" "}
        </p>
      </div>
    </>
  );
}

export default App;
