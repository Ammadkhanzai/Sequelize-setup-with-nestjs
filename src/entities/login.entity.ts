import { Table, Column, Model, DataType } from 'sequelize-typescript';

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
    login_id: string;

    @Column({
        type: DataType.INTEGER,
        references: {
            model: 'Users',
            key: 'user_id',
        }
    })
    user_id: string;  

    @Column({
        type: DataType.DATE,
        allowNull: false,
        defaultValue:DataType.NOW,
    })
    timein: string;   

    @Column({
        type: DataType.DATE,
        allowNull: true,
    })
    timeout: string; 
}
