import React, {useEffect} from 'react';
import {BIO} from '../../constants/CharactersData';
import Text from '../../components/Text';
import Container from "../../components/Container";
import Button from "../../components/Button";
import {useNavigate, Navigate, Link, useParams, useLocation} from 'react-router-dom';
import {ReactComponent as AnchorLink} from '../../assets/link_icon.svg';
import style from './Biography.module.scss';

const Biography = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(-1);
    }

    if (!BIO[id]) {
        return <Navigate to="/characters" replace/>
    }

    return (
        <Container>
            <div>
                <Text element={'div'} centered>
                    <Button
                        color="black"
                        onClick={handleClick}
                    >
                        Go Back
                    </Button>
                </Text>

            </div>
            <div>
                {
                    BIO[id].map((item, index) => {
                        switch (item.type) {
                            case 'img':
                                return (
                                    <Text key={index} element={'div'} centered>
                                        <img src={`${item.src}`}/>
                                    </Text>
                                )
                            case 'h2':
                                return (
                                    <Text key={index} element={item.type} id={item.text.split(' ').join('_')}>
                                        {item.text}
                                        <Link to={`#${item.text.split(' ').join('_')}`}>
                                            <AnchorLink className={style.anchorSvg}/>
                                        </Link>
                                    </Text>
                                )
                            case 'h1':
                                return (
                                    <Text key={index} element={item.type} id={item.text.split(' ').join('_')}>
                                        {item.text}
                                        <Link to={`#${item.text.split(' ').join('_')}`}>
                                            <AnchorLink className={style.anchorSvg}/>
                                        </Link>
                                    </Text>
                                )
                            default:
                                return (
                                    <Text key={index} element={item.type}>
                                        {item.text}
                                    </Text>
                                )
                        }
                    })
                }
            </div>
        </Container>
    )
}

export default Biography;