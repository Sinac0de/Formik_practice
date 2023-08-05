const InputField = ({ label, name, formik, type = "text" }) => {
  return (
    <div className="flex flex-col gap-[0.2em] my-1">
      <label htmlFor="name">{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        {...formik.getFieldProps(name)}
      />
      {formik.errors[name] && formik.touched[name] && (
        <div className="text-red-600">{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default InputField;
