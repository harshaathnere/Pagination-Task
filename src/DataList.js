import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom'
import Pagination from './Pagination'

function DataList({data}){
   
    const [bids, setbids]  = useState([]);

   

    useEffect(() => {
           const bids = [...data.bids]
           console.log(" values"+bids )
           bids.sort((a, b) => {
               
               return a.amount - b.amount;
               
           });
           setbids(bids)
    },[data.bids]);
   
  
    
   return(
                <tr>
                     <td>{data.id}</td>
                    <td>{data.firstname}</td>
                    <td>{data.email}</td>
                    <td>{data.phone}</td>
                    <td>{data.hasPremium}</td>
                  {  bids.length> 0 && <td>{bids[0].amount}/{bids[bids.length-1].amount}</td>}
                </tr>
   )
}
export default DataList;