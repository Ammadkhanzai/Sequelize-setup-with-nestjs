import { IntegerDataType } from 'sequelize/dist';
import { InputEmail } from 'src/entities/inputEmail.entity';
import { Table, Column , Model , DataType } from "sequelize-typescript";

@Table({
    tableName:'input_email_values'
})
export class InputEmailValue extends Model{
    @Column({   
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
    })
    input_email_value_id: IntegerDataType;

    @Column({   
        type: DataType.INTEGER,
        allowNull: false,
        references:{
            model: InputEmail,
            key: 'input_email_id'
        }
    })
    input_number_id: IntegerDataType;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    value: String;
}