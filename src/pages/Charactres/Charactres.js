import React, {useState} from "react";
import Container from "../../components/Container";
import Heading from "../../components/Heading";

import CharacterCard from "../../components/CharacterCard";
import {CHARACTER} from "../../constants/CharactersData";
import style from "../Main/Main.module.scss";
import {useNavigate} from "react-router-dom";

const Characters = () => {
    const navigate = useNavigate();
    const [characterId, setCharacterId] = useState(null);
    const [character, setCharacter] = useState(CHARACTER);

    const handleLikeClick = (id) => {
        setCharacter((prevState) => prevState.map(item => {
            if(id === item.id) {
                return {
                    ...item,
                    isLike: !item.isLike,
                };
            }
            return item;
        }));
    }

    const handleReadBioClick = (id) => {
        navigate(`/characters${id}`);
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
                        character.map((item, index) =>{
                            return (
                                <div key={item.id}>
                                    <CharacterCard
                                        id={item.id}
                                        name={item.name}
                                        src={item.thumbnail.path}
                                        description={item.description}
                                        humanName={item.humanName}
                                        onLikeClick={handleLikeClick}
                                        isLike={item.isLike}
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