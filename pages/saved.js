import React from 'react'
import { Container, Grid, ListItem } from '@mui/material';
import { useAppContext } from '../context/AppContext';
import NewsCard from '../components/NewsCard';

export default function Saved() {

    const { state }= useAppContext();

    return(
        <Container maxWidth={"xl"}>
            
            <Grid
                container
                direction="column"
                justifyContent="flex-end"
                alignItems="center"
                >
                
                    {state["savedArticles"].map((article, key) => {
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