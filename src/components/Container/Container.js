import cn from 'classnames';
import style from './Container.module.css';

const Container = ({children, className}) => {
    return (
        <div className={cn(style.root, className)}>
            {children}
        </div>
    );
}

export default Container;