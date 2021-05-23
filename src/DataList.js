import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom'


function DataList({data}){
   console.log("data values")
    const [bids, setbids]  = useState([]);
    const [text, settext] = useState(true);

   

   
    
    

    useEffect(() => {
           const bids = [...data.bids]
           console.log(" values"+bids )
           bids.sort((a, b) => {
               
               return a.amount - b.amount;
               
           });
           setbids(bids)
    },[data.bids]);
   
  
    
   return(
                <tr >
                     <td>{data.id}</td>
                 <td>  <Link to={`${data.avatarUrl}`}>{data.firstname}</Link> </td>
                    <td>{data.email}</td>
                    <td>{data.phone}</td>
                    <td>{data.hasPremium}</td>
                   
                  { text? bids.length> 0 && <td> {bids[0].amount}/{bids[bids.length-1].amount}</td> : null}
                    <button onClick={()=>settext(true)}>Show</button>
                    <button onClick={()=>settext(false)}>Hide </button>
                </tr>
   )
}
export default DataList;