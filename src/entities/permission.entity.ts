import { IntegerDataType } from 'sequelize/dist';
import { Table, Column , Model , DataType  } from "sequelize-typescript";

@Table({
    tableName:'permissions'
})
export class Permission extends Model {

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement:true,
        unique: true,
        primaryKey: true,
    })
    permission_id: IntegerDataType;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })  
    permission: string;


}