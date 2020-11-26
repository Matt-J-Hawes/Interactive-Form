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

// HIDE THE "OTHER" BOX IS JS IS ENABLED
const htmlOtherBox = document.getElementById("other-specify-box")
const htmlOtherLabel = document.getElementById("other-specify-label")
htmlOtherLabel.style.display = "none"
htmlOtherBox.style.display = "none"
selectDesign.value = 'select-theme'

paymentMessage.innerHTML = "*- You must select a payment method in order to proceed"
pleaseSelectTheme.innerHTML = "Please select a T-shirt Theme"
extraJobInfoTag.innerHTML = "*- Please specify below"
pleaseSelectTheme.style.color = 'white'


// NAME FIELD ACTIVE ON PAGE LOAD
nameInput.focus()

/************** JOB OPTION SECTION **************/

jobOptions.addEventListener("change", function(e){

//IF JOB IS SELECTED - HIDE OTHER TEXT FIELD
for(let x = 0; x < jobOptions.length; x++)
	if(e.target.value !==  "other"){
			extraJobInfoTag.style.display = "none"
			jobInfo.style.display = "none"
			}

//IF OTHER IS SELECTED - DISPLAY TEXT FIELD
	else if(e.target.value === "other"){
			section.appendChild(extraJobInfoTag)
			extraJobInfoTag.style.display = "block"
			section.appendChild(jobInfo)
			jobInfo.style.display = "block"
		};
	});

/*************** T-SHIRT SECTION ******************/

selectColor.style.display = "none"
pleaseSelectTheme.style.fontStyle = "italic"
pleaseSelectTheme.style.marginTop = "9px"
shirtDiv.appendChild(pleaseSelectTheme)

selectDesign.addEventListener("change", function(e){
for(let x = 0; x < selectColor.length; x++){

	//IF JS PUNS IS SELECTED - HIDE ALL JS HEART OPTIONS
	if(e.target.value === "js puns"){
			pleaseSelectTheme.style.display = "none";
			selectColor.style.display = "inherit";
			selectColor.style.marginTop = '9.5px'
			selectColor.value = selectColor[0].value;
			selectColor[3].style.display = "none"
			selectColor[4].style.display = "none"
			selectColor[5].style.display = "none"
			selectColor[0].style.display = "block"
			selectColor[1].style.display = "block"
			selectColor[2].style.display = "block" }

    //IF JS HEARTS IS SELECTED - HIDE ALL JS PUNS OPTIONS
	else if (e.target.value === "heart js"){
			pleaseSelectTheme.style.display = "none";
            selectColor.style.display = "inherit";
            selectColor.style.marginTop = '9.5px'
            selectColor.value = selectColor[3].value;
			selectColor[0].style.display = "none"
			selectColor[1].style.display = "none"
			selectColor[2].style.display = "none"
			selectColor[3].style.display = "block"
			selectColor[4].style.display = "block"
			selectColor[5].style.display = "block" }

    //IF NEITHER IS SELECTED - DISPLAY MESSAGE (PICK A THEME)
	else if(e.target.value === "select-theme"){
			selectColor.style.display = "none"
			pleaseSelectTheme.style.display = "block"
			pleaseSelectTheme.style.fontStyle = "italic"
			pleaseSelectTheme.style.marginTop = "2px"
			shirtDiv.appendChild(pleaseSelectTheme)
		}};
	});

/*************** ACTIVITY SECTION ******************/

const workshops = document.querySelector(".activities")
const totalCostText = document.createElement("h3")
const checkboxes = workshops.getElementsByTagName("input")
const label = workshops.getElementsByTagName("label")
let   totalCost = 0;
totalCostText.innerHTML = `Total Cost: $${totalCost}`
totalCostText.style.color = 'white'
workshops.appendChild(totalCostText)

