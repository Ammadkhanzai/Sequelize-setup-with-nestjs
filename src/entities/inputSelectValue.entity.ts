import { IntegerDataType } from 'sequelize/dist';
import { InputSelect } from 'src/entities/inputSelect.entity';
import { Table, Column , Model , DataType } from "sequelize-typescript";



@Table({
    tableName:'input_select_values'
})
export class InputSelectValue extends Model {
    @Column({   
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
    })
    input_select_value_id: IntegerDataType;

    @Column({   
        type: DataType.INTEGER,
        allowNull: false,
        references:{
            model: InputSelect,
            key: 'input_select_id'
        }
    })
    input_select_id: IntegerDataType;

    @Column({
        type: DataType.JSON,
        allowNull: false,
    })
    value: JSON;
}