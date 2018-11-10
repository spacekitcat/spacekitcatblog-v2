import React from 'react';
import LandingPageTemplate from '../templates/landing-page-template';

import '../../App.css';

const LandingPage = props => (
    <LandingPageTemplate content={
        [
            {
                title: 'LZ77 compression algorothm exploration',
                primaryExternalUrl: 'https://github.com/spacekitcat/libz77',
                abstractText: "A NodeJS implementation of the LZ77 compression algorothm, I had a curiosity about the Sliding Window technique. I still have to implement a robust, space efficient binary serialisation format for it to work in a usable way. The code, as it stands, provides a small demonstration program which accepts a string argument and generates the compression packets for the input."
            },
            {
                title: 'Pure text Matrix-esque animation experiments',
                primaryExternalUrl: 'https://github.com/spacekitcat/hackertextjs',
                abstractText: "Hackertextjs is a widget library for creating a Matrix-esque animation effect within arbitrary HTML text elements. The animation text content of each frame is created one character at a time, the frame generator randomly decides to use underscores or the next character in the string provided by the client code. The probability of the renderer decisions are controlled by the noise ratio, a high noise ratio increases the likelyhood of it selecting an underscore. The client code can configure the renderer to generate a random noise ratio for each frame or it can ask it to use the SIN or COS function to calculate the noise ratio. Using SIN or COS obviously causes the value of the noise ratio to generate a wave effect. The client code tells the library how many rows of text to generate, and it carefully calculates the exact number of characters, so that each row has the exact same length. That last part was difficult and required a frustrating amount of trial and error."
            },
            {
                title: 'AWS Lambda exploration',
                primaryExternalUrl: 'https://github.com/spacekitcat/example-lambda-project',
                abstractText: "Created as a learning exercise. The project uses AWS Lambda, API Gateway, Cloudformation and CodeBuild to provide an endpoint which returns random quotes. The repository automatically builds and deploys itself via CloudFormation. The deploy is 90% automatic, but there are one or two small manual steps required at the moment."
            },
        ]}
    />);

export default LandingPage;
