import React, { useEffect } from 'react'
import { useAppContext } from '../context/AppContext';
import NewsCard from '../components/NewsCard';

export default function Saved() {

    const { state, dispatch }= useAppContext();


    // useEffect(() => {
    //     dispatch({type: "add_article", value:"test_value"})
    // }, [])

    return(
        <div>
            <h1>Hello from the "Saved" page!</h1>
        </div>
        
    )
}