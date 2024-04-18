"use client"
import Image from 'next/image'
import Link from 'next/link'
import styles from '../app/page.module.css'
import React from 'react'
import { Mulish } from 'next/font/google'
// import { wait } from '../app/movie/page'

const mulish = Mulish({
    weight: ['200', '300', '400', '500', '600', '700', '800', '900', '1000'],
    subsets: ['latin'],
    display: 'swap'
})
async function Herosection({ title, imageurl }) {
    // await wait(2000);
    return (

        <div className={styles.hero}>
            <div>
                <h1>{title}</h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet, deserunt.
                </p>
                <Link href='/movie'>
                    <button className={`${styles.hero_btn} ${mulish.className}`}>
                        Explore movie
                    </button>
                </Link>
            </div>
            <div >
                <Image style={{
                    objectFit: 'contain',
                    mixBlendMode: 'color-burn'
                }} src={imageurl} width="300" height="300" alt='WATCHING MOVIE' />
            </div>
            <div className={styles["custom-shape-divider-bottom-1704525304"]}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles["shape-fill"]}></path>
                </svg>
            </div>
        </div >

    )
}

export default Herosection
