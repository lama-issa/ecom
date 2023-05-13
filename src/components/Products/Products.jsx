
import axios from 'axios';
import React, {useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Products.module.css'
 
function Products() {
    let [products,setproducts]=useState([]);
    let [search,setSearch]=useState('');

    let getproducts=async()=>{
        let {data}=await axios.get("https://fakestoreapi.com/products");
        setproducts(data);
    }

    useEffect(()=>{
        getproducts();
    },[])

  return (

    <div className={styles.products}>
       <h2>Products</h2>
       <h3 className='mb-5'>search by product name:</h3>
       <input type="search" className='form-control' name='pname' value={search} onChange={(e)=>{setSearch(e.target.value)}} />
       <div className='d-flex flex-wrap my-5'>

        {products.filter((prod)=>{
          if(search===""){
            return prod;

          }else if(prod.title.toLowerCase().includes(search.toLowerCase())){
            return prod;

          }
         }).map((prod)=>

       <div className='col-lg-4 mt-5'>
       <div  className="product card" >
        <img src={prod.image} alt={prod.title} className="card-img-top"/>
        <div class="card-body">
        <h3 className="card-title">{prod.title}</h3>
        <p>{prod.price} $</p>
        <Link to={`/product/${prod.id}`} className='btn btn-danger'>details</Link>
        </div>
       </div>
       </div>
       )}

       </div>
    </div>
   
  )
}

export default Products