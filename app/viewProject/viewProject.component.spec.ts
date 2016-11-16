import { TestBed, inject } from '@angular/core/testing';

import { ViewProjectComponent } from './viewProject.component';

describe('a viewProject component', () => {
	let component: ViewProjectComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ViewProjectComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ViewProjectComponent], (ViewProjectComponent) => {
		component = ViewProjectComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});