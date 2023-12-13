/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
div elemente su id "output" viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */
const els = {
  outputEl: document.getElementById("output"),
  formEl: document.getElementById("weight-form"),
  inputEl: document.getElementById("search"),
};
console.log("els ===", els);

els.formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const weightKg = +els.inputEl.value;
  const weightLb = weightKg * 2.2046;
  const weightGrams = weightKg / 0.001;
  const weightOunces = weightKg * 35.274;

  const lbEl = document.createElement("h2");
  els.outputEl.append(lbEl);
  lbEl.textContent = `Svoris svarais: ${weightLb} lb`;
  lbEl.className = "tac";

  const gEl = document.createElement("h2");
  els.outputEl.append(gEl);
  gEl.textContent = `Svoris kilogramais: ${weightGrams} g`;
  gEl.className = "tac";

  const ozEl = document.createElement("h2");
  els.outputEl.append(ozEl);
  ozEl.textContent = `Svoris uncijomis: ${weightOunces} oz`;
  ozEl.className = "tac";
});
