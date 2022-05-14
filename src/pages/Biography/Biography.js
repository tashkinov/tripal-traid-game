import React from "react";
import {BIO} from '../../constants/CharactersData';
import Text from '../../components/Text';
import Container from "../../components/Container";
import {useParams} from "react-router-dom";
import Button from "../../components/Button";
import {useNavigate, Navigate} from 'react-router-dom';

const Biography = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(-1);
    }

    if(!BIO[id]) {
        return <Navigate to="/characters" replace />
    }

    return (
        <Container>
            <div>
                <Button
                    color="black"
                    onClick={handleClick}
                >
                    Go Back
                </Button>
            </div>
            <div>
                {
                    BIO[id].map((item, index) => {
                        if(item.type === 'img'){
                            return (
                                <Text key={index} element={'div'} centered>
                                    <img src={`${item.src}`} />
                                </Text>
                            )
                        } else {
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