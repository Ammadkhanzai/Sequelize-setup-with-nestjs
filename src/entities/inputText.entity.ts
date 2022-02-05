import { Table ,Model , Column, DataType } from "sequelize-typescript";

@Table({
    tableName:'input_texts'
})
export class InputText extends Model{

    @Column({   
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
        field: 'input_text_id'
    })
    input_text_id: String;

    @Column({
        type: DataType.STRING,
        allowNull:false,
    })
    title: string;

    @Column({
        type: DataType.INTEGER,
        allowNull:false,
    })
    max_length: string;
    @Column({
        type: DataType.INTEGER,
        allowNull:false,
    })
    min_length: string;
    
    // @Column({
    //     type: DataType.STRING,
    //     allowNull:false,

    // })
    // name: string;

    @Column({
        type: DataType.STRING,
        allowNull:true,
    })
    default_value: string;
    

    @Column({
        type: DataType.ENUM,
        values:['true','false'],        
        allowNull:true,
    })
    required: string;

}