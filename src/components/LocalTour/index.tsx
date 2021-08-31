import { Container } from './styles';
type Content = {
  lat: Number;
  lng: Number;
  text: string;
  img?: string;
  onClick?: any;
};

export default function Local({ img, text, onClick }: Content) {
  return (
    <Container onClick={onClick}>
      <img src={img} title="img" alt={text} />
    </Container>
  );
}
