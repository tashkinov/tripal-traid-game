import Heading from "../Heading";
import Container from "../Container";
import Button from "../Button";
import style from './Slider.module.scss';
import Clock from "../Clock";

const Slider = () => {
    return (
        <section className={style.section}>
            <div className={style.slider}>
                <Container className={style.sliderContent}>
                    <Heading level={1}>
                        Triple Triad Game
                    </Heading>
                    <Heading level={2}>
                        <Clock />
                    </Heading>
                    <div className={style.call}>
                       <Button white>
                           WoW
                       </Button>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default Slider;