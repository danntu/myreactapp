import React from  'react'
import {render} from 'react-dom'

function Helloworld(){
    return (
        <div>
            <h1> Hello World Danik</h1>
        </div>
    )
}

render(<Helloworld/>, document.getElementById('root'))
render(<Helloworld/>, document.getElementById('root2'))
