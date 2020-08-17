
function upperName(){
    return name.toUpperCase();
}

// outra maneira de fazer deixando codigo bem enxuto

const upperName = name => name.toUpperCase // se no parametro tivermos mais de 1, é preciso colocar entre parenteses ex "(name,lastName)"

class Menu {
    constructor(menu){
        this.menuElement = document.querySelector(menu);
        this.activeClass = "active";
    }
    addActiveEvent(){
        this.menuElement.addEventListener("click", event => {
            event.target.classList.add(this.activeClass);
        });
    }
}

const menu = new Menu(".principal");
menu.addActiveEvent();