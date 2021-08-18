import React from 'react';
import styled from 'styled-components';
import mount from '../../styles/mount';

const Header = styled.header`
  @font-face {
    font-family: 'BMDOHYEON';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BMDOHYEON.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }
  font-family: 'BMDOHYEON';
  font-size: 5rem;
  margin-top: 20px;
  text-align: center;
  animation: 0.75s ${mount};
`;

const Title = () => {
  return (
    <Header>
      야옹이
      <br />
      보구가
    </Header>
  );
};

export default React.memo(Title);
