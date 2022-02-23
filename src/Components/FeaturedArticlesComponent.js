import React from "react";
import { NavLink } from "react-router-dom";
import styles from '../AppStyles.module.css';


const FeaturedArticlesComponent = (props) => {

    const bollywood = props.bollywood;
    const hollywood = props.hollywood;
    const technology = props.technology;


    return(
        <div className={styles.featured_Articles_Component}>
            <div className={styles.featured_Articles_Left}>
                    {   // eslint-disable-next-line
                        bollywood.map(  (article, index) => {
                            if(index>=bollywood.length-1) {
                                return(
                                    <div key={index} className={styles.featured_Articles_Box_Big} style={   {backgroundImage: `url(${article.imageAsset})`,
                                                                                                             backgroundPosition: 'center',
                                                                                                             backgroundSize: 'cover',
                                                                                                             backgroundRepeat: 'no-repeat' }  }>
                                        <NavLink to={`/article/${article.title}/${article.categoryName}`} className={styles.Box_Big_Title}>{article.title}</NavLink>
                                        <div className={styles.Box_Category_Date}>
                                            <span>{article.categoryName}</span>
                                            <span> / </span>
                                            <span>{article.publishedDate}</span>
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
                                    <div key={index} className={styles.featured_Articles_Box_Small} style={   {backgroundImage: `url(${article.imageAsset})`,
                                                        backgroundPosition: 'center',
                                                        backgroundSize: 'cover',
                                                        backgroundRepeat: 'no-repeat'  }  }>
                                    <NavLink to={`/article/${article.title}/${article.categoryName}`} className={styles.Box_Small_Title}>{article.title}</NavLink>
                                    <div className={styles.Box_Category_Date}>
                                        <span>{article.categoryName}</span>
                                        <span> / </span>
                                        <span>{article.publishedDate}</span>
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
                                    <div key={index} className={styles.featured_Articles_Box_Small} style={   {backgroundImage: `url(${technology[technology.length - 1].imageAsset})`,
                                                        backgroundPosition: 'center',
                                                        backgroundSize: 'cover',
                                                        backgroundRepeat: 'no-repeat' }  }>
                                    <NavLink to={`/article/${article.title}/${article.categoryName}`} className={styles.Box_Small_Title}>{technology[technology.length - 1].title}</NavLink>
                                    <div className={styles.Box_Category_Date}>
                                        <span>{technology[technology.length - 1].categoryName}</span>
                                        <span> / </span>
                                        <span>{technology[technology.length - 1].publishedDate}</span>
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



