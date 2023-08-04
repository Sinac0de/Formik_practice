import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = { name: "", email: "", password: "" };

const onSubmit = () => {};

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required!"),
  email: Yup.string()
    .email("Email format is incorrect!")
    .required("Email is required!"),
  password: Yup.string().required("Password is required!"),
});

const SignUpForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  console.log(formik.touched);

  return (
    <form
      className="flex flex-col w-[560px] m-auto mt-5"
      onSubmit={formik.onSubmit}
    >
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
      <button type="submit" className="rounded bg-slate-400 mt-5 p-1">
        Sign Up!
      </button>
    </form>
  );
};

export default SignUpForm;
