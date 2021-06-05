// reference to the HTML elements
const slct1 = document.getElementById("select1");
const slct2 = document.getElementById("select2");
const slct3 = document.getElementById("select3");

const pValues = document.getElementById("values");

// sets initial values
let picks = {
  select1: "",
  select2: "",
  select3: "",
};

// intercept the changes to the Picks object
// only if all object keys have values, getPlants is called
const setValues = new Proxy(picks, {
  set: (target, key, value) => {
    if (target[key] === value) return true;
    target[key] = value;
    if (!Object.values(target).includes("")) dispatchAction();
    return true;
  },
});

// get the changes to the Select values
slct1.onchange = function (e) {
  setValues.select1 = e.target.value;
};
slct2.onchange = function (e) {
  setValues.select2 = e.target.value;
};
slct3.onchange = function (e) {
  setValues.select3 = e.target.value;
};

// dispatch actions
const dispatchAction = () => {
  pValues.innerHTML = JSON.stringify(picks);
};
