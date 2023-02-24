window.addEventListener("load", init)

function init() {
    const tartalomElem = document.getElementById("tartalom")
    console.log(tartalomElem);
    const tartalomElemMaskepp = document.querySelector("#tartalom")
    const tartalomElemMaskepp2 = document.querySelector(".tart")

    
    const tartalomElem3 = document.getElementsByClassName("tart")
    const tartalomElemEz = document.querySelectorAll(".tart")
    console.log(tartalomElemEz);

    let lista = ["auto", "gyors", "gaz", "benzintemeto"]
    let kepek = ["auto1_resize.jpg", "auto2_resize.jpg", "auto3_resize.jpg"]
    listaKiir(lista, tartalomElemEz);
    kepKiir(kepek);

}
function listaKiir(lista, tartalomElemEz) {
    let szoveg = "<h1>Kedvenc autok:</h1>";
    szoveg += "<ul>"
    for (let index = 0; index < lista.length; index++) {

        szoveg += "<li>" + lista[index] + "</li>"

    }
    szoveg += "</ul>"
    tartalomElemEz[0].innerHTML = szoveg

}
function kepKiir(lista) {
    const tartalomElemEz = document.querySelectorAll(".article")
    szoveg ="";
    for (let index = 0; index < lista.length; index++) {
        szoveg+='<div><img src="'+lista[index]+' " alt="">';
        szoveg+="</div>";
        
    }
    tartalomElemEz[0].innerHTML = szoveg;
    
    
}