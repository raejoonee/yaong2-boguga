import styled from 'styled-components';
import mount from '../../styles/mount';
import Description from '../../components/Description';
import Statistics from '../../components/Statistics';

const Container = styled.section`
  width: 90%;
  max-width: 500px;
  height: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 15px;
  padding: 20px;
  box-shadow: rgb(4 4 161 / 10%) 0px 6px 12px 0px;
  border: 1px solid rgb(246, 246, 246);
  border-radius: 10px;
  text-align: center;
  animation: 0.75s ${mount};
`;

const Information = () => {
  return (
    <Container>
      <Description />
      <Statistics />
    </Container>
  );
};

export default Information;
