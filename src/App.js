import './App.module.scss';
import React, {useEffect, useState} from "react";
import Header from './components/Header';
import Slider from './components/Slider';
import Container from './components/Container';
import Heading from './components/Heading';
import CharacterCard from './components/CharacterCard';
import Footer from './components/Footer';
import {CHARACTER, BIO} from './components/CharactersData';
import Biography from './pages/Biography';

import style from './App.module.scss'
import Button from "./components/Button";
import Text from "./components/Text";

function App() {
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
    const [isShow, setShow] =  useState(true)
    const [bio, setBiography] = useState(<Biography />)
    const setBioClick = () => {
        setShow(prevState => !prevState);
        setBiography(null)
    }

    const handleBioClick = (id) => {
        setShow(prevState => !prevState);
        return (
            setBiography(
                <>
                    <Text element={'div'} centered>
                        <Button onClickButton={setBioClick} black>
                            Go Back
                        </Button>
                    </Text>
                    <Biography id={id} />
                </>
            )
        )
    }
  return (
      <>
          <Header/>
          {!isShow && bio}
          {isShow && <Slider/>}
          {isShow &&
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
                                          onReadBioClick={handleBioClick}
                                      />
                                  </div>
                              )
                          })
                      }
                  </div>
              </Container>
          </section>
      }

          <Footer/>
      </>
  );
}

export default App;