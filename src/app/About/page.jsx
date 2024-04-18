import React from 'react'
import styles from '../page.module.css'
import Herosection from '../../component/Herosection'
function page() {
  return (
    <div className={styles.main}>
      <Herosection title={"OUR STORY"} imageurl={"https://img.freepik.com/free-vector/hand-drawn-man-working-from-home_23-2148818123.jpg?size=626&ext=jpg&ga=GA1.1.91501388.1704168622&semt=ais"}/>
    </div>
  )
}

export default page
