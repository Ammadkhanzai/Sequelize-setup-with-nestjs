import { Role } from 'src/Entities/role.entity';
import { User } from 'src/entities/user.entity';
import { IntegerDataType } from 'sequelize/dist';
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
    user_role_pivot_id: IntegerDataType;

    @Column({
        type: DataType.INTEGER,
        allowNull:false,
        references : {
            model: User,
            key: 'user_id'
        }
    })
    user_id: IntegerDataType;

    @Column({
        type: DataType.INTEGER,
        allowNull:false,
        references : {
            model: Role,
            key: 'role_id'
        }
    })
    role_id: IntegerDataType;
}