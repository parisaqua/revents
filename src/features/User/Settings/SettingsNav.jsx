import React, {Fragment} from 'react'
import { Header, Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const SettingsNav = () => {
    return (
        <Fragment>
            <Menu vertical>
            <Header icon="user" attached inverted color="grey" content="Profil" />
            <Menu.Item as={NavLink} to='/settings/basic' >Réglages de base</Menu.Item>
            <Menu.Item as={NavLink} to='/settings/about' >A propo de moi</Menu.Item>
            <Menu.Item as={NavLink} to='/settings/photos' >Mes photos</Menu.Item>
            </Menu>
            <Menu vertical>
            <Header
                icon="settings"
                attached
                inverted
                color="grey"
                content="Compte"
            />
            <Menu.Item as={NavLink} to='/settings/account' >Mon compte</Menu.Item>
            </Menu>
        </Fragment>
    )
}

export default SettingsNav;
