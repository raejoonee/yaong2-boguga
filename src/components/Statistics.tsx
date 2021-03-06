import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../store';
import { Header } from '../styles';
import Graph from './atoms/Graph';

const Chart = styled.article`
  width: 100%;
`;

const Statistics = () => {
  const {
    affection_level,
    health_issues,
    intelligence,
    adaptability,
    energy_level,
    social_needs,
    dog_friendly,
    child_friendly,
    stranger_friendly,
    shedding_level,
    experimental,
    vocalisation,
  } = useSelector((state: RootState) => state.information.information);
  const itemList = [
    {
      title: 'π» μ μ ',
      value: affection_level,
      color: '#f1d2e7',
    },
    {
      title: 'πͺ κ±΄κ°',
      value: 5 - +health_issues,
      color: '#bbb0dc',
    },
    {
      title: 'β¨ μ§λ₯',
      value: intelligence,
      color: '#f1c3aa',
    },
    {
      title: 'πΊ μ μλ ₯',
      value: adaptability,
      color: '#b7d3e9',
    },
    {
      title: 'πΌ νλλ ₯',
      value: energy_level,
      color: '#567ace',
    },
    {
      title: 'πΈ μ¬νμ±',
      value: social_needs,
      color: '#fcf695',
    },
    {
      title: 'πΆ κ°μμ§ μΉνλ ₯',
      value: dog_friendly,
      color: '#f3aa51',
    },
    {
      title: 'π§ μ΄λ¦°μ΄ μΉνλ ₯',
      value: child_friendly,
      color: '#d9598c',
    },
    {
      title: 'π§ λ―μ  μ¬λ μΉνλ ₯',
      value: stranger_friendly,
      color: '#a7e0e1',
    },
    {
      title: 'π νΈλΉ μ§',
      value: shedding_level,
      color: '#cee5d5',
    },
    {
      title: 'π νΈκΈ°μ¬',
      value: experimental,
      color: '#db706c',
    },
    {
      title: 'πΏ ννλ ₯',
      value: vocalisation,
      color: '#f2f2f2',
    },
  ];
  return (
    <>
      <Header>Statistics</Header>
      <Chart>
        {itemList.map((item) => (
          <Graph
            key={item.title}
            title={item.title}
            value={item.value}
            color={item.color}
          />
        ))}
      </Chart>
    </>
  );
};

export default Statistics;
