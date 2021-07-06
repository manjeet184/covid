import React from 'react';
import { Container } from '@material-ui/core';

const About = () => {
    return (
        <Container style={{ marginTop: 120 }}>
            <h1>Vaccine Availability Checker</h1>
            <h5>This project is developed in React environment. It shows the real time vaccine availabilty using the PIN code of the place. This can be very helpful to the people for the proper awarness of the resource. </h5>
            <h6>Tech Used: Reactjs, react-hook, Material UI</h6>
            <h6>Data Retrival: using cowin open api. </h6>
            <h6>Data Entry: using Fetch API, stats and props.</h6>
            <h6>Time Taken: 1 month</h6>
            <h6>Team Member: 1(self)</h6>
        </Container>
    )
}

export default About
