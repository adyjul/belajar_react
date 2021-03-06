import React from "react";

//use class component

// class ComponentCard extends React.Component{
//     render(props){
//         console.log(this.props);
//         return(
//             <div className="col-md-3">
//                 <div className="card">
//                     <div className="card-body">
//                         <h5 className="card-title">{this.props.name}</h5>
//                         <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
//                         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                         <a href="#" className="card-link">Card link</a>
//                         <a href="#" className="card-link">Another link</a>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }


//use functional component

const ComponentCard = (props) => {
    return(
    <div className="col-md-3">
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{props.jurusan}</h6>                
            </div>
        </div>
    </div>
    )
}

//default props

ComponentCard.defaultProps = {
    jurusan : 'tidak diketahui'
}


export default ComponentCard;