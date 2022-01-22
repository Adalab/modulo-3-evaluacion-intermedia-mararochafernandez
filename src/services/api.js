const callToApi = () => {
  return fetch(
    'https://beta.adalab.es/pw-recursos/apis/adalabers-v1/promo-patata.json'
  )
    .then((response) => response.json())
    .then((response) =>
      response.results.map((result) => {
        return {
          name: result.name,
          counselor: result.counselor,
          speciality: result.speciality,
          social_networks: result.social_networks,
        };
      })
    );
};

export default callToApi;
