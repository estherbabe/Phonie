//====== telecom prefixes ======
const networkThings = {
  mtn: ["0803", "0806", "0703", "0706", "0813", "0816", "0810", "0814", "0903"],
  airtel: ["0802", "0808", "0708", "0812", "0701", "0902"],
  glo: ["0805", "0807", "0705", "0815", "0811", "0905"],
  etisalat: ["0809", "0818", "0817", "0909"],
};

// console.log("Can you see me?", networkThings["mtn"]);

//======== telecom logos ========
let mtnLogo = document.getElementsByClassName("mtn");
let airtelLogo = document.getElementsByClassName("airtel");
let gloLogo = document.getElementsByClassName("glo");
let etisalatLogo = document.getElementsByClassName("etisalat");

function startApp() {
  const userInput = document.querySelector("#output");
  userInput.addEventListener("input", getUserInput);
  function getUserInput() {
    const userInputValue = userInput.value;
    compareUserInput(userInputValue);
  }

  function compareUserInput(phoneNum) {
    console.log(phoneNum);
    let nameOfNetworks = [];

    for (let networks in networkThings) {
      nameOfNetworks.push(networks);
    }

    for (const item of nameOfNetworks) {
      let array = networkThings[item];

      for (let i = 0; i < array.length; i++) {
        let first4 = phoneNum.slice(0, 4);
        if (first4 == array[i]) {
          console.log(item);
        }
      }
    }
  }

  function showLogo(network) {
    switch (network) {
      case "mtn":
        mtnLogo.classList.remove("noloveLogo");
        break;

      default:
        break;
    }
  }
}
// ======= DO NOT EDIT ============== //
export default startApp;
// ======= EEND DO NOT EDIT ========= //

/*
- We want to get the number from the input field
- We want to compare that number against the number in our array
- If we find a match, we want to show the corresponding logo
*/
