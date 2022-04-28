import style from './Button.module.scss';
import cn from 'classnames';

const Button = ({
    children,
    black,
    white,
    onClick
}) => {
    const handleClick = () => {
        onClick && onClick();
    }
    return (
        <button
            onClick={handleClick}
            className={cn(
            style.root,
            {
                [style.black]: black,
                [style.white]: white,
            }
            )}>
            {children}
        </button>
    )
}

export default Button;