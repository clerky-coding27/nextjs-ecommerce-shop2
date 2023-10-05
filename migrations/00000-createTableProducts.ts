import { Sql } from 'postgres';

export type Product = {
  id: number;
  name: string;
  price: number;
  image: string | null;
};

export async function up(sql: Sql) {
  await sql`
CREATE TABLE products(
id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
name varchar(30) NOT NULL,
price integer NOT NULL,
image varchar(100) );
`;
}

export async function down(sql: Sql) {
  await sql`
  DROP TABLE products;
  `;
}