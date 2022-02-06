import { IntegerDataType } from 'sequelize/dist';
import { InputCheckbox } from 'src/entities/inputCheckbox.entity';
import { Table, Column , Model , DataType } from "sequelize-typescript";

@Table({
    tableName:'input_checkbox_values'
})
export class InputCheckboxValue extends Model{
    @Column({   
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
    })
    input_checkbox_value_id: IntegerDataType;

    @Column({   
        type: DataType.INTEGER,
        allowNull: false,
        references:{
            model: InputCheckbox,
            key: 'input_checkbox_id'
        }
    })
    input_checkbox_id: IntegerDataType;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
    })
    value: Boolean;
}