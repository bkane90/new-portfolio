import React from 'react';

import Card from '../components/Card';

import CryptopediaLogo from '../assets/images/CryptopediaLogo.png';
import Tesla from '../assets/images/Tesla.png';
import BezosBot from '../assets/images/BezosBot.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Cryptopedia',
                    subTitle: 'Cryptocurrency Trading Simulator',
                    imgSrc: CryptopediaLogo,
                    link: 'https://cryptopedia.netlify.app/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Nikola Tesla Storm Tracker',
                    subTitle: 'Track Storms using Google Maps API',
                    imgSrc: Tesla,
                    link: 'https://Nikola-Tesla-electric.netlify.app/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Bezos Takes Over the World (Again)',
                    subTitle: 'Futuristic Shooter Game',
                    imgSrc: BezosBot,
                    link: 'https://Bezos-domination-game.netlify.app/',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;
