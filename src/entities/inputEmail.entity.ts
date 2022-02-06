import { IntegerDataType } from 'sequelize/dist';
import { Table , Column, Model , DataType } from "sequelize-typescript";


@Table({ 
    tableName:'input_emails'
})
export class InputEmail extends Model {
    
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        unique: true,
        primaryKey:true,
    })
    input_email_id: IntegerDataType;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    title: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    max_length: IntegerDataType;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    min_length: IntegerDataType;

    @Column({
        type: DataType.STRING,
        allowNull:true,
    })
    default: string;
    

    @Column({
        type: DataType.BOOLEAN,
        defaultValue:false,
    })
    required: Boolean;

}


