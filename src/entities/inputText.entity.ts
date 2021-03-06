import { IntegerDataType } from 'sequelize/dist';
import { Table ,Model , Column, DataType, AutoIncrement, PrimaryKey, Unique } from "sequelize-typescript";

@Table({
    tableName:'input_texts'
})
export class InputText extends Model{

    // @AutoIncrement
    // @PrimaryKey
    // @Unique
    // @AutoIncrement
    @Column({   
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
        
    })
    input_text_id: IntegerDataType;

    @Column({
        type: DataType.STRING,
        allowNull:false,
    })
    title: string;

    @Column({
        type: DataType.INTEGER,
        allowNull:false,
    })
    max_length: IntegerDataType;

    @Column({
        type: DataType.INTEGER,
        allowNull:false,
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