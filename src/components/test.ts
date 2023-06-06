type Corse = {
  name: string;
  readonly price: number;
  ratting?: number;
};
// ? mark is use for define the field is not necessary;

function createUser({ name, isPaid }: { name: string; isPaid: boolean }) {}

createUser({ name: "jayanta", isPaid: true });

function createCorse(corse: Corse) {
  console.log(corse);
}

createCorse({ name: "react", price: 12 });

///array
const arr: number[] = [];

arr.push(123);

type User = {
  name: string;
  email: string;
  number: number;
  active?: boolean;
};

const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];
const data3: (string | number)[] = ["1", "2", "3"];

const createNewUser: User[] = [];

createNewUser.push({
  name: "sovon",
  email: "sovon@gmail.com",
  number: 123,
});

//Union

let scores: string | number = 0;
scores = "string";
scores = 43242;

type Admin = {
  userName: string;
  password: string | number;
};

//tupals

let product: [string, number, boolean];

product = ["Product", 43, true];

//Enums
enum SeatChoice {
  AISLE = 5,
  MIDDLE,
  WINDOW,
  FOURTH,
}
const mySeat = SeatChoice.AISLE;

//InterFace
interface user {
  userName: string;
  readonly DBid: string;
  email: string;
  // startTrail: () => string;
  startTrail(): string;
  getCoupon(couponName: string): number;
}
// i can reason the value again
interface user {
  gitHubId?: string;
}

interface admin extends user {
  role: "admin" | "user";
}

const sovon: admin = {
  DBid: "jkk34",
  role: "admin",
  userName: "sovon",
  email: "sovon@gmail",
  startTrail: () => {
    return "Sovon";
  },
  getCoupon: (name: "sovon21") => {
    return 324;
  },
};
