import { IntegerDataType } from 'sequelize/dist';
import { InputNumber } from 'src/entities/inputNumber.entity';
import { Table, Column , Model , DataType } from "sequelize-typescript";

@Table({
    tableName:'input_number_values'
})
export class InputNumberValue extends Model{
    @Column({   
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
    })
    input_number_value_id: IntegerDataType;

    @Column({   
        type: DataType.INTEGER,
        allowNull: false,
        references:{
            model: InputNumber,
            key: 'input_number_id'
        }
    })
    input_number_id: IntegerDataType;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    value: string;

}