"strict";

let round = 0;
function init() {
  createCurrencyRows();
  let interval = setInterval(changeRates, 5000);
  setTimeout(() => {
    clearInterval(interval);
  }, 5 * 60 * 1000);
}

function createCurrencyRows() {
  //dynamically add currency html rows to div container
  let html = "";
  Object.keys(currencies.rates).forEach((rate, index) => {
    html += `<div class="currency-row">
    <div>
    <span class="currency-title">EUR${rate} - </span>
    <span class="currency-value" id="EUR${rate}"></span>
    </div>
    <div class="currency-subtitle">EUR / ${rate}</div>
    </div> 
    `;
  });
  const container = document.querySelector("#container");
  container.innerHTML = html;
}
let counter = setInterval(function () {
  round++;
}, 1000);
function changeRates() {
  if (Math.floor(round / 60) % 2 === 0) {
    incRates();
  } else decRates();
}

function incRates() {
  Object.keys(currencies.rates).forEach((rate) => {
    currencies.rates[rate] += 0.0001;
  });
  renderRates("inc");
}

function decRates() {
  Object.keys(currencies.rates).forEach((rate) => {
    currencies.rates[rate] -= 0.0001;
  });
  renderRates("dec");
}

function renderRates(type = "inc") {
  Object.keys(currencies.rates).forEach((rate) => {
    let rateSpan = document.querySelector(`span#EUR${rate}`);
    if (rateSpan) {
      let value =
        currencies.rates[rate] < 1.0001 ? 1.0001 : currencies.rates[rate];
      rateSpan.textContent = value.toFixed(4);
      if (type === "inc") {
        rateSpan.classList.add("inc-rates");
        rateSpan.classList.remove("dec-rates");
      } else {
        rateSpan.classList.remove("inc-rates");
        rateSpan.classList.add("dec-rates");
      }
    }
  });
}
window.onload = init;
