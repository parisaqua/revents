import React, { Fragment } from 'react'
import { Segment, Item, Label, ItemGroup } from 'semantic-ui-react';

const EventDetailedSidebar = ({attendees}) => {
  const isHost = false;
  return (
          <Fragment>
            <Segment
              textAlign='center'
              style={{ border: 'none' }}
              attached='top'
              secondary
              inverted
              color='teal'
            >
              {attendees && attendees.length} {attendees && attendees.length === 1 ? 'personne' : 'personnes'} participe{attendees && attendees.length === 1 ? '' : 'nt'}
            </Segment>
            <Segment attached>
              <ItemGroup relaxed divided>
                {attendees && attendees.map((attendee) => (
                  <Item key={attendee.id} style={{ position: 'relative' }}>
                    {isHost &&
                    <Label
                      style={{ position: 'absolute' }}
                      color='orange'
                      ribbon='right'
                    > 
                      Hôte
                    </Label>}
                    <Item.Image size='tiny' src={attendee.photoURL} />
                    <Item.Content  verticalAlign='middle' >
                      <Item.Header as='h3'>{attendee.name}</Item.Header>
                    </Item.Content>
                  </Item>
                  ))}

              </ItemGroup>
            </Segment>
          </Fragment>
  )
}

export default EventDetailedSidebar;
