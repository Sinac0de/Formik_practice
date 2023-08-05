import { Fragment } from "react";

const CheckBoxInput = ({ name, formik, checkBoxOptions }) => {
  return (
    <div className="flex gap-[1em] my-1">
      {checkBoxOptions.map((item) => {
        return (
          <Fragment key={item.value}>
            <div className="flex gap-[0.3em]">
              <label htmlFor={item.value}>{item.label}</label>
              <input
                type="checkbox"
                id={item.value}
                value={item.value}
                name={name}
                checked={formik.values[name].includes(item.value)}
                onChange={formik.handleChange}
              />
            </div>
          </Fragment>
        );
      })}
      {formik.errors[name] && formik.touched[name] && (
        <div className="text-red-600">{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default CheckBoxInput;
