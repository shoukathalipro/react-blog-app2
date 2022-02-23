import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from '../AppStyles.module.css';
import FeaturedArticlesComponent from "./FeaturedArticlesComponent";
import LatestArticlesAllSections from "./LatestArticlesAllSections";
import LatestArticlesCategory1 from "./LatestArticlesCategory1";
import LatestStories from "./LatestStories";
import LoadingSpinner from "./LoadingSpinner";


const Home = () => {

    const [bollywood, setBollywood] = useState([]);
    const [hollywood, setHollywood] = useState([]);
    const [technology, setTechnology] = useState([]);
    const [fitness, setFitness] = useState([]);
    const [food, setFood] = useState([]);
    const [loading, setLoading] = useState(false);

    const getBlogs = () => {
        axios.get("https://evening-garden-77742.herokuapp.com/api/v1/home")
        .then((response) => {
            // console.log(response.data);
            setBollywood(response.data.filter( (article) => article.categoryName === "Bollywood"));
            setHollywood(response.data.filter( (article) => article.categoryName === "Hollywood"));
            setTechnology(response.data.filter( (article) => article.categoryName === "Technology"));
            setFitness(response.data.filter( (article) => article.categoryName === "Fitness"));
            setFood(response.data.filter( (article) => article.categoryName === "Food"));
            setLoading(true);
        }
        );
    }


    useEffect( () => {
        getBlogs()
    },[]);

    return(
        <div className={styles.commonStyle}>
            {loading ? 
            <>
                <FeaturedArticlesComponent bollywood={bollywood} hollywood={hollywood} technology={technology}/>
                <LatestArticlesAllSections technology={technology} fitness={fitness} food={food}/>
                <LatestArticlesCategory1 bollywood={bollywood} hollywood={hollywood}/>
                <LatestStories bollywood={bollywood} hollywood={hollywood} technology={technology} fitness={fitness} food={food}/>
            </>
            :
            <LoadingSpinner/>
            }
        </div>
    )
}

export default Home;

// "https://evening-garden-77742.herokuapp.com/api/v1/home"
// "http://localhost:3001/api/v1/home"