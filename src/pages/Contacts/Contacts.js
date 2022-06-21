import Container from "../../components/Container";
import Text from "../../components/Text";
import me from './assets/me.jpeg';
import style from './Contacts.module.scss';

const Contacts = () => {
    return (
        <Container className={style.root}>
            <Text element={'h1'}>
                Contacts
            </Text>
            <img src={me}/>
            <Text element={'span'}>
                Hi! My name is Stepan. London is the capital of Great Britain ;-)
            </Text>
        </Container>

    )
}

export default Contacts;