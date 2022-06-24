abstract class Car {
  wheels() {
    return 4;
  }
}

class F1 extends Car {
  static _color: string;
  static _BHP: number;
  static _sponser: string;
  static _team: string;
  color: string;
  BHP: number;
  sponser: string;
  team: string;

  private constructor(
    BHP: number,
    color: string,
    sponser: string,
    team: string
  ) {
    super();
    this.BHP = BHP;
    this.color = color;
    this.sponser = sponser;
    this.team = team;
  }
  static color(c: string) {
    this._color = c;
    return this;
  }
  static bhp(b: number) {
    this._BHP = b;
    return this;
  }
  static sponser(s: string) {
    this._sponser = s;
    return this;
  }
  static team(t: string) {
    this._team = t;
    return this;
  }
  static build() {
    return new F1(this._BHP, this._color, this._sponser, this._team);
  }
}

class Sedan extends Car {
  static _color: string;
  static _BHP: number;
  static _company: string;
  static _name: string;
  color: string;
  BHP: number;
  company: string;
  Name: string;

  private constructor(
    BHP: number,
    color: string,
    sponser: string,
    team: string
  ) {
    super();
    this.BHP = BHP;
    this.color = color;
    this.company = sponser;
    this.Name = team;
  }
  static color(c: string) {
    this._color = c;
    return this;
  }
  static bhp(b: number) {
    this._BHP = b;
    return this;
  }
  static company(s: string) {
    this._company = s;
    return this;
  }
  static Name(t: string) {
    this._name = t;
    return this;
  }
  static build() {
    return new Sedan(this._BHP, this._color, this._company, this._name);
  }
}

class SUV extends Car {
  static _color: string;
  static _BHP: number;
  static _company: string;
  static _name: string;
  color: string;
  BHP: number;
  company: string;
  Name: string;

  private constructor(
    BHP: number,
    color: string,
    sponser: string,
    team: string
  ) {
    super();
    this.BHP = BHP;
    this.color = color;
    this.company = sponser;
    this.Name = team;
  }
  static color(c: string) {
    this._color = c;
    return this;
  }
  static bhp(b: number) {
    this._BHP = b;
    return this;
  }
  static company(s: string) {
    this._company = s;
    return this;
  }
  static Name(t: string) {
    this._name = t;
    return this;
  }
  static build() {
    return new SUV(this._BHP, this._color, this._company, this._name);
  }
}

class CarFactory {
  //Factory Methods
  static F1(b: number, c: string, s: string, t: string): F1 {
    return F1.color(c).bhp(b).sponser(s).team(t).build();
  }
  static SUV(b: number, c: string, s: string, t: string): SUV {
    return SUV.color(c).bhp(b).company(s).Name(t).build();
  }
  static Sedan(b: number, c: string, s: string, t: string): Sedan {
    return SUV.color(c).bhp(b).company(s).Name(t).build();
  }
}

const f1: F1 = CarFactory.F1(111, "AMG", "Intel", "AMG");
console.log(f1);
