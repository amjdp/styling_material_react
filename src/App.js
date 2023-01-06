// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import Comp1 from './components/comp1/Comp1';
import Comp2 from './components/comp2/Comp2';
import Comp3 from './components/comp3/Comp3';
import StudentList from './components/comp4/StudentList';
import ObjectVariable from './components/objectvariable/ObjectVariable';
import Home from './components/Home';


function App() {
  return (
    <BrowserRouter>
    {/* <div>Hello</div> */}
 

    <StudentList/>

    <Home/>
    
    <ObjectVariable/>
    <div className="App">
     
     <Routes>
      <Route path = "/comp1" element = {<Comp1/>}></Route>
      <Route path = "/comp2" element = {<Comp2/>}></Route>
      <Route path = "/comp3" element = {<Comp3/>}></Route>
    </Routes>
    
    <ul>
      <li>
        <Link to = "/comp1">COMP1</Link>
      </li>
      <li>
        <Link to = "/comp2">COMP2</Link>
      </li>
      <li>
        <Link to = "/comp3">COMP3</Link>
      </li>
    </ul>
   
     
    </div>
    </BrowserRouter>
  );
}

export default App;
