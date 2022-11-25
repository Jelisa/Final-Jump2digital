export function Select({
  textAttribute,
  isDisabled,
  value,
  handleSelect,
  arrayForOptions,
}) {
  return (
    <div className="control-wrapper">
      <label className="control-label" htmlFor={`${textAttribute}`}>
        {`${textAttribute}`}
      </label>
      <select
        className="control-select"
        disabled={isDisabled}
        id={`${textAttribute}`}
        value={value}
        onChange={(event) => handleSelect(event.target.value)}
      >
        <option value="">Any</option>
        {arrayForOptions.map((element) => (
          <option key={element} value={element}>
            {element}
          </option>
        ))}
      </select>
    </div>
  );
}