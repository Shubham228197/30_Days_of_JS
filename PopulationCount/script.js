function showPopulation(){
    const lang = document.getElementById("languages");
    const pops = document.getElementById("populations");
    const subtitle = document.getElementById("sub-heading-2");
    subtitle.innerText = "10 most populated countries in the world";
    lang.style.display = "none";
    pops.style.display = "flex";
}
function showLanguage(){
    const lang = document.getElementById("languages");
    const pops = document.getElementById("populations");
    const subtitle = document.getElementById("sub-heading-2");
    subtitle.innerText = "10 most spoken languages in the world";
    lang.style.display = "block";
    pops.style.display = "none";
}