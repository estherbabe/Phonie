//====== telecom prefixes ======

const networkThings = {
  mtn: ["0803", "0806", "0703", "0706", "0813", "0816", "0810", "0814", "0903"],
  airtel: ["0802", "0808", "0708", "0812", "0701", "0902"],
  glo: ["0805", "0807", "0705", "0815", "0811", "0905"],
  etisalat: ["0809", "0818", "0817", "0909"],
};

//======== telecom logos ========

let mtnLogo = document.querySelector(".mtn");
let airtelLogo = document.querySelector(".airtel");
let gloLogo = document.querySelector(".glo");
let etisalatLogo = document.querySelector(".etisalat");

function startApp() {
  //======= getting the user's input value while they type =======

  const userInput = document.querySelector("#output");
  userInput.addEventListener("input", getUserInput);
  function getUserInput() {
    const userInputValue = userInput.value;
    const userNetwork = findNetwork(userInputValue);
    showLogo(userNetwork);
  }

  // ====== A function comparing user's input with prefixes in the object(networkThings)======

  function findNetwork(phoneNum) {
    // console.log(phoneNum);

    // ====== creating an array to push all networkThings Keys & values ======

    let nameOfNetworks = [];
    for (let networks in networkThings) {
      nameOfNetworks.push(networks);
      // const nwt = nameOfNetworks.push(networks);
      // console.log(nwt);
    }

    // ====== looping through the created array above ======
    for (const item of nameOfNetworks) {
      // ====== using the key to access values inside of the object(networkThings) ======
      let array = networkThings[item];
      // iterating through array to find a match of the first four numbers
      let first4 = phoneNum.slice(0, 4);
      for (let i = 0; i < array.length; i++) {
        // if first4 matches values inside array
        if (first4 === array[i] && phoneNum.length <= 11) {
          //console.log(item);
          return item;
        }
      }
    }

    return "";
  }

  function showLogo(network) {
    switch (network) {
      case "mtn":
        // console.log("we are here");
        mtnLogo.classList.remove("noloveLogo");
        break;

      case "airtel":
        // console.log("we are here");
        airtelLogo.classList.remove("noloveLogo");
        break;

      case "glo":
        // console.log("we are here");
        gloLogo.classList.remove("noloveLogo");
        break;

      case "etisalat":
        // console.log("we are here");
        etisalatLogo.classList.remove("noloveLogo");
        break;

      default:
        const array = [mtnLogo, airtelLogo, gloLogo, etisalatLogo];

        array.forEach((x) => {
          x.classList.add("noloveLogo");
        });

        break;
    }
  }

  function removeLogo() {
    const array = [mtnLogo, airtelLogo, gloLogo, etisalatLogo];
    array.forEach((x) => {
      //   // console.log(x);
      x.classList.add("noloveLogo");
    });
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
