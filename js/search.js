// all city -city and run it city.addCityToPage();
// all area -area and run it area.addareaToPage();


let city = {
    cityName: ["",
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ],
    addCityToPage: function () {
        for (let cityItem of this.cityName) {
            document.getElementById("citySelect").innerHTML += `<option value=${cityItem}>${cityItem} </option>`;
        }
    }

};

city.addCityToPage();


let area = {
    areaName: ["",
        "צפון", "דרום", "מרכז", "ירושלים והסביבה"
    ],
    addAreaToPage: function () {
        for (let areaItem of this.areaName) {
            document.getElementById("areaSelect").innerHTML += `<option value=${areaItem}>${areaItem} </option>`;
        }
    }

};

area.addAreaToPage();
