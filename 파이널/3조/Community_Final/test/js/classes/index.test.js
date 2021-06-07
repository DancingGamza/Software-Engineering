"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classes_1 = require("../../../public/js/classes");
<<<<<<< HEAD
jest.mock("../../../public/js/classes");
=======
>>>>>>> 37436b7cf9dd5399c94b4ad4e34c1297ef6a803d
describe('serviceDisplay test suite', () => {
    let serviceDisplayMock = {
        ctrlEditDisplayHtml: jest.fn(),
        hello: jest.fn()
    };
    beforeEach(() => {
<<<<<<< HEAD
        serviceDisplayMock = new classes_1.serviceDisplay();
=======
        serviceDisplayT = new classes_1.serviceDisplay();
>>>>>>> 37436b7cf9dd5399c94b4ad4e34c1297ef6a803d
    });
    afterEach(() => {
        jest.clearAllMocks();
    });
    test('ctrlEditDisplayHtml to be called', () => {
        expect(serviceDisplayMock.hello).toBeCalled();
    });
});
