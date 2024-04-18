import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '../app/page.module.css'

async function Movie_card(curelem) {
  // await new Promise(resolve => setTimeout(resolve, 2000))
    const {id,title,synopsis,backgroundImage}=await curelem.jawSummary
  return (
    <div className={styles.movie_card}>
      <div>
            <Image src={backgroundImage.url} width={200} height={150} alt={title}/>
      </div>
      <div style={{padding:"12px"}}>
        <h6>{title.substring(0,15)}</h6>
        <p>{`${synopsis.substring(0,50)} ...`}</p>
        <Link href={`/movie/${id}`}>
            <button className={styles.hero_btn}>
                Read more
            </button>
        </Link>
      </div>
    </div>
  )
}

export default Movie_card
