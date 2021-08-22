import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../store';
import { Title } from '../styles';

const Section = styled.section`
  margin-top: 20px;
  text-align: center;
`;

const Italic = styled.p`
  font-style: italic;
  margin: 16px 0px;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 10px;
  margin: 25px;
`;

const Gallery = () => {
  const { images } = useSelector((state: RootState) => state.image);
  const { name } = useSelector(
    (state: RootState) => state.information.information,
  );
  return (
    <Section>
      <Title>Gallery</Title>
      <Italic>귀여운 {name} 사진들입니다.</Italic>
      {images.map((src, index) => (
        <Image loading="lazy" key={src} src={src} alt={`cat ${index}`} />
      ))}
    </Section>
  );
};

export default Gallery;
