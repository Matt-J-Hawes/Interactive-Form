/**********************************************************************************
*                                                                                 * 
*                                                                                 *
*                       TREEHOUSE TECHDEGREE - UNIT 3                             *
*                              Interactive Forms                                  *
*                                                                                 *
*                                 Matt Hawes                                      *
*                                                                                 *
/**********************************************************************************/


const nameInput = document.getElementById("name")
const emailInput = document.getElementById("mail")
const jobInfo = document.createElement("textarea")
const section = document.querySelector("section")
const jobOptions = document.querySelector("select")
const extraJobInfoTag = document.createElement("label")
const selectDesign = document.getElementById("design")
const selectColor = document.getElementById("color")
const pleaseSelectTheme = document.createElement("p")
const shirtDiv = document.getElementById("shirt-colors")






pleaseSelectTheme.innerHTML = "Please select a T-shirt Theme"
extraJobInfoTag.innerHTML = "*- Please specify below"

nameInput.focus()


jobOptions.addEventListener("change", function(e){

for(let x = 0; x < jobOptions.length; x++)
	if(e.target.value !==  "other"){
		extraJobInfoTag.style.display = "none"
		jobInfo.style.display = "none"
		}else if(e.target.value === "other"){
		section.appendChild(extraJobInfoTag)
		extraJobInfoTag.style.display = "block"
		section.appendChild(jobInfo)
		jobInfo.style.display = "block"

	}

})

selectColor.style.display = "none"
pleaseSelectTheme.style.fontStyle = "italic"
pleaseSelectTheme.style.marginTop = "0px"
shirtDiv.appendChild(pleaseSelectTheme)

selectDesign.addEventListener("change", function(e){
for(let x = 0; x < selectColor.length; x++){
	if(e.target.value === "js puns"){
			pleaseSelectTheme.style.display = "none";
			selectColor.style.display = "block";
			selectColor[3].style.display = "none"
			selectColor[4].style.display = "none"
			selectColor[5].style.display = "none"
			selectColor[0].style.display = "block"
			selectColor[1].style.display = "block"
			selectColor[2].style.display = "block"

	} else if (e.target.value === "heart js"){
			pleaseSelectTheme.style.display = "none";
			selectColor.style.display = "block";
			selectColor[0].style.display = "none"
			selectColor[1].style.display = "none"
			selectColor[2].style.display = "none"
			selectColor[3].style.display = "block"
			selectColor[4].style.display = "block"
			selectColor[5].style.display = "block"


	}   else if(e.target.value === "select-theme"){
			selectColor.style.display = "none"
			pleaseSelectTheme.style.display = "block"
			pleaseSelectTheme.style.fontStyle = "italic"
			pleaseSelectTheme.style.marginTop = "-1px"
			shirtDiv.appendChild(pleaseSelectTheme)
}}
})

const workshops = document.querySelector(".activities")
const totalCostText = document.createElement("h3")
const totalCost = 0;
totalCostText.innerHTML = `Total Cost: $${totalCost}`
workshops.appendChild(totalCostText)











