import { TestBed, inject } from '@angular/core/testing';

import { PostProjectComponent } from './postProject.component';

describe('a postProject component', () => {
	let component: PostProjectComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				PostProjectComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([PostProjectComponent], (PostProjectComponent) => {
		component = PostProjectComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});