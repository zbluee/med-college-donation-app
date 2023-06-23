import React, { useState } from 'react';
import './FAQPage.css';

const faqData = [
  {
    question: 'Question 1',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    question: 'Question 2',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    question: 'Question 3',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    question: 'Question 4',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    question: 'Question 5',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

function FAQPage() {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleToggle = (index) => {
    if (index === expandedIndex) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      {faqData.map((faqItem, index) => (
        <div className="faq-item" key={index}>
          <div
            className={`faq-question ${index === expandedIndex ? 'expanded' : ''}`}
            onClick={() => handleToggle(index)}
          >
            <span className="faq-question-mark">?</span>
            {faqItem.question}
          </div>
          {index === expandedIndex && <p className="faq-answer">{faqItem.answer}</p>}
        </div>
      ))}
    </div>
  );
}

export default FAQPage;
