import React from "react";
import {BIO} from '../../constants/CharactersData';
import Text from '../../components/Text';
import Container from "../../components/Container";
import {useParams} from "react-router-dom";

const Biography = () => {
    const {id} = useParams();

    return (
        <Container>
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