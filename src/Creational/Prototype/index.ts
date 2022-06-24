interface IPrototype {
  Shallowclone(): Object;
  DeepClone(): Object;
}

class DB implements IPrototype {
  constructor(public ARR: string[]) {}
  Shallowclone(): any {
    return Object.assign(this);
  }
  DeepClone(): Object {
    return JSON.parse(JSON.stringify(this));
  }
}

const d = new DB(["1", "2"]);
console.log(d);
const d2 = d.Shallowclone();
const d3 = d.DeepClone();
console.log(d2);
d.ARR[0] = "-1";
console.log(d);
console.log(d2);
console.log(d3);
