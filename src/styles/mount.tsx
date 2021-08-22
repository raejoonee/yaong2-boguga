import { keyframes } from 'styled-components';

const mount = keyframes`
  from {
    transform: translateY(15px);
    opacity: 0;
    visibility: hidden;
  }
  to {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
    animation-play-state: paused;
  }
`;

export default mount;
