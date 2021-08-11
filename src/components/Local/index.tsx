import styles from './styles.module.scss';

type Content = {
  lat: Number;
  lng: Number;
  text: string;
};
export default function Local({ text }: Content) {
  return <div className={styles.container}>{text}</div>;
}
