import { useState } from "react";
import { Input } from "../../atoms/input/Input.jsx";

export function Form() {
  const [inputs, setInputs] = useState({ email: "", password: "" });

  const onChangeInputs = (event) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
  };
  return (
    <form className="">
      <Input
        type="email"
        value={inputs.email}
        onChange={onChangeInputs}
        placeholder={"Email"}
        className={"none"}
        required
      />
      <Input
        type="password"
        value={inputs.passowrd}
        onChange={onChangeInputs}
        placeholder={"Password"}
        className={"none"}
        required
      />
      <input type="submit" value="Send" className="modal__submit" />
    </form>
  );
}
