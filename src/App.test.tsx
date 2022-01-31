import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';
import {addMessage, addPost, state} from "./Redux/state";


test('renders learn react link', () => {
    render(<App profilePage={state.profilePage}
                dialogsPage={state.dialogsPage}
                addPost={addPost}
                addMessage={addMessage}
    />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
