import { IntegerDataType } from 'sequelize/dist';
import { Table , Column , Model , DataType } from "sequelize-typescript";

@Table({ tableName: 'complaints' })
export class Complaint extends Model {

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement:true,
        unique: true,
        primaryKey: true,
    })
    complaint_id: IntegerDataType;

    @Column({
        type: DataType.INTEGER,
        references: {
            model: 'Users',
            key: 'user_id',
        }
    })
    user_id : IntegerDataType;

    @Column({
        type: DataType.UUID,
        allowNull : false,
        defaultValue : DataType.UUID
    })
    uuid : string;

    @Column({
        type: DataType.STRING,
        allowNull : false,
    })
    subject : string;

    @Column({
        type: DataType.TEXT,
        allowNull : false,
    })
    description : string;

    @Column({
        type: DataType.ENUM,
        values: ['OPEN', 'CLOSED', 'PENDING', 'RESOLVED', 'REJECTED'],
        allowNull: false,
    })
    status : string;

}