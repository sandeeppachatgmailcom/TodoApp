import React from "react";

class Second extends React.Component{
    constructor(props){
        console.log('constructor')
        super(props);
        this.state={name:'sandeep',
                    count:0}

    }
    static getDerivedStateFromProps(){
        console.log('getDerivedStateFromProps()')
        return null;
    }
    componentDidMount(){
        console.log('componentDidMount');
    }
    increment = ()=> {
        this.setState({
            count:this.state.count+1})
         
    }
     
     
    render(){
        console.log('render')
        return(
            <div>
                 <h6>My 2nd class {this.props.name} {this.props.love} </h6>
                   <button onClick={this.increment} >hello {this.state.count} </button>
                   
                   <h3>{this.state.count} </h3>
        </div>
        )
    
    
        }
}

export default Second