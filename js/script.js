var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
// This function will display the specified tab of the form ...
var x = document.getElementsByClassName("tab");
x[n].style.display = "block";
// ... and fix the Previous/Next buttons:
if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
} else {
    document.getElementById("prevBtn").style.display = "inline";
}
if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "দাখিল";
}else{
    document.getElementById("nextBtn").innerHTML = "পরবর্তী";
}
// ... and run a function that displays the correct step indicator:
stepIndicator(n);

}

function nextPrev(n) {
// This function will figure out which tab to display
var x = document.getElementsByClassName("tab");
// Exit the function if any field in the current tab is invalid:
if (n == 1){
    document.getElementsByClassName("step")[currentTab].classList.add("finish");
}
else{
    document.getElementsByClassName("step")[currentTab].classList.remove("finish");
}
// Hide the current tab:
x[currentTab].style.display = "none";
// Increase or decrease the current tab by 1:
currentTab = currentTab + n;
// if you have reached the end of the form... :
if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
}
// Otherwise, display the correct tab:
showTab(currentTab);
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
// ============================own carousel======================
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    stagePadding: 2,
    nav:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})