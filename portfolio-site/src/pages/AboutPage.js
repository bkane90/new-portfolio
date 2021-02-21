import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

import MyPhoto from '../assets/images/MyPhoto.png';

function AboutPage(props) {

    return (
        <div>
            <Hero title={props.title} />

            {/* <img src={MyPhoto} className='MyPhoto' alt='Me' /> */}

            <Content>
                <p>Hey there! I'm Bob Kane, a full-stack web developer with a background in finance and marketing. As an Ironhack graduate, I'm most familar with the technologies used in the MERN stack (MongoDB, Express.js, React.js, Node.js).</p>

                <p>Critical thinking and problem solving are in my nature, so it's fitting that I can fully integrate those skills into my career through coding. I'm very solutions-oriented, and I instinctively try to understand why and how things work the way they do. </p>

                <p> As a student of life, I'm deeply passionate about learning and self-improvement. In my constant quest for knowledge, I'm always seeking to better myself and continually learn new things in all facets of life. In terms of web development, these qualities allow me to push the limitations of my current capabilities while always striving to become a better programmer.</p>

                <p>When I'm not busy coding, you can usually find me enjoying some of my favorite hobbies. These include meditation, yoga, weight-training, snowboarding, DJing, cooking, fishing, and traveling. Besides programming languages, I'm also currently learning how to speak Spanish. Eventually I strive to be bilingual and add that to my dynamic skillset.</p>
            </Content>
        </div>
    );

}

export default AboutPage;