import PropTypes from 'prop-types';
import cn from 'classnames';
import Heading from '../Heading';
import Text from '../Text';

import style from './CharacterCard.module.scss';
import { ReactComponent as Heart } from './assets/heart.svg';

const CharacterCard = ({
                           id,
                           name,
                           src,
                           humanName,
                           description,
                           isLike,
                           onLikeClick,
                           onReadBio,
                       }) => {
    const handleClick = () => {
        onLikeClick && onLikeClick(id);
    }
    const handleReadBioClick = () => {
        onReadBio && onReadBio(id);
    }
    return (
        <div className={style.root}>
            <img
                src={src}
                alt={name} className={style.cardImage}/>
            <div className={style.cardDetails}>
                <Heading level={2} className={style.cardName}>
                    {name}
                </Heading>
                <Heading level={3} className={style.cardHumanName}>
                    {humanName}
                </Heading>

                <Text element={'p'} className={style.cardDescription}>
                    {description}
                </Text>

                <div className={style.cardMeta}>
                    <div
                        onClick={handleClick}
                        className={cn(style.like, {
                            [style.active]: isLike
                        })}>
                        <Heart />
                    </div>
                    <div >
                        <a href="#" onClick={handleReadBioClick}>Read bio</a>
                    </div>
                </div>
            </div>
        </div>

    );
};

CharacterCard.defaultProps = {
    isLike: false,
}

CharacterCard.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    src: PropTypes.string,
    humanName: PropTypes.string,
    description: PropTypes.string,
    isLike: PropTypes.bool,
    onLikeClick: PropTypes.func,
    onReadBio: PropTypes.func,
}

export default CharacterCard;