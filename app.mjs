//====== telecom prefixes ======
const mtn = [
  "0803",
  "0806",
  "0703",
  "0706",
  "0813",
  "0816",
  "0810",
  "0814",
  "0903",
];
const airtel = ["0802", "0808", "0708", "0812", "0701", "0902"];
const glo = ["0805", "0807", "0705", "0815", "0811", "0905"];
const etisalat = ["0809", "0818", "0817", "0909"];

//======== telecom logos ========
let mtnLogo = document.getElementsByClassName("mtn");
let airtellogo = document.getElementsByClassName("airtel");
let glologo = document.getElementsByClassName("glo");
let ninemobile = document.getElementsByClassName("mobile");

//====== input ======

// let getNumType = (number) => {
//   if (number.match(mtn.map())) {
//     let showLogo = (mtnLogo.style.display = "contents");
//     return showLogo;
//   }
// };

function startApp() {
  function setInputText(number) {
    let typeField = document.getElementById("output");
    typeField.innerHTML = getMobileType(number);
  }

  function getMobileType(number) {
    for (let i = 0; i < mtn.length; i++) {
      let mtnArray = mtn[i];
    }
    console.log(mtnArray);
  }
  getMobileType();
}
// ======= DO NOT EDIT ============== //
export default startApp;
// ======= EEND DO NOT EDIT ========= //
