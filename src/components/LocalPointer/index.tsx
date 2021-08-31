import ToolTip from '../ToolTip';
import styles from './styles.module.scss';

type Content = {
  lat: Number;
  lng: Number;
  onClick?: any;
};
import { Container } from './styles';

export default function LocalPointer({}: Content) {
  return (
    <Container>
      <div>+</div>
    </Container>
  );
}
