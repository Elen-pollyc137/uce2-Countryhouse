
import ToolTip from '../ToolTip';
import styles from './styles.module.scss';

type Content = {
  lat: Number;
  lng: Number;
  text: string;
  img: string;
};
export default function Local({ img, text }: Content) {
  return (
    <ToolTip text={text}>
      <div className={styles.container}>
        <img src={img} alt="" />
      </div>
    </ToolTip>
  );
}