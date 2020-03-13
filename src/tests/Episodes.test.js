import React from 'react';
import {render} from '@testing-library/react';
import Episodes from '../components/Episodes';

const episodes= [
    {
    name: 'dummy data',
    airDate: 'on today',
    runTime: 2,
    id: 1,
    }
];

test('Episode runs without crashing', () => {
    render(<Episodes episodes={episodes} />);
})

