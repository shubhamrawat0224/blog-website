import React from 'react';
import Card from '../UI/Card';
import './style.css';
/**
 * @author
 * @function BlogPost
 */

 const BlogPost=(props)=>{
     return(
        <div className="blogPostContainer">
            <Card>
                <div className="blogHeader">
                    <span className="blogcategory">Featured</span>
                    <h1 className="postTitle">Beautiful is always beautiful</h1>
                    <span className="postedBy">Post on July 21, 2020 by sora Blogging Tips</span>
                </div>

                <div className="postimageContainer">
                    <img src={require('../../blogpostimages/download.jpg')}alt="Post Image"/>

                </div>

               
            </Card>
        </div>
        
     )
     
 }

 export default BlogPost