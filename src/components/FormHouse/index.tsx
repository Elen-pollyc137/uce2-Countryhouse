import React, { useState } from 'react';
import styles from './styles.module.scss';
import { GrFormClose } from 'react-icons/gr';
import { useForm } from 'react-hook-form';
import { BiCloudUpload } from 'react-icons/bi';
import { useUser } from '../../hooks/useUser';

export default function FormHouse({ lat, lng, setForm }: any) {
  const { fetchCreateLocal, loading } = useUser();
  const { register, handleSubmit } = useForm();

  const [file, setFile] = useState<any>(false);

  function handleImgChange({ target }: any) {
    setFile({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  async function handleCreateLocal(body: any) {
    fetchCreateLocal(body, lat, lng, file);
  }
  return (
    <div className={styles.containerFormEdit}>
      <button className={styles.close} onClick={() => setForm(false)}>
        <GrFormClose size={32} />
      </button>
      <form
        style={loading ? { opacity: 0.4 } : { opacity: 1 }}
        onSubmit={handleSubmit(handleCreateLocal)}
      >
        <div className={styles.title}>
          <label htmlFor="">Cadastrar Local</label>
          <p>
            Lembre-se de mudar o status do local caso não estiver disponível,
            selecione no mapa seu novo local.
          </p>
        </div>

        <div className={styles.input}>
          <input {...register('name')} placeholder="nome" type="text" />
        </div>

        <div className={styles.input}>
          <input {...register('price')} placeholder="preço" type="number" />
        </div>

        <div className={styles.input}>
          <input disabled type="text" placeholder="- latitude" value={lat} />
        </div>
        <div className={styles.input}>
          <input disabled type="text" placeholder="- longitude" value={lng} />
        </div>
        <div className={styles.textArea}>
          <textarea {...register('description')} placeholder="description" />
        </div>
        <label className={styles.file} htmlFor="">
          <BiCloudUpload color="#718096" size={32} />

          <input onChange={handleImgChange} type="file" />
        </label>
        <div className={styles.check}>
          <label htmlFor=""> Disponível</label>

          <input
            {...register('available')}
            type="checkbox"
            name="available"
            id="available"
          />
        </div>
        {file && <img src={file?.preview} className={styles.preview} alt="" />}
        <button className={styles.button} type="submit">
          ok
        </button>
      </form>
    </div>
  );
}
