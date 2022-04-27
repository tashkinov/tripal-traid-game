import style from './Button.module.scss';
import cn from 'classnames';

const Button = ({children, black, white, onClickButton}) => {
    const onClickFn = () => {
        onClickButton();
    }
    return (
        <button onClick={onClickFn} className={cn(
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