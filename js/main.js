let finalResult = 0;
currency = "PLN";

const input = document.querySelector("input");
const select = document.getElementById("select");
const button = document.querySelector(".btn");
const result = document.querySelector(".result");
const spinner = document.getElementById("spinner");

button.addEventListener("click", loadData);

function loadData() {
  spinner.removeAttribute("hidden");
  fetch("https://api.nbp.pl/api/exchangerates/tables/c/")
    .then((data) => data.json())
    .then((data) => {
      currencies = data[0];
      console.log(currencies);

      if (select.value === "EUR") {
        finalResult = currencies.rates[3].ask * input.value;
      } else if (select.value === "USD") {
        finalResult = currencies.rates[0].ask * input.value;
      } else {
        finalResult = currencies.rates[5].ask * input.value;
      }
      spinner.setAttribute("hidden", "");
      result.innerHTML = `${finalResult.toFixed(2)}  ${currency}`;
    })
    .catch((err) => console.log(err));
}
