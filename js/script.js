var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
// This function will display the specified tab of the form ...
var tab = document.getElementsByClassName("tab");
for(var i=0;i<tab.length;i++){
    tab[i].style.display = "none";
}
tab[n].style.display = "block";
currentTab = n;
// ... and fix the Previous/Next buttons:
if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
} else {
    document.getElementById("prevBtn").style.display = "inline";
}
if (n == (tab.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "দাখিল";
}else{
    document.getElementById("nextBtn").innerHTML = "পরবর্তী";
}
// ... and run a function that displays the correct step indicator:
stepIndicator(n);
}

function nextPrev(n) {
// This function will figure out which tab to display
var tabs = document.getElementsByClassName("tab");
// Exit the function if any field in the current tab is invalid:
if (n == 1 && !validateForm()) return false;
// Hide the current tab:
tabs[currentTab].style.display = "none";
// Increase or decrease the current tab by 1:
currentTab = currentTab + n;
// if you have reached the end of the form... :
if (currentTab >= tabs.length) {
    //...the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
}
// Otherwise, display the correct tab:
showTab(currentTab);
}


// ================First tab items show hide functions================
showHidefirsTabItems();
function showHidefirsTabItems(){

    var tabs = document.getElementsByClassName("tab");
    var inputs = tabs[currentTab].getElementsByTagName("input");

    var firstTabItems= document.getElementById('first-tab-items');
    var radio1= document.getElementById('radio1');
    var radio2= document.getElementById('radio2');
    if (radio1.checked == true){
        firstTabItems.classList.add('d-block');
        firstTabItems.classList.remove('d-none');
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].setAttribute("required",'required');
        } 
    }
    if (radio2.checked == true){
        firstTabItems.classList.add('d-none');
        firstTabItems.classList.remove('d-block'); 
        // A loop that checks every input field to remove required:
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].removeAttribute("required");
        } 
    }

}

function validateForm() {
    // This function deals with validation of the form fields
    var tabs, inputs, i, valid = true;
    tabs = document.getElementsByClassName("tab");
    inputs = tabs[currentTab].getElementsByTagName("input");
    // A loop that checks every input field in the current tab:
    for (i = 0; i < inputs.length; i++) {
        // If a field is empty...
        if (inputs[i].value == "" && inputs[i].hasAttribute('required') ) {
            // add an "invalid" class to the field:
            inputs[i].classList.add('invalid');;
            // and set the current valid status to false:
            valid = false;
        }
    }
    // If the valid status is true, mark the step as finished and valid:
    if (valid) {
        document.getElementsByClassName("step")[currentTab].className += " finish";
        const onclickAtt = document.createAttribute("onclick");
        onclickAtt.value = "showTab("+currentTab+")";
        document.getElementsByClassName("step")[currentTab].setAttributeNode(onclickAtt);
    }
    return valid; // return the valid status
}

function stepIndicator(n) {
// This function removes the "active" class of all steps...
var i, x = document.getElementsByClassName("step");
for (i = 0; i < x.length; i++) {
    x[i].classList.remove("active");;
}
//... and adds the "active" class to the current step:
x[n].classList.add("active");
}

// ====================form tab forminput duplication==================

btnRemoveShowHide();

function btnRemoveShowHide(){
    var copiedItem = document.querySelectorAll('.copy-tab-form');
    if( copiedItem.length>1){
        document.getElementById('btnRemove').classList.remove('d-none');
        document.getElementById('btnRemove').classList.add('d-inline');
    }else{
        document.getElementById('btnRemove').classList.remove('d-inline');
        document.getElementById('btnRemove').classList.add('d-none');
    }
}

function duplicate(){
    const elementToClone = document.querySelector('.copy-tab-form');
    let count = 0;
    while(count < 1) {
        let clone = elementToClone.cloneNode(true);
        document.querySelector('.copy-tab-form').parentNode.appendChild(clone);
        count++;
    }
    btnRemoveShowHide();
}

function removeduplicate(){
    var copiedItem = document.querySelectorAll('.copy-tab-form');
    const parent = document.querySelector('.third-tab-form');
    if( copiedItem.length>1){
        parent.removeChild(parent.lastChild);
    } 
    btnRemoveShowHide();
}
// ============dynamic file upload into form data tab 4==========

function cloneRow() {
    file_input = document.getElementById('dynamic-file-input'),
    file_table = document.getElementById('dynamic-file-table');
    
    var row = document.querySelector(".dynamic-file-row"); // find row to copy
    var table = document.getElementById("dynamic-file-table"); // find table to append to
    var clone = row.cloneNode(true); // copy children too
    clone.class = "dynamic-file-row"; // change id or other attributes/contents
    table.appendChild(clone); // add new row to end of table
  }
  function SomeDeleteRowFunction() {
    // event.target will be the input element.
    var td = event.target.parentNode; 
    var tr = td.parentNode; // the row to be removed
    tr.parentNode.removeChild(tr);
    if( copiedItem.length>1){
        parent.removeChild(parent.lastChild);
    } 
}



// ================language switch button functions================
hideEnText()
function hideEnText(){
    var langBtn = document.getElementsByClassName('form-check-input')[0]; 
    var langEn = document.getElementsByClassName('lang-en')[0]; 
    langEn.classList.add('d-block');
    langBtn.checked == false;
  if (langBtn.checked == true){
   langEn.classList.remove('d-block');
   langEn.classList.add('d-none');
    
  } else {
    langEn.classList.remove('d-none');
    langEn.classList.add('d-block');
  }
}
