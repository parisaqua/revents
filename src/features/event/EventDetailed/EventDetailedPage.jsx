import React from 'react'
import { Grid, GridColumn } from 'semantic-ui-react';
import EventDetailedHeader from './EventDetailedHeader';
import EventDetailedInfo from './EventDetailedInfo';
import EventDetailedChats from './EventDetailedChats';
import EventDetailedSidebar from './EventDetailedSidebar';

const EventDetailedPage = () => {
    return (
        <Grid>
            <GridColumn width={10}>
                <EventDetailedHeader />
                <EventDetailedInfo />
                <EventDetailedChats />
            </GridColumn>
            <GridColumn width={6}>
                <EventDetailedSidebar />
            </GridColumn>
        </Grid>
    )
}

export default EventDetailedPage;

