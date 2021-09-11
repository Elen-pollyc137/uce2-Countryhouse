import { getFormData } from '../../helpers/getForm';
import { useUser } from '../../hooks/useUser';
import FormGroup from '../FormGroup';
import styles from './styles.module.scss';
const Modal = ({ setModal }: any) => {
  const { user, userEdit } = useUser();

  function handleOutsideClick(e: any) {
    if (e.target === e.currentTarget) {
      setModal(false);
    }
  }
  function handleUserEdit(event: any) {
    event.preventDefault();
    const formData = getFormData(event);
    userEdit(formData);
  }
  function handleConfirm() {
    // handleFetchEdit();
    setModal(false);
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      <form onSubmit={handleUserEdit} className={styles.modalBox}>
        <div className={styles.title}>Editar Usuário</div>
        <FormGroup
          name="name"
          label="nome"
          type="text"
          data={{ name: user?.name }}
        />
        <FormGroup
          name="email"
          label="email"
          type="text"
          data={{ email: user?.email }}
        />
        <FormGroup
          name="phone"
          label="Telefone"
          type="text"
          data={{ phone: user?.phone }}
        />

        <button type="submit">confirmar</button>
      </form>
    </div>
  );
};

export default Modal;
