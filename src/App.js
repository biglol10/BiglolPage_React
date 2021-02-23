import logo from './logo.svg';
import './App.css';
import Home from './Home/Home';
import Header from './Header/Header';

function App() {
  return (
    <div className="App">
      <div className="AppHome">
        <Header/>
        <Home/>
      </div>
    </div>
  );
}


export default App;
