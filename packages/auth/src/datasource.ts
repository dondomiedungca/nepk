import { DataSource } from 'typeorm';

const initialize = () => {
  return new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: (process.env.DB_PORT || 5432) as number,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: ['dist/**/*.entity.{ts,js}'],
    migrations: ['dist/**/migrations/*.js'],
    migrationsTableName: 'migrations',
    synchronize: false,
  });
};

export default initialize();
