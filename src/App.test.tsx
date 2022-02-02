import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';
import {addMessage, addPost, state, updateNewPostText} from "./Redux/state";


test('renders learn react link', () => {
    render(<App profilePage={state.profilePage}
                dialogsPage={state.dialogsPage}
                addPost={addPost}
                addMessage={addMessage}
                updateNewPostText={updateNewPostText}
    />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
