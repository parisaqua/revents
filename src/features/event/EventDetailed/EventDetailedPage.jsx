import React from 'react';
import { connect } from 'react-redux';
import { Grid, GridColumn } from 'semantic-ui-react';
import EventDetailedHeader from './EventDetailedHeader';
import EventDetailedInfo from './EventDetailedInfo';
import EventDetailedChats from './EventDetailedChats';
import EventDetailedSidebar from './EventDetailedSidebar';

const mapState = (state, ownProps) => {
    const eventId = ownProps.match.params.id;

    let event = {};

    if (eventId && state.events.length > 0) {
        event = state.events.filter(event => event.id === eventId)[0]
    }

    return {
        event
    }
}

const EventDetailedPage = ({event}) => {
    return (
        <Grid>
            <GridColumn width={10}>
                <EventDetailedHeader event={event} />
                <EventDetailedInfo event={event} />
                <EventDetailedChats />
            </GridColumn>
            <GridColumn width={6}>
                <EventDetailedSidebar attendees={event.attendees} />
            </GridColumn>
        </Grid>
    )
}

export default connect(mapState) (EventDetailedPage);

