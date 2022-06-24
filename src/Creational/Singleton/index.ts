class ASingleton {
  public num: number;
  private static instance: ASingleton;
  private constructor() {
    this.num = Math.random();
  }
  static getInstance(): ASingleton {
    if (!this.instance) {
      this.instance = new ASingleton();
    }
    return this.instance;
  }
}

const Singleton: ASingleton = ASingleton.getInstance();
console.log(Singleton.num);
const Singleton2: ASingleton = ASingleton.getInstance();
console.log(Singleton2.num);
