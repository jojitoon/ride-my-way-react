const mock = {
  message: {
    error: null,
    message: null
  },
  auth: {
    data: {
      data: {
        token: "token",
        userData: "data",
        message: "message"
      }
    },
    error: {
      response: {
        data: {
          data: {
            message: 'not successfully'
          }
        }
      }
    }

  },
  rides: {
    data: {
      data: {
        rides: "token",
        ride: "ride",
        request: 'request',
        message: "message"
      }
    },
    error: {
      response: {
        data: {
          status:"error",
          data: {
            message: 'not successfully'
          },
        }
      }
    }
  },
  user: {
    data: {
      data: {
        user: "token",
      }
    },
    error: {
      response: {
        data: {
          data: {
            message: 'not successfully'
          }
        }
      }
    }
  }
};

export default mock;
