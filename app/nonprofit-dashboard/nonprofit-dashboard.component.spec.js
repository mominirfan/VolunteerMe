"use strict";
const testing_1 = require('@angular/core/testing');
const nonprofit_dashboard_component_1 = require('./nonprofit-dashboard.component');
describe('a nonprofit-dashboard component', () => {
    let component;
    // register all needed dependencies
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            providers: [
                nonprofit_dashboard_component_1.NonprofitDashboardComponent
            ]
        });
    });
    // instantiation through framework injection
    beforeEach(testing_1.inject([nonprofit_dashboard_component_1.NonprofitDashboardComponent], (NonprofitDashboardComponent) => {
        component = NonprofitDashboardComponent;
    }));
    it('should have an instance', () => {
        expect(component).toBeDefined();
    });
});
//# sourceMappingURL=nonprofit-dashboard.component.spec.js.map