class Key{
    private signature: number;

    constructor() {
        this.signature = Math.random();
    }

    getSignature():number {
        return this.signature;
    }
};

class Person{
    constructor(private key: Key) {};
    getKey(): Key {
        return this.key;
    }

}

abstract class House{
    protected tenants: Person[] = [];
    protected door: boolean = false;
    constructor(protected key: Key){}
    comeIn(person: Person) {
        this.door && this.tenants.push(person);
    }
    abstract openDoor(key: Key): void
}

class MyHouse extends House {
    constructor(key: Key) {
        super(key);
    }

    openDoor(key: Key): void {
        this.door = key.getSignature() === this.key.getSignature();
    }

    getTenants(): Person[] {
        return this.tenants;
    }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());
house.comeIn(person)
console.log(house.getTenants());

