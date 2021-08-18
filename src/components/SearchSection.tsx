import React from 'react';
import styled from 'styled-components';
import mount from '../styles/mount';
import Button from './atoms/Button';
import Breed from '../features/breed/Breed';
import Input from './atoms/Input';

const Section = styled.section`
  text-align: center;
  animation: 0.75s ${mount};
`;

const SearchSection = () => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const onClick = () => {};
  return (
    <Section>
      <Input type="text" list="cat-list" placeholder="Pick a breed" />
      <Breed />
      <Button text="검색" onClick={onClick} />
    </Section>
  );
};

export default React.memo(SearchSection);
