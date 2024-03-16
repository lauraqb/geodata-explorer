import styles from './FormInput.module.scss'
type FormInputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  name: string
  label: string
  value: string
  error?: null | string
  type?: string
}
function FormInput({onChange, name, label, value, error = null, type}: FormInputProps) {
  const inputType = type ? type : 'text'
  return (
    <div className={styles.base}>
      <label>{label}</label>
      <input
        type={inputType}
        className={`${error !== null ? styles.error : ''}`}
        onChange={onChange}
        name={name}
        value={value}
      />

      {error && (
        <div className={styles.inputError} data-testid='input-error'>
          {error}
        </div>
      )}
    </div>
  )
}

export default FormInput
