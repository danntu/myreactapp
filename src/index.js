import React from  'react'
import RenderDOM from 'react-dom'
import {render} from 'react-dom'

function Helloworld(){
    return (
        <div>
            <h1>(Первый пример) Hello World Danik</h1>
        </div>
    )
}

function SecondHello(){
    return (
        <div>
            <h2>(Второй пример) Привет второй раз</h2>
        </div>
    )
}

function ThirdHello(){
    return (
      <div>
          <h3>(Третий пример) Привет третий раз</h3>
      </div>
    )
}

function Article(){
    const const_body = <section>const body</section>
    return (
        <div className="hello" style={{color:'red'}}>
            <h2>title</h2>
            <section>body</section>
            {const_body}
            <h3>
                creation date: {(new Date).toDateString()}
            </h3>
        </div>
    )
}

function App(){
    return (
        <div>
            <h1>App Name</h1>
            <Article></Article>
        </div>
    )
}


RenderDOM.render(<Helloworld/>, document.getElementById('root1'))
render(<SecondHello/>, document.getElementById('root2'))
render(<ThirdHello/>, document.getElementById('root3'))

RenderDOM.render(<App/>, document.getElementById('root4'))
