const switchToggle = document.getElementById("modeSwitch");
const body = document.body;
window.addEventListener("change", () => {
    const savedTheme = localStorage.getItem("theme");
     if (modeSwitch.checked) {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
  }
});
const currencyfirstEl=document.getElementById("Currency-first");
const worthfirstEl=document.getElementById("worth-first")
const currencysecEl=document.getElementById("Currency-sec");
const worthsectEl=document.getElementById("worth-sec")
const exchangeRateEl=document.getElementById("exchange-rate")
updateRate()
function updateRate(){
fetch(`https://v6.exchangerate-api.com/v6/e5612ab5607da789e53c6889/latest/${currencyfirstEl.value}`).then((res)=>res.json()).then((data)=>{const rate=data.conversion_rates[currencysecEl.value];console.log(rate);exchangeRateEl.innerText=`1 ${currencyfirstEl.value}=${rate+" "+currencysecEl.value}`;worthsectEl.value=(worthfirstEl.value*rate).toFixed(3)});

}
currencyfirstEl.addEventListener("change", updateRate)
currencysecEl.addEventListener("change", updateRate)
worthfirstEl.addEventListener("input", updateRate)
switchToggle.addEventListener("change", () => {
    if (switchToggle.checked) {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
    } else {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
        localStorage.setItem("theme", "light");
    }
});




