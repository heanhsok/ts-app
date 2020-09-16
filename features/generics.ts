// 
class ArrayOfNumbers {

	constructor(public collection: number[]) {}

	get(index: number): number {
		return this.collection[index];
	}
}
class ArrayOfStrings {

	constructor(public collection: string[]) {}

	get(index: string): string {
		return this.collection[index];
	}
}

// using generics
class ArrayOfAnything<T> {

	constructor(public collection: T[]) {}

	get(index: number): T {
		return this.collection[index];
	}
}
new ArrayOfAnything<string>(['hello', 'world']);
const arr = new ArrayOfAnything(['hello', 'world']); // type inference

// generics with functions
function printStrings(arr: string[]): void {
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
}
function printNumbers(arr: number[]): void {
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
}
function printAnything<T>(arr: T[]): void {
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
}
printAnything<string>(['hello','world']);
printAnything(['hello','world']); // type inference


// generic constraint
class Car {
	print(): void { console.log('i am a car')};
}
class House {
	print(): void { console.log('i am a house')};
}

interface Printable {
	print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
	for(let i = 0; i < arr.length; i++) {
		arr[i].print();
	}
}

printHousesOrCars<House>([new House(), new House]);
printHousesOrCars<Car>([new Car(), new Car]);
printHousesOrCars([new Car(), new House]);

