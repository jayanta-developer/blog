type Corse = {
  name: string;
  readonly price: number;
  ratting?: number;
};

function createUser({ name, isPaid }: { name: string; isPaid: boolean }) {}

createUser({ name: "jayanta", isPaid: true });

function createCorse(corse: Corse) {
  console.log(corse);
}

createCorse({ name: "react", price: 12 });

const arr: string[] = [];

arr.push("123");
