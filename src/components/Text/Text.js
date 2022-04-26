import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import style from './Text.module.scss';

const Text = ({
  element,
  children,
  className,
  strong,
  italic,
  disabled,
  centered,
              }) => {
    if(element === 'paragraph') {
        element = 'p';
    }
    return React.createElement(element, {
            className: cn(
                style.root,
                className,
                {
                    [style.strong]: strong,
                    [style.italic]: italic,
                    [style.disabled]: disabled,
                    [style.centered]: centered,
                },
            )}, children);
};

Text.propTypes = {
    element: PropTypes.oneOf(['div', 'span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'paragraph']).isRequired,
    strong: PropTypes.bool,
    italic: PropTypes.bool,
    centered: PropTypes.bool,
}

export default Text;