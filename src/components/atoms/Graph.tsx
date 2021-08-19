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
    width: ${31 + 14 * width}%;
  }
`;

const Bar = styled.span<BarProps>`
  background: ${(props) => props.color};
  width: ${(props) => 31 + 14 * props.value}%;
  border-radius: 40px;
  padding-left: 20px;
  overflow: hidden;
  z-index: 2;
  color: black;
  text-align: left;
  animation: 1s ${(props) => BarKeyframe(props.value)};
`;

interface GraphProps {
  title: string;
  value: number;
  color: string;
}

const Graph = ({ title, value, color }: GraphProps) => {
  return (
    <Base>
      <Bar value={value} color={color}>
        {title}
      </Bar>
    </Base>
  );
};

export default Graph;
