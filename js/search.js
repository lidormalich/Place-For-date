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


function showProduct(itemId) {
    // document.getElementById('exampleModalLabel').innerText = product[itemId].name;
    // document.getElementById('exampleModalText').innerHTML = `<p><b>Description: </b> ${product[itemId].description} </p>`;
    // document.querySelector('#exampleModalText').innerHTML += `<img src="${product[itemId].pic} height="200" width="300" alt="pic""><img>`; 
    console.log("Hare LOGO");
    document.querySelector('#exampleModalText').innerHTML += `<p><a href="${sliceData(JSON.stringify(data.table.rows[itemId].c[0]))}" class="btn btn-secondary"> Web page</a></p> `;

}

// Make Cards with google Sheets
function showStudentsCard() {
    // do info from google sheets
    const base = 'https://docs.google.com/spreadsheets/d/1tibUdKtvqfZPKQJt8tcxC-wLLfdEbwHiieXBbfYEa-Q/gviz/tq?';
    const output = document.querySelector('.output');
    const query = encodeURIComponent('Select B,C,D,E,F,G');
    const url = base + '&tq=' + query;
    fetch(url)
        .then(res => res.text())
        .then(rep => {
            let data = JSON.parse(rep.substr(47).slice(0, -2));
            let rowLenght = data.table.rows.length;
            let colLenght = data.table.cols.length;
            for (let i = 0; i < rowLenght; i++) {
                document.getElementById("cardDive").innerHTML += `<div class="card col-sm-12 col-md-4 col-lg-3 mb-2 mx-auto" style="width: 18rem;">    
                                <div class="card-body">
                                    <h5 class="card-title">${sliceData(JSON.stringify(data.table.rows[i].c[4]))}</h5>
                                    <img src="img/gmap.png"  class="card-img-top" alt="...">
                                    <p class="card-text">1: ${sliceData(JSON.stringify(data.table.rows[i].c[1]))}</p> 
                                    <p class="card-text">2: ${sliceData(JSON.stringify(data.table.rows[i].c[2]))}</p> 
                                    <p class="card-text">3: ${sliceData(JSON.stringify(data.table.rows[i].c[3]))}</p> 
                                    <p class="card-text">4: ${sliceData(JSON.stringify(data.table.rows[i].c[4]))}</p> 
                                    <p class="card-text">5: ${sliceData(JSON.stringify(data.table.rows[i].c[5]))}</p> 
                                    <p class="card-text">0: ${sliceData(JSON.stringify(data.table.rows[i].c[0]))}</p> 
 
                                    
                                    <a href="" class="btn btn-primary" onclick="showProduct(${i})">נשמע דייט מעולה, תראו פרטים</a>
                                </div>
                                </div> `;

            }
        })

    function sliceData(str) {
        let strNew = str.slice(6);
        strNew = strNew.slice(0, -2);
        return strNew;
    }
}
showStudentsCard();
// 1 לינק
// 2תאור
// 3תגיות
// 4 כותרת == כותרת
// 5 עיר
// 0 אזור

