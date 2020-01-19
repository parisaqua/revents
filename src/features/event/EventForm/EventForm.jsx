import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Segment, Form, Button } from 'semantic-ui-react';
import {createEvent, updateEvent } from '../eventActions';
import cuid from 'cuid';

const mapState = (state, ownProps) => {
    const eventId = ownProps.match.params.id;

    let event = {
        title:'',
        date:'',
        city:'',
        venue:'',
        hostedBy:''
    }

    if (eventId && state.events.length > 0) {
        event = state.events.filter(event => event.id === eventId)[0]
    }

    return {
        event
    }
};

const actions = {
    createEvent,
    updateEvent
};

class EventForm extends Component {

    state = {...this.props.event};

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
            this.props.history.push(`/events/${this.state.id}`)
        } else {
            const newEvent = {
                ...this.state,
                id: cuid(),
                hostPhotoURL: "/assets/user.png"
            }
            this.props.createEvent(newEvent);
            this.props.history.push(`/events`) // /${newEvent.id}
        }
    };

    handleInputChange = ({target: {name, value}}) => {
        this.setState({
            [name]: value
        })
    }

    render() {
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
                <Button onClick={this.props.history.goBack} type="button">
                    Annuler
                </Button>
            </Form>
            </Segment>
        )
    }
}

export default  connect(mapState, actions) (EventForm);
