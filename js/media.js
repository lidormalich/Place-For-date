let arrPic = ["img/galleryMedia4.jpg", "img/galleryMedia11.jpg", "img/galleryMedia3.jpg", "img/galleryMedia8.jpg", "img/galleryMedia5.jpg", "img/galleryMedia6.jpg", "img/galleryMedia10.jpg", "img/galleryMedia7.jpg", "img/galleryMedia9.jpg", "img/galleryMedia12.jpg"];

function showPic(picId) {
    // const pos = document.getElementById('exampleModalText').getBoundingClientRect();
    // var img = document.getElementById('exampleModalText');

    // img.setAttribute('src', arrPic[picId]);




    // document.getElementById('exampleModalText').innerHTML = `<img src="${arrPic[picId]}" height="338" width="600"  />`;
    document.getElementById('exampleModalText').src = arrPic[picId];
    // document.getElementById('exampleModalText').style.width = pos.width;
    // document.getElementById('exampleModalText').style.height = pos.height;
}