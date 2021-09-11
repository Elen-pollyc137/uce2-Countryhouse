import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { GrFormClose } from 'react-icons/gr';
import Switch from 'react-switch';
import { VscTrash } from 'react-icons/vsc';
import { MdEdit } from 'react-icons/md';
import { ImWhatsapp } from 'react-icons/im';
import { useUser } from '../../hooks/useUser';
import { Loading } from '../Loading';

export default function House({ setLocal, data, isLogin }: any) {
  const [checked, setChecked] = useState(data?.available);
  const { fetchLocalEdit, fetchLocalDelete, message, loading } = useUser();
  function handleSelect() {
    setChecked(!checked);
    fetchLocalEdit(!checked, data?.id);
  }
  function handleDelete() {
    fetchLocalDelete(data?.id);
  }
  message &&
    setTimeout(() => {
      setLocal(false);
    }, 2000);

  useEffect(() => {
    setChecked(data?.available);
  }, [data]);

  return (
    <div className={`${styles.containerHouse} ${styles.animeLeft}`}>
      <div
        style={
          loading['edit'] || loading['delete']
            ? { opacity: 0.4 }
            : { opacity: 1 }
        }
        className={styles.house}
      >
        <div className={styles.containerImg}>
          <button className={styles.closeHouse} onClick={() => setLocal(false)}>
            <GrFormClose size={32} />
          </button>
          <img
            className={styles.imgHouse}
            src={data?.img[0].url || data.img}
            alt=""
          />
        </div>
        <div className={styles.contentHouse}>
          <div className={styles.titleHouse}>
            <h1>{data && data?.name}</h1>
            {data?.price && <h2>R${data && data?.price},00</h2>}
          </div>
          {isLogin && (
            <div className={styles.wrapper__available}>
              <div>
                <Switch
                  onChange={handleSelect}
                  checked={checked}
                  checkedIcon={true}
                  uncheckedIcon={true}
                  height={20}
                  width={47}
                  handleDiameter={14}
                  offColor="#e6e6e6"
                  onColor="#39FF14"
                  offHandleColor="#e63a0f"
                  onHandleColor="#ffffff"
                />
                <p>Disponível</p>
              </div>
              <div>
                <VscTrash onClick={handleDelete} size={32} />
                <MdEdit size={32} />
              </div>
            </div>
          )}

          <p className={styles.descriptionHouse}>{data && data?.description}</p>
          {data?.phone && (
            <div className={styles.contact}>
              <ImWhatsapp size={32} />
              <h1>{data && data?.phone}</h1>
            </div>
          )}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {loading.edit && <Loading />}
          </div>
        </div>
      </div>
    </div>
  );
}
