import React from 'react';
import axios from 'axios';

class ContactForm extends React.Component {
    constructor(props) {
        super();
        this.state = {
            name: '',
            email: '',
            message: ''
        };
    }

    handleSubmit(e) {
        e.preventDefault();

        axios({
            method: 'POST',
            url: 'http://localhost:3002/send',
            date: this.state
        }).then((response) => {
            if (response.data.status === 'success') {
                alert("Message Sent.");
                this.resetForm()
            } else if(response.data.status === 'fail') {
                alert("Message failed to send")
            }
        })
    }

    resetForm() {
        this.setState({name: '', email: '', message: ''});
    }

    render() {
        return (
            <div className="contact-form">
                <form id ="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail">Email address</label>
                        <input type="email" className="form-control" aria-describedby="emailHelp" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" rows="3"></textarea>
                    </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }

    onNameChange(e) {
        this.setState({name: e.target.value})
    }

    onEmailChange(e) {
        this.setState({email: e.target.value})
    }

    onMessageChange(e) {
        this.setState({message: e.target.value})
    }

    

}

export default ContactForm;
