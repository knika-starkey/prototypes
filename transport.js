function Transport(name) {
  this._name = name;
}

Transport.prototype.about = function () {
  alert("Я - " + this._name);
};

function AirTransport(name) {
  Transport.apply(this, arguments);
}

AirTransport.prototype = Object.create(Transport.prototype);
AirTransport.prototype.constructor = AirTransport;

AirTransport.prototype.about = function () {
  Transport.prototype.about.apply(this);
  alert("Я лечу!");
};

function WaterTransport(name) {
  Transport.apply(this, arguments);
}

WaterTransport.prototype = Object.create(Transport.prototype);
WaterTransport.prototype.constructor = WaterTransport;

WaterTransport.prototype.about = function () {
  Transport.prototype.about.apply(this);
  alert("Я пливу!");
};
function EarthTransport(name) {
  Transport.apply(this, arguments);
}

EarthTransport.prototype = Object.create(Transport.prototype);
EarthTransport.prototype.constructor = EarthTransport;

EarthTransport.prototype.about = function () {
  Transport.prototype.about.apply(this);
  alert("Я їду!");
};

let rocket = new AirTransport("ракета");
let plane = new AirTransport("літак");
let ship = new WaterTransport("теплохід");
let boat = new WaterTransport("катер");
let car = new EarthTransport("автомобіль");
let truck = new EarthTransport("вантажівка");
let transports = [rocket, plane, ship, boat, car, truck];
for (let i = 0; i < transports.length; i++) {
  transports[i].about();
}
