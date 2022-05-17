import Heading from "../../components/Heading";
import style from './NotFound.module.scss';

const NotFound = () => {
    return (
        <div className={style.root}>
            <Heading level={2} black>
                404
            </Heading>
        </div>
    )
}

export default NotFound;