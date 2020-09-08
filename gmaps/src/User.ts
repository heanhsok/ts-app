import faker from 'faker';
import { Mappable } from './CustomMap';

export class User implements Mappable {

	name: string;
	location: {
		lat: number,
		long: number
	};
	color: string = "red";

	constructor() {
		this.name = faker.name.findName();
		this.location = {
			lat: parseFloat(faker.address.latitude()),
			long: parseFloat(faker.address.longitude())
		}
	}

	markerContent(): string {
		return `User: ${this.name}`;
	}
}
