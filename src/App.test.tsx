import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';
import {state} from "./Redux/state";


test('renders learn react link', () => {
    render(<App profilePage={state.profilePage} dialogsPage={state.dialogsPage}/>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
