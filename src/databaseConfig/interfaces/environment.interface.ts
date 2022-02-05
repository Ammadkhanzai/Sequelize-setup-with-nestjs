import { DatabaseCredentialsInterface } from "./database.interface";

export interface EnvironmentInterface {
    development: DatabaseCredentialsInterface;
    test: DatabaseCredentialsInterface;
    production: DatabaseCredentialsInterface;
}