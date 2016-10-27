import { TestBed, inject } from '@angular/core/testing';

import { CreateVolunteerComponent } from './create-volunteer.component';

describe('a create-volunteer component', () => {
	let component: CreateVolunteerComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				CreateVolunteerComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([CreateVolunteerComponent], (CreateVolunteerComponent) => {
		component = CreateVolunteerComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});