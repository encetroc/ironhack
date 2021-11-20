/* const squares = [
  100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10,
]; */

/* const P1 = {
  name: "john",
  color: "red",
  canPlay: true,
  position: 0,
  cash: 500,
  move
};

const P2 = {
  name: "doe",
  color: "blue",
  canPlay: true,
  position: 0,
  cash: 500,
  move
};

const P3 = {
  name: "sam",
  color: "green",
  canPlay: true,
  position: 0,
  cash: 500,
  move
}; */

/* class Player {
    constructor(name, color) {
        this.name = name
        this.color = color
    }
    
    canPlay = true
    position = 0
    cash = 500

    move = function () {
        if (this.canPlay === true) {
          const diceRole = 1 + Math.floor(6 * Math.random());
          this.position = (this.position + diceRole) % squares.length;
          this.cash = this.cash + squares[this.position];
        }
        if (this.cash <= 0) {
          this.canPlay = false;
          console.log(`game over for ${this.name}`);
        }
        console.log(`name: ${this.name},
        pos: ${this.position},
        cash: ${this.cash}`);
    }
} */

/* const P1 = new Player('john', 'red')
const P2 = new Player('doe', 'blue')
const P3 = new Player('sam', 'green') */
//console.log(P1, P2, P3)

// round 1
/* P1.move()
P2.move()
P3.move() */

// round 2
/* P1.move()
P2.move()
P3.move() */

/* class Rectangle {
    constructor(width, height) {
        this.width = width
        this.height = height
        console.log(`w: ${width}, h: ${height}`)
    }

    perimeter() {
        return this.height*2 + this.width*2
    }

    area() {
        return this.height * this.width
    }
} */

/* class Square {
    constructor (side) {
        this.side = side
        console.log(`side: ${side}`)
    }

    perimeter() {
        return this.side*2 + this.side*2
    }

    area() {
        return this.side * this.side
    }
} */

/* class Square extends Rectangle {
    constructor(side) {
        super(side, side)
    }
} */

/* const S1 = new Square(10)
const S2 = new Square(5)
console.log(S1.area())
console.log(S2.area()) */

/* class Animal {
    constructor (legs) {
        this.legs = legs
    }

    talk() {
        console.log(`I have ${this.legs} legs`)
    }
}

class Dog extends Animal {
    constructor () {
        super(4)
    }
}

class Bird extends Animal {
    constructor () {
        super(2)
    }
}

const B1 = new Bird()
B1.talk() */

/* const squares = [
    100, -10, 0, 0, -40, -10, -10, 5,
    0, -10, -50, -10, 0, 0, -50, -10,
]

class Player {
    constructor(name, color) {
        this.name = name
        this.color = color
    }
    
    canPlay = true
    position = 0
    cash = 500

    move = function () {
        const diceRole = 1 + Math.floor(6 * Math.random());
        if (this.canPlay === true) {
          this.position = (this.position + diceRole) % squares.length;
          this.cash = this.cash + squares[this.position];
        }
        if (this.cash <= 0) {
          this.canPlay = false;
          console.log(`game over for ${this.name}`);
        }
        console.log(`name: ${this.name},
        dice: ${diceRole},
        pos: ${this.position},
        cash: ${this.cash}`);
    }
}

class SuperPlayer extends Player {
    constructor (name, color) {
        super(name, color)
    }

    move = function () {
        const diceRole = 1 + Math.floor(6 * Math.random());
        if (this.canPlay === true) {
          this.position = (this.position + diceRole*2) % squares.length;
          this.cash = this.cash + squares[this.position];
        }
        if (this.cash <= 0) {
          this.canPlay = false;
          console.log(`game over for ${this.name}`);
        }
        console.log(`name: ${this.name},
        dice: ${diceRole},
        pos: ${this.position},
        cash: ${this.cash}`);
    }
}

const P1 = new Player('john', 'red')
const P2 = new SuperPlayer('doe', 'blue')
P1.move()
P2.move() */

/* const sword = {
  name: "sword",
  damage: 2,
};

const hammer = {
  name: "hammer",
  damage: 2.5,
};

class Player {
  spells = [
    {name: 'fire', damage: 3},
    {name: 'ice', damage: 4}
  ]

  constructor(name, weapon, health, power, armor) {
    this.name = name;
    this.spells.push(weapon)
    this.health = health;
    this.power = power;
    this.armor = armor;
    console.log(`${name}(${health})`);
  }

  hit(player) {
    const randomNumber = Math.floor(3 * Math.random())
    const spell = this.spells[randomNumber]
    player.health = player.health - spell.damage * this.power + player.armor
    console.log(
      `${this.name}(${this.health}) hit ${player.name}(${player.health})`
    );
  }
}

const P1 = new Player("john", sword, 100, 3, 2);
const P2 = new Player("doe", hammer, 50, 3.5, 1.5);

while (P1.health > 0 && P2.health > 0) {
  P1.hit(P2);
  P2.hit(P1);
}

if (P1.health <= 0) console.log(`${P2.name} is the winner`)
if (P2.health <= 0) console.log(`${P1.name} is the winner`) */

//var a = 1

if (true) {
  let a = 2
  console.log(a)
}

console.log(a)

/* function func1 () {
  var b = 2
  console.log(b)
}

func1()

console.log(b) */