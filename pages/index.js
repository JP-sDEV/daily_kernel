import Head from 'next/head'
import Image from 'next/image'
import { Container } from '@mui/material';
import styles from '../styles/Home.module.css'
import NewsCard from '../components/NewsCard'
export default function Home() {
  return (
    <div className={styles.container}>
      <Container style={{"border": "1px red solid"}} maxWidth={"xl"}>
        <NewsCard />
      </Container>

    </div>
  )
}
