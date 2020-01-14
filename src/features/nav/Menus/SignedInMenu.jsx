import React from 'react'
import { Menu, Dropdown, Image } from 'semantic-ui-react';

const SignedInMenu = ({signOut}) => {
    return (
            <Menu.Item position="right">
              <Image avatar spaced="right" src='/assets/user.png' />
              <Dropdown pointing="top left" text="Frédéric">
                <Dropdown.Menu>
                  <Dropdown.Item text=" évènement" icon="plus" />
                  <Dropdown.Item text="Mes évènements" icon="calendar" />
                  <Dropdown.Item text="Mon réseau" icon="users" />
                  <Dropdown.Item text="Mon profil" icon="user" />
                  <Dropdown.Item text="Réglages" icon="settings" />
                  <Dropdown.Item onClick={signOut} text="Déconnexion" icon="power" />
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>
    )
}

export default SignedInMenu;