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




let product = [
    {
        pic: "https://github.com/lidormalich/Mardi-Gras/blob/main/img/Walk-Ons.jpg?raw=true",
        name: "Walk-On's Bistreaux and Bar",
        web: "https://walk-ons.com/",
        description: "Grab a bite with your family at Walk On's Restaurant and Sports Bistreaux. Check out our menu of burgers, sandwiches, salads & Cajun cuisine.",
    },
    {
        pic: "https://github.com/lidormalich/Mardi-Gras/blob/main/img/SheratonNewOrleansHotel.jpg?raw=true",
        // pic: "../img/SheratonNewOrleansHotel.jpg",
        name: "Sheraton New Orleans Hotel",
        web: "https://www.marriott.com/en-us/hotels/msyis-sheraton-new-orleans-hotel/overview/",
        description: "Sheraton New Orleans Hotel offers two restaurants and a bar, a 24-hour fitness center, rooftop pool, expansive meeting space, amazing downtown and river ...",
    },
    {
        pic: "https://github.com/lidormalich/Mardi-Gras/blob/main/img/ace-hotel-new-orleans2.jpg?raw=true",
        name: "Ace Hotel New Orleans",
        web: "https://acehotel.com/new-orleans/?gclid=EAIaIQobChMI_Lz-zq6r-wIVlt1RCh1t_wT4EAAYASAAEgIhcPD_BwE",
        description: "Home to well-appointed rooms, event spaces, a restaurant, rooftop bar and all-day café. Well-appointed rooms with breathing room. Custom furnishings, original art and more. Warehouse District. Near the French Quarter. By South Market...",
    },
    {
        pic: "https://github.com/lidormalich/Mardi-Gras/blob/main/img/TheRitzCarltonNewOrleans.jpg?raw=true",
        name: "The Ritz-Carlton, New Orleans",
        web: "https://www.ritzcarlton.com/en/hotels/new-orleans",
        description: "The Ritz-Carlton, New Orleans in the French Quarter offers luxury hotel amenities including a spa, large rooms and a lounge with live jazz.",
    },
    {
        pic: "https://github.com/lidormalich/Mardi-Gras/blob/main/img/PremiumParking.jpg?raw=true",
        name: "Premium Parking - P402",
        web: "https://www.premiumparking.com/P402",
        description: "Less than half a mile from the French Quarter, 300 N Peters St Parking New Orleans is an affordable and convenient option for downtown parking. This 24x7 outdoor self-parking facility guarantees maximum safety and the lowest 300 N Peters St Parking charges for online bookings. 300 N Peters St Parking lots are ideal for those attending events at the City Park, Fair Grounds Race Course & Slots, Smoothie King Center, or Caesars Superdome.",
    },
    {
        pic: "https://github.com/lidormalich/Mardi-Gras/blob/main/img/LouisianaChildrenMuseum.jpg?raw=true",
        name: "Louisiana Children's Museum",
        web: "https://lcm.org/",
        description: "The Museum was meticulously designed to be a social, cultural and learning resource for children and families. Indoors and out, there are tons of hands-on ways ...",
    },
    {
        pic: "https://github.com/lidormalich/Mardi-Gras/blob/main/img/museum-of-death.jpg?raw=true",
        name: "Museum of Death",
        web: "http://www.museumofdeath.net/",
        description: "The world-famous Museum of Death is located in New Orleans' French Quarter. Those brave enough to visit can view and learn more about body bags, coffins, ...",
    },
    {
        pic: "https://github.com/lidormalich/Mardi-Gras/blob/main/img/HauntedMuseum2.jpg?raw=true",
        name: "Haunted Museum",
        description: "Join us for a spirited adventure through Zak Bagans' The Haunted Museum in Las Vegas, as seen on the Travel Channel's Ghost Adventures!",
        web: "https://thehauntedmuseum.com/",
    },

];


function showProduct(itemId) {
    document.getElementById('exampleModalLabel').innerText = product[itemId].name;
    document.getElementById('exampleModalText').innerHTML = `<p><b>Description: </b> ${product[itemId].description} </p>`;
    document.querySelector('#exampleModalText').innerHTML += `<img src="${product[itemId].pic} height="200" width="300" alt="pic""><img>`; document.querySelector('#exampleModalText').innerHTML += `<p><a href="${product[itemId].web}" class="btn btn-secondary"> Web page</a></p> `;

}