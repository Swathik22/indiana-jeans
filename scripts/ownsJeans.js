import { setOwnBlueJeans } from "./TransientState.js"
/* 
Responsibility: Provide UI controls for survey taker to choose
 "yes" or "no" for ownership of blue jeans.
 
Strategy:
    1. A component function that produces HTML for two radio 
    buttons for yes or no */

/*
    Since the value of the radio buttons is the string of
    'true' and the string of 'false', you must convert the
    string to an actual boolean with JSON.parse() as seen below
*/
    const handleOwnershipChange = (changeEvent) => {
    if (changeEvent.target.name === "ownJeans") {
        const convertedToBoolean = JSON.parse(changeEvent.target.value)
        setOwnBlueJeans(convertedToBoolean)
    }
}

export const ownJeansChoices=()=>{
    document.addEventListener("change", handleOwnershipChange)
    //creating radioButtons, grouping radioButtons by using
    let html=`<h2>Do you own a pair of blue Jeans?</h2>`
        html+=`<input type="radio" name="ownJeans" value="true">Yes`
        html+=`<input type="radio" name="ownJeans" value="false">No`
    return html;
}

// document.addEventListener("change", handleOwnershipChange)

 