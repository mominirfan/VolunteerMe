import { TestBed, inject } from '@angular/core/testing';

import { NonprofitDashboardComponent } from './nonprofit-dashboard.component';

describe('a nonprofit-dashboard component', () => {
	let component: NonprofitDashboardComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				NonprofitDashboardComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([NonprofitDashboardComponent], (NonprofitDashboardComponent) => {
		component = NonprofitDashboardComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});