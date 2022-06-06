import React from "react";
import Child from "./Child";

class Parent extends React.Component{
    state = {
        order : 0,
    }

    handleCounter = (newValue) =>{        
        this.setState({
            order : newValue
        })
    }


    render(){
        return(
            <div>
                <h3>Parent : {this.state.order}</h3>
                <Child valueCounter={(value)=>this.handleCounter(value)}/>
            </div>
        )
    }

}

export default Parent;