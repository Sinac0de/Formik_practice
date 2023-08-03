import { useFormik } from "formik";

const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  return (
    <form className="flex flex-col w-[560px] m-auto mt-5">
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
      />
      <label
        htmlFor="email"
        id="email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
      >
        Email
      </label>
      <input type="email" />
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
