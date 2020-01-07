import React, { Component } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react';

class EventForm extends Component {

    state = {
        title:''
    }
    
    handleFormSubmit = (evt) => {
        evt.preventDefault();
        console.log(this.state)
    }

    handleTitleChange = (evt) => {
        this.setState({
            title: evt.target.value
        })
    }

    render() {
        const {cancelFormOpen} = this.props;
        const {title} = this.state;
        return (
            <Segment>
            <Form onSubmit={this.handleFormSubmit}>
                <Form.Field>
                    <label>Evènement</label>
                    <input  
                        onChange={this.handleTitleChange} 
                        value={title}
                        placeholder="Titre de l'évènement" 
                    />
                </Form.Field>
                <Form.Field>
                    <label>Date</label>
                    <input type="date" placeholder="Date de l'évènement" />
                </Form.Field>
                <Form.Field>
                    <label>Ville</label>
                    <input placeholder="La ville où se tient l'évènement" />
                </Form.Field>
                <Form.Field>
                    <label>Description</label>
                    <input placeholder="Description de l'évènement" />
                </Form.Field>
                <Form.Field>
                    <label>Organisé par</label>
                    <input placeholder="Nom de l'organisateur" />
                </Form.Field>
                <Button positive type="submit">
                    Enregistrer
                </Button>
                <Button onClick={cancelFormOpen} type="button">
                    Annuler
                </Button>
            </Form>
            </Segment>
        )
    }
}

export default EventForm;
