import React from 'react'

function Article(props){
    const {article} = props


    console.log("=====", props)

    const const_body = <section>{article.text}</section>
    return (
        <div>
            <h2><b>Article title:</b> {article.title}</h2>
            <section><b>Article section:</b>{const_body}</section>
            <h3>
                Article creation date: {(new Date(article.date)).toDateString()}
            </h3>
        </div>
    )
}

export default Article
