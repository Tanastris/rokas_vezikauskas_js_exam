/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama div elemente su id "output".
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */
const els = {
  // placeholderText: document.getElementById("message"),
  outputEl: document.getElementById("output"),
  mainBtn: document.getElementById("btn"),
};
// console.log("els ===", els);
els.mainBtn.addEventListener("click", () => createHtmlCard(ENDPOINT));

const ENDPOINT = "https://api.github.com/users";

function getUsers(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((rez) => rez)
    .catch((error) => {
      console.warn("ivyko klaida:", error);
    });
}

async function createHtmlCard(link) {
  els.outputEl.innerHTML = "";
  const dataArr = await getUsers(link);

  dataArr.forEach((userObj) => {
    const divEl = document.createElement("div");
    divEl.className = "single-card";
    const imgEl = document.createElement("img");
    imgEl.setAttribute("src", userObj.avatar_url);
    imgEl.setAttribute("alt", userObj.login);
    const h2El = document.createElement("h2");
    h2El.textContent = userObj.login;
    divEl.append(imgEl, h2El);
    els.outputEl.append(divEl);
  });
}
