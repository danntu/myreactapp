import React from 'react'
import Article from './Article'
import articles from '../fixtures'
import ArticleList from './ArticleList'
import 'bootstrap/dist/css/bootstrap.css'


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
        <div className="container">
            <div className="jumbotron">
            <h1 className="display-3">App Name</h1>
            </div>
            <ArticleList articles={articles} />
        </div>
    )
}

export  default App
