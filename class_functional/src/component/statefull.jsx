import React from "react";


//use 2 method when setState

class Statefull extends React.Component {        

    constructor(){
        super();
        this.state = {
            count : 0,
        }
    }

    //with arrow function
    jumlah(){
        this.setState((value) =>({
            count : value.count + 1
        }))
    }

    //just call state and change
    kurang(){        
        let counter = this.state.count - 1 
        if(counter <= 0){
            this.setState({
                count : 0
            })
        }else{
            this.setState({
                count : counter
            })
        }
    }


    render() {
        return (
            <div>
                <h1>{ this.state.count }</h1>
                <div className="row">
                    <div className="col-md-6">
                        <p className="btn btn-primary my-4 mx-4" onClick={()=>this.kurang()} >-</p>        
                    </div>
                    <div className="col-md-6">
                        <p className="btn btn-primary my-4 mx-4" onClick={()=>this.jumlah()} >+</p>        
                    </div>
                </div>
            </div>
        )
    }
}

export default Statefull;   