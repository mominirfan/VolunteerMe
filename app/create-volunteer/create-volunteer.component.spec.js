"use strict";
const testing_1 = require('@angular/core/testing');
const create_volunteer_component_1 = require('./create-volunteer.component');
describe('a create-volunteer component', () => {
    let component;
    // register all needed dependencies
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            providers: [
                create_volunteer_component_1.CreateVolunteerComponent
            ]
        });
    });
    // instantiation through framework injection
    beforeEach(testing_1.inject([create_volunteer_component_1.CreateVolunteerComponent], (CreateVolunteerComponent) => {
        component = CreateVolunteerComponent;
    }));
    it('should have an instance', () => {
        expect(component).toBeDefined();
    });
});
//# sourceMappingURL=create-volunteer.component.spec.js.map