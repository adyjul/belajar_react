import React from "react";
import ComponentCard from "../Component/Card/ComponentCard";
import Parent from "../Component/ParentAndChild/Parent";


class Home extends React.Component{
    render() {
        return (     
            <>            
            <div className="row">
                <h3>Card Component</h3>
                <hr></hr>
                <ComponentCard name="adyjul" jurusan="informatika" />                            
                <ComponentCard name="agung" jurusan="sipil"/>                            
                <ComponentCard name="sandi" jurusan="industri"/>                            
                <ComponentCard name="rahmat" />                            
            </div>       
            <div className="row">
                <h3>Update child and parent component</h3>
                <hr></hr>
                <Parent/>
            </div>
            </>
        );
    }
}

export default Home;