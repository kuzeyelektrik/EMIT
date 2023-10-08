const menuBtn = document.getElementById("menu-open");
const menuBtn2 = document.getElementById("menu-close");
const menu = document.getElementById("menu");
menuBtn.addEventListener('click', function () {
    const logo = document.getElementById("logo").classList.add("logoanimleft");
    document.getElementById("logo").classList.remove("logoanimright");
    menu.classList.add("animatedMenu");
    menuBtn.style.display = "none"; 
    menuBtn2.style.display = "inline-block";
    menu.style.display = "block";    
    document.getElementById("nasa").classList.add("nasaAnim");
});
menuBtn2.addEventListener('click', function () {
    document.getElementById("logo").classList.remove("logoanimleft");
    const logo = document.getElementById("logo").classList.add("logoanimright");
    menu.style.display = "none";    
    menuBtn2.style.display = "none";    
    menuBtn.style.display = "inline-block";   
    document.getElementById("nasa").classList.remove("nasaAnim");
});