import React from "react";
import {BIO} from '../../constants/CharactersData';
import Text from '../../components/Text';
import Container from "../../components/Container";
import Button from "../../components/Button";
import PropTypes from 'prop-types';

const Biography = ({id, onBackClick}) => {
    const handleBackClick = () => {
        onBackClick && onBackClick();
    }
    return (
        <Container>
            <Text element={'div'} centered>
                <Button onClick={handleBackClick}>Back</Button>
            </Text>
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

Biography.propTypes = {
    id: PropTypes.number,
}

export default Biography;