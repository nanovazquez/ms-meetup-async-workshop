const backendBaseUri = "http://localhost:8101";

const applicationService = {
  getApplications: () => {
    return fetch(`${backendBaseUri}/applications`)
      .then(response => response.json())
    ;
  }
};

export default applicationService;