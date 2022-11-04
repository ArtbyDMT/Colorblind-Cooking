import React from "react";

const Meat = (props) => {
    const {type, title, instructions, seconds, updateTimer} = props;
    const cookingClasses = `food ${type}`
    return (
      <div className="food-container" onClick={() => updateTimer(seconds, type)}>
        <img className={cookingClasses} src={props.image}/>
        <h3>{title}</h3>
        <p>{instructions}</p>
      </div>
    )
  }
  export default Meat;