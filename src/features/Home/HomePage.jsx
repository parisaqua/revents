import React from 'react'
import { Segment, Container, Image, Header, Button, Icon } from 'semantic-ui-react';

const HomePage = ({history}) => {
    return (
            <Segment inverted textAlign='center' vertical className='masthead'>
            <Container text>
              <Header as='h1' inverted>
                <Image
                  size='massive'
                  src='/assets/logo.png'
                  alt='logo'
                  style={{ marginBottom: 12 }}
                />
                Rencards
              </Header>
              <Button onClick={() => history.push('/events')} size='huge' inverted>
                Prêt, partez !
                <Icon name='right arrow' inverted />
              </Button>
            </Container>
          </Segment>
    )
}

export default HomePage;
