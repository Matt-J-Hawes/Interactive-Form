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
const checkboxes = workshops.getElementsByTagName("input")
const label = workshops.getElementsByTagName("label")
let   totalCost = 0;

totalCostText.innerHTML = `Total Cost: $${totalCost}`
workshops.appendChild(totalCostText)

workshops.addEventListener("change", function(e){
let clicked = e.target;
let clickedType = clicked.getAttribute("data-cost")
let eventTime = clicked.getAttribute("data-day-and-time")
const price = parseInt(clickedType)

		if(clicked.checked){
			totalCost += price
			totalCostText.innerHTML = `Total Cost: $${totalCost}`}

		if(!clicked.checked){
			totalCost -= price
			totalCostText.innerHTML = `Total Cost: $${totalCost}`
		}

for(let i = 0; i < checkboxes.length; i++){
for(let j = 0; j < label.length; i++){
let date = checkboxes[i].getAttribute("data-day-and-time")
		if(clicked.checked && date === eventTime){
		if(checkboxes[i] !== clicked){
			checkboxes[i].setAttribute('disabled', true)
			label[i].style.color = "grey"
			label[i].style.textDecoration = "line-through"
		}}

	    if(!clicked.checked){
			checkboxes[i].removeAttribute('disabled')
			label[i].style.color = "inherit"
			label[i].style.textDecoration = "none"

		}
	}}
})


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


/*************** SUBMIT FORM SECTION **************/

const button = document.getElementById("submit-button")
const nameRegex = /^[a-z_ ]{3}/gi
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const creditCardRegex = /^[0-9]{16}/
const zipcodeRegex = /^[0-9]{5}/
const cvvRegex = /^[0-9]{3}/
const nameAlertDiv = document.getElementById("nameAlert")
const emailAlertDiv = document.getElementById("emailAlert")
const alertName = document.createElement("p")
const emailAlert = document.createElement("p")
const creditAlert = document.createElement("p")
const zipAlert = document.createElement("p")
const cvvAlert = document.createElement("p")
const workshopAlert = document.createElement("p")
const creditCardPayment = document.querySelector(".col-6")
const zipCodeAddress = document.querySelector(".col-3")
const cvvDiv = document.getElementById("cvvDiv")
const creditCardInput = document.getElementById("cc-num")
const zipInput = document.getElementById("zip")
const cvvNumber = document.getElementById("cvv")



alertName.innerHTML = `Your name must: have at <strong>least 3 characters
                       </strong> and must<strong> NOT</strong> contain any 
                       numbers or symbols!`

emailAlert.innerHTML = `Please enter a <strong>VALID</strong> email address`
workshopAlert.innerHTML = `You must select at least <strong>ONE</strong> activity!`
creditAlert.innerHTML = `Please enter a valid card number (16 digits required)`
zipAlert.innerHTML = `Please enter a valid Zip Code (5 digits requred)`
cvvAlert.innerHTML = `Please enter a valid CVV (3 digits required)`

alertName.style.marginTop = "-4px"
alertName.style.color = "red"
emailAlert.style.marginTop = "-4px"
emailAlert.style.color = "red"
workshopAlert.style.color = "red"
creditAlert.style.color = "red"
zipAlert.style.color = "red"
cvvAlert.style.color = "red"

button.addEventListener("click", function(e){
    let name = nameRegex.exec(nameInput.value)
    let email = emailRegex.exec(emailInput.value)
    let creditCardConfirm = creditCardRegex.exec(creditCardInput.value)
    let zip = zipcodeRegex.exec(zipInput.value)
    let cvvConfirm = cvvRegex.exec(cvvNumber.value)
    
		 if(!name){
	         e.preventDefault()
	         nameAlertDiv.appendChild(alertName)
	         nameInput.focus() }
		 else if (name){
		 	 alertName.style.display = "none"
		 	 nameInput.blur()
		 }
		
		if(!email){
			e.preventDefault()
		    emailAlertDiv.appendChild(emailAlert)
		    emailInput.focus() }
	    else if (email){
	     	 emailAlert.style.display = "none"
	     	 emailInput.blur()
	     }

	     if(jobOptions.value === "other" && jobInfo.value === ''){
	     	e.preventDefault()
	     	extraJobInfoTag.innerHTML = "You must specify below"
	     	extraJobInfoTag.style.color = "red"
	     	extraJobInfoTag.focus()

	     }

	     if(totalCost === 0){
	     	e.preventDefault()
	     	workshops.appendChild(workshopAlert) }	     	
	     else if(totalCost !== 0){
	     	workshopAlert.style.display = "none"
	     }
	    
	     if(paymentSelection.value === "select method"){
	     	paymentMessage.style.color = "red"}	     
	     else if(paymentSelection.vaue !== "select method"){
	     	paymentMessage.style.display = "none"
	     }
        
         if(!creditCardConfirm){
         	e.preventDefault()
         	creditCardInput.style.border = "3px solid red"
            creditCardPayment.appendChild(creditAlert)}
         else if(creditCardConfirm){
         	creditCardInput.style.border = "none"
         	creditAlert.style.display = "none"
         }
         if(!zip){
         	e.preventDefault()
         	zipInput.style.border = "3px solid red"
         	zipCodeAddress.appendChild(zipAlert)}

         else if(zip){
         	zipInput.style.border = "none"
         	zipAlert.style.display = "none"
         }

         if(!cvvConfirm){
         	e.preventDefault()
         	cvvNumber.style.border = "3px solid red"
         	cvvDiv.appendChild(cvvAlert)
         }
         
         else if(cvvConfirm){
         	cvvNumber.style.border = "none"
         	cvvAlert.style.display = "none"
         }

         
	})





