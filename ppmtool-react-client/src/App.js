import logo from './logo.svg';
import './App.css';
import Dashboard from "./components/Dashboard";
import Header from './components/Layout/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from "react-router-dom";
import AddProject from './components/Project/AddProject';
import {Provider} from "react-redux"
import store from "./store";

function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App">

      <Header />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/addProject" component={AddProject} />
    
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      
    </div>
    </Router>
    </Provider>
  );
}

export default App;
