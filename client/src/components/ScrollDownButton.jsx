import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { useLongPress } from 'use-long-press'; // You might need to install this library using `npm install use-long-press`
// import { FaArrowCircleDown } from 'react-icons/fa';
import { MdArrowCircleDown } from "react-icons/md";
const Button = styled.button`
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  width: 2rem;
  height: 2rem;
  z-index: 10;
  background-color: transparent;
  border: none;
`;

const ScrollToBottomButton = () => {
  const [chatScrolledHeight, setChatScrolledHeight] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [isScrollToBottomButtonVisible, setIsScrollToBottomButtonVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setChatScrolledHeight(window.pageYOffset);
      setScrollHeight(document.documentElement.scrollHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsScrollToBottomButtonVisible(chatScrolledHeight + 100 < scrollHeight);
  }, [chatScrolledHeight, scrollHeight]);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  const longPressProps = useLongPress(scrollToBottom, {
    isPreventDefault: true,
    delay: 0,
  });

  return (
    <>
      {isScrollToBottomButtonVisible && (
        <Button {...longPressProps}>
          <MdArrowCircleDown/>
        </Button>
      )}
    </>
  );
};
export default ScrollToBottomButton;
