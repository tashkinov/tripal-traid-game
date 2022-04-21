import {useState} from "react";
import Heading from "../Heading";
import Container from "../Container";
import style from './Slider.module.scss';

const Slider = () => {
    return (
        <section className={style.section}>
            <div className={style.slider}>
                <Container className={style.sliderContent}>
                    <Heading level={1}>
                        Triple Triad Game
                    </Heading>
                    <Heading level={2}>
                        Wow WoW WoW
                    </Heading>
                    <div className={style.call}>
                        <button className={style.button}>Wow</button>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default Slider;