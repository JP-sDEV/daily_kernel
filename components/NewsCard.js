import { useEffect } from "react";
import { Card, CardMedia, CardContent, Typography, Grid, Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LinkIcon from '@mui/icons-material/Link';
import { useAppContext } from '../context/AppContext';

export default function NewsCard({article, liked}) {
    const noImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png"
    
    const { state, dispatch }= useAppContext();

    const handleLike = (cardUrl) => {
        if (state["savedArticles"].some(a => a.url === cardUrl)) {
            dispatch({type: "remove_article", value: article?.url})
        } else {
            dispatch({type: "add_article", value: article})
        }
    }
    
    return (
        // cardId
       <Card sx={{margin: 1}}>

            <Grid container spacing={1} columns={4}>

                <Grid item xs={2}
                    container
                    direction="row-reverse"
                    justifyContent="center"
                    alignItems="center">
                    <CardMedia 
                        component="img"
                        image={article?.urlToImage || noImg}/>
                </Grid>

                <Grid item xs={3} rowSpacing={1}>

                    <Grid container direction="column"> 

                        <CardContent>
                            <Typography variant="h5">
                                {article?.title || "No title"}
                            </Typography>
                            <Typography variant="overline">
                                {article?.source?.name || "No Source"} - {article?.author || "No Author"} 
                            </Typography>
                        </CardContent>

                        <CardContent>
                            <Typography variant="body2">
                                {article?.description || "No description"}
                            </Typography>
                        </CardContent>

                        <CardContent>
                            <Button onClick={() => handleLike(article?.url)}>
                                <FavoriteIcon color={liked ? "secondary" : "primary"}/>
                            </Button>
                            <Button>
                                <LinkIcon color="primary"/>
                            </Button>
                        </CardContent>

                    </Grid>

                </Grid>

            </Grid>
        </Card>
    )
}