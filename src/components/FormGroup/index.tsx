import React, { useState, useEffect, memo } from 'react';
import styles from './styles.module.scss';

const FormGroup = ({ name, label, type, data, disabled }: any) => {
  const [value, setValue] = useState('');
  useEffect(() => {
    const initialValue = data && data[name] ? data[name] : null;
    if (initialValue !== undefined) setValue(initialValue);
  }, [name, data]);

  const handleChange = (e: any) => {
    if (value === e.target.value) return;

    setValue(e.target.value);
  };
  const inputProps = {
    type,
    name,
    value: value || '',
    onChange: handleChange,
  };

  return (
    <div className={styles.wrapper}>
      <label className="font-weight-bold">{label}</label>
      <input disabled={disabled} {...inputProps} />
    </div>
  );
};

export default memo(FormGroup);
