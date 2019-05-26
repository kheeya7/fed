import React from 'react';
import PropTypes from 'prop-types';

export function Paragraph(props) {
  return (
    <p className="project-paragraph">{props.text}</p>
  );
}

Paragraph.propTypes = {
  text: PropTypes.string,
};

Paragraph.defaultProps = {
  text: '',
};
