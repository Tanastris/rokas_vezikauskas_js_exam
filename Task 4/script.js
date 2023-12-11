/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const els = {
  outputEl: document.getElementById("output"),
};

const ENDPOINT = "./cars.json";

(function () {
  fetch(ENDPOINT)
    .then((resp) => resp.json())
    .then((rez) => {
      displayManufacturerCards(rez);
    });
})();

function displayManufacturerCards(data) {
  data.forEach((obj) => {
    const oneCard = document.createElement("div");
    oneCard.className = "class-card";
    const modelsEl = obj.models;
    const h2El = document.createElement("h2");
    h2El.textContent = obj.brand;
    const ulEl = document.createElement("ul");
    oneCard.append(h2El, ulEl);
    els.outputEl.append(oneCard);
    modelsEl.forEach((carModel) => {
      const liEl = document.createElement("li");
      liEl.textContent = carModel;
      ulEl.append(liEl);
    });
  });
}
