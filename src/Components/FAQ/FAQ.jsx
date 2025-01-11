import React, { forwardRef, useState } from 'react';
import './FAQ.css'; // Import the CSS file for styling

const FAQ = forwardRef((props, ref) => {
  // State to track the index of the active (open) FAQ
  const [activeIndex, setActiveIndex] = useState(null);

  // FAQ data for the travel assistance website
  const faqData = [
    {
      question: 'How can I book a trip through WonderPlan?',
      answer: 'Booking a trip is simple! You can search for your destination, select your travel dates, and choose the best option from our curated list of flights, trains, and buses. You can then proceed to book the trip directly from the website.',
    },
    {
      question: 'What are the different modes of travel available?',
      answer: 'WonderPlan offers various modes of travel, including flights, trains, and buses. Based on your budget, time, and destination, our platform will recommend the most suitable option for you.',
    },
    {
      question: 'Can I cancel or reschedule my booking?',
      answer: 'Yes, you can easily cancel or reschedule your booking through the “My Bookings” section. Please note that cancellation or rescheduling policies vary depending on the travel provider.',
    },
    {
      question: 'How do I find the best travel deals?',
      answer: 'WonderPlan continuously scans for the best deals across all available travel modes. Be sure to book early and subscribe to our newsletter to get alerts on limited-time offers and discounts.',
    },
    {
      question: 'How can I contact customer support?',
      answer: 'You can contact customer support through our Help section or send an email to support@wonderplan.com. We’re available 24/7 to assist you with any inquiries or issues you may face.',
    },
  ];

  // Function to handle click on a question
  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle active state
  };

  return (
    <div ref={ref} className="faq">
      <h2>Frequently Asked Questions</h2>
      <ul className="questions">
        {faqData.map((item, index) => (
          <li key={index}>
            <div
              className="faq-question"
              onClick={() => handleClick(index)}
            >
              <label>{item.question}</label>
              <span className="faq-icon">
                {activeIndex === index ? '×' : '+'}
              </span>
            </div>
            <div className={`answer ${activeIndex === index ? 'open' : ''}`}>
              <p>{item.answer}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default FAQ;
