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
        const style ={width:'50%'}

        console.log("=====", this.props)

        const const_body = this.state.isOpen && <section className="card-text">{article.text}</section>
        return (
            <div className="card mx-auto" style={style}>
                <div className="card-header">
                    <h2>{article.title}
                        <button onClick={this.handleClick} className="btn btn-primary btn-lg float-right">
                            {this.state.isOpen ? 'close' : 'open' }
                        </button>
                    </h2>
                </div>
                <div className="card-body">
                    <h6 className="card-subtitle text-muted">
                        Article creation date: {(new Date(article.date)).toDateString()}
                    </h6>
                    {const_body}
                </div>
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
