import { useContext } from 'react';
import styled from 'styled-components';
import ColorContext, { ThemeProps } from '../contexts/Theme';
import './DarkMode.scss';

const Section = styled.div<ThemeProps>`
  position: fixed;
  width: 200px;
  height: 50px;
  right: 25px;
  bottom: 20px;
  box-shadow: rgb(4 4 161 / 10%) 0px 6px 12px 0px;
  border: 1px solid rgb(246, 246, 246);
  border-radius: 10px;
  line-height: 50px;
  text-align: center;
  cursor: pointer;
  transition: 0.5s;
  user-select: none;
  z-index: 99;
  background: ${(props) => (props.mode === 'light' ? '#fff' : '#333')};
  &:hover {
    background: ${(props) => (props.mode === 'light' ? '#333' : '#f2f2f2')};
    color: ${(props) => (props.mode === 'light' ? '#f2f2f2' : '#333')};
  }
`;

const DarkMode = () => {
  const { isLightTheme, toggleLightTheme } = useContext(ColorContext);
  return (
    <Section
      mode={isLightTheme.toString()}
      className="dark-mode-section"
      onClick={() => {
        toggleLightTheme();
      }}
    >
      다크 모드{' '}
      {isLightTheme ? (
        <span className="dark-mode-on" role="img" aria-label="dark-mode-on">
          🌙 설정
        </span>
      ) : (
        <span className="dark-mode-off" role="img" aria-label="dark-mode-off">
          ☀️ 해제
        </span>
      )}
      하기
    </Section>
  );
};

export default DarkMode;
