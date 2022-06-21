import style from './Input.module.scss';

const Input = ({
                   type,
                   id,
                   name,
                   required,
               }) => {
    return (
        <input type={type} id={id} name={name} required={required} className={style.root}>

        </input>
    );
};

export default Input;