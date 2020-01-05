import React, { Component } from 'react'
import { Image, Item } from 'semantic-ui-react';

class EventListAttendee extends Component {
    render() {
        const {attendee} = this.props;
        return (
            <Item>
                <Image asc="a" size="mini" circular src={attendee.photoURL}/>
            </Item>
        )
    }
}

export default EventListAttendee;
