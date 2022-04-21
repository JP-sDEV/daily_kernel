import { Container, Card, CardMedia, CardContent, Typography, Grid } from '@mui/material';
import NewsData from "../sample_data/news";

export default function NewsCard() {

    // single response object from news.org api
    const sampleResponse = NewsData.articles[0]

    return (
        <div>
            <Grid container spacing={1} columns={4}>

                <Grid item xs={2}
                    container
                    direction="row-reverse"
                    justifyContent="center"
                    alignItems="center">
                    <CardMedia 
                        component="img"
                        image={sampleResponse.urlToImage}/>
                </Grid>

                <Grid item xs={3}  rowSpacing={1}>

                    <Grid container direction="column" item> 

                        <CardContent item>
                            <Typography variant="h5">
                                {sampleResponse.title}
                            </Typography>
                            <Typography variant="overline">
                                {sampleResponse.source.name} - {sampleResponse.author}
                            </Typography>
                        </CardContent>

                        <CardContent item>
                            <Typography variant="body2">
                                {sampleResponse.description}
                            </Typography>
                        </CardContent>
                        
                    </Grid>

                </Grid>

            </Grid>
        </div>
    )
}