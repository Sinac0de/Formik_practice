import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
  gender: "",
};

const onSubmit = () => {};

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required!"),
  email: Yup.string()
    .email("Email format is incorrect!")
    .required("Email is required!"),
  phoneNumber: Yup.string()
    .required()
    .matches(
      /^[0-9]{11}$/,
      "Phone number must contain only numbers and has 11 number in it!"
    )
    .nullable(),
  password: Yup.string()
    .required("Password is required!")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      "Password must contain minimum eight characters, at least one letter and one number"
    ),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
  gender: Yup.string().required("Gender is required!"),
});

const SignUpForm = () => {
  const [formValues, setFormValues] = useState({});

  const formik = useFormik({
    initialValues: formValues || initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  console.log(formik.touched);

  return (
    <form
      className="flex flex-col w-[560px] m-auto mt-5"
      onSubmit={formik.onSubmit}
    >
      <div className="flex flex-col gap-[0.2em] my-1">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          {...formik.getFieldProps("name")}
        />
        {formik.errors.name && formik.touched.name && (
          <div className="text-red-600">{formik.errors.name}</div>
        )}
      </div>

      <div className="flex flex-col gap-[0.2em] my-1">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          {...formik.getFieldProps("email")}
        />
        {formik.errors.email && formik.touched.email && (
          <div className="text-red-600">{formik.errors.email}</div>
        )}
      </div>

      <div className="flex flex-col gap-[0.2em] my-1">
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          {...formik.getFieldProps("phoneNumber")}
        />
        {formik.errors.phoneNumber && formik.touched.phoneNumber && (
          <div className="text-red-600">{formik.errors.phoneNumber}</div>
        )}
      </div>

      <div className="flex flex-col gap-[0.2em] my-1">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          {...formik.getFieldProps("password")}
        />
        {formik.errors.password && formik.touched.password && (
          <div className="text-red-600">{formik.errors.password}</div>
        )}
      </div>

      <div className="flex flex-col gap-[0.2em] my-1">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          {...formik.getFieldProps("confirmPassword")}
        />
        {formik.errors.confirmPassword && formik.touched.confirmPassword && (
          <div className="text-red-600">{formik.errors.confirmPassword}</div>
        )}
      </div>

      <div className="flex gap-[1em] my-1">
        <div className="flex gap-[0.3em]">
          <label htmlFor="0">Male</label>
          <input
            type="radio"
            id="0"
            value="0"
            name="gender"
            checked={formik.values.gender === "0"}
            onChange={formik.handleChange}
          />
        </div>

        <div className="flex gap-[0.3em]">
          <label htmlFor="1">Female</label>
          <input
            type="radio"
            id="1"
            value="1"
            name="gender"
            checked={formik.values.gender === "1"}
            onChange={formik.handleChange}
          />
        </div>
        {formik.errors.gender && formik.touched.gender && (
          <div className="text-red-600">{formik.errors.gender}</div>
        )}
      </div>

      <button
        onClick={() => setFormValues()}
        className="rounded bg-slate-400 mt-5 p-1 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Load Data
      </button>

      <button
        type="submit"
        className="rounded bg-slate-400 mt-5 p-1 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={!formik.isValid}
      >
        Sign Up!
      </button>
    </form>
  );
};

export default SignUpForm;
