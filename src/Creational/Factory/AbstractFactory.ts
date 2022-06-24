/**
 * Factory that returns a factory
 */

abstract class Gadget {}

class Mobile extends Gadget {}

class Phone extends Gadget {}

class PC extends Gadget {}

class Laptop extends Gadget {}

class NotDesktopGadgetFactory {
  static Phone() {
    return new Phone();
  }
  static Mobile() {
    return new Phone();
  }
}

class DesktopGadgetFactory {
  static PC() {
    return new PC();
  }
  static Laptop() {
    return new Laptop();
  }
}
class GadgetFactory {
  Desktop() {
    return new DesktopGadgetFactory();
  }
  Mobile() {
    return new NotDesktopGadgetFactory();
  }
}
