import { useState } from "react";
import React from "react";


export default function Galaxy(props){
return(
    <div>
          <div className="card">
            <p>({props.id}){props.name}</p>
            <p>Diameter : {props.diameter}</p>
          </div>
      </div>
      )
}

