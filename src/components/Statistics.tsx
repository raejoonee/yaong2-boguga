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
      title: '😻 애정',
      value: affection_level,
      color: '#f1d2e7',
    },
    {
      title: '💪 건강',
      value: 5 - +health_issues,
      color: '#bbb0dc',
    },
    {
      title: '✨ 지능',
      value: intelligence,
      color: '#f1c3aa',
    },
    {
      title: '😺 적응력',
      value: adaptability,
      color: '#b7d3e9',
    },
    {
      title: '😼 활동력',
      value: energy_level,
      color: '#567ace',
    },
    {
      title: '😸 사회성',
      value: social_needs,
      color: '#fcf695',
    },
    {
      title: '🐶 강아지 친화력',
      value: dog_friendly,
      color: '#f3aa51',
    },
    {
      title: '🧒 어린이 친화력',
      value: child_friendly,
      color: '#d9598c',
    },
    {
      title: '🧒 낯선 사람 친화력',
      value: stranger_friendly,
      color: '#a7e0e1',
    },
    {
      title: '🙀 털빠짐',
      value: shedding_level,
      color: '#cee5d5',
    },
    {
      title: '🐈 호기심',
      value: experimental,
      color: '#db706c',
    },
    {
      title: '😿 표현력',
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
