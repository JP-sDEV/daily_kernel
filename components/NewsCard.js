import { Container, Card, CardMedia, CardContent, Typography, Grid } from '@mui/material';
import NewsData from "../sample_data/news";

export default function NewsCard() {

    // single response object from news.org api
    const sampleResponse = NewsData.articles[0]

    return (
        <div>
          
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <CardMedia 
                        component="img"
                        image={sampleResponse.urlToImage}
                        />
                </Grid>

            </Grid>

        </div>
    )
}