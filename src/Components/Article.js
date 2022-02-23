import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import styles from '../AppStyles.module.css';
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";


const Article = () => {
    const { articleTitle, articleCategory } = useParams();
    const [blog, setBlog] = useState([]);
    const [loading, setLoading] = useState(false);


    const getBlogs = () => {
        axios.get("https://evening-garden-77742.herokuapp.com/api/v1/article/" + articleTitle + "/" + articleCategory + "")
        .then((response) => {
            // console.log(response.data);
            setBlog(response.data);
            setLoading(true);
        }
        );
    }


    useEffect( () => {
        getBlogs()
        // eslint-disable-next-line
    },[]);



    useEffect(() => {
        window.scrollTo(0, 0)
        // To Scroll Back Up While Coming To This Article Page After Clicking on an Article title!!!
      })


    return(
        <div className={ styles.Article_Main }>
           {loading?
           <>
             <div className={ styles.Article_Content }>
                 {
                    blog.map(  (article, index) => article.title === articleTitle&&
                       <div key={index} className={ styles.Article_Card }>
                               <div className={ styles.Article_Card_Top }>
                                       <div className={ styles.Article_Card_Top1 }>{article.title}</div>
                                       <div className={ styles.Article_Card_Top2 }>
                                               <div className={ styles.Card_Top2_Left }>
                                                       <div className={ styles.Card_Top2_Left1 }><i className="fas fa-user-circle fa-3x"></i></div>
                                                       <div className={ styles.Card_Top2_Left2 }>
                                                               <div className={ styles.Article_AuthorName }>Author Name</div>
                                                               <div className={ styles.AllSections_PublishedDate }>{ article.publishedDate } - 10 min read</div>
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
                                       <div><img className={ styles.Article_Image } src={ article.imageAsset } alt="From the Article"/></div>
                                       <div className={ styles.AllSections_BlogContent }>{ article.blogContent }</div>
                               </div>
                               <div className={ styles.Article_Card_Bottom }>
                                       <div className={ styles.Article_Card_Bottom1 }>
                                               <div><button><i className="far fa-thumbs-up fa-lg"></i></button></div>
                                               <div>{ article.likes } Likes</div>
                                       </div>
                                       <div className={ styles.Article_Card_Bottom2 }>
                                               <div className={ styles.Article_Card_Bottom2A }><i className="fas fa-user-circle fa-3x"></i></div>
                                               <div className={ styles.Article_Card_Bottom2B }>
                                                       <div className={ styles.AllSections_PublishedDate }>WRITTEN BY</div>
                                                       <div className={ styles.Article_AuthorName }>Author Name</div>
                                                       <div className={ styles.AllSections_PublishedDate }>{ article.publishedDate } - 10 min read</div>
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
                                   if(article.categoryName === articleCategory && index>=blog.length-5 && article.title !== articleTitle) {
                                      return(
                                          <div key={index} className={ styles.Related_Content_Card }>
                                             <div><img className={ styles.Related_Content_Image } src={ article.imageAsset } alt="From The Article"/></div>
                                             <NavLink to={`/article/${article.title}/${article.categoryName}`} className={ styles.AllSections_Title }>{ article.title }</NavLink>
                                             <div className={ styles.Related_Content_Card_Bottom }>
                                                <div><i className="fas fa-user-circle fa-3x"></i></div>
                                                <div>
                                                   <div className={ styles.Article_AuthorName }>Author Name</div>
                                                   <div className={ styles.AllSections_PublishedDate }>{ article.publishedDate } - 10 min read</div>
                                                </div>
                                             </div>
                                          </div>
                                      )
                                   }
                               })
                           }
                      </div>
              </div>
           </>
           :
           <LoadingSpinner/>
           }
        </div>
    )
}

export default Article;