"use strict";
const testing_1 = require('@angular/core/testing');
const login_component_1 = require('./login.component');
describe('a login component', () => {
    let component;
    // register all needed dependencies
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            providers: [
                login_component_1.LoginComponent
            ]
        });
    });
    // instantiation through framework injection
    beforeEach(testing_1.inject([login_component_1.LoginComponent], (LoginComponent) => {
        component = LoginComponent;
    }));
    it('should have an instance', () => {
        expect(component).toBeDefined();
    });
});
//# sourceMappingURL=login.component.spec.js.map