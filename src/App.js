
import { Route,  Switch } from 'react-router';
import './App.css';
import Loginshow from './login/Loginshow';
import Nav1 from './Navbar/Nav1';


function App() {
  return (
 <> 
 
 <Nav1/>
 <Switch>
   <Route path="/" component={Loginshow}/>
 </Switch>
   </>
    );
}

export default App;
