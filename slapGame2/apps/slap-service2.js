//Service is responsibe for all data and data manipulation
function BasicService() {
    //private
    function BadGuy(name, health, slap, punch, kick, img) {
        this.name = name
        this.health = health
        this.maxHealth = health
        this.attacks = {
            slap: slap,
            punch: punch,
            kick: kick
        }
        this.hits = 0
        this.items = []
        this.img = img
    }


    var bieber = new BadGuy("Justin Bieber", 100, 5, 10, 8, "data:image/jpeg;base64,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")
    var kardashian = new BadGuy("Kim Kardashian", 100, 10, 5, 7, "https://www.biography.com/.image/t_share/MTE4MDAzNDEwMzg3MzcxNTM0/kim-kardashian-450760-2-raw.jpg")
    var cruze = new BadGuy("Tom Cruze", 100, 22, 12, 10, "https://www.biography.com/.image/t_share/MTE5NDg0MDU0OTM2NTg1NzQz/tom-cruise-9262645-1-402.jpg")
    //---------------------------------------------------------------
    function Item(name, modifier, description) {
        this.name = name;
        this.modifier = modifier;
        this.description = description;
    };

    var items = {
        shield: new Item('Witty Comment', 1, "Oh no you don't"),
        edit: new Item("Editorial", 3, "Voted most beautiful"),
        home: new Item("New Home", 2, "Security!"),
        nose: new Item("Nose Job", 8, "I don't believe in plastic surgury.")
    };

    function addMedPacs() {
        debugger
        var total = 0;
        for (var index = 0; index < bieber.items.length; index++) {
            var item = bieber.items[index];
            total += item.modifier
        }
        return total
    };

    function attack(Type) {
        if (bieber.attack[type]) {
            bieber.health += beiber.attacks[type]
            //if (target.health is < 0) {target.health = 0} 
        }
        bieber.hits++
    };
    //public---------------------------------------------------------------------------
    //attack
    this.attacks = function attack(attackType) {
        bieber.health -= bieber.attacks[attackType] - addMedPacs()
    }
    //Get hits-------------------------------------------------------------------------
    this.getHits = function attack(attackType){
        return bieber.hits++
    }
    //Give item------------------------------------------------------------------------
    this.giveItem = function giveItem(itemType) {
        //debugger
        bieber.items.push(items[itemType])
    }
    //reset-----------------------------------------------------------------------------
    this.reset = function reset() {
        bieber.health = bieber.maxHealth
    }
    //Display of health-----------------------------------------------------------------
    this.getHealth = function getHealth() {
        return bieber.health
    }
    //Display of img--------------------------------------------------------------------
    this.getImg = function getImg(BadGuy) {
        return bieber.img
    }


}