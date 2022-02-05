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
    permission_id: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })  
    permission: string;


}