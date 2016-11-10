"use strict";
const testing_1 = require('@angular/core/testing');
const viewProject_component_1 = require('./viewProject.component');
describe('a viewProject component', () => {
    let component;
    // register all needed dependencies
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            providers: [
                viewProject_component_1.ViewProjectComponent
            ]
        });
    });
    // instantiation through framework injection
    beforeEach(testing_1.inject([viewProject_component_1.ViewProjectComponent], (ViewProjectComponent) => {
        component = ViewProjectComponent;
    }));
    it('should have an instance', () => {
        expect(component).toBeDefined();
    });
});
//# sourceMappingURL=viewProject.component.spec.js.map