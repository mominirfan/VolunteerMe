"use strict";
const testing_1 = require('@angular/core/testing');
const postProject_component_1 = require('./postProject.component');
describe('a postProject component', () => {
    let component;
    // register all needed dependencies
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            providers: [
                postProject_component_1.PostProjectComponent
            ]
        });
    });
    // instantiation through framework injection
    beforeEach(testing_1.inject([postProject_component_1.PostProjectComponent], (PostProjectComponent) => {
        component = PostProjectComponent;
    }));
    it('should have an instance', () => {
        expect(component).toBeDefined();
    });
});
//# sourceMappingURL=postProject.component.spec.js.map