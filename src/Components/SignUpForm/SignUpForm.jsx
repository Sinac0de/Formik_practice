import axios from "axios";
import { useFormik } from "formik";
import InputField from "../common/InputField";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import RadioInput from "../common/RadioInput";
import SelectComponent from "../common/SelectComponent";
import CheckBoxInput from "../common/CheckBoxInput";

const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
  gender: "",
  nationality: "",
  interests: [],
  terms: false,
};

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
  nationality: Yup.string().required("Please select a nationality!"),
  interests: Yup.array()
    .min(1, "Please check at least one interest!")
    .required(),
  terms: Yup.boolean()
    .required("Please accept the terms!")
    .oneOf([true], "Please accept the terms!"),
});

const radioOptions = [
  { label: "Male", value: "0" },
  { label: "Female", value: "1" },
];

const selectOptions = [
  { option: "Select a nationality", value: "" },
  { option: "Iran", value: "IR" },
  { option: "Usa", value: "US" },
];

const checkBoxOptions = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
];

const SignUpForm = () => {
  const [formValues, setFormValues] = useState(null);

  const onSubmit = (values) => {
    // values.preventDefault();
    console.log(values);
    axios
      .post("http://localhost:3001/users", values)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  const formik = useFormik({
    initialValues: formValues || initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });

  useEffect(() => {
    axios
      .get("http://localhost:3001/users/1")
      .then((res) => {
        setFormValues(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <form
      className="flex flex-col w-[560px] m-auto mt-5"
      onSubmit={formik.handleSubmit}
    >
      <InputField label="Name" formik={formik} name="name" />
      <InputField label="Email" formik={formik} name="email" />
      <InputField label="Phone Number" formik={formik} name="phoneNumber" />
      <InputField
        label="Password"
        formik={formik}
        name="password"
        type="password"
      />
      <InputField
        label="Confirm Password"
        formik={formik}
        name="confirmPassword"
        type="password"
      />

      <RadioInput name="gender" formik={formik} radioOptions={radioOptions} />

      <SelectComponent
        selectOptions={selectOptions}
        formik={formik}
        name="nationality"
      />

      <CheckBoxInput
        checkBoxOptions={checkBoxOptions}
        formik={formik}
        name="interests"
      />

      <div className="flex gap-[0.3em]">
        <label htmlFor="terms">Terms & Conditions</label>
        <input
          type="checkbox"
          id="terms"
          value={true}
          name="terms"
          checked={formik.values.terms}
          onChange={formik.handleChange}
        />
      </div>

      {formik.errors.terms && (
        <div className="text-red-600">{formik.errors.terms}</div>
      )}

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
