import React from 'react'
import Article from './Article'
import articles from '../fixtures'
import ArticleList from './ArticleList'


// function App(){
//     return (
//         <div>
//             <h1>App Name</h1>
//             <Article article={articles[0]} foo="bar" flag></Article>
//         </div>
//     )
// }


function App(){
    return (
        <div>
            <h1>App Name</h1>
            <ArticleList articles={articles} />
        </div>
    )
}

export  default App
