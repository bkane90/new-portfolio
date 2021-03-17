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

                    <img src={MyPhoto} className='MyPhoto pb-5' alt='Me' />

                    <Content>
                        <p>Hey there! I'm Bob Kane, a full-stack web developer based out of Brooklyn, NY with a background in finance and marketing. As a recent Ironhack graduate, I'm most familar with the technologies used in the MERN stack (MongoDB, Express.js, React.js, Node.js).</p>

                        <p>Critical thinking and problem solving are in my nature, so it's fitting that I can fully integrate those skills into my career through coding. I'm very solutions-oriented, and I instinctively try to understand why and how things work the way they do. </p>

                        <p> As a student of life, I'm deeply passionate about self-improvement and have an insatisable appetite for learning. In my neverending quest for knowledge, I'm always seeking to better myself and continually learn new things in all aspects of life. In terms of web development, these qualities allow me to push the limitations of my current capabilities while always striving to become a better programmer.</p>

                        <p>When I'm not busy coding, you can usually find me enjoying some of my favorite hobbies. These include reading, meditation, yoga, weight-training, snowboarding, fishing, cooking, traveling, DJing, and jigsaw puzzles. Besides programming languages, I'm also currently learning how to speak Spanish. Eventually I strive to be bilingual and add that to my already dynamic skillset.</p>
                    </Content>
                </Row>
            </Container>
        </div>
    );

}

export default AboutPage;