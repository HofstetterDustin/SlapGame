//private
function basicController(){
    var basicService = new BasicService()
//Health------------------------------------------------------
function draw(){
    //debugger
    var healthElem = document.getElementById("health")
    healthElem.innerHTML = basicService.getHealth()
    var imgElem = document.getElementById("img")
    imgElem.src = basicService.getImg()
    var hitsElem = document.getElementById("hits")
    hitsElem.innerHTML = basicService.getHits()
}

this.giveItem = function giveItem(itemType){
    basicService.giveItem(itemType)
}

this.getHits = function getHits(attackType){
    basicService.attacks(attackType)
    //draw()
}

this.attacks = function attack(attackType){
    //debugger
    basicService.attacks(attackType)
    draw()
}
//make the other functions here---------------------------------------------
draw()
}