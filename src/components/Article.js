import React, {Component} from 'react'

class Article extends Component{

    // constructor(props){
    //     super(props)
    //
    //     this.state = {
    //         isOpen : true
    //     }
    // }

    state = {
        isOpen : true
    }

    render() {
        const {article} = this.props


        console.log("=====", this.props)

        const const_body = this.state.isOpen && <section>{article.text}</section>
        return (
            <div>
                <h2>{article.title}
                    <button onClick={this.handleClick}>
                        {this.state.isOpen ? 'close' : 'open' }
                    </button>
                </h2>
                {const_body}
                <h3>
                    Article creation date: {(new Date(article.date)).toDateString()}
                </h3>
            </div>
        )
    }

    handleClick  = ()=>{
        console.log('=======','clicked')
        this.setState({
            isOpen :  !this.state.isOpen
        })
    }
}


function  handleClick() {

}

export default Article
