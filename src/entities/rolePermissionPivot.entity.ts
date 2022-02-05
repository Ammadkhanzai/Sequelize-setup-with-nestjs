import { Table , Column, Model , DataType, AllowNull } from "sequelize-typescript";

@Table({
    tableName:'role_permission_pivots'
})
export class  RolePermissionPivot extends Model{
    @Column({
        type : DataType.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
    })
    role_permission_pivot_id: string;

    @Column({
        type:DataType.INTEGER,
        allowNull: false,   
        references: {
            model:'Roles',
            key:'role_id'
        }
    })
    role_id: string;

    @Column({
        type:DataType.INTEGER,
        allowNull: false,   
        references: {
            model:'Permissions',
            key:'permission_id'
        }
    })
    permission_id: string;
}