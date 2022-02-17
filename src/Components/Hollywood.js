import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from '../AppStyles.module.css';
import TopPosts from "./TopPosts";


const Hollywood = () => {
    const [loadMore, setLoadMore] = useState(false);
    const [loadMoreBtn, setLoadMoreBtn] = useState('Load More');
    const [arrow, setArrow] = useState(<i className="fas fa-arrow-down" style={ {color : 'orange'} }></i>);
    const [blog, setBlog] = useState([]);

    const getBlogs = () => {
        axios.get("https://evening-garden-77742.herokuapp.com/api/v1/Hollywood")
        .then((response) => {
            // console.log(response.data);
            setBlog(response.data);
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
        <div className={ styles.CategoryPage_Main }>
            <div className={ styles.CategoryPage_Left }>
                <div className={ styles.CategoryPage_Left_Top}>
                    <div className={styles.AllSections_Header}>Hollywood</div>
                    <hr className={styles.AllSections_Header_Line}/>
                </div>
                <div className={ styles.CategoryPage_Left_Bottom}>
                    <div className={ styles.CategoryPage_CardContainer }>
                        {   // eslint-disable-next-line
                            blog.map( (article, index) => {
                                if(!loadMore && index>=blog.length-3){
                                    return(
                                        <div key={index} className={ styles.category1_Card }>
                                            <div><img className={ styles.category1_Image } src={ article.ImageAsset } alt="From the Article"/></div>
                                            <div>
                                                <NavLink to={`/article/${article.Title}/${article.CategoryName}`} className={ styles.category1_Title }>{ article.Title }</NavLink>
                                                <div className={ styles.category1_BlogContent }>{ article.BlogContent }</div>
                                                <div>
                                                    <span className={ styles.category1_CategoryName }>{ article.CategoryName }</span>
                                                    <span className={ styles.category1_PublishedDate }> / { article.PublishedDate }</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                                else if (loadMore && index>=blog.length-5) {
                                    return(
                                        <div key={index} className={ styles.category1_Card }>
                                            <div><img className={ styles.category1_Image } src={ article.ImageAsset } alt="From the Article"/></div>
                                            <div>
                                                <NavLink to={`/article/${article.Title}/${article.CategoryName}`} className={ styles.category1_Title }>{ article.Title }</NavLink>
                                                <div className={ styles.category1_BlogContent }>{ article.BlogContent }</div>
                                                <div>
                                                    <span className={ styles.category1_CategoryName }>{ article.CategoryName }</span>
                                                    <span className={ styles.category1_PublishedDate }> / { article.PublishedDate }</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            }
                            )
                        }
                    </div>
                    <div><button className={ styles.loadMore_Btn } onClick={handleClick}>{arrow}{loadMoreBtn}</button></div>
                </div>
            </div>
            <div className={ styles.CategoryPage_Right }>
                <div className={ styles.CategoryPage_Right_Top }><TopPosts/></div>
                <div className={ styles.CategoryPage_Right_Bottom }>
                    <div className={ styles.advertisement }>Advertisement</div>
                </div>
            </div>
        </div>
    )
}

export default Hollywood;