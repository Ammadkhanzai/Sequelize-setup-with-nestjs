import { IntegerDataType } from 'sequelize/dist';
import { Table , Column, Model , DataType } from "sequelize-typescript";

@Table({ 
    tableName:'input_selects'
})
export class InputSelect extends Model {
    
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
    })
    input_select_id: IntegerDataType;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    title: string;

    @Column({
        type: DataType.JSON,
        allowNull:false,

    })
    options: JSON;
    
    @Column({
        type: DataType.BOOLEAN,
        defaultValue:false,
        comment: "Options can be multiple."
    })
    multiple: Boolean;
    
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


