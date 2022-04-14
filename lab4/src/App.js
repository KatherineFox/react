import "./App.css";
import Categories from "./Categories/Categories";
import Contacts from "./Contacts/Contacts";
import Main from "./Main/Main";
import logo from "./logo.png";

function App() {
  return (
    <div className="App">
      <div className="nav">
        <ul className="navbar">
          <li>
            <img className="logo" src={logo} alt="logo"></img>
          </li>
        </ul>
      </div>
      <Main />
      <Categories />
      <Contacts />
      <div class="footer">
        <h4>Copyright @ 2022 Mrs.Flowers. All Rights Reserved.</h4>
      </div>
    </div>
  );
}

export default App;
