
// let tab = [ "carre", "desodre" ];

// tab.forEach(element => {
    
//     document.getElementById("nav").innerHTML += `<input onclick="swapStyleSheet('${element}.css')" id="${element}" type="button" value="${element}">`;
// });

function swapStyleSheet(sheet) {
    document.getElementById("stylepage").setAttribute("href", sheet);
}
