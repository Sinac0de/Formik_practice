import { Fragment } from "react";

const RadioInput = ({ name, formik, radioOptions }) => {
  return (
    <div className="flex gap-[1em] my-1">
      {radioOptions.map((item) => {
        return (
          <Fragment key={item.value}>
            <div className="flex gap-[0.3em]">
              <label htmlFor={item.value}>{item.label}</label>
              <input
                type="radio"
                id={item.value}
                value={item.value}
                name={name}
                checked={formik.values[name] === item.value}
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

export default RadioInput;
