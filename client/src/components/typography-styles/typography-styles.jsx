import React from 'react';
import './TypographyStyles.css';

function TypographyStyles({ heading1, heading2, heading3, paragraph, smallParagraph }) {
  return (
    <div>
      <h1 className="heading-primary">{heading1}</h1>
      <h2 className="heading-secondary">{heading2}</h2>
      <h3 className="heading-tertiary">{heading3}</h3>
      <p className="paragraph">{paragraph}</p>
      <p className="paragraph-small">{smallParagraph}</p>
    </div>
  );
}

export default TypographyStyles;
