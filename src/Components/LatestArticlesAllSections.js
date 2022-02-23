import React from "react";
import { NavLink } from "react-router-dom";
import styles from '../AppStyles.module.css';


const LatestArticlesAllSections = (props) => {

    const technology = props.technology;
    const fitness = props.fitness;
    const food = props.food;

    return(
        <div className={styles.AllSections_Main}>
            <div className={styles.AllSections_Top}>
                <div className={styles.AllSections_Header}>The Latest</div>
                <hr className={styles.AllSections_Header_Line}/>
            </div>
            <div className={styles.AllSections_Bottom}>
                {   // eslint-disable-next-line
                    technology.map(   (article,index) => {
                        if(index>=technology.length-1) {
                            return(
                                <div key={index} className={styles.AllSections_Card}>
                                    <div><img className={styles.AllSections_Image} src={  article.imageAsset  } alt="From The Article"/></div>
                                    <div>
                                        <NavLink to={`/article/${article.title}/${article.categoryName}`} className={styles.AllSections_Title}>{  article.title  }</NavLink>
                                        <div className={styles.AllSections_BlogContent}>{  article.blogContent  }</div>
                                    </div>
                                    <div>
                                        <span className={styles.AllSections_CategoryName}>{ article.categoryName  }</span>
                                        <span className={styles.AllSections_PublishedDate}> / { article.publishedDate  }</span>
                                    </div>
                                </div> 
                            )
                        }
                    }
                    )    
                }
                {   // eslint-disable-next-line
                    fitness.map(   (article,index) => {
                        if(index>=fitness.length-1) {
                            return(
                                <div key={index} className={styles.AllSections_Card}>
                                    <div><img className={styles.AllSections_Image} src={  article.imageAsset  } alt="From The Article"/></div>
                                    <div>
                                        <NavLink to={`/article/${article.title}/${article.categoryName}`} className={styles.AllSections_Title}>{  article.title  }</NavLink>
                                        <div className={styles.AllSections_BlogContent}>{  article.blogContent  }</div>
                                    </div>
                                    <div>
                                        <span className={styles.AllSections_CategoryName}>{ article.categoryName  }</span>
                                        <span className={styles.AllSections_PublishedDate}> / { article.publishedDate  }</span>
                                    </div>
                                </div>
                            )
                        }
                    }
                     )    
                }
                {   // eslint-disable-next-line
                    food.map(   (article,index) => {
                        if(index>=food.length-1) {
                            return(
                                <div key={index} className={styles.AllSections_Card}>
                                    <div><img className={styles.AllSections_Image} src={  article.imageAsset  } alt="From The Article"/></div>
                                    <div>
                                        <NavLink to={`/article/${article.title}/${article.categoryName}`} className={styles.AllSections_Title}>{  article.title  }</NavLink>
                                        <div className={styles.AllSections_BlogContent}>{  article.blogContent  }</div>
                                    </div>
                                    <div>
                                        <span className={styles.AllSections_CategoryName}>{ article.categoryName  }</span>
                                        <span className={styles.AllSections_PublishedDate}> / { article.publishedDate  }</span>
                                    </div>
                                </div>
                            )
                        }
                    }
                     )    
                }
            </div>
        </div>
    )
}

export default LatestArticlesAllSections;