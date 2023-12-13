/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
const els = {
  btnClick: document.getElementById("btn__element"),
  counterEl: document.getElementById("btn__state"),
};
console.log("els ===", els);
let clickCount = 0;
els.btnClick.addEventListener("click", () => {
  clickCount += 1;
  els.counterEl.textContent = clickCount;
});
