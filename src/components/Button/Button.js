import style from './Button.module.scss';
import cn from 'classnames';

const Button = ({
    children,
    black,
    white,
    onClick,
    disabled,
}) => {
    const handleClick = () => {
        onClick && onClick();
    }
    return (
        <button
            disabled={disabled}
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