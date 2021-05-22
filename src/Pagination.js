import React , {useState, useEffect} from 'react'

const Pagination = ({showperPage, onchangePagination, total}) => {
    const [counter, setcounter] = useState(1);
    useEffect(()=>{
     const value = showperPage* counter;
     onchangePagination(value - showperPage,value);
    },[counter]);
    const onButton = (type) => {
       if(type === "prev"){
           if(counter === 1){
               setcounter(1);
           }
           else {
               setcounter(counter -1)
           }

       }
       else if (type === "next"){
        if (Math.ceil(total / showperPage) === counter) {
            setcounter(counter);
          } else {
            setcounter(counter + 1);
          }
       }
    }
    return (
        <div>
          <button className="btn btn-primary" onClick ={()=>onButton("prev")}>Primary</button>
            <button className="btn btn-primary" onClick ={()=>onButton("next")}>Next</button>
        </div>
    )
}

export default Pagination
