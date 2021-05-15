import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Hero from '../components/Hero';
import Content from '../components/Content';


import MyPhoto from '../assets/images/MyPhoto.png';

function AboutPage(props) {

    return (
        <div>
            <Hero title={props.title} />
            <Container fluid={true}>
                <Row className="justify-content-center p-0">

                    <img src={MyPhoto} className='pb-5 mb-3 m-0' alt='Me' />

                    <Content>
                        <p>Hey there! I'm Bob Kane, a full-stack web developer based out of Brooklyn, NY with a background in finance and marketing.
                        I'm currently working as a freelance web developer while I pursue my next full-time role. As an Ironhack bootcamp graduate,
                        I'm most familar with the technologies used in the MERN stack (MongoDB, Express, React, Node.js) as well as JavaScript, HTML, CSS, and Wordpress. </p>

                        <p>Critical thinking and problem solving are in my nature, so it's fitting that I can fully integrate those skills into my career through coding.
                        I'm very solutions-oriented, and I instinctively try to understand why and how things work the way they do.
                        I'm also a highly effective communicator, making collobration with coworkers and clients effortless.</p>

                        <p> As a student of life, I'm deeply passionate about self-improvement and have an insatiable appetite for learning.
                        In my neverending quest for knowledge, I'm always seeking to better myself and continually learn new things in all aspects of life.
                        In terms of web development, these qualities allow me to push the limitations of my current capabilities while always striving to become a better programmer.</p>

                        <p>Besides programming and self-improvement, I'm also immensely dedicated to health, fitness, and mindfulness.
                        When I'm not busy coding, you can usually find me enjoying some of my favorite hobbies.
                        These include reading, meditation, yoga, exercise, snowboarding, fishing, cooking, traveling, DJing, and solving jigsaw puzzles.
                        Besides programming languages, I'm also currently learning how to speak Spanish. Eventually I strive to be bilingual and add that to my already dynamic skillset.</p>
                    </Content>
                </Row>
            </Container>
        </div>
    );

}

export default AboutPage;