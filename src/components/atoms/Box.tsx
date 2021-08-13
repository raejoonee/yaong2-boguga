import styled from 'styled-components';

interface MsgBox {
  msg: string;
}

const BlueBox = styled.div<MsgBox>`
  font-weight: 500;
  border: 1px solid #567ace;
  color: #567ace;
`;

const Box = ({ msg }: { msg: string }) => {
  return <BlueBox msg={msg} />;
};

export default Box;
