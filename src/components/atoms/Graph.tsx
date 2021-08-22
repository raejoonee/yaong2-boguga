import styled, { keyframes } from 'styled-components';

const Base = styled.div`
  font-weight: 500;
  float: none;
  display: flex;
  height: 40px;
  width: 100%;
  line-height: 40px;
  border-radius: 40px;
  background: #ccc;
`;

interface BarProps {
  value: number;
  color: string;
}

const BarKeyframe = (width: number) => keyframes`
  from {
    width: 10%;
  }
  to {
    width: ${20 * width}%;
  }
`;

const Bar = styled.span<BarProps>`
  background: ${(props) => (props.value ? props.color : null)};
  width: ${(props) => 20 * props.value}%;
  border-radius: 40px;
  padding-left: 20px;
  overflow: hidden;
  z-index: 2;
  color: black;
  text-align: left;
  animation: 1s ${(props) => BarKeyframe(props.value)};
`;

const Stat = styled.span`
  position: absolute;
  padding-left: 20px;
  z-index: 3;
`;

interface GraphProps {
  title: string;
  value: number;
  color: string;
}

const Graph = ({ title, value, color }: GraphProps) => {
  return (
    <Base>
      <Bar value={value} color={color} />
      <Stat>{title}</Stat>
    </Base>
  );
};

export default Graph;
