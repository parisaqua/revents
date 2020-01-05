import React, { Component } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react';

class EventForm extends Component {
    render() {
        const {cancelFormOpen} = this.props;
        return (
            <Segment>
            <Form>
                <Form.Field>
                    <label>Evènement</label>
                    <input placeholder="First Name" />
                </Form.Field>
                <Form.Field>
                    <label>Date</label>
                    <input type="date" placeholder="Event Date" />
                </Form.Field>
                <Form.Field>
                    <label>Ville</label>
                    <input placeholder="City event is taking place" />
                </Form.Field>
                <Form.Field>
                    <label>Venue</label>
                    <input placeholder="Enter the Venue of the event" />
                </Form.Field>
                <Form.Field>
                    <label>Organisé par</label>
                    <input placeholder="Enter the name of person hosting" />
                </Form.Field>
                <Button positive type="submit">
                    Submit
                </Button>
                <Button onClick={cancelFormOpen} type="button">
                    Cancel
                </Button>
            </Form>
            </Segment>
        )
    }
}

export default EventForm;
