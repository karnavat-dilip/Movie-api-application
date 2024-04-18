import Image from 'next/image'
import styles from './page.module.css'
import { Suspense } from 'react'
import Loading from './movie/loading'
import Herosection from '../component/Herosection'

export default function Home() {
  return (
    <Suspense fallback={<Loading/>}>
    <main className={styles.main}>
      <Herosection title={"LET`S WATCH MOVIE TOGETHER"} imageurl={"https://img.freepik.com/free-vector/man-sysadmine-computer-programmer-working-computer_575670-70.jpg?size=626&ext=jpg&ga=GA1.1.91501388.1704168622&semt=ais"} />
    </main>
    </Suspense>
  )
}
