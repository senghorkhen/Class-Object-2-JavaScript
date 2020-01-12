class Animal {
    //Setter
    setName (name) {
        this.mName = name;
    }
    //Getter
    getName() {
        console.log(this.mName);
    }
    walk() {
        console.log("walk step by step")
    }
    run() {
        console.log("Running...!");
    }
}
//inherite
class Cow extends Animal {
    box() {
        console.log("Hello");
    }
}
//extends jom long 
class Dog extends Animal {
    bite() {
        console.log("Bite someone tonight");
    }
}
const dog1 = new Dog();
dog1.bite();
dog1.walk();
dog1.run();
dog1.setName("Phala");
dog1.getName();