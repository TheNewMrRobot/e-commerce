import './App.css';
import Homepage from './Pages/Homepage/Homepage';
import {Switch,Route} from "react-router-dom";
import Shop from './Pages/Shop/Shop';
import Header from './Components/Header/Header';


function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact={true} component={Homepage} path="/"/>  
        <Route exact={true} component={Shop} path="/shop" />
      </Switch>
    </div>
  );
}

export default App;
