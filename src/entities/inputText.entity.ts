import { Table ,Model , Column, DataType, AutoIncrement, PrimaryKey, Unique } from "sequelize-typescript";

@Table({
    tableName:'input_texts'
})
export class InputText extends Model{

    // @AutoIncrement
    @PrimaryKey
    @Unique
    @AutoIncrement
    @Column({   
        type: DataType.INTEGER,
        // allowNull: false,
        // autoIncrement: true,
        // unique: true,
        // primaryKey: true,
        
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