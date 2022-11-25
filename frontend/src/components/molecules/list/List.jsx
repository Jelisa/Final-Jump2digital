export function List(props) {
  return (
    <ul className={props.className}>
      {props.data.map(function (element, idx) {
        return <li key={idx}>{element}</li>;
      })}
    </ul>
  );
}
