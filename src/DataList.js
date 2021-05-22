import React, {useState,useEffect} from 'react';

function DataList(){
    const [customername, setcustomername] = useState({});

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
                customername.map(user =>
                <tr>
                     <td>{user.id}</td>
                    <td>{user.firstname}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.hasPremium}</td>
                    <td>{}</td>
                </tr>
                )  : 'Loading.....'
               }
           </table>
       </div>
   )
}
export default DataList;