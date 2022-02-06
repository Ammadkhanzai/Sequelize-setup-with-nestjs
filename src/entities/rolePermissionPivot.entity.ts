import { Table , Column, Model , DataType, AllowNull } from "sequelize-typescript";
import { IntegerDataType } from 'sequelize/dist';

import { Role } from 'src/Entities/role.entity';
import { Permission } from 'src/entities/permission.entity';


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
    role_permission_pivot_id: IntegerDataType;

    @Column({
        type:DataType.INTEGER,
        allowNull: false,   
        references: {
            model:Role,
            key:'role_id'
        }
    })
    role_id: IntegerDataType;

    @Column({
        type:DataType.INTEGER,
        allowNull: false,   
        references: {
            model: Permission,
            key:'permission_id'
        }
    })
    permission_id: IntegerDataType;
}