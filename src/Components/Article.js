import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import styles from '../AppStyles.module.css';
import axios from "axios";


const Article = () => {
    const { articleTitle, articleCategory } = useParams();
    const [blog, setBlog] = useState([]);

    const getBlogs = () => {
        axios.get("https://evening-garden-77742.herokuapp.com/api/v1/article/" + articleTitle + "/" + articleCategory + "")
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



    useEffect(() => {
        window.scrollTo(0, 0)
        // To Scroll Back Up While Coming To This Article Page After Clicking on an Article Title!!!
      })


    return(
        <div className={ styles.Article_Main }>
           <div className={ styles.Article_Content }>
              {
                 blog.map(  (article, index) => article.Title === articleTitle&&
                    <div key={index} className={ styles.Article_Card }>
                            <div className={ styles.Article_Card_Top }>
                                    <div className={ styles.Article_Card_Top1 }>{article.Title}</div>
                                    <div className={ styles.Article_Card_Top2 }>
                                            <div className={ styles.Card_Top2_Left }>
                                                    <div className={ styles.Card_Top2_Left1 }><i className="fas fa-user-circle fa-3x"></i></div>
                                                    <div className={ styles.Card_Top2_Left2 }>
                                                            <div className={ styles.Article_AuthorName }>Author Name</div>
                                                            <div className={ styles.AllSections_PublishedDate }>{ article.PublishedDate } - 10 min read</div>
                                                    </div>
                                            </div>
                                            <div className={ styles.Card_Top2_Right }>
                                                    <div><i className="fab fa-facebook-square fa-lg"></i></div>
                                                    <div><i className="fab fa-twitter-square fa-lg"></i></div>
                                                    <div><i className="fab fa-instagram-square fa-lg"></i></div>
                                                    <div><i className="fab fa-youtube-square fa-lg"></i></div>
                                            </div>
                                    </div>
                            </div>
                            <div className={ styles.Article_Card_Middle }>
                                    <div><img className={ styles.Article_Image } src={ article.ImageAsset } alt="From the Article"/></div>
                                    <div className={ styles.AllSections_BlogContent }>{ article.BlogContent }</div>
                            </div>
                            <div className={ styles.Article_Card_Bottom }>
                                    <div className={ styles.Article_Card_Bottom1 }>
                                            <div><button><i className="far fa-thumbs-up fa-lg"></i></button></div>
                                            <div>{ article.Likes } Likes</div>
                                    </div>
                                    <div className={ styles.Article_Card_Bottom2 }>
                                            <div className={ styles.Article_Card_Bottom2A }><i className="fas fa-user-circle fa-3x"></i></div>
                                            <div className={ styles.Article_Card_Bottom2B }>
                                                    <div className={ styles.AllSections_PublishedDate }>WRITTEN BY</div>
                                                    <div className={ styles.Article_AuthorName }>Author Name</div>
                                                    <div className={ styles.AllSections_PublishedDate }>{ article.PublishedDate } - 10 min read</div>
                                            </div>
                                    </div>
                            </div>
                    </div>
                 )
              }
           </div>
           <div className={ styles.Article_Related_Content }>
                   <div className={ styles.Related_Content_Top }>More From The Siren</div>
                   <div className={ styles.Related_Content_Bottom }>
                        {   // eslint-disable-next-line
                            blog.map( (article, index) => {
                                if(article.CategoryName === articleCategory && index>=blog.length-5 && article.Title !== articleTitle) {
                                   return(
                                       <div key={index} className={ styles.Related_Content_Card }>
                                          <div><img className={ styles.Related_Content_Image } src={ article.ImageAsset } alt="From The Article"/></div>
                                          <NavLink to={`/article/${article.Title}/${article.CategoryName}`} className={ styles.AllSections_Title }>{ article.Title }</NavLink>
                                          <div className={ styles.Related_Content_Card_Bottom }>
                                             <div><i className="fas fa-user-circle fa-3x"></i></div>
                                             <div>
                                                <div className={ styles.Article_AuthorName }>Author Name</div>
                                                <div className={ styles.AllSections_PublishedDate }>{ article.PublishedDate } - 10 min read</div>
                                             </div>
                                          </div>
                                       </div>
                                   )
                                }
                            })
                        }
                   </div>
           </div>
        </div>
    )
}

export default Article;