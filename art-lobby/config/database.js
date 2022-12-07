module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        uri: env('REACT_APP_DATABASE'),
      },
      options: {
        ssl: true,
      },
    },
  },
});
