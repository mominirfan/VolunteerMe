"use strict";
const testing_1 = require('@angular/core/testing');
const landing_component_1 = require('./landing.component');
describe('a landing component', () => {
    let component;
    // register all needed dependencies
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            providers: [
                landing_component_1.LandingComponent
            ]
        });
    });
    // instantiation through framework injection
    beforeEach(testing_1.inject([landing_component_1.LandingComponent], (LandingComponent) => {
        component = LandingComponent;
    }));
    it('should have an instance', () => {
        expect(component).toBeDefined();
    });
});
//# sourceMappingURL=landing.component.spec.js.map