/**********************************************************************************
*                                                                                 * 
*                                                                                 *
*                       TREEHOUSE TECHDEGREE - UNIT 3                             *
*                              Interactive Forms                                  *
*                                                                                 *
*                                 Matt Hawes                                      *
*                                                                                 *
/**********************************************************************************/



/******************* VARIABLES **********************/

const nameInput = document.getElementById("name")
const emailInput = document.getElementById("mail")
const jobInfo = document.createElement("input")
const section = document.querySelector("section")
const jobOptions = document.querySelector("select")
const extraJobInfoTag = document.createElement("label")
const selectDesign = document.getElementById("design")
const selectColor = document.getElementById("color")
const pleaseSelectTheme = document.createElement("p")
const shirtDiv = document.getElementById("shirt-colors")
const paymentSelection = document.getElementById("payment")
const creditCardDiv = document.getElementById("credit-card")
const paypal = document.getElementById("paypal")
const bitcoin = document.getElementById("bitcoin")
const paymentMessage = document.createElement("h4")
const paymentMessageDiv = document.getElementById("payment-message")


paymentMessage.innerHTML = "*- You must select a payment method in order to proceed"
pleaseSelectTheme.innerHTML = "Please select a T-shirt Theme"
extraJobInfoTag.innerHTML = "*- Please specify below"


// NAME FIELD ACTIVE ON PAGE LOAD //
nameInput.focus()


/************** JOB OPTION SECTION **************/


jobOptions.addEventListener("change", function(e){

for(let x = 0; x < jobOptions.length; x++)
	if(e.target.value !==  "other"){
			extraJobInfoTag.style.display = "none"
			jobInfo.style.display = "none"
			}

	else if(e.target.value === "other"){
			section.appendChild(extraJobInfoTag)
			extraJobInfoTag.style.display = "block"
			section.appendChild(jobInfo)
			jobInfo.style.display = "block"

		}

	})


/*************** T-SHIRT SECTION ******************/

selectColor.style.display = "none"
pleaseSelectTheme.style.fontStyle = "italic"
pleaseSelectTheme.style.marginTop = "2px"
shirtDiv.appendChild(pleaseSelectTheme)


selectDesign.addEventListener("change", function(e){
for(let x = 0; x < selectColor.length; x++){
	if(e.target.value === "js puns"){
			pleaseSelectTheme.style.display = "none";
			selectColor.style.display = "block";
			selectColor.value = selectColor[0].value;
			selectColor[3].style.display = "none"
			selectColor[4].style.display = "none"
			selectColor[5].style.display = "none"
			selectColor[0].style.display = "block"
			selectColor[1].style.display = "block"
			selectColor[2].style.display = "block"

	} else if (e.target.value === "heart js"){
			pleaseSelectTheme.style.display = "none";
            selectColor.style.display = "block";
            selectColor.value = selectColor[3].value;
			selectColor[0].style.display = "none"
			selectColor[1].style.display = "none"
			selectColor[2].style.display = "none"
			selectColor[3].style.display = "block"
			selectColor[4].style.display = "block"
			selectColor[5].style.display = "block";


	}   else if(e.target.value === "select-theme"){
			selectColor.style.display = "none"
			pleaseSelectTheme.style.display = "block"
			pleaseSelectTheme.style.fontStyle = "italic"
			pleaseSelectTheme.style.marginTop = "2px"
			shirtDiv.appendChild(pleaseSelectTheme)
		}}
	})


/*************** ACTIVITY SECTION ******************/

const workshops = document.querySelector(".activities")
const totalCostText = document.createElement("h3")
const totalCost = 0;
totalCostText.innerHTML = `Total Cost: $${totalCost}`
workshops.appendChild(totalCostText)



/*************** PAYMENT SECTION ******************/

creditCardDiv.style.display = "none"
paypal.style.display = "none"
bitcoin.style.display = "none"
paymentMessageDiv.appendChild(paymentMessage)

paymentSelection.addEventListener("change", function(){

		if(paymentSelection.value === "bitcoin"){
			bitcoin.style.display = "block";
			creditCardDiv.style.display = "none"
		    paypal.style.display = "none"
		    paymentMessage.style.display = "none"}

		else if(paymentSelection.value === "paypal"){
			bitcoin.style.display = "none";
			creditCardDiv.style.display = "none"
	        paypal.style.display = "block";
	        paymentMessage.style.display = "none"}

		 else if(paymentSelection.value === "credit card"){
			bitcoin.style.display = "none";
			creditCardDiv.style.display = "block"
	        paypal.style.display = "none";
	        paymentMessage.style.display = "none"}
	        
		 else if(paymentSelection.value === "select method"){
			bitcoin.style.display = "none";
			creditCardDiv.style.display = "none"
	        paypal.style.display = "none"
	        paymentMessage.style.display = "block"
		}
	})








