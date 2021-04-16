import logo from "./logo.svg";

import welcomImage from "./assets/welcome.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Welcome to Thangdev's corner</h2>
        <img src={welcomImage} alt="logo" />

        <div className='social'>
          Contact me via my  {' '}
          <a href="https://www.facebook.com/profile.php?id=100009244674126">
             facebook
          </a>
          {' '}
          first
        </div>
      </header>
    </div>
  );
}

export default App;
