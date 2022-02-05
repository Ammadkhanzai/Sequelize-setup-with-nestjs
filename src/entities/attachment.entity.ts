import { Table ,  Column , Model , DataType} from "sequelize-typescript";

@Table 
export class Attachment extends Model {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement:true,
        unique: true,
        primaryKey: true,
    })
    attachment_id: string;

    


}