import { useUser } from '../../hooks/useUser';
import { LoadingBall } from '../LoadingBall';
import { Container } from './styles';
import { memo } from 'react';
type Content = {
  lat: Number;
  lng: Number;
  text: string;
  img?: string;
  available: boolean;
  onClick?: any;
};

function Local({ img, text, available, onClick }: Content) {
  const { loading } = useUser();
  return (
    <Container onClick={onClick} available={available}>
      {loading.local ? (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '-10rem',
          }}
        >
          <LoadingBall />
        </div>
      ) : (
        <img src={img} title="img" alt={text} />
      )}
    </Container>
  );
}

export default memo(Local);
