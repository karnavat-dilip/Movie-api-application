"use client"
import { useEffect, useState } from "react";
import React from 'react'
import styles from '../page.module.css'
import Movie_card from '../../component/Movie_card';
async function page() {
  
  
     
  

  const url = process.env.RAPID_API;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'f53f3e0ed4mshba3cb67d6ede0efp10888ajsn6749090f98ed',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };

  
    try {

      const response = await fetch(url, options);
      const result = await response.json();
      var data = result.titles
      
    } catch (error) {
      console.error(error);
    }
  
    
  return (
    <section>
      <div className={styles.main}>
        <h1>Series & Movies</h1>
        <div className={styles.movies}>
          {
            data.map((curelem) => {
              return (<Movie_card key={curelem} {...curelem} />)
            })
          }
        </div>
      </div>
    </section>
  )
}

export default page
