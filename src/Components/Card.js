import React from "react";

const Card=(props)=>{
    return(
        <>
        <div id="card">
            <div className="container" id="card-content">
                 <form className="container p-3" id="form">
                     <div id="form-content">
                     <label>Your Name...</label>
                     <input type="text" placeholder={props.name}></input>
                     <label>Your Age...</label>
                     <input type="text" placeholder={props.age}></input>
                     <label>Your Gender...</label>
                     <input type="text" placeholder={props.gender}></input>
                     <label>Your Email...</label>
                     <input type="text" placeholder={props.email}></input>
                     <label>Your Phone...</label>
                     <input type="text" placeholder={props.phone}></input>
                     </div>
                     
                 </form>
            </div>
        </div>
        </>
    )
}

export default Card