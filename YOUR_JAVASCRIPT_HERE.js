// Write your JS here
const hero  = {
    name: "henk",
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: "scissors",
        damage: 2,
    },
}


const testCreature2 = { health: 2 }
const testCreature4 = { health: 4 }

const health = hero.health




rest(testCreature2);
rest(testCreature4);



const innUI = document.getElementById('inn')
const img = document.createElement('img')

innUI.appendChild(img)


function rest() {
    
    
        // if (testCreature2.health < 10){
        //     return testCreature.health = 10
        // }
        
    
        // if (testCreature4.health <10){
        //     return testCreature.health = 10
        // }
        
        // return null;
    }
document.getElementById('inn').click()


const testObject = hero.weapon.type
console.log(testObject)
const testHero = { inventory: [ 'pocket-lint', ] }


testHero.inventory.push(testObject)

function pickUpItem() {}

pickUpItem(testHero, testObject)



innUI.appendChild(img)




const testHero1 = { weapon: { type: 'sword', damage: 5 }, inventory: [ { type: 'dagger', damage: 2 } ] }
const testWeapon = testHero.weapon
const inventoryWeapon = testHero1.inventory[0]
console.log(inventoryWeapon)

function equipWeapon(){




}


equipWeapon(testHero)

equipWeapon(testHero1)



document.getElementById('bag').click()

if(hero){
  hero.inventory = []
}


const testCreature = { health: 10 }

const MockAlert = {
  install: function() {
    MockAlert.message = undefined;
    MockAlert.originalAlert = window.alert;

    window.alert = function(message) {
      MockAlert.message = message;
    }
  },

  uninstall: function() {
    window.alert = MockAlert.originalAlert;
  }

}
