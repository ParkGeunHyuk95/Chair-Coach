import styled from "styled-components";

export const WindowSizeErrorContent = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 9999;
  background: ${({ theme }) => theme.colors.mainLight};

  .inner {
    padding: 0 5%;
    text-align: center;

    img {
      width: 640px;
    }

    p {
      margin-top: 64px;
      font-size: ${({ theme }) => theme.fontSize.subTitle};
      line-height: 1.25;

      span {
        font-weight: 700;
        color: ${({ theme }) => theme.colors.main};
      }
    }
  }

  @media screen and (max-width: 1199px) {
    ${({ theme }) => theme.common.flexCenter};
  }

  @media screen and (max-width: 640px) {
    .inner {
      img {
        width: 100%;
      }

      p {
        font-size: 16px;
      }
    }
  }
`;
