const clp = document.getElementById("clp");
const currency = document.querySelector("#currency");
const result = document.querySelector("#result");
const apiURL = "https://mindicador.cl/api/";

async function getCurrencies() {
  try {
    const res = await fetch(apiURL);
    const currencies = await res.json();
    let currenciesList = [];
    currenciesList.push(currencies.bitcoin);
    currenciesList.push(currencies.dolar);
    return currenciesList;
  } catch (e) {
    alert(e.message);
  }
}

renderCurrencies();

async function renderCurrencies() {
  try {
    const monedas = await getCurrencies();
    let html = "";
    monedas.forEach(async (element) => {
      console.log(element);
      html += `<option id="${element.codigo}" value="${element.valor}">${element.nombre}</option>`;
    });
    currency.innerHTML = html;
  } catch (e) {
    alert(e.message);
  }
}

function convert() {
  let currValue = clp.value;
  let rateValue = document.getElementById("currency").value;
  let resultConvert = parseFloat(currValue / rateValue).toFixed(2);
  result.innerHTML = `$${resultConvert}`;
  console.log(rateValue);
  console.log(clp.value);
  /*
  let today = new Date();
  let counterDate = 10;
  let trackDate = today;
  while(counterDate>0){
    let today2 = trackDate.getDay() + '-'+trackDate.getMonth() +"-"+trackDate.getFullYear();
    trackDate.setDate(trackDate.getDate()-1)
    counterDate --;
    console.log(trackDate);
  }
  */
}

/*async function getCurrencyByDate(date){
    let endPoint = `${apiURL}/fecha/${date}`;
    const res = await fetch(apiURL);
    const currencies = await res.json();
}*/