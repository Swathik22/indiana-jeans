import { ownJeansChoices } from "./ownsJeans.js"
import { saveSubmission } from "./saveSubmissions.js";
import { SubmissionList } from "./submissions.js";
import { locationTypeChoice } from "./urbanDweller.js";

const container= document.querySelector("#container")

const render=async ()=>{
    const jeansOwnerShipHTML=ownJeansChoices();
    const locationsHTML=await locationTypeChoice();
    const buttonHTML=saveSubmission();
    const submissionHTML=await SubmissionList();

    container.innerHTML=`
        ${jeansOwnerShipHTML}
        ${locationsHTML}
        ${buttonHTML}
        ${submissionHTML}`
}
document.addEventListener("newSubmissionCreated",render)
render();