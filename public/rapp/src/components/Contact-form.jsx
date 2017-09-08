import React, { Component } from 'react';

import Loader from './Loader';

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            telephone: null,
            email: null,
            message: null,
            errorName: false,
            errorTelephone: false,
            errorMessage: false,
            isSending: false
        };
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
    }

    handleSubmitForm() {
        if (this.validateForm()) {
            this.setState({isSending: true});
            fetch('/message', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: this.state.name,
                    telephone: this.state.telephone,
                    email: this.state.email,
                    message: this.state.message,
                    itemId: this.props.itemId,
                    agentId: this.props.agentId
                })
            }).then((resp) => {
                this.setState({isSending: false});
                this.props.handleHideForm();
                //TODO:add notification here
                console.log('form has been sent', resp);
            });
        }
    }

    handleFieldChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    validateForm() {
        let errorState,
            errorCnt = 0;
        if (this.state.name && this.state.name.length > 0) {
            errorState = false;
        } else {
            errorState = true;
            errorCnt++;
        }
        this.setState({errorName: errorState});
        if (this.state.telephone && this.state.telephone.length > 0) {
            errorState = false;
        } else {
            errorState = true;
            errorCnt++;
        }
        this.setState({errorTelephone: errorState});
        if (this.state.message && this.state.message.length > 0) {
            errorState = false;
        } else {
            errorState = true;
            errorCnt++;
        }
        this.setState({errorMessage: errorState});
        return errorCnt == 0;
    }

    render() {
        if (this.state.isSending) {
            return(<Loader/>);
        }
        return (
            <div className="Container Container-md" style={{margin: 'auto'}}>
                <div className="Row Row-md">
                    <div className="ContactListedBy">
                        <form>
                            <div className="Row Row-sm"></div>
                            <div className="Row Row-sm">
                                <div className="Input">
                                    <label className="Label">Your Message</label>
                                    <textarea
                                        maxlength="750"
                                        required=""
                                        type="textarea"
                                        name="message"
                                        className="Input-element Input-textarea contactFormInput"
                                        onChange={this.handleFieldChange}
                                        value={this.state.message}
                                        style={{height: 58 + 'px', width: 100 + '%'}}>{this.state.message}</textarea>
                                    {this.state.errorMessage &&
                                        <p className="Text Utils-alert Text-sm">Message can't be empty</p>
                                    }
                                </div>
                            </div>
                            <div className="Row Row-sm">
                                <div className="Input Contact-message-box">
                                    <label className="Label">Your email</label>
                                    <input
                                        type="email"
                                        className="Input-element Utils-text-overflow contactFormInput"
                                        maxlength="50"
                                        name="email"
                                        onChange={this.handleFieldChange}
                                        value={this.state.email}/>
                                </div>
                            </div>
                            <div className="Row">
                                <div className="Input">
                                    <label className="Label">Your name</label>
                                    <input
                                        maxlength="50"
                                        required="required"
                                        name="name"
                                        className="Input-element Utils-text-overflow contactFormInput"
                                        onChange={this.handleFieldChange}
                                        value={this.state.name}/>
                                    {this.state.errorName &&
                                        <p className="Text Utils-alert Text-sm">Name can't be empty</p>
                                    }
                                </div>
                            </div>
                            <div className="Row Row-sm">
                                <div className="Input">
                                    <label className="Label">Your phone number</label>
                                    <input type="tel"
                                       maxlength="15"
                                       required="required"
                                       name="telephone"
                                       value={this.state.telephone}
                                       onChange={this.handleFieldChange}
                                       placeholder="(123) 456-7890"
                                       className="Input-element Utils-text-overflow contactFormInput"/>
                                    {this.state.errorTelephone &&
                                        <p className="Text Utils-alert Text-sm">Telephone can't be empty</p>
                                    }
                                </div>
                            </div>
                            <div className="Contact-submit-btn">
                                <button
                                    type="button"
                                    className="Button Button-lg Button-text-color Button-full"
                                    onClick={this.handleSubmitForm}>
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactForm;