import './App.css';
import Navbar from './navbar/Navbar'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Agri from './components/Agri'

function App() {
  return (
    <BrowserRouter>
    <div className="main">
  <Navbar/>
  <Switch>
    <Route path="/Agri-Input Purchase Requests">
      <Agri/>
    </Route>
  </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
