class Key{
    private signature: number;

    constructor() {
        this.signature = Math.random();
    }

    getSignature() {
        return this.signature;
    }
};

class Person{
    constructor(private key: Key) {};
    getKey() {
        return this.key;
    }

}

abstract class House{
    protected tenants: Person[] = [];
    constructor(protected door: boolean, protected key: Key){}
    comeIn(person: Person) {
        this.door && this.tenants.push(person);
    }
    abstract openDoor(key: Key): void
}

class MyHouse extends House {
    constructor(key: Key) {
        super(true, key);
    }

    openDoor(key: Key): void {
        this.door = key === this.key;
    }

    getTenants() {
        return this.tenants;
    }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());
house.comeIn(person)
console.log(house.getTenants());

