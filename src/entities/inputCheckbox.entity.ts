import { IntegerDataType } from 'sequelize/dist';
import { Table , Column, Model , DataType, PrimaryKey } from "sequelize-typescript";
@Table({ 
    tableName:'input_checkboxs'
})
export class InputCheckbox extends Model {
    
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        unique: true,
        primaryKey:true,
    })
    input_checkbox_id: IntegerDataType;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    title: string;



    @Column({
        type: DataType.BOOLEAN,
        allowNull:true,
    })
    default: Boolean;
    

    @Column({
        type: DataType.BOOLEAN,
        defaultValue:false,
    })
    required: Boolean;

}


