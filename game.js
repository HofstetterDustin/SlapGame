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

