var health = 100

function slap(){
    this.slap = slap

    this.health = 100
    this.slap = {
        slap: 0
    }

    this.health = health
    health--
    health.push(this)
}