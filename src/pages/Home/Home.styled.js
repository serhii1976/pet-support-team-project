import styled from "styled-components";
import theme from "../../theme";
import mobileBg from "../../images/home/bg-mobile.svg";
import desktopBg from "../../images/home/bg-desktop.svg";
import tabletBg from "../../images/home/bg-tablet.svg";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
  padding: 60px 20px 0;
  height: 100%;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    padding: 88px 30px 0;
  }

  @media screen and (min-width: 1280px) {
    padding: 60px 16px 0;
    flex-direction: row;
    align-items: flex-end;
  }
`;

const Title = styled.h1`
  align-self: start;
  font-family: ${theme.fonts.manrope};
  font-weight: ${theme.fontWeights.bold};
  font-size: ${theme.fontSizes.l};
  line-height: 44px;
  max-width: 280px;
  position: relative;
  z-index: 1;

  @media screen and (min-width: 768px) {
    font-size: 68px;
    line-height: 100px;
    max-width: 588px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 68px;
    line-height: 100px;
    flex: 1;
    max-width: none;
    max-width: 588px;
  }
`;

const ImgWrap = styled.div`
  margin: 0 auto;
  position: absolute;
  bottom: 0;
  right: 0;
  @media screen and (min-width: 768px) {
    & > img {
      max-height: 100%;
    }
    position: absolute;
    bottom: 0;
    right: 10%;
  }

  @media screen and (min-width: 1280px) {
    flex: 1;
  }
`;

const Container = styled.section`
  background-color: ${theme.colors.bg};
  background-image: url(${mobileBg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  height: 100vh;
  margin-top: 67px;

  @media screen and (min-width: 768px) {
    background-image: url(${tabletBg});
    margin-top: 82px;
  }

  @media screen and (min-width: 1280px) {
    background-image: url(${desktopBg});
    background-position: 0 67px;
  }
`;

const elements = { Box, Title, ImgWrap, Container };

export default elements;
