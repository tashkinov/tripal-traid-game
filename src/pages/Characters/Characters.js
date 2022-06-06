import React, {useState} from "react";
import Container from "../../components/Container";
import Heading from "../../components/Heading";
import CharacterCard from "../../components/CharacterCard";
import {CHARACTER} from "../../constants/CharactersData";
import style from "../Main/Main.module.scss";
import {useNavigate} from "react-router-dom";

const Characters = () => {
    const navigate = useNavigate();
    const [character, setCharacter] = useState(localStorage.getItem('isLike'));

    function isLikeCheck(itemId) {
        let isLikeArray = JSON.parse(localStorage.getItem('isLike'));
        for(let item of isLikeArray){
            if(itemId === item.id && item.isLike === false){
                return false
            }
            if(itemId === item.id && item.isLike === true){
                return true
            }
        }
    }

    const handleLikeClick = (id) => {
        let isLikeArray = JSON.parse(localStorage.getItem('isLike'));
        for(let item of isLikeArray){
            if(item.id == id){
                item.isLike = !item.isLike;
            }
        }
        localStorage.setItem('isLike', JSON.stringify(isLikeArray));
        setCharacter(JSON.stringify(isLikeArray));
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