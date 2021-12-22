import React from 'react';

import './Message.css';

type MessagePropTypes = {
  text: string;
};

const Message = ({ text }: MessagePropTypes) => (
  <div className="message">
    <span className="message__text">{text}</span>
  </div>
);

export default Message;