//FUNCTION TO ADD PRICE OF SELECTED AND GREY OUT UNAVAILABLE OPTIONS
workshops.addEventListener("change", function(e){
let clicked = e.target;
let clickedType = clicked.getAttribute("data-cost")
let eventTime = clicked.getAttribute("data-day-and-time")
const price = parseInt(clickedType)

        //IF A CHECKBOX IS CLICKED - ADD PRICE
		if(clicked.checked){
			totalCost += price
			totalCostText.innerHTML = `Total Cost: $${totalCost}`};

        //IF A CHECKBOX IS UNCLICKED - MINUS PRICE
		if(!clicked.checked){
			totalCost -= price
			totalCostText.innerHTML = `Total Cost: $${totalCost}`
		};

for(let i = 0; i < checkboxes.length; i++){
let date = checkboxes[i].getAttribute("data-day-and-time")
        //IF AN EVENT CLASHES WITH ANOTHER EVENT - GREY OUT UNCHECKED EVENT
		if(clicked.checked && date === eventTime){
		if(checkboxes[i] !== clicked){
			checkboxes[i].setAttribute('disabled', true)
			label[i].style.textDecoration = "line-through"			
		}};

        //IF CHECKBOX IS UNCHECKED - UNDO THE GREY OUT THEME
	    if(!clicked.checked && date === eventTime){
			checkboxes[i].removeAttribute('disabled')
			label[i].style.textDecoration = "none"  
			checkboxes[i].style.cursor = 'inherit'     
		}; 
	};
});

/*************** PAYMENT SECTION ******************/

creditCardDiv.style.display = "block"
paypal.style.display = "none"
bitcoin.style.display = "none"
paymentSelection.value = "credit card"

paymentSelection.addEventListener("change", function(){

        //DISPLAY BITCOIN INFORMATIO  IF BITCOIN IS SELECTED
		if(paymentSelection.value === "bitcoin"){
			bitcoin.style.display = "block";
			creditCardDiv.style.display = "none"
		    paypal.style.display = "none"
		    paymentMessage.style.display = "none"}

        //DISPLAY PAYPAL INFORMATIO  IF PAYPAL IS SELECTED
		else if(paymentSelection.value === "paypal"){
			bitcoin.style.display = "none";
			creditCardDiv.style.display = "none"
	        paypal.style.display = "block";
	        paymentMessage.style.display = "none"}

         //DISPLAY CREDIT-CARD INFORMATIO  IF CREDIT-CARD IS SELECTED
		 else if(paymentSelection.value === "credit card"){
			bitcoin.style.display = "none";
			creditCardDiv.style.display = "block"
	        paypal.style.display = "none";
	        paymentMessage.style.display = "none"}

         //DISPLAY WARNING MESSAGE IF NOTHING IS SELECTED
		 else if(paymentSelection.value === "select method"){
		 	paymentSelection.value = "credit card"
			bitcoin.style.display = "none";
			creditCardDiv.style.display = "block"
	        paypal.style.display = "none"
	       
		};
	});

/*************** SUBMIT FORM SECTION **************/

const form = document.querySelector("form")
const button = document.getElementById("submit-button")
const nameRegex = /[a-z A-Z]+/
const emailRegex = /(.+)@(.+){2,}\.(.+){2,}/
const creditCardRegex = /^[0-9]{13,16}$/
const zipcodeRegex = /^[0-9]{5}$/
const cvvRegex = /^[0-9]{3}$/
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

//ALERT STYLES
emailAlert.style.marginTop = "-4px"
alertName.style.marginTop =  "-4px"

