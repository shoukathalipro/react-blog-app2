import React, { useEffect, useState } from "react";
import styles from '../AppStyles.module.css';
import { NavLink } from "react-router-dom";
import axios from "axios";


const TopPosts = () => {

    const [blog, setBlog] = useState([]);


    const getBlogs = () => {
        axios.get("https://evening-garden-77742.herokuapp.com/api/v1/TopPosts")
        .then((response) => {
            // console.log(response.data);
            setBlog(response.data);
        }
        );
    }


    useEffect( () => {
        getBlogs()
        // eslint-disable-next-line
    },[]);




    return(
        <div className={ styles.topPosts_Main }>
            <div className={ styles.topPosts_Top}>
                <div className={styles.AllSections_Header}>Top Posts</div>
                <hr className={styles.AllSections_Header_Line}/>
            </div>
            <div className={ styles.topPosts_Bottom}>
                {   // eslint-disable-next-line
                    blog.map( (object, index) => {
                        if(index === 0) {
                            return(
                                <div className={styles.topPosts_CardPrimary} key={index}>
                                    <div className={styles.cardPrimary_Top}><img className={styles.cardPrimary_Image} src={ object.ImageAsset } alt="From the article" /></div>
                                    <div className={styles.cardPrimary_Bottom}>
                                        <div className={styles.cardPrimary_Bottom1}>
                                            <NavLink to={`/article/${object.Title}/${object.CategoryName}`} className={ styles.category1_Title }>{ object.Title }</NavLink>
                                            <div>
                                                <span className={ styles.category1_CategoryName }>{ object.CategoryName }</span>
                                                <span className={ styles.category1_PublishedDate }> / { object.PublishedDate }</span>
                                            </div>
                                        </div>
                                        <div className={styles.cardPrimary_Bottom2}>{ index+1 }</div>
                                    </div>
                                </div>
                            )
                        }

                        if(index !== 0) {
                            return(
                                <div className={styles.topPosts_CardSecondary} key={index}>
                                    <div className={styles.cardSecondary_Left}><img className={styles.cardSecondary_Image} src={ object.ImageAsset } alt="From the article" /></div>
                                    <div className={styles.cardSecondary_Right}>
                                        <div className={styles.cardSecondary_Right1}>
                                            <NavLink to={`/article/${object.Title}/${object.CategoryName}`} className={ styles.cardSecondary_Title }>{ object.Title }</NavLink>
                                            <div>
                                                <span className={ styles.cardSecondary_CategoryName }>{ object.CategoryName }</span>
                                                <span className={ styles.cardSecondary_PublishedDate }> / { object.PublishedDate }</span>
                                            </div>
                                        </div>
                                        <div className={styles.cardSecondary_Right2}>{ index+1 }</div>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}

export default TopPosts;


// "https://evening-garden-77742.herokuapp.com/api/v1/TopPosts"
// "http://localhost:3001/api/v1/TopPosts"