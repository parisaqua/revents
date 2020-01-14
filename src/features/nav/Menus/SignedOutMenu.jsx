import React from 'react'
import { Button, Menu } from 'semantic-ui-react';

const SignedOutMenu = ({signIn}) => {
    return (
        <Menu.Item position="right">
            <Button basic onClick={signIn} inverted content="Connexion" />
            <Button 
                basic 
                inverted 
                content="Inscription" 
                style={{marginLeft: '0.5em'}} 
            />
        </Menu.Item>
    )
}

export default SignedOutMenu;

