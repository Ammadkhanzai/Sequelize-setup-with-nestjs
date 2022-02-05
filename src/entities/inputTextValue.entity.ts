import { InputText } from 'src/entities/inputText.entity';
import { Table, Column , Model , DataType } from "sequelize-typescript";
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
    input_text_value_id: String;

    @Column({   
        type: DataType.INTEGER,
        allowNull: false,
        references:{
            model: InputText,
            key: InputText.primaryKeyAttribute
        }
    })
    input_text_id: String;
}