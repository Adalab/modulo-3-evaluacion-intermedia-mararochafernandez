import '../styles/components/AdalabersList.scss';

const AdalabersList = (props) => {
  const filteredAdalabers = props.adalabers.filter(
    (adalaber) =>
      adalaber.name
        .toLocaleLowerCase()
        .includes(props.searchName.toLocaleLowerCase()) &&
      adalaber.counselor
        .toLocaleLowerCase()
        .includes(props.searchCounselor.toLocaleLowerCase())
  );

  const renderAdalabers = () => {
    return filteredAdalabers.length > 0 ? (
      filteredAdalabers.map((adalaber) => (
        <tr key={adalaber.id} className="table__tr">
          <td className="table__td">{adalaber.name}</td>
          <td className="table__td">{adalaber.counselor}</td>
          <td className="table__td">{adalaber.speciality}</td>

          {adalaber.social_networks && adalaber.social_networks.length > 0 ? (
            <td className="table__td table__td--social-networks">
              {renderSocialNetworks(adalaber.social_networks)}
            </td>
          ) : (
            <td className="table__td"></td>
          )}
        </tr>
      ))
    ) : (
      <tr className="table__tr">
        <td className="table__td table__td--centered" colspan="4">
          No hay resultados de búsqueda.
        </td>
      </tr>
    );
  };

  const renderSocialNetworks = (socialNetworks) => {
    if (socialNetworks && socialNetworks.length > 0) {
      return socialNetworks.map((socialNetwork, index) => (
        <a
          key={index}
          className="social-network"
          href={socialNetwork.url}
          title={socialNetwork.name}
        >
          {socialNetwork.name}
        </a>
      ));
    }
  };

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

      <tbody className="table__tbody">{renderAdalabers()}</tbody>
    </table>
  );
};

export default AdalabersList;
