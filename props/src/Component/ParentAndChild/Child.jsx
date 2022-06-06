import React from "react";

class Child extends React.Component {

    state = {
        order : 0
    }

    handleCounter = (value) =>{
        this.props.valueCounter(value);
    }

    tambah(){
        this.setState((value) =>({
            order : value.order + 1
        }),() => {
            this.handleCounter(this.state.order)
        })                
    }    

    kurang = () =>{
        if(this.state.order > 0){
            this.setState({
                order : this.state.order - 1
            },() => {
                this.handleCounter(this.state.order)
            })
        }
    }

    render(){        
        return(
            <div>
                <h3>Child : {this.state.order}</h3>
                <button className="btn btn-primary" onClick={this.kurang}>-</button>
                <button className="btn btn-primary" onClick={() => this.tambah()}>+</button>
            </div>
        )
    }

}

export default Child;