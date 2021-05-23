import logo from './logo.svg';
import './App.css';
import Nav from './Nav'
import About from './About'
import Show from './Show';
import Customerdetails from './Customerdetail'
import DataList from './DataList'
import {BrowserRouter as Router,Switch,Route,} from 'react-router-dom';
import {browerHistory} from 'react-router'
import { useEffect, useState } from 'react';
import Pagination from './Pagination';
import Table from './Table'

function App() {
 
 

  const [customername, setcustomername] = useState([]);
  
    useEffect(()=> {
        fetch(`https://intense-tor-76305.herokuapp.com/merchants`)
        .then(res => res.json())
        .then(result =>{setcustomername(result)
         console.log(result);
            
           
       }
        )
        .catch(error => console.log(error))
       }, [])


  
  return (
    <div className="App">
     <Router >
    <Nav/>
    <Switch>
    <Route path="/" exact ><h1>Please Click on the table</h1></Route>
   <Route path="/about" component={About}/>
   <Route path="/show" component={Show}/>
   
   <center><Route path="/table"> <Table data = {customername}/></Route></center>
   <Route path="/:id" exact component={Customerdetails}></Route>
   </Switch>
    </Router>
    
    
    
    </div>
  );
}

export default App;
