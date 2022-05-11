import { Container, Grid, ListItem } from '@mui/material';
import NewsCard from '../components/NewsCard'
import TrendingBar from '../components/TrendingBar';
import { useAppContext } from '../context/AppContext';
import NewsData from '../sample_data/news'

export default function Home() {
  const { state }= useAppContext();

  const sampleResponses = NewsData.articles
  
  return (
    <Container maxWidth={"xl"}>
      
      <TrendingBar />

      <Grid
          container
          direction="column"
          justifyContent="flex-end"
          alignItems="center"
        >
        {sampleResponses.map((article, key) => {
            const liked = state["savedArticles"].some(a => a.url === article.url)
              return (
                <ListItem key={key}>
                  <NewsCard key={key} article={article} liked={liked}/>
                </ListItem>
                )
            })}
      </Grid>
      
    </Container>
  )
}
