/* eslint-disable camelcase */
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../store';
import { Title, Header } from '../styles';

const Icon = styled.img`
  margin: 5px;
  width: 20px;
  height: 20px;
  border-radius: 5px;
  line-height: 20px;
`;

const Description = () => {
  const { name, description, origin, country_code, life_span, weight } =
    useSelector((state: RootState) => state.information.information);
  if (!country_code) {
    return (
      <>
        <Title>죄송합니다.</Title>
        <p>해당 종에 대한 정보는 제공되지 않습니다.</p>
      </>
    );
  }
  const imageURL = `https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.2.1/flags/1x1/${country_code?.toLowerCase()}.svg`;
  return (
    <>
      <Title>{name}</Title>
      <p>{description}</p>
      <Header>Basic Information</Header>
      <p>
        기원: <Icon src={imageURL} alt={country_code} />
        {origin}
      </p>
      <p>평균 수명: {life_span}년</p>
      <p>몸무게: {weight.metric}kg</p>
    </>
  );
};

export default Description;
