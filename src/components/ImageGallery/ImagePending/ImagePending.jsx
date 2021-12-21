import Loader from 'react-loader-spinner';
import s from './ImagePending.module.css';

export default function ImagePending() {
  return (
    <Loader
      className={s.loader}
      type="Grid"
      color="#2c5364"
      height={100}
      width={100}
      timeout={3000}
    />
  );
}
