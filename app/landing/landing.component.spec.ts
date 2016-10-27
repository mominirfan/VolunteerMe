import { TestBed, inject } from '@angular/core/testing';

import { LandingComponent } from './landing.component';

describe('a landing component', () => {
	let component: LandingComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				LandingComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([LandingComponent], (LandingComponent) => {
		component = LandingComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});