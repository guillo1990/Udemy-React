// Per executar ----> npm run test

describe("Proves a l'arxiu demo.test.js", () => {
    test('The strings should be equal', () => {
        
        const msg = "Hello World!";

        const msg2 = `Hello World!`;

        expect( msg ).toBe( msg2 );
    });
});
