import React,{useState,useEffect} from "react"


//functional component use hooks useState and useEffect

function Counter(props){
    const [count,setCount] = useState(0);

    //with arrow function or callback in method
    const jumlah = () => {
        setCount( () => count+1 )
    }

    //just write variable in parameter method
    const kurang = () => {        
        let angka = count - 1;        
        if(angka <0){
            setCount(0)
        }else{
            setCount(angka)
        }
    }   


    return(
        <div>
          <h1>{count}</h1>  
          <button className="btn btn-primary mr-4" onClick={kurang}>-</button>
          <button className="btn btn-primary ml-4" onClick={jumlah}>+</button>
        </div>
    )
}

export default Counter;
