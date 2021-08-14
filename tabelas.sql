create database db_empresas;
drop table if exists usuario cascade;
create table usuario(
  id serial primary key not null,
  nome varchar(30) not null,
  email varchar(100) not null,
  senha text not null,
);

