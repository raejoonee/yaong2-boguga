import React from 'react';
import styled from 'styled-components';
import mount from '../styles/mount';

const Section = styled.section`
  text-align: center;
  animation: 0.75s ${mount};
`;

const Directive = () => {
  return (
    <Section>
      보고 싶은{' '}
      <span role="img" aria-label="cat">
        🐱
      </span>{' '}
      고양이 종을 선택해주세요
    </Section>
  );
};

export default React.memo(Directive);
