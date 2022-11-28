//Bài 1

function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}

const airplanePrototype = {
  takeOff() {
    console.log(`Cat cánh ${(this.isFlying = true)}`);
  },
  land() {
    console.log(` Hạ Cánh ${(this.isFlying = false)}`);
  },
};

Airplane.prototype = airplanePrototype;

air1 = Airplane("Vietjet");
console.log(ari1.isFlying)
air1.takeOff();
ari1.land();
