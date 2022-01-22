import '../styles/AdalabersList.scss';

const AdalabersList = (props) => {
  return (
    <table className="table">
      <thead className="table__thead">
        <tr className="table__tr">
          <th className="table__th">Nombre</th>
          <th className="table__th">Tutora</th>
          <th className="table__th">Especialidad</th>
          <th className="table__th">Redes sociales</th>
        </tr>
      </thead>

      <tbody className="table__tbody">{props.renderAdalabers()}</tbody>
    </table>
  );
};

export default AdalabersList;
