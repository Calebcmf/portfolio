function mudarHome() {
    document.getElementById("frameHome").style.display = "flex";
    document.getElementById("frameForm").style.display = "none";
    document.getElementById("frameCont").style.display = "none";
    document.getElementById("frameComp").style.display = "none";

    document.getElementById("bttnHome").className = "bttnSelected";
    document.getElementById("bttnComp").className = "bttn";
    document.getElementById("bttnForm").className = "bttn";
    document.getElementById("bttnCont").className = "bttn";

}
function mudarComp() {
    document.getElementById("frameHome").style.display = "none";
    document.getElementById("frameForm").style.display = "none";
    document.getElementById("frameCont").style.display = "none";
    document.getElementById("frameComp").style.display = "flex";

    document.getElementById("bttnHome").className = "bttn";
    document.getElementById("bttnComp").className = "bttnSelected";
    document.getElementById("bttnForm").className = "bttn";
    document.getElementById("bttnCont").className = "bttn";
}
function mudarForm() {
    document.getElementById("frameHome").style.display = "none";
    document.getElementById("frameForm").style.display = "flex";
    document.getElementById("frameCont").style.display = "none";
    document.getElementById("frameComp").style.display = "none";

    document.getElementById("bttnHome").className = "bttn";
    document.getElementById("bttnComp").className = "bttn";
    document.getElementById("bttnForm").className = "bttnSelected";
    document.getElementById("bttnCont").className = "bttn";
}
function mudarCont() {
    document.getElementById("frameHome").style.display = "none";
    document.getElementById("frameForm").style.display = "none";
    document.getElementById("frameCont").style.display = "flex";
    document.getElementById("frameComp").style.display = "none";

    document.getElementById("bttnHome").className = "bttn";
    document.getElementById("bttnComp").className = "bttn";
    document.getElementById("bttnForm").className = "bttn";
    document.getElementById("bttnCont").className = "bttnSelected";
}