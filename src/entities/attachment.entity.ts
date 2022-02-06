import { Table ,  Column , Model , DataType} from "sequelize-typescript";

@Table 
export class Attachment extends Model {

    // we can also use decorator like @Primarykey @Unique
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement:true,
        unique: true,
        primaryKey: true,
    })
    attachment_id: string;

}