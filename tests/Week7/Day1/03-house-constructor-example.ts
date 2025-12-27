class VeerHouse {

  // 🟦 Global (class-level) variables
  color: string;
  rooms: number;

  // 🟩 Constructor
  constructor(color: string, rooms: number) {
    this.color = color;
    this.rooms = rooms;
  }

  showDetails() {
    console.log(`House color: ${this.color}`);
    console.log(`Number of rooms: ${this.rooms}`);
  }
}

// 🏗️ Creating a house (object)
const myHouse1 = new VeerHouse("Blue", 3);
myHouse1.showDetails();