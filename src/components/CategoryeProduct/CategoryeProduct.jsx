import styles from './CategoryeProduct.module.css';
import axios from 'axios';
import React, {useEffect,useState } from 'react';
import {useParams } from 'react-router-dom';

function CategoryeProduct() {

    let [catproduct,setCatProduct]=useState([]);
    let parms=useParams();

    let getproducts=async()=>{
        let {data}=await axios.get(`https://fakestoreapi.com/products/category/${parms.name}`);
        setCatProduct(data);
    }

    useEffect(()=>{
        getproducts();
    },[])

  return (

    <div className={styles.products}>
       <h2>{parms.name} Products</h2>
       <div className='d-flex flex-wrap my-5'>
       {catproduct.map((prod)=>

       <div className='col-lg-4 mt-5'>
       <div  className="product card" >
        <img src={prod.image} alt={prod.title} className="card-img-top"/>
        <div class="card-body">
        <h3 className="card-title">{prod.title}</h3>
        <p>{prod.price} $</p>
        </div>
       </div>
       </div>
       )}

       </div>
    </div>
   
  )
}

export default CategoryeProduct