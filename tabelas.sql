create database db_empresas;
drop table if exists usuario cascade;
create table usuario(
  id serial primary key not null,
  nome varchar(30) not null,
  email varchar(100) not null,
  senha text not null,
);

drop table if exists empresa cascade;
create table empresa(
  id serial primary key not null,
  nome varchar(100) not null,
  cnpj char(14) not null
);
