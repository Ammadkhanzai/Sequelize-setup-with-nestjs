import { IntegerDataType } from 'sequelize/dist';
import { Table, Column , Model , DataType } from "sequelize-typescript";
import { InputText } from 'src/entities/inputText.entity';


@Table({
    tableName:'input_text_values'
})
export class InputTextValue extends Model{
    @Column({   
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
    })
    input_text_value_id: IntegerDataType;

    @Column({   
        type: DataType.INTEGER,
        allowNull: false,
        references:{
            model: InputText,
            key: 'input_text_id'
        }
    })
    input_text_id: IntegerDataType;
}