import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TrendingData from "../sample_data/trending";
import { useAppContext } from '../context/AppContext';

export default function TrendingBar() {
    const sampleTrends = TrendingData[0].trends

    const { state, dispatch }= useAppContext();

    const [activeTrends, setActiveTrends] = useState([])

    const [applyVisible, setApplyVisible] = useState(false)

    const handleActiveTrends = (id) => {

        if (activeTrends.includes(id)) {
            setActiveTrends(activeTrends.filter(trendId => trendId !== id))
        } else {
            setActiveTrends([...activeTrends, id])
        }
    }

    const handleApplyTrends = async () => {
        // await API CALL
    }

    const areEqual = (array1, array2) => {
        if (array1.length === array2.length) {
          return array1.every((element, index) => {
            if (element === array2[index]) {
              return true;
            }
            return false;
          });
        }
        return false;
      }

    const applyButtonSX = {
        width: "100%"
    }

    useEffect(() => {
        if (areEqual(activeTrends, state.activeTrends)) {
            setApplyVisible(false)
        } else {
            setApplyVisible(true)
        }
        
    }, [activeTrends])

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
                                    variant={activeTrends.includes(key) ? "contained" : "outlined"}
                                    className="trending-btn"
                                    onClick = {() => handleActiveTrends(key)}
                                    >
                                        {trend.name}
                                </Button>
                                )
                    })}
           </Grid>

           {applyVisible
            ?
                <Button
                sx={applyButtonSX}
                variant="contained"
                className="trending-btn"
                onClick = {() => handleApplyTrends()}
                >
                    Apply Trends
                </Button>
            : 
                <div></div>}

        </div>
    )
}