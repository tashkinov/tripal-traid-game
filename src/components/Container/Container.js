import cn from 'classnames';
import style from './Container.module.scss';

const Container = ({children, className}) => {
    return (
        <div className={cn(style.root, className)}>
            {children}
        </div>
    );
}

export default Container;