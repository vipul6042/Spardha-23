import React from "react";
import Deletefixtures from "./deleteFixtures";
import Updatefixtures from "./updateFixtures";

function Dnufixtures(){
    return(
        <div className="fixbody">
            <Updatefixtures/>
            <div className="vr"></div>
            <Deletefixtures/>
        </div>
    );
  
}

export default Dnufixtures;