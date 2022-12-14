import { Table, Column, Model, HasMany, AutoIncrement, DataType } from 'sequelize-typescript';
import Sequelize from 'sequelize'


@Table({ modelName: "pAFk3qiAgG1_houses" })
export class housesEntity extends Model<housesEntity> {
    @Column({ type: Sequelize.INTEGER({length: 11 }), primaryKey: true, autoIncrement: true })
    id: number;
    @Column({ type: Sequelize.STRING(512), allowNull: false })
    address: string;
    @Column({ type: Sequelize.INTEGER({length: 11 }), allowNull: false, defaultValue: 0 })
    price: number;
    @Column({ type: Sequelize.INTEGER({length: 11 }), allowNull: false, defaultValue: 0 })
    money_tax: number;
    @Column({ type: Sequelize.INTEGER({length: 11 }), allowNull: false, defaultValue: 0 })
    score_tax: number;
    @Column({ type: Sequelize.STRING(256), allowNull: false })
    name_user: string;
    @Column({ type: Sequelize.INTEGER({length: 11 }), allowNull: false, defaultValue: 0 })
    id_user: number;
    @Column({ type: Sequelize.TINYINT({ length: 1 }), allowNull: false, defaultValue: 0 })
    is_buy: number;


    @Column({ type: Sequelize.FLOAT, allowNull: false, defaultValue: 0 })
    x: number;
    @Column({ type: Sequelize.FLOAT, allowNull: false, defaultValue: 0 })
    y: number;
    @Column({ type: Sequelize.FLOAT, allowNull: false, defaultValue: 0 })
    z: number;

    @Column({ type: Sequelize.FLOAT, allowNull: false, defaultValue: 0 })
    int_x: number;
    @Column({ type: Sequelize.FLOAT, allowNull: false, defaultValue: 0 })
    int_y: number;
    @Column({ type: Sequelize.FLOAT, allowNull: false, defaultValue: 0 })
    int_z: number;


    @Column({ type: Sequelize.INTEGER({length: 11 }), allowNull: false, defaultValue: 0 })
    pin: number;
    @Column({ type: Sequelize.INTEGER({length: 3 }), allowNull: false, defaultValue: 0 })
    chest: number;
    @Column({ type: Sequelize.INTEGER({length: 11 }), allowNull: false, defaultValue: 0 })
    empty_col: number;   
    
}

