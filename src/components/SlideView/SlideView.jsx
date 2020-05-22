import React from 'react';
import styled from 'styled-components';
import styles from './SlideView.module.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from '../'; 

const Wrapper = styled.div`
    padding: 0 32px 0 32px;
`;

export default function SlideView( {slides} ) {
    return (
        <Wrapper>
            <Slider speed={500} slidesToShow={1} slidesToScroll={1} infinite={false} dots={true}>


                {slides.map(info =>
                    <Card info={info} />
                )}

            </Slider>
        </Wrapper>
    );
}



