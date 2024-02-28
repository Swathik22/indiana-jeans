import { setSocioLocationId } from "./TransientState.js"
export const locationTypeChoice=async ()=>{
    const response=await fetch("http://localhost:8088/socioLocations")
    const locations=await response.json()
    
    let choicesHTML="<h2>Which type of area do you live in?</h2>"

    const locationStringArray=locations.map((location)=>{
        return `<input type="radio" name="location" value="${location.id}">${location.label}`
    })   
    choicesHTML+=locationStringArray.join("")

    document.addEventListener("change",(handleLocationChange))

    return choicesHTML
}

const handleLocationChange=(changeEvent)=>{
    if(changeEvent.target.name==="location")
    {
        const convertedToInteger=parseInt(changeEvent.target.value)
        setSocioLocationId(convertedToInteger)
    }
}

