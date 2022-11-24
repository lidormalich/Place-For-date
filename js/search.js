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
    document.getElementById('exampleModalLabel').innerText = sliceData(JSON.stringify(data.table.rows[i].c[4]));
    document.getElementById('exampleModalText').innerHTML = `<p><b>Description: </b> ${sliceData(JSON.stringify(data.table.rows[i].c[2]))} </p>`;
    document.querySelector('#exampleModalText').innerHTML += `<img src="${product[itemId].pic} height="200" width="300" alt="pic""><img>`;
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
                let someKnow = sliceData(JSON.stringify(data.table.rows[i].c[2]));
                someKnow.replace('\"', "''");

                // someKnow.replace('\');
                document.getElementById("cardDive").innerHTML += `<div class="card col-sm-12 col-md-4 col-lg-3 mb-2 mx-auto" style="width: 18rem;"> 
                                <div class="card-body"><h5 class="card-title">${sliceData(JSON.stringify(data.table.rows[i].c[4]))}</h5>
                                <div class="container">
                                <div class="row">
                                <div class="col-sm">
                                <h6 class="card-text leftSide">אזור: ${sliceData(JSON.stringify(data.table.rows[i].c[0]))}</h6>
                                </div>
                                <div class="col-sm">
                                <p class="h6 cityFont "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                    </svg>
                                    ${sliceData(JSON.stringify(data.table.rows[i].c[5]))}</p>
                                </div>
                                </div>
                                </div>
                                    
                                    
                                    
                                    <img src="img/gmap.png"  class="card-img-top" alt="...">
                                    <a href='${sliceData(JSON.stringify(data.table.rows[i].c[1]))}' class="card-text justify-content center align-items center redLink">♡ נווט בעזרת Google Map ♡</a> 
                                    <p class="card-text">כמה מילים על המקום: ${someKnow.substring(0, 150) + "..."}</p> 


                                    <p class="card-text">תגיות: ${sliceData(JSON.stringify(data.table.rows[i].c[3]))}</p> 
                                    <a href="" class="btn btn-primary" onclick="showProduct(${i})">נשמע דייט מעולה, תראו פרטים</a>
                                </div>
                                </div> `;

                // <p class="card-text">עיר: ${sliceData(JSON.stringify(data.table.rows[i].c[5]))}</p>
                let city2 = "";
                city2 = sliceData(JSON.stringify(data.table.rows[i].c[5]));

                city[i + 1] = city2;
                // console.log(city2);

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

