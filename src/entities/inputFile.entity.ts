import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { IntegerDataType } from 'sequelize/dist';

@Table({
    tableName:'input_files'
})
export class InputFile extends Model{
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement:true,
        unique: true,
        primaryKey: true,
    })
    input_file_id: IntegerDataType;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    title: string;

    @Column({
        type: DataType.JSON,
        allowNull: false,
        comment: "Supported types"
    })
    types: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        defaultValue: 5,
        comment: 'File size in MB'
    })
    max_size : IntegerDataType;

    
    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false,
        comment: 'Is file support multi upload.'
    })
    multiple : Boolean;

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false,
    })
    required : Boolean;

    
}
