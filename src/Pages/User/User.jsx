import React, { useRef } from 'react';
import NavUser from '../../Components/NavUser/NavUser';
import Chatbot from '../../Components/Chatbot/Chatbot';
// Keep the footer as it is.

const User = () => {
  const chatbotRef = useRef(null);

  const handleScrollToChatbot = () => {
    chatbotRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <NavUser handleScrollToChatbot={handleScrollToChatbot} />
      <div>
        {/* Other content */}
        <section ref={chatbotRef}>
          <Chatbot />
        </section>
      </div>
    </div>
  );
};

export default User;
