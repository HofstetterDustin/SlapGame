var health = 100
var hits = 0


//-----------------------------------------------------------------------------------
//1st player//
var cylon = {
    health: 100,
    attacks: {
        slap: 1,
        punch: 5,
        kick: 10,
       medPac:[]
    }
}
//----------------------------------------------------------------------------------
//2nd player//
// var adamda = {
//     health: 100,
//     attacks: {
//         slap: 1,
//         punch: 5,
//         kick: 10,
//     }
// }
//-----------------------------------------------------------------------------------


//attack functions ----------------------------------------------------------------------
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
//Template ----------------------------------------------------------------------------
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
//draw(attacks) -----------------------------------------------------------------------       

var medPac = function(name, modifier, description){
    this.name = name;
    this.modifier = modifier;
    this.description = description;
}

var medPacs = {
    sheild: new medPac("Sheild", 3, "This is an awesome Sheild!"),
    blade:  new medPac("Rick Deckard", 2, "Do androids dream of electric sheep?"),
    johnny5: new medPac("S.A.I.N.T.", 4, "Strategic Artificially Intelligent Nuclear Transport"),

}

//what if I use the medPac to increase health?
// var medPacContainerElement = document.getElementById('medPac-container')
function addMedPac(medPacName){
    var mod = medPacs[medPacName].modifier;
    //current health + mod
    console.log("Health ",health,"hits ",hits)
//add mod to health
//debugger
}   
update(health)

//==>  My Brain Hurts, alot!  <==//