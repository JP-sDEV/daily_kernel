import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import NewsCard from '../components/NewsCard'
import TrendingBar from '../components/TrendingBar';
import styles from '../styles/Home.module.css'
import { useAppContext } from '../context/AppContext';

import NewsData from '../sample_data/news'

export default function Home() {
  const { state }= useAppContext();

  const sampleResponses = NewsData.articles

  const cardContainersx = {
    display: 'flex',
    flexDirection: 'column'
  }

  return (
    <div className={styles.container}>
      <Container maxWidth={"xl"}>
        
        <TrendingBar />

        <Box sx={cardContainersx}>
          {sampleResponses.map((article, key) => {
              const liked = state["savedArticles"].some(a => a.url === article.url)
                return (
                  <NewsCard key={key} article={article} liked={liked}/>
                  )
              })}
        </Box>
        
      </Container>

    </div>
  )
}
