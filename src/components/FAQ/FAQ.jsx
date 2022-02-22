import React from "react";
// import { useState } from "react";
import styled from "styled-components";
import Accordion from "./FAQStructure";
import { accordionData } from "./FAQdata";

const FAQ = () => {
  return (
    <>
      <Wrapper id="faq" className="accordion-item">
        <div>
          <Title>FAQ</Title>
          <div>
            {accordionData.map(({ title, content }) => (
              <Accordion
                key={title + content}
                title={title}
                content={content}
              />
            ))}
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default FAQ;

const Wrapper = styled.div`
  margin-bottom: 3rem;
  height:auto;
  align-items: center;
  z-index: 1;
  position: relative;
  gap: 16px;
  color: #000;
  border-top: solid white 2px;
  padding: 2rem 0.5rem;

  &:hover {
    cursor: pointer;
  }

  .indicator {
    margin-right: 1rem;
  }

  .accordion-item {
    margin-bottom: 1rem;
    line-height: 28px;
    border-bottom: 1px solid #d4d4d4;
    border-width: 1px;
    border-bottom-color: #ffffff21;
  }

  .accordion-title {
    color:#fff;
    font-size: 1.125rem;
    font-weight: 700;
    display: flex;
  }

  .accordion-content {
    color: #7A7A7A;
    margin-bottom: 1.6em;
    margin-left:1.4rem;
    overflow-wrap: break-word;
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
}
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-top:0rem;
`;
