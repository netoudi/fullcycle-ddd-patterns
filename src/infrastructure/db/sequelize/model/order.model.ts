import { BelongsTo, Column, ForeignKey, HasMany, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { CustomerModel } from '@app/infrastructure/db/sequelize/model/customer.model';
import { OrderItemModel } from '@app/infrastructure/db/sequelize/model/order-item.model';

@Table({
  tableName: 'orders',
  timestamps: false,
  underscored: true,
})
export class OrderModel extends Model {
  @PrimaryKey
  @Column
  declare id: string;

  @ForeignKey(() => CustomerModel)
  @Column({ allowNull: false })
  declare customerId: string;

  @BelongsTo(() => CustomerModel)
  declare customer: CustomerModel;

  @HasMany(() => OrderItemModel)
  declare items: OrderItemModel[];

  @Column({ allowNull: false })
  declare total: number;
}
