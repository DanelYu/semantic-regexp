import { matchStart, matchEnd } from "../boundaryConstraints";

describe('test boundaryConstraints',()=>{

    test('matchStart', () => {
        expect(matchStart()).toBe('^');
    })

    test('matchEnd', () => {
        expect(matchEnd()).toBe('$');
    })

})