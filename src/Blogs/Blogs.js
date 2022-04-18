import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='mx-auto w-50 m-5'>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Difference between Authentication and Authorization?</Accordion.Header>
                    <Accordion.Body>
                    <h3 className='text-primary'>Authentication:-</h3>
                        Authentication, in the form of a key. The lock on the door only grants access to someone with the correct key in much the same way that a system only grants access to users who have the correct credentials.
                        <h3 className='text-primary'>Authorization:-</h3>
                        Authorization, in the form of permissions. Once inside, the person has the authorization to access the kitchen and open the cupboard that holds the pet food. The person may not have permission to go into the bedroom for a quick nap. 
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>why are you using firebase ? What other option do you have to implement authentication.</Accordion.Header>
                    <Accordion.Body>
                        <h3 className='text-primary'>Reason for use:-</h3>
                        Firebase is used for many purposes that can help your apps to develop, grow and make it a quality app. 
                        <h3 className='text-primary'>Firebase authentication Alternatives Options:-</h3>
                        STYTCH, Ory, Supabase, Okta, PingIdentity, Keycloak, Frontegg, Authress, Auth0, Amazon Cognito, OneLogin etc.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>What other services does firebase provide other than authentication?</Accordion.Header>
                    <Accordion.Body>
                    <h3 className='text-primary'>There are many services which Firebase provides, Most useful of them are:-</h3>
                        <li>Cloud Firestore</li>
                        <li>Cloud Functions</li>
                        <li>Hosting</li>
                        <li>Cloud Storage</li>
                        <li>Google Analytics</li>
                        <li>Dynamic Links</li>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;