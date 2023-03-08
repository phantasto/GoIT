function myFunction() {
  const element = document.getElementById("id01");
  element.innerHTML = "New Heading";
}

function myColorChange() {
  const element = document.getElementById("id01");
  element.style.color = "red";
}

let przesylka = {};
let przesylka2 = {};

const przesylkaJSON = '{"name":"List","ulica":""}'
const przesylka2JSON = '{"name":"Paczka","ulica":"","waga":20}'

try {
  przesylka = JSON.parse(przesylkaJSON);
  przesylka2 = JSON.parse(przesylka2JSON);
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}

function mojaFunkcja(id) {

  const element = document.getElementById("id01");
  const element2 = document.getElementById("id02");

  if (id === 1) { //instrukcje dla przycisku z informacja o przesylce 1

    informacja = "Typ twojej przesylki to: " + przesylka.name;
    element.innerHTML = informacja;
    
    informacja = "Przesyłka nie posiada wagi";
    element2.innerHTML = informacja;
  }

  else if (id === 2) { //instrukcje dla przycisku z informacja o przesylce 2

    informacja = "Typ twojej przesylki to: " + przesylka2.name;
    element.innerHTML = informacja;
  
    informacja = "Waga twojej przesylki to: " + przesylka2.waga + " kg";
    element2.innerHTML = informacja;
  }
}

