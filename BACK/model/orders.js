const Sequelize = require("sequelize");
const moment = require("moment");

class Order extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      orderCount: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      orderDate: {
        type: Sequelize.DATE,
        get() {
          return moment(this.getDataValue("orderDate")).format("YYYY/MM/DD HH:mm:ss");
        },
      },
      receiverName: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      receiverPhone: {
        type: Sequelize.STRING(12),
        allowNull: false,
      },
    });
  }
}
