import { useFormik } from "formik";

const initialValues = { name: "", email: "", password: "" };

const onSubmit = () => {};

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Name is Required!";
  }

  if (!values.email) {
    errors.email = "Email is Required!";
  }

  if (!values.password) {
    errors.password = "Password is Required!";
  }

  console.log(errors);

  return errors;
};

const SignUpForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

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
        value={formik.values.name}
        onChange={formik.handleChange}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
      />
      <button type="submit" className="rounded bg-slate-400 mt-5 p-1">
        Sign Up!
      </button>
    </form>
  );
};

export default SignUpForm;
