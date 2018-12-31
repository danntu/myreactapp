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


RenderDOM.render(<Helloworld/>, document.getElementById('root1'))
render(<SecondHello/>, document.getElementById('root2'))
render(<ThirdHello/>, document.getElementById('root3'))
