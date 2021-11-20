
import '@testing-library/jest-dom';
import { getSaludo } from '../../base/02-template-string';

describe('Proves a 02-template-string.js', () => {
    test('getSaludo ha de retornar Hola Fernando', () => {
        const nom = 'Fernando';

        const salut = getSaludo( nom );

        expect( salut ).toBe( 'Hola ' + nom );
    });

    test('getSaludo ha de retornar Hola Carlos', () => {
        const salut = getSaludo( );

        expect( salut ).toBe( 'Hola Carlos' );
    })
})