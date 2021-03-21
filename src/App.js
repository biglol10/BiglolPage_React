import logo from './logo.svg';
import './App.css';
import Home from './Home/Home';
import Header from './Header/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Skills from './Components/Skills/Skills';
import Sidebar from './Header/Sidebar';
import Projects from './Components/Projects/Projects';
import Courses from './Components/Courses/Courses';
import Aboutme from './Components/AboutMe/Aboutme';
import Login from './Home/Login';
import AddPageMain from './Components/AddSubject/AddPageMain';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/skills">
            <div className="AppPage">
              <Sidebar/>
              <Skills/>
            </div>
          </Route>
          <Route path="/projects">
            <div className="AppPage">
              <Sidebar/>
              <Projects/>
            </div>
          </Route>
          <Route path="/courses">
            <div className="AppPage">
              <Sidebar/>
              <Courses/>
            </div>
          </Route>
          <Route path="/about">
            <div className="AppPage">
              <Sidebar/>
              <Aboutme/>
            </div>
          </Route>
          <Route path="/login">
            <div>
              <Header backStyle={false}/>
              <Login/>
            </div>
          </Route>
          <Route path="/addpage">
            <div>
              <Header backStyle={false}/>
              <AddPageMain/>
            </div>
          </Route>
          <Route path="/">
            <div className="AppHome">
              <Header backStyle={true}/>
              <Home/>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>

  );
}


export default App;
