let finalResult = 0;
const currency = "PLN";

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
      const currencies = data[0];

      const index = currencies.rates.findIndex(
        (rates) => rates.code === select.value
      );
      finalResult = currencies.rates[index].ask * input.value;

      result.innerHTML = `${finalResult.toFixed(2)}  ${currency}`;
    })
    .catch((err) => console.log(err))
    .finally(() => {
      spinner.setAttribute("hidden", "");
    });
}
