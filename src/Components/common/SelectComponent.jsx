const SelectComponent = ({ formik, selectOptions, name }) => {
  return (
    <div className="flex gap-[1em] my-1">
      <select {...formik.getFieldProps(name)}>
        {selectOptions.map((item) => {
          return (
            <option key={item.value} value={item.value}>
              {item.option}
            </option>
          );
        })}
      </select>
      {formik.errors[name] && formik.touched[name] && (
        <div className="text-red-600">{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default SelectComponent;
