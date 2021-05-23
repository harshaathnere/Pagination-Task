import logo from './logo.svg';
import './App.css';

import DataList from './DataList'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Pagination from './Pagination';
import Table from './Table'

function App() {
  const [pagination,setpagination] = useState({start: 0, end: 4});
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


   const onchangePagination =(start,end)=> {
    setpagination({start: start, end: end})
    }
  return (
    <div className="App">
    <Table data = {customername}/>
    <Pagination showperPage ={pagination.showperPage}  onchangePagination={onchangePagination} total={customername.length}/>
    </div>
  );
}

export default App;
