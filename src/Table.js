import React, { useEffect, useState } from 'react';
import DataList from './DataList';


const Table = ({data:customerData}) => {

  return (
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
        customerData.map(data => <DataList data={data}/>)
    }
    </table>
  )
}

export default Table;