import React, {useContext, useState} from "react";
import Container from "../../components/Container";
import Heading from "../../components/Heading";
import CharacterCard from "../../components/CharacterCard";
import {CHARACTER} from "../../constants/CharactersData";
import style from "../Main/Main.module.scss";
import {useNavigate} from "react-router-dom";
import {CharactersState} from "../../components/CharactersContextProvider/CharactersContextProvider";

const Characters = () => {
    const {chars, setChars} = useContext(CharactersState);
    const [charsState, setCharsState] = useState(chars);
    const navigate = useNavigate();

    function isLikeCheck(itemId) {
        for(let item in charsState){
            if(itemId === +item && charsState[item] === false){
                return false
            }
            if(itemId === +item && charsState[item] === true){
                return true
            }
        }
    }

    const handleLikeClick = (id) => {
            for(let item in chars) {
                if(item == id){
                    chars[item] = !chars[item]
                }
            }
        setCharsState({...chars});
        setChars({...chars});
        localStorage.setItem('isLike', JSON.stringify({...chars}));
    }

    const handleReadBioClick = (id) => {
        navigate(`/characters/${id}`);
    }

    return (
        <section className={style.cardSection}>
            <Container id={1}>
                <div className={style.cardTitle}>
                    <Heading backLine black>
                        Marvel Cards
                    </Heading>
                    <Heading level={2} black>
                        Collect your best five
                    </Heading>
                </div>
                <div className={style.cardWrap}>
                    {
                        CHARACTER.map((item, index) =>{
                            return (
                                <div key={item.id}>
                                    <CharacterCard
                                        id={item.id}
                                        name={item.name}
                                        src={item.thumbnail.path}
                                        description={item.description}
                                        humanName={item.humanName}
                                        onLikeClick={handleLikeClick}
                                        isLike={isLikeCheck(item.id)}
                                        onReadBio={handleReadBioClick}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </Container>
        </section>
    );
}

export default Characters;