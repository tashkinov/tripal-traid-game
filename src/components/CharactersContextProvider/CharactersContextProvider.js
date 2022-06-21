import React, {useState} from "react";
import {CHARACTER} from "../../constants/CharactersData";

export const CharactersState = React.createContext(null);

const CharactersContextProvider = ({children}) => {
    let initStateCheck;
    if (localStorage.getItem('isLike')) {
        initStateCheck = JSON.parse(localStorage.getItem('isLike'));
    } else {
        initStateCheck = {};
        for (let i = 0; i < CHARACTER.length; i++) {
            initStateCheck[CHARACTER[i].id] = false;
        }
        localStorage.setItem('isLike', JSON.stringify(initStateCheck));
    }
    const [chars, setChars] = useState(initStateCheck);

    return (
        <CharactersState.Provider value={{chars, setChars}}>
            {children}
        </CharactersState.Provider>
    );
};

export default CharactersContextProvider;