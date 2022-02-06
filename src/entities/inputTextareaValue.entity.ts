import { IntegerDataType } from 'sequelize/dist';
import { Table, Column , Model , DataType } from "sequelize-typescript";
import { InputTextarea } from 'src/entities/inputTextarea.entity';


@Table({
    tableName:'input_textarea_values'
})
export class InputTextareaValue extends Model{
    @Column({   
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
    })
    input_textarea_value_id: IntegerDataType;

    @Column({   
        type: DataType.INTEGER,
        allowNull: false,
        references:{
            model: InputTextarea,
            key: 'input_textarea_id'
        }
    })
    input_textarea_id: IntegerDataType;

    @Column({   
        type: DataType.STRING,
        allowNull: false,
        
    })
    value: string;
}