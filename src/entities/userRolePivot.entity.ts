import { Table , Column , Model , DataType, AllowNull } from "sequelize-typescript";

@Table({
    tableName:'user_role_pivots'
})
export class UserRolePivot extends Model {
    @Column({   
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
    })
    user_role_pivot_id: String;

    @Column({
        type: DataType.INTEGER,
        allowNull:false,
        references : {
            model: 'Users',
            key: 'user_id'
        }
    })
    user_id: string;

    @Column({
        type: DataType.INTEGER,
        allowNull:false,
        references : {
            model: 'Roles',
            key: 'role_id'
        }
    })
    role_id: string;
}