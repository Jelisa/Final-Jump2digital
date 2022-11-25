export function Input(props) {
  return (
    <label htmlFor={props.type}>
      {props.type}
      <input
        type={props.type}
        id={props.type}
        name={props.type}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        className={props.className}
        required
      />
    </label>
  );
}
