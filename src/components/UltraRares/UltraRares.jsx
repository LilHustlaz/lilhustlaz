import React from "react";
import styled from "styled-components";
import RareText from "./RareText";
import RareImages from "./RareImages";

const UltraRares = () => {
  document.addEventListener("DOMContentLoaded", function () {
    var lazyBackgrounds = [].slice.call(
      document.querySelectorAll(".accordion")
    );

    if ("IntersectionObserver" in window) {
      let lazyBackgroundObserver = new IntersectionObserver(function (
        entries,
        observer
      ) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            lazyBackgroundObserver.unobserve(entry.target);
          }
        });
      });

      lazyBackgrounds.forEach(function (lazyBackground) {
        lazyBackgroundObserver.observe(lazyBackground);
      });
    }
  });

  return (
    <div>
      <Wrapper>
        <RareText />
        <RareImages />
      </Wrapper>
    </div>
  );
};

export default UltraRares;

const Wrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  padding: 3rem 0.5rem 2rem 0.5rem;
  border-top: solid white 2px;

  @media only screen and (min-width: 320px) and (max-width: 600px) {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
    padding: 2rem 0.5rem 2rem 0.5rem;
    align-items: center;
    z-index: 1;
    position: relative;
  }
`;
