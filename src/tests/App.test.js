import React from 'react';
import {render} from '@testing-library/react';
import App from '../App';

test('App renders without crashing', () => {
    render(<App />);
})

test('dropdown', () => {
    const {getByTestId} = render(<App />);

    const dropdown= getByTestId('dropdown');

    const {getByText} = dropdown;

    getByText(/search a season/i);
})




