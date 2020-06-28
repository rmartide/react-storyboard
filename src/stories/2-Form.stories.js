import React from 'react';
import { action } from '@storybook/addon-actions';
import Form from '../components/Form';
import componentNotes from '../components/form.md';

export default {
    title: 'Form',
    component: Form,
    parameters: {notes: componentNotes}
};

export const Left = () => {
    const ref = React.createRef();
    return (
        <>
        <Form ref={ref} label="Pepega" onChange={action('onChange')}></Form>
        <button onClick={action(ref.value)}>Show ref</button>
        </>
    )
}