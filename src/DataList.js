import React, {useState,useEffect} from 'react';

import Pagination from './Pagination'

function DataList(){
    const [customername, setcustomername] = useState({});
    const [showperPage, setshowperPage] = useState(4);
    const [pagination,setpagination] = useState({start: 0, end: showperPage});

    const onchangePagination =(start,end)=> {
    setpagination({start: start, end: end})
    }
    useEffect(()=> {
     fetch('https://intense-tor-76305.herokuapp.com/merchants')
     .then(res => res.json())
     .then(result =>setcustomername(result))
     .catch(error => console.log(error))
    }, [])

    
   return(
       <div>
           <table>
               <tr>
               <th>id</th>
                   <th>Customer Name</th>
                   <th>Email</th>
                  <th>Phone</th>
                  <th>Premium</th>
                  <th>Max/Min Bid</th>
               </tr>
               {
                customername && customername.length >0 ?
                customername.slice(pagination.start, pagination.end).map(user =>
                <tr>
                     <td>{user.id}</td>
                    <td>{user.firstname}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.hasPremium}</td>
                    <td>{user.bids.amount}</td>
                </tr>
                )  : 'Loading.....'
               }
           </table>
           <Pagination showperPage ={showperPage}  onchangePagination={onchangePagination} total={customername.length}/>
       </div>
   )
}
export default DataList;