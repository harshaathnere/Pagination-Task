import React, { useEffect, useState } from 'react';
import DataList from './DataList';

import Pagination from './Pagination'
const Table = ({data:customerData}) => {

  const [pagination,setpagination] = useState({start: 0, end: 4});
  const [showperpage, setshowperpage] = useState(4)
  const onchangePagination =(start,end)=> {
    setpagination({start: start, end: end})
    }
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
    <Pagination showperPage ={pagination.showperPage}  onchangePagination={onchangePagination} />
    </table>
  )
}

export default Table;