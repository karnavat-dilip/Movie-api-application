import React from 'react'
import styles from '../../page.module.css'
import Image from 'next/image';
async function page({params}) {
  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${params.id}&lang=en`;
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
    var main_data = result[0].details;
     
  } catch (error) {
    console.error(error);
  }
  return (
    <div className={styles.main}>
      <div>
        <h2>Netflix \ <span style={{color:"red"}}>{main_data.type}</span></h2>
        <div>
          <div>
            <Image src={main_data.backgroundImage.url} alt={main_data.type} width={300} height={200}/>
          </div>
          <div>
            <h1>{main_data.title}</h1>
            <p>{main_data.synopsis}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
