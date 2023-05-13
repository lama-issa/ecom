
import axios from 'axios';
import React, {useEffect,useState } from 'react';
import {useParams } from 'react-router-dom';

function ProductDetails() {

    let [product,setProduct]=useState('');//لانه رح يوصلني اوبجكت مش اريه :('')
    let parms=useParams();

    let getproducts=async()=>{
        let {data}=await axios.get(`https://fakestoreapi.com/products/${parms.id}`);
        setProduct(data);
    }

    useEffect(()=>{
        getproducts();
    },[])

    return (
        <div>
            <img src={product.image} />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
        </div>
       
      )
    }

export default ProductDetails