
import axios from 'axios';
import React, {useEffect,useState } from 'react';
import styles from './Categories.module.css';
import { Link } from "react-router-dom";

// والرابط بكون من الباك apiلاستقبال البيانات من  
function Categories() {
    let [cats,setCats]=useState([]);
//cats:apiاريه عشان اعرض فيها الداتا الي جاي من 
    let getCats=async()=>{//apiعشان احصل على الداتا من رابط 
        let {data}=await axios.get("https://fakestoreapi.com/products/categories");
      setCats(data);//cats في الاريه الي عرفتها apiخزنا الداتا الجاي من 
    }

    useEffect(()=>{
        getCats();
    },[])

  return (
    //بدي اعرض الداتا عندي بالصفحة
    <div className={styles.cats}>
       <h2>Categories</h2>
       <div className='d-flex justify-content-between my-5'>
       {cats.map((cat,index)=>
       <div key={index}>
        <Link to={`/category/${cat}`} className='btn btn-primary'>{cat}</Link>
       </div>
       )}
       </div>
     
    </div>
   
  )
}

export default Categories