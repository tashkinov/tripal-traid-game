import React, {useEffect, useState} from "react";

import Header from './components/Header';
import Slider from './components/Slider';
import Container from './components/Container';
import Heading from './components/Heading';
import CharacterCard from './components/CharacterCard';
import Footer from './components/Footer';
import {CHARACTER, BIO} from './constants/CharactersData';
import Biography from './pages/Biography';

import style from './App.module.scss'
import './App.module.scss';

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

    const [characterId, setCharacterId] = useState(null);

    const setBioClick = () => {
        setShow(prevState => !prevState);
        setBiography(null)
    }


    const handleReadBioClick = (id) => {
        setCharacterId(id);
    }

  return (
      <>
          <Header/>
          <Slider/>
          {
              characterId !== null ?
                  <Biography onBackClick={() => setCharacterId(null)} id={characterId} /> :
                  (<section className={style.cardSection}>
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
                  </section>)
      }
          <Footer/>
      </>
  );
}

export default App;