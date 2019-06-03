const personaInformation = {
  fullName: {
    length: {
      minimum: 1,
    },
  },
  email: {
    email: true,
  },
  number: {
    numericality: {
      onlyInteger: true,
    },
    length: {
      minimum: 7,
    },
  },
  registrationNumber: {
    numericality: {
      onlyInteger: true,
    },
    length: {
      minimum: 1,
    },
  },
};

const aboutYou = {
  dependents: {
    numericality: {
      onlyInteger: true,
    },
    length: {
      minimum: 1,
    },
  },
  monthlyIncome: {
    numericality: {
      onlyInteger: true,
    },
    length: {
      minimum: 1,
    },
  },
};

const qualificationsAndEmployment = {
  companyName: {
    length: {
      minimum: 1,
    },
  },
  companyAddress: {
    length: {
      minimum: 1,
    },
  },
  timeWithCompany: {
    length: {
      minimum: 1,
    },
  },
};

const signUp = {
  firstName: {
    length: {
      minimum: 1,
    },
  },
  lastName: {
    length: {
      minimum: 1,
    },
  },
  password: {
    length: {
      minimum: 8,
      message: 'Must be at least 8 characters',
    },
  },
};

export default {
  personaInformation,
  aboutYou,
  qualificationsAndEmployment,
  signUp,
};
