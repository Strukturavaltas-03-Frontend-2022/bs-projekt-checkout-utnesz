'use strict'

let states = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming"
]

let megyek = [
    "Budapest",
    "Bács-Kiskun",
    "Baranya",
    "Békés",
    "Borsod-Abaúj-Zemplén",
    "Csongrád-Csanád",
    "Fejér",
    "Győr-Moson-Sopron",
    "Hajdú-Bihar",
    "Heves",
    "Jász-Nagykun-Szolnok",
    "Komárom-Esztergom",
    "Nógrád",
    "Pest",
    "Somogy",
    "Szabolcs-Szatmár-Bereg",
    "Tolna",
    "Vas",
    "Veszprém",
    "Zala"
]



const select = document.getElementById("country");
const state = document.getElementById("state");


select.addEventListener("change", () => {
    if (select.value === "Magyarország") {
        state.innerHTML = "";
        megyek.forEach((megye) => {
            const megyeOption = document.createElement("option");
            megyeOption.innerHTML = megye;
            state.appendChild(megyeOption)
            })
    } else if
    
        (select.value === "USA") {
            state.innerHTML = "";
            states.forEach((sta) => {
                const stateOption = document.createElement("option");
                stateOption.innerHTML = sta;
                state.appendChild(stateOption);
            })  }
}) ;
  
