import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
    tableName:'users'
})
export class User extends Model<User>{

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement:true,
        unique: true,
        primaryKey: true,
    })
    user_id: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    username: string;   

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    email: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    password: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    firstname: string;  

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    lastname: string;   
    
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    address1: string;   
    
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    address2: string;   

    @Column({
        type: DataType.ENUM,
        values: ['ADMIN', 'LOCAL'],
        allowNull: false,
    })
    type: string;

    @Column({
        type: DataType.ENUM,
        values: ['TRUE', 'FALSE'],
        allowNull: false,
    })
    status: string;
}