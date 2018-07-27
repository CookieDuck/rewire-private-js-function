import {
    addOneWithHiddenFunction, 
    addTheThreeArguments, 
    __RewireAPI__ as fooRewire
} from './foo.js'

describe('main', () => {
    afterEach(() => {
        fooRewire.__ResetDependency__('hidden');
    });

    describe('example one', () => {
        it('should use the normal thing when not rewired', () => {
            expect(addOneWithHiddenFunction(41)).toBe(42);
        });

        it('should be able to rewire a method that was not exported', () => {
            fooRewire.__Rewire__('hidden', function (arg) {
                return 100 + arg;
            });
    
            expect(addOneWithHiddenFunction(42)).toBe(142);
        });
    });

    describe('example 2', () => {
        it('normally adds the three arguments', () => {
            expect(addTheThreeArguments(1, 2, 3)).toBe(6);
        });
    
        it('should be able to use rewire to return an input argument', () => {
            fooRewire.__Rewire__('hiddenThreeArgs', function (arg1, arg2, arg3) {
                return arg2;
            });
    
            expect(addTheThreeArguments(1, 2, 3)).toBe(2);
        });
    });
});