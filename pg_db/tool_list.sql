CREATE DATABASE "NCCalc" WITH OWNER = postgres ENCODING = 'UTF8' CONNECTION
LIMIT = -1;
CREATE SCHEMA tool_list AUTHORIZATION postgres;
CREATE TABLE tool_list.tool_list (
    id serial NOT NULL,
    name character varying(12) NOT NULL,
    type character varying(12),
    diameter character varying(12) NOT NULL,
    speed integer,
    feed integer,
    PRIMARY KEY (id)
);
ALTER TABLE IF EXISTS tool_list.tool_list OWNER to postgres;