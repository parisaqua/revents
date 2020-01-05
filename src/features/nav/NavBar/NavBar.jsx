import React, { Component } from 'react'
import { Menu, Button, Container } from 'semantic-ui-react';

class NavBar extends Component {
    render() {
        return (
                 <Menu inverted fixed="top">
                   <Container>
                     <Menu.Item header>
                       <img src="assets/logo.png" alt="logo" />
                       A ne pas rater !
                     </Menu.Item>
                     <Menu.Item name="Evènements" />
                     <Menu.Item>
                       <Button floated="right" positive inverted content="Nouvel évènement" />
                     </Menu.Item>
                     <Menu.Item position="right">
                       <Button basic inverted content="Connexion" />
                       <Button basic inverted content="Déconnexion" style={{marginLeft: '0.5em'}} />
                     </Menu.Item>
                   </Container>
                 </Menu>
        )
    }
}

export default NavBar;
