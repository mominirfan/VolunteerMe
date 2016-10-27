import { TestBed, inject } from '@angular/core/testing';

import { CreateNonprofitComponent } from './create-nonprofit.component';

describe('a create-nonprofit component', () => {
	let component: CreateNonprofitComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				CreateNonprofitComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([CreateNonprofitComponent], (CreateNonprofitComponent) => {
		component = CreateNonprofitComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});