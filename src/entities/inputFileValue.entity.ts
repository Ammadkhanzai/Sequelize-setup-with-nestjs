import { IntegerDataType } from 'sequelize/dist';
import { InputFile } from 'src/entities/inputFile.entity';
import { Table, Column , Model , DataType } from "sequelize-typescript";

@Table({
    tableName:'input_file_values'
})
export class InputFileValue extends Model{
    @Column({   
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
    })
    input_file_value_id: IntegerDataType;

    @Column({   
        type: DataType.INTEGER,
        allowNull: false,
        references:{
            model: InputFile,
            key: 'input_file_id'
        }
    })
    input_file_id: IntegerDataType;

    @Column({
        type: DataType.JSON,
        allowNull: false,
    })
    filename: JSON;
}