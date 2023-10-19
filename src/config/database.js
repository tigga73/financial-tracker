module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'admin',
  database: 'financialTracker',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
};
