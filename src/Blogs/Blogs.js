import React from 'react';
import { Accordion } from 'react-bootstrap';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


const Blogs = () => {
    const particlesInit = async (main) => {
        console.log(main);
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };
    return (
        <div>
            <div>
                <div>
                    <Particles
                        id="tsparticles"
                        init={particlesInit}
                        loaded={particlesLoaded}
                        options={{
                            background: {
                                color: {
                                    value: "#0d47a1",
                                },
                            },
                            fpsLimit: 120,
                            interactivity: {
                                events: {
                                    onClick: {
                                        enable: true,
                                        mode: "push",
                                    },
                                    onHover: {
                                        enable: true,
                                        mode: "repulse",
                                    },
                                    resize: true,
                                },
                                modes: {
                                    push: {
                                        quantity: 4,
                                    },
                                    repulse: {
                                        distance: 200,
                                        duration: 0.4,
                                    },
                                },
                            },
                            particles: {
                                color: {
                                    value: "#ffffff",
                                },
                                links: {
                                    color: "#ffffff",
                                    distance: 150,
                                    enable: true,
                                    opacity: 0.5,
                                    width: 1,
                                },
                                collisions: {
                                    enable: true,
                                },
                                move: {
                                    direction: "none",
                                    enable: true,
                                    outModes: {
                                        default: "bounce",
                                    },
                                    random: false,
                                    speed: 6,
                                    straight: false,
                                },
                                number: {
                                    density: {
                                        enable: true,
                                        area: 800,
                                    },
                                    value: 80,
                                },
                                opacity: {
                                    value: 0.5,
                                },
                                shape: {
                                    type: "circle",
                                },
                                size: {
                                    value: { min: 1, max: 5 },
                                },
                            },
                            detectRetina: true,
                        }}
                    />
                </div>
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
                                <h3>There are many services which Firebase provides, Most useful of them are:-</h3>
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
            </div>
            <h1 className='bg-primary'>lo aijka</h1>
        </div>
    );
};

export default Blogs;