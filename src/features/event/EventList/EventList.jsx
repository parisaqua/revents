import React, { Component, Fragment } from 'react'
import EventListItem from './EventListItem'

class EventList extends Component {
    render() {
        const {events, deleteEvent} = this.props;
        return (
            <div>
                <Fragment>
                    {events.map(event => (
                        <EventListItem 
                            key={event.id}  
                            event={event} 
                            deleteEvent={deleteEvent} 
                        />
                    ))}
                </Fragment>
            </div>
        )
    }
}

export default EventList;
