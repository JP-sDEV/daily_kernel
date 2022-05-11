import { useState } from "react";
import { Card, CardMedia, CardContent, Typography, Grid, Button, Modal, Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LinkIcon from '@mui/icons-material/Link';
import { useAppContext } from '../context/AppContext';
import moment from 'moment'

export default function NewsCard({article, liked}) {
    const noImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png"
    const { state, dispatch }= useAppContext();

    const [copyModal, setCopyModal] = useState(false)

    const handleLike = (cardUrl) => {
        if (state["savedArticles"].some(a => a.url === cardUrl)) {
            dispatch({type: "remove_article", value: article?.url})
        } else {
            dispatch({type: "add_article", value: article})
        }
    }

    const formatDescription = (text) => {
        const numChars = 175

        if (text.length >= numChars) {
            return (text.slice(0, numChars)+"...")
        }
        
        return text
    }

    const handleCopyModal = (url) => {
        navigator.clipboard.writeText(url)
        alert("Link Copied!")
    }
    
    const cardSX = {
        card: {
            width: "100%",
            maxHeight: "30vh",
        },
        
        image: {
            width: "100%",
        }
    }

    return (
       <Card sx={cardSX.card}>
           
            <Grid container spacing={1} columns={4}>
                
                    <Grid item xs={2} container>

                        <CardMedia 
                            component="img"
                            image={article?.urlToImage || noImg}
                            sx={cardSX.image}
                            />

                    </Grid>
                
                <Grid item xs={3} rowSpacing={1}>

                    <Grid container direction="column"> 

                        <CardContent>
                            <Typography variant="h5">
                                {article?.title || "No title"}
                            </Typography>

                            <Typography variant="overline">
                                {article?.source?.name || "No Source"}{` - ${moment(article?.publishedAt).format('YYYY/MM/DD')}` || ""}
                            </Typography>
                        </CardContent>

                        <CardContent>
                            <Typography variant="body2">
                                {formatDescription(article?.description) || "No description"}
                            </Typography>
                        </CardContent>

                        <CardContent>
                            <Button onClick={() => handleLike(article?.url)}>
                                {liked? 
                                    <FavoriteIcon color="error"/>
                                    : 
                                    <FavoriteBorderOutlinedIcon color="secondary"/>}
                            </Button>
                            <Button onClick={() => handleCopyModal(article?.url)}>
                                <LinkIcon color="secondary"/>
                            </Button>

                        </CardContent>

                    </Grid>

                </Grid>

            </Grid>
        </Card>
    )
}