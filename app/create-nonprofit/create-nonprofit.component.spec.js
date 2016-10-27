"use strict";
const testing_1 = require('@angular/core/testing');
const create_nonprofit_component_1 = require('./create-nonprofit.component');
describe('a create-nonprofit component', () => {
    let component;
    // register all needed dependencies
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            providers: [
                create_nonprofit_component_1.CreateNonprofitComponent
            ]
        });
    });
    // instantiation through framework injection
    beforeEach(testing_1.inject([create_nonprofit_component_1.CreateNonprofitComponent], (CreateNonprofitComponent) => {
        component = CreateNonprofitComponent;
    }));
    it('should have an instance', () => {
        expect(component).toBeDefined();
    });
});
//# sourceMappingURL=create-nonprofit.component.spec.js.map