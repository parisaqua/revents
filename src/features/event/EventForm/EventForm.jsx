import React, { Component } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react';
//import { isThisHour } from 'date-fns';

class EventForm extends Component {

    state = {
        title:'',
        date:'',
        city:'',
        venue:'',
        hostedBy:''
    };

    componentDidMount() {
        if (this.props.selectedEvent !== null) {
            this.setState({
                ...this.props.selectedEvent
            })
        }
    }
    
    handleFormSubmit = evt => {
        evt.preventDefault();
        if (this.state.id) {
            this.props.updateEvent(this.state);
        } else {
            this.props.createEvent(this.state);
        }
    };

    handleInputChange = ({target: {name, value}}) => {
        this.setState({
            [name]: value
        })
    }

    render() {
        const {cancelFormOpen} = this.props;
        const {title, date, city, venue, hostedBy} = this.state;
        return (
            <Segment>
            <Form onSubmit={this.handleFormSubmit} autoComplete="off">
                <Form.Field>
                    <label>Evènement</label>
                    <input  
                        name="title"
                        onChange={this.handleInputChange} 
                        value={title}
                        placeholder="Titre de l'évènement" 
                    />
                </Form.Field>
                <Form.Field>
                    <label>Date</label>
                    <input 
                        name="date"
                        onChange={this.handleInputChange} 
                        value={date}
                        type="date" 
                        placeholder="Date de l'évènement" 
                    />
                </Form.Field>
                <Form.Field>
                    <label>Ville</label>
                    <input 
                        name="city"
                        onChange={this.handleInputChange}
                        value={city}
                        placeholder="La ville où se tient l'évènement" 
                    />
                </Form.Field>
                <Form.Field>
                    <label>Description</label>
                    <input 
                        name="venue"
                        onChange={this.handleInputChange} 
                        value={venue}
                        placeholder="Description de l'évènement" 
                    />
                </Form.Field>
                <Form.Field>
                    <label>Organisé par</label>
                    <input 
                        name="hostedBy"
                        onChange={this.handleInputChange} 
                        value={hostedBy}
                        placeholder="Nom de l'organisateur" 
                    />
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
