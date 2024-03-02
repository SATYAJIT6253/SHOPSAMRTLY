import React, { useState } from 'react'
import { useEffect } from 'react';
import Product from '../components/Product';
import './Home.css';
function Home() {
  const API_URL = "https://fakestoreapi.com/products";
  const [Items, SetItems] = useState([]);
  async function fetchproductdata() {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      SetItems(data);
      console.log(data);
    } catch (error) {
      console.log("errr in fetching");
    }
  }
  useEffect(() => {
    fetchproductdata()
  }, [])
  return (
    <div className='parent-container'>
      {
        (
          Items.map((Item) => (
            <Product key ={Item.id} Item ={Item} />
          ))
        )
      }
    </div>
  )
}

export default Home