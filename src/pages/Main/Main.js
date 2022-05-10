import React, {useState} from "react";
import Container from "../../components/Container";
import Heading from "../../components/Heading";

import CharacterCard from "../../components/CharacterCard";
import {CHARACTER} from "../../constants/CharactersData";

import style from './Main.module.scss';
import Slider from "../../components/Slider";
import Characters from "../Characters/Charactres";

const Main = () => {

    return (
        <>
            <Slider />
            <Characters/>
        </>
    )
};

export default Main;