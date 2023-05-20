let menuDeployed = false;

const listMenuItems = ["games-items", "hardware-items", "services-items", "news-items", "shop-items", "support-items"];

let lastItemOpened = "";

function deployMenu(atribute){
    const className = atribute.className.split("-")[0] + "-" + atribute.className.split("-")[1];

    const items = document.getElementsByClassName(className)[0]

    const deployableMenu = document.getElementsByClassName("deployable-menu")[0];

    if (menuDeployed === true && atribute !== lastItemOpened){
        for(let element of listMenuItems){
            let item = document.getElementsByClassName(element)[0];
            item.style.display = "none";
        }
        menuDeployed = false
    }

    atribute.classList.toggle("change-font-color-menu");
    
    if(lastItemOpened !== "" && lastItemOpened !== atribute){
        let lastItemOpenedClassName = lastItemOpened.className;

        document.getElementsByClassName(lastItemOpenedClassName)[0].classList.toggle("change-font-color-menu");

    }else{
        deployableMenu.classList.toggle("deploy");
        deployableMenu.classList.toggle("close");
        deployableMenu.classList.toggle("box-shadow");
    }

    const time = 0.5;

    if(items.style.display === "none"){
        items.style.display = "block";
        items.style.animation = "fadeIn " + time + "s";
        menuDeployed = true
    }else{
        items.style.animation = "fadeOut " + time + "s" 
        setTimeout(()=>{
            items.style.display = "none"
        }, time*1000)
        menuDeployed = false
    }

    lastItemOpened = atribute;
}