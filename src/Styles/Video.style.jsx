import styled from "styled-components";
import {css} from 'styled-components'

export const ipad = (props) => {
    return css`
      @media only screen and (max-width: 992px) {
        ${props}
      }
    `;
  };
export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 420px) {
      ${props}
    }
  `;
};
export const VideoPlayerContainer = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 110px;
`