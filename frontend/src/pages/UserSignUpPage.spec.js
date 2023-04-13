import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { UserSignUpPage } from './UserSignUpPage';

beforeEach(cleanup);

describe('UserSignUpPage', () => {

    describe('Layout', () => {
        it('has header of sign up', () => {
            const { container } = render(<UserSignUpPage/>)
            const header = container.querySelector('h1');
            expect(header).toHaveTextContent('Sign Up');
        })
        it('has input for display name', () => {
            const { queryByPlaceholderText } = render(<UserSignUpPage/>);
            const displayNameInput = queryByPlaceholderText('Your display name');
            expect(displayNameInput).toBeInTheDocument();
        })
        it('has input for username name', () => {
            const { queryByPlaceholderText } = render(<UserSignUpPage/>);
            const username = queryByPlaceholderText('Your username');
            expect(username).toBeInTheDocument();
        })
        it('has input for password name', () => {
            const { queryByPlaceholderText } = render(<UserSignUpPage/>);
            const password = queryByPlaceholderText('Your password');
            expect(password).toBeInTheDocument();
        })
        it('has password type for password input', () => {
            const { queryByPlaceholderText } = render(<UserSignUpPage/>);
            const passwordInput = queryByPlaceholderText('Your password');
            expect(passwordInput.type).toBe('password');
        })
        it('has input for password repeat', () => {
            const { queryByPlaceholderText } = render(<UserSignUpPage/>);
            const passwordRepeat = queryByPlaceholderText('Repeat your password');
            expect(passwordRepeat).toBeInTheDocument();
        })
        it('has password type for password repeat input', () => {
            const { queryByPlaceholderText } = render(<UserSignUpPage/>);
            const passwordRepeat = queryByPlaceholderText('Repeat your password');
            expect(passwordRepeat).toBeInTheDocument();
        })
        it('has submit button', () => {
            const { container } = render(<UserSignUpPage/>);
            const button = container.querySelector('button');
            expect(button).toBeInTheDocument();
        })
    })

})