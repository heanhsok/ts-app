import faker from 'faker';
import { Mappable } from './CustomMap';

export class Company {

	companyName: string;
	catchPhrase: string;
	location: {
		lat: number,
		long: number
	};
	color: string = "red";

	constructor() { 
		this.companyName = faker.company.companyName();
		this.catchPhrase= faker.company.catchPhrase();
		this.location = {
			lat: parseFloat(faker.address.latitude()),
			long: parseFloat(faker.address.longitude())
		}
	}

	markerContent(): string {
		return `
			<div>
				<h1>Company Name: ${this.companyName}</h1>
				<h3>Slogan: ${this.catchPhrase}</h3>
			</div>
		`;
	}
}
