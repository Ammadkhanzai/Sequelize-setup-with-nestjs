import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { IntegerDataType } from 'sequelize/dist';

@Table({
    tableName:'logins'
})
export class Login extends Model<Login>{
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement:true,
        unique: true,
        primaryKey: true,
    })
    login_id: IntegerDataType;

    @Column({
        type: DataType.INTEGER,
        references: {
            model: 'Users',
            key: 'user_id',
        }
    })
    user_id: IntegerDataType;  

    @Column({
        type: DataType.DATE,
        allowNull: false,
        defaultValue:DataType.NOW,
    })
    timein: Date;   

    @Column({
        type: DataType.DATE,
        allowNull: true,
    })
    timeout: Date; 
}
