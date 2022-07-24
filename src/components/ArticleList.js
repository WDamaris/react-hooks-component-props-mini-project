import React from "react";
import Article from "./Article";
function ArticleList({posts}){
    const articles= posts.map((post) => {
        return(
            <main>
            <Article key= {post.id} />
             <Article title= {post.title} />
            
             
             <Article date= {post.date} />
              </main> 
         )
     
    })
    return(
        <div>
            {articles}
        </div>
    )
}
export default ArticleList;