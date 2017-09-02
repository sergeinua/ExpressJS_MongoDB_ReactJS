import React, { Component } from 'react';

class ContactForm extends Component {
    render() {
        let formData = 'q';
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
                                        maxlength="750" required="" type="textarea"
                                        className="Input-element Input-textarea contactFormInput"
                                        style={{height: 58 + 'px', width: 100 + '%'}}>I'd like to schedule a viewing for Oak Park City Apartments. Please contact me with more information!</textarea>
                                </div>
                            </div>
                            <div className="Row Row-sm">
                                <div className="Input Contact-message-box">
                                    <label className="Label">Your email</label>
                                    <input type="email"
                                        className="Input-element Utils-text-overflow contactFormInput"
                                        maxlength="50"
                                        required=""
                                        name="email"
                                        value=""/>
                                </div>
                            </div>
                            <div className="Row">
                                <div className="Input">
                                    <label className="Label">Your name</label>
                                    <input
                                        maxlength="50" required="" value=""
                                        className="Input-element Utils-text-overflow contactFormInput"/>
                                </div>
                            </div>
                            <div className="Row Row-sm">
                                <div className="Input">
                                    <label className="Label">Your phone number</label>
                                    <input type="tel"
                                       maxlength="15"
                                       required=""
                                       value=""
                                       placeholder="(123) 456-7890"
                                       className="Input-element Utils-text-overflow contactFormInput"/>
                                </div>
                            </div>
                            <div className="Contact-submit-btn">
                                <button
                                    type="button"
                                    className="Button Button-lg Button-text-color Button-full"
                                    onClick={() => this.props.handleSubmitForm(formData)}>
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