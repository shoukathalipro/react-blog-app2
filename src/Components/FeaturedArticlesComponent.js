import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from '../AppStyles.module.css';


const FeaturedArticlesComponent = () => {

    const [bollywood, setBollywood] = useState([]);
    const [hollywood, setHollywood] = useState([]);
    const [technology, setTechnology] = useState([]);

    const getBlogs = () => {
        axios.get("https://evening-garden-77742.herokuapp.com/api/v1/FeaturedArticles")
        .then((response) => {
            // console.log(response.data);
            setBollywood(response.data.filter( (article) => article.CategoryName === "Bollywood"));
            setHollywood(response.data.filter( (article) => article.CategoryName === "Hollywood"));
            setTechnology(response.data.filter( (article) => article.CategoryName === "Technology"));
        }
        );
    }


    useEffect( () => {
        getBlogs()
    },[]);


    return(
        <div className={styles.featured_Articles_Component}>
            <div className={styles.featured_Articles_Left}>
                    {   // eslint-disable-next-line
                        bollywood.map(  (article, index) => {
                            if(index>=bollywood.length-1) {
                                return(
                                    <div key={index} className={styles.featured_Articles_Box_Big} style={   {backgroundImage: `url(${article.ImageAsset})`,
                                                                                                             backgroundPosition: 'center',
                                                                                                             backgroundSize: 'cover',
                                                                                                             backgroundRepeat: 'no-repeat' }  }>
                                        <NavLink to={`/article/${article.Title}/${article.CategoryName}`} className={styles.Box_Big_Title}>{article.Title}</NavLink>
                                        <div className={styles.Box_Category_Date}>
                                            <span>{article.CategoryName}</span>
                                            <span> / </span>
                                            <span>{article.PublishedDate}</span>
                                        </div>
                                    </div>
                                )
                            }
                        }
                    )
                    }
            </div>
            <div className={styles.featured_Articles_Right}>
                <div className={styles.featured_Articles_Right1}>
                        {   // eslint-disable-next-line
                            hollywood.map(  (article, index) => {
                            if(index>=hollywood.length-1) {
                                return(
                                    <div key={index} className={styles.featured_Articles_Box_Small} style={   {backgroundImage: `url(${article.ImageAsset})`,
                                                        backgroundPosition: 'center',
                                                        backgroundSize: 'cover',
                                                        backgroundRepeat: 'no-repeat'  }  }>
                                    <NavLink to={`/article/${article.Title}/${article.CategoryName}`} className={styles.Box_Small_Title}>{article.Title}</NavLink>
                                    <div className={styles.Box_Category_Date}>
                                        <span>{article.CategoryName}</span>
                                        <span> / </span>
                                        <span>{article.PublishedDate}</span>
                                    </div>
                            </div>
                                )
                            }
                        }
                        )
                        }
                </div>
                <div className={styles.featured_Articles_Right2}>
                        {   // eslint-disable-next-line
                            technology.map(  (article, index) => {
                            if(index>=technology.length-1) {
                                return(
                                    <div key={index} className={styles.featured_Articles_Box_Small} style={   {backgroundImage: `url(${technology[technology.length - 1].ImageAsset})`,
                                                        backgroundPosition: 'center',
                                                        backgroundSize: 'cover',
                                                        backgroundRepeat: 'no-repeat' }  }>
                                    <NavLink to={`/article/${article.Title}/${article.CategoryName}`} className={styles.Box_Small_Title}>{technology[technology.length - 1].Title}</NavLink>
                                    <div className={styles.Box_Category_Date}>
                                        <span>{technology[technology.length - 1].CategoryName}</span>
                                        <span> / </span>
                                        <span>{technology[technology.length - 1].PublishedDate}</span>
                                    </div>
                            </div>
                                )
                            }
                        }
                        )
                        }
                </div>
            </div>
        </div>
    )
}

export default FeaturedArticlesComponent;



