const callToApi = () => {
  return fetch(
    'https://beta.adalab.es/pw-recursos/apis/adalabers-v1/promo-patata.json'
  )
    .then((response) => response.json())
    .then((response) =>
      response.results.map((result) => {
        return {
          //id: result.id,
          name: result.name,
          counselor: result.counselor,
          speciality: result.speciality,
          socialNetworks: result.social_networks,
        };
      })
    );
};

export default callToApi;
