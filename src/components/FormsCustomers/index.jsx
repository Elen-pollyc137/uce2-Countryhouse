import styles from './styles.module.scss';
import { MdClose, MdEdit } from 'react-icons/md';
import { getFormData } from '../../../Helpers/getForm';
import FormGroup from '../FormGroup';
import { useCustomers } from '../../../hooks/useCustomers';
import { Loading } from '../../UI/Loading';
import { useEffect, useState, memo } from 'react';
import { useUser } from '../../../hooks/useUser';
const FormCostumer = ({
  first_name,
  last_name,
  cpf,
  //register,
  telephone,
  email,
  date_added,
  //status,
  customer_id,
  is_active,
  salary,
  alter,
}) => {
  const [errorForm, setErrorForm] = useState('');
  const [edit, setEdit] = useState(alter ?? true);
  const { setActive, fetchAddCustomers, fetchEditCustomers, loading } =
    useCustomers();
  const { user } = useUser();

  useEffect(() => {
    setTimeout(() => {
      setErrorForm('');
    }, 5000);
  }, [errorForm]);
  function fetchCustomers(event) {
    event.preventDefault();
    const formData = getFormData(event);

    const filds = [
      'cpf',
      'date_added',
      'email',
      'first_name',
      'last_name',
      'salary',
      'telephone',
    ];

    const validate = filds.filter((item) => formData[item]?.length === 0);

    if (validate.length === 0) {
      if (!customer_id && formData) {
        fetchAddCustomers(formData);
      } else {
        fetchEditCustomers({ ...formData, is_active, email });
      }
    } else {
      setErrorForm('Todos os campos precisão ser preenchidos');
    }
  }
  function handleActive(event) {
    event.preventDefault();

    setActive(false);
    setEdit(false);
  }
  return (
    <div className={styles.container}>
      <form onSubmit={fetchCustomers} className={styles.form}>
        <div className={styles.close}>
          <MdClose onClick={handleActive} size={32} />
          {alter && user.profile === 5 && (
            <MdEdit
              onClick={() => {
                setEdit(!edit);
              }}
              size={32}
            />
          )}
        </div>
        <FormGroup
          name="first_name"
          label="Nome"
          type="text"
          data={{ first_name }}
          disabled={edit}
        />
        <FormGroup
          name="last_name"
          label="Sobrenome"
          type="text"
          data={{ last_name }}
          disabled={edit}
        />
        <FormGroup
          disabled={edit}
          name="cpf"
          label="CPF"
          type="text"
          data={{ cpf }}
        />
        {/* <FormGroup
          name="register"
          label="Matricula"
          type="text"
          data={{ register }}
        /> */}
        <FormGroup
          name="telephone"
          label="Telefone"
          type="text"
          data={{ telephone }}
          disabled={edit}
        />
        {!email ? (
          <FormGroup
            name="email"
            label="E-mail"
            type="email"
            data={{ email }}
          />
        ) : (
          <div className={styles.wrapper}>
            <label htmlFor="emial">E-mail</label>
            <input
              disabled
              name="email"
              label="E-mail"
              type="email"
              value={email}
            />
          </div>
        )}
        <FormGroup
          name="salary"
          label="Salário"
          type="number"
          data={{ salary }}
          disabled={edit}
        />

        <FormGroup
          name="date_added"
          label="Data Admissão"
          type="date"
          time
          data={{ date_added: date_added.slice(0, 10) }}
          disabled={edit}
        />
        {!loading?.add ? (
          <button
            style={edit ? { display: 'none' } : { display: 'inline' }}
            className={styles.button}
            type="submit"
          >
            ok
          </button>
        ) : (
          <div
            style={{
              marginTop: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Loading />
          </div>
        )}
      </form>
      <span className={styles.errorForm}>{errorForm}</span>
    </div>
  );
};

export default memo(FormCostumer);
