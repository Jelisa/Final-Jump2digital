export function Card(prop) {
  return (
    <article className="card">
        <div className="card__superior">
            <p>{prop.data.id}</p>
        </div>   
      <div className="card__inferior">
          <p className="card__name">{prop.data.ren}</p>
      </div>
    </article>
  );
}