// DO NOT ALLOW FORM SUBMITION IF ANY OF THE FOLLOWING ARE TRUE 
form.addEventListener("submit", function(e){
    let name = nameRegex.exec(nameInput.value)
    let email = emailRegex.exec(emailInput.value)
    let creditCardConfirm = creditCardRegex.exec(creditCardInput.value)
    let zip = zipcodeRegex.exec(zipInput.value)
    let cvvConfirm = cvvRegex.exec(cvvNumber.value)
     
         // IF NAME IS INCORRECTLY FILLED OUT - DISPLAY WARNING MESSAGE
		 if(!name){
	         e.preventDefault()
	         nameAlertDiv.appendChild(alertName)
	         alertName.innerHTML = `
	         The name field must not be left blank! (John Doe)`;
             alertName.style.color = "#FF6347"
             nameInput.style.border = "3px solid #FF6347"
	         nameInput.focus() }
		 else if (name){
		 	 nameAlertDiv.appendChild(alertName)
		 	 alertName.innerHTML = "Verified"
		 	 alertName.style.color = "#5CDB95"
		 	 nameInput.style.border = "3px solid #5CDB95"
		 	 
		 };
		
		// IF EMAIL IS INCORRECTLY FILLED OUT - DISPLAY WARNING MESSAGE
		if(!email){
			e.preventDefault()
		    emailAlertDiv.appendChild(emailAlert)
		    emailAlert.innerHTML = `Please enter a <strong>VALID</strong> email address (mail@example.com)`
		    emailAlert.style.color = "#FF6347"
		    emailInput.style.border = "3px solid #FF6347"
		    emailInput.focus() }
	    else if (email){
	     	 emailAlertDiv.appendChild(emailAlert)
	     	 emailAlert.innerHTML = "Verified"
	     	 emailAlert.style.color = "#5CDB95"
	     	 emailInput.style.border = "3px solid #5CDB95"
	     	 
	     };

         // IF JOB-OPTIONS "OTHER" SECTION IS NOT FILLED IN - DISPLAY WARNING MESSAGE
	     if(jobOptions.value === "other" && jobInfo.value === ''){
	     	e.preventDefault()
	     	extraJobInfoTag.innerHTML = "You must specify below"
	     	extraJobInfoTag.style.color = "#FF6347"
	     	extraJobInfoTag.focus()

	     };

         // IF AT LEAST ONE ACTIVITY HAS NOT BEEN SELECTED - DISPLAY WARNING MESSAGE
	     if(totalCost === 0){
	     	e.preventDefault()
	     	workshops.appendChild(workshopAlert)
	     	workshopAlert.innerHTML = `You must select at least <strong>ONE</strong> activity!` 
	        workshopAlert.style.color = "#FF6347"}	     	
	     else if(totalCost !== 0){
	     	workshops.appendChild(workshopAlert)
	     	workshopAlert.innerHTML = "Thank you for selecting an acitivity!"
	     	workshopAlert.style.color = "#5CDB95"

	     };

	     //RUN THE FOLLOWING CODE ONLY IF CREDIT CARD IS SELECTED 
         if(paymentSelection.value === "credit card"){
         	
         // IF CREDIT-CARD IS INCORRECTLY FILLED OUT - DISPLAY WARNING MESSAGE
         if(!creditCardConfirm){
         	e.preventDefault()
         	creditCardInput.style.border = "3px solid #FF6347"
            creditCardPayment.appendChild(creditAlert)
            creditAlert.innerHTML = `Please enter a valid card number (16 digits required)`
            creditAlert.style.color = "#FF6347"}
         else if(creditCardConfirm){
         	creditCardPayment.appendChild(creditAlert)
         	creditCardInput.style.border = "3px solid #5CDB95"
         	creditAlert.innerHTML = "Verified"
         	creditAlert.style.color = "#5CDB95"
         };

         // IF ZIPCODE IS INCORRECTLY FILLED OUT - DISPLAY WARNING MESSAGE
         if(!zip){
         	e.preventDefault()
         	zipInput.style.border = "3px solid #FF6347"
         	zipCodeAddress.appendChild(zipAlert)
            zipAlert.innerHTML = `Please enter a valid Zip Code (5 digits requred)`
            zipAlert.style.color = "#FF6347"}

         else if(zip){
         	zipCodeAddress.appendChild(zipAlert)
         	zipInput.style.border = "3px solid #5CDB95"
         	zipAlert.innerHTML = "Verified"
         	zipAlert.style.color = "#5CDB95"
         };

         // IF CVV IS INCORRECTLY FILLED OUT - DISPLAY WARNING MESSAGE
         if(!cvvConfirm){
         	e.preventDefault()
         	cvvNumber.style.border = "3px solid #FF6347"
         	cvvDiv.appendChild(cvvAlert)
         	cvvAlert.innerHTML = `Please enter a valid CVV (3 digits required)`
         	cvvAlert.style.color = "#FF6347"
         }
         
         else if(cvvConfirm){
         	cvvNumber.style.border = "3px solid #5CDB95"
         	cvvDiv.appendChild(cvvAlert)
         	cvvAlert.innerHTML = "Verified"
         	cvvAlert.style.color = "#5CDB95"
         }};      
	});

