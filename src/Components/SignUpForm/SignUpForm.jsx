const SignUpForm = () => {
  return (
    <form className="form">
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" />
      <label htmlFor="email" id="email" name="email">
        Email
      </label>
      <input type="email" />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" />
      <button type="submit" />
    </form>
  );
};

export default SignUpForm;
