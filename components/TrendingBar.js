import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TrendingData from "../sample_data/trending";

export default function TrendingBar() {
    const [active, setActive] = useState([])
    const sampleTrends = TrendingData[0].trends
    return(
        <div>
           <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start">

                    {sampleTrends.map((trend, key) => {
                        return (
                                <Button
                                    key={key}
                                    variant="contained"
                                    className="trending-btn">
                                        {trend.name}
                                </Button>
                                )
                    })}

           </Grid>
        </div>
    )
}