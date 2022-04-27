import React from "react";
import {BIO} from '../../components/CharactersData';
import Text from '../../components/Text';
import Container from "../../components/Container";

const Biography = ({id}) => {
    if (id){
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
}

export default Biography;