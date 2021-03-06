import { IntegerDataType } from 'sequelize/dist';

import { Table, Column , Model , DataType } from "sequelize-typescript";

@Table({
    tableName:'roles'
})
export class Role extends Model {

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement:true,
        unique: true,
        primaryKey: true,
    })
    role_id: IntegerDataType;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    role: string;   

}
