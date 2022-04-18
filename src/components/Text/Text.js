import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import style from './Text.module.css';

const Text = ({
  element,
  children,
  className,
  strong,
  italic,
  disabled,
              }) => {
    return React.createElement(element, {
            className: cn(
                style.root,
                className,
                {[style.strong]: strong},
                {[style.italic]: italic},
                {[style.disabled]: disabled},
            )}, children);
};

Text.propTypes = {
    element: PropTypes.oneOf(['div', 'span', 'p']).isRequired,
    strong: PropTypes.bool,
    italic: PropTypes.bool,
}

export default Text;