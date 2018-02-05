var health = 100
var hits = 0



function slap(){
    //Lower health by 1, lower hits by 1
    health--
    hits++
    
    console.log("Health ",health,"Hits ", hits)
    update()

}

function punch(){
    //Lower health by 5, increase hit by 5
    health-=5
    hits+=5
    
    console.log("Health ",health,"Hits ",hits)
    update()
    
}

function kick(){
    //Lower health by 10, increase hits by 10
    health-=10
    hits+=10

    console.log("Health ",health,"Hits ",hits)
    update()
}

    function update(){ 
        document.getElementById("health").innerHTML = health;
        document.getElementById("hits").innerHTML = hits;
        
    }



update()

var attacksContainerElement = document.getElementById('attacks-container')
function draw(attacks){
    var template = ''
    for (let i = 0; i < attacks.length; i++) {
        const attack = attacks[i];
        template += `
        
            <div class="attacks container-fluid">
                <div class="btn row">
                    <div class="butt col-sm-4">
                        <button class="button" onclick="slap('${attack}')">SLAP</button>
                    </div>
                    <div class="butt col-sm-4">
                        <button class="button" onclick="punch('${attack}')">PUNCH</button>
                    </div>
                    <div class="butt col-sm-4">
                        <button class="button" onclick="kick('${attack}')">KICK</button>
                    </div>
                </div>
            </div>
        
        `
    }
    attacksContainerElem.InnerHTML = template
}
//draw(attacks)        

var items = function(name, modifier, description){
    this.name = name;
    this.modifier = modifier;
    this.description = description;
}

var items={
    sheild: new items("Sheild", 0.3, "This is an awesome Sheild!"),
    blade:  new items("Rick Deckard", 2, "Do androids dream of electric sheep?"),
    johnny5:    new items("S.A.I.N.T.", 4, "Strategic Artificially Intelligent Nuclear Transport"),

}

var cylon = {
    health: 100,
    attacks: {
        slap: 1,
        punch: 5,
        kick: 10,
       items:[]
    }
}

// var adamda = {
//     health: 100,
//     attacks: {
//         slap: 1,
//         punch: 5,
//         kick: 10,
//     }
// }

function addMods(item,itemId) {
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if(itemId == medPac.Id){
            health += item.modifier
        }
    }
}

//write a function that finds a item by its itemId increase the health by item.modifier.
