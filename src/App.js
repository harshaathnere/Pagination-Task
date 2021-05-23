import logo from './logo.svg';
import './App.css';

import DataList from './DataList'
import {BrowserRouter as Router,Switch,Route,} from 'react-router-dom';
import {browerHistory} from 'react-router'
import { useEffect, useState } from 'react';
import Pagination from './Pagination';
import Table from './Table'

function App() {
 
 

  const [customername, setcustomername] = useState([]);
  
    useEffect(()=> {
        fetch('https://intense-tor-76305.herokuapp.com/merchants')
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
   <Route > <Table data = {customername}/></Route>
    </Router>
    </div>
  );
}

export default App;
