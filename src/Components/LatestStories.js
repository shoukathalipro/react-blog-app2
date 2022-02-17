import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from '../AppStyles.module.css';


const LatestStories = () => {
    const [loadMore, setLoadMore] = useState(false);
    const [loadMoreBtn, setLoadMoreBtn] = useState('Load More');
    const [arrow, setArrow] = useState(<i className="fas fa-arrow-down" style={ {color : 'orange'} }></i>);


    const [bollywood, setBollywood] = useState([]);
    const [hollywood, setHollywood] = useState([]);
    const [technology, setTechnology] = useState([]);
    const [fitness, setFitness] = useState([]);
    const [food, setFood] = useState([]);

    const getBlogs = () => {
        axios.get("https://evening-garden-77742.herokuapp.com/api/v1/LatestStories")
        .then((response) => {
            // console.log(response.data);
            setBollywood(response.data.filter( (article) => article.CategoryName === "Bollywood"));
            setHollywood(response.data.filter( (article) => article.CategoryName === "Hollywood"));
            setTechnology(response.data.filter( (article) => article.CategoryName === "Technology"));
            setFitness(response.data.filter( (article) => article.CategoryName === "Fitness"));
            setFood(response.data.filter( (article) => article.CategoryName === "Food"));
        }
        );
    }


    useEffect( () => {
        getBlogs()
    },[]);

    const handleClick = () => {
        setLoadMore(!loadMore);
        if (loadMoreBtn === 'Load More') {
            setLoadMoreBtn('Load Less');
            setArrow(<i className="fas fa-arrow-up" style={ {color : 'orange'} }></i>);
        }
        else {
            setLoadMoreBtn('Load More');
            setArrow(<i className="fas fa-arrow-down" style={ {color : 'orange'} }></i>);
        }
    }


    return(
        <div className={ styles.AllSections_Main }>
            <div className={ styles.LatestStories_Top }>
                <div className={ styles.AllSections_Header }>Latest Stories</div>
                <hr className={ styles.AllSections_Header_Line }/>
            </div>
            <div className={ styles.LatestStories_Bottom }>
                <div className={ styles.LatestStories_CardContainer }>
                    {   // eslint-disable-next-line
                        technology.map( (article, index) => {
                            if(index>=technology.length-1) {
                                return(
                                    <div className={ styles.LatestStories_Card } key={index}>
                                        <NavLink to={`/article/${article.Title}/${article.CategoryName}`} className={ styles.AllSections_Title }>{article.Title}</NavLink>
                                        <div className={ styles.AllSections_BlogContent }>{article.BlogContent}</div>
                                        <div>
                                            <span className={ styles.AllSections_CategoryName }>{article.CategoryName}</span>
                                            <span className={ styles.AllSections_PublishedDate }> / {article.PublishedDate}</span>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                    {   // eslint-disable-next-line
                        fitness.map( (article, index) => {
                            if(index>=fitness.length-1) {
                                return(
                                    <div className={ styles.LatestStories_Card } key={index}>
                                        <NavLink to={`/article/${article.Title}/${article.CategoryName}`} className={ styles.AllSections_Title }>{article.Title}</NavLink>
                                        <div className={ styles.AllSections_BlogContent }>{article.BlogContent}</div>
                                        <div>
                                            <span className={ styles.AllSections_CategoryName }>{article.CategoryName}</span>
                                            <span className={ styles.AllSections_PublishedDate }> / {article.PublishedDate}</span>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                    {   // eslint-disable-next-line
                        food.map( (article, index) => {
                            if(index>=food.length-1) {
                                return(
                                    <div className={ styles.LatestStories_Card } key={index}>
                                        <NavLink to={`/article/${article.Title}/${article.CategoryName}`} className={ styles.AllSections_Title }>{article.Title}</NavLink>
                                        <div className={ styles.AllSections_BlogContent }>{article.BlogContent}</div>
                                        <div>
                                            <span className={ styles.AllSections_CategoryName }>{article.CategoryName}</span>
                                            <span className={ styles.AllSections_PublishedDate }> / {article.PublishedDate}</span>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                    {   // eslint-disable-next-line
                        bollywood.map( (article, index) => {
                            if(loadMore && index>=bollywood.length-1) {
                                return(
                                    <div className={ styles.LatestStories_Card } key={index}>
                                        <NavLink to={`/article/${article.Title}/${article.CategoryName}`} className={ styles.AllSections_Title }>{article.Title}</NavLink>
                                        <div className={ styles.AllSections_BlogContent }>{article.BlogContent}</div>
                                        <div>
                                            <span className={ styles.AllSections_CategoryName }>{article.CategoryName}</span>
                                            <span className={ styles.AllSections_PublishedDate }> / {article.PublishedDate}</span>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                    {   // eslint-disable-next-line
                        hollywood.map( (article, index) => {
                            if(loadMore && index>=hollywood.length-1) {
                                return(
                                    <div className={ styles.LatestStories_Card } key={index}>
                                        <NavLink to={`/article/${article.Title}/${article.CategoryName}`} className={ styles.AllSections_Title }>{article.Title}</NavLink>
                                        <div className={ styles.AllSections_BlogContent }>{article.BlogContent}</div>
                                        <div>
                                            <span className={ styles.AllSections_CategoryName }>{article.CategoryName}</span>
                                            <span className={ styles.AllSections_PublishedDate }> / {article.PublishedDate}</span>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
                <div><button className={ styles.loadMore_Btn } onClick={handleClick}>{arrow}{loadMoreBtn}</button></div>
            </div>
        </div>
    )
}

export default LatestStories;