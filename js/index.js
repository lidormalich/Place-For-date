


function showProduct(itemId) {
    document.getElementById('exampleModalLabel').innerText = product[itemId].name;
    document.getElementById('exampleModalText').innerHTML = `<p><b>Description: </b> ${product[itemId].description} </p>`;
    document.querySelector('#exampleModalText').innerHTML += `<img src="${product[itemId].pic} height="200" width="300" alt="pic""><img>`; document.querySelector('#exampleModalText').innerHTML += `<p><a href="${product[itemId].web}" class="btn btn-secondary"> Web page</a></p> `;

}