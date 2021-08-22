// import important parts of sequelize library
const { Model, DataTypes, DECIMAL, INTEGER } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_name: {
      type: String,
      allowNull: false,
      trim: true
    },
    price: {
      type: DECIMAL(10,2),
      allowNull: false,
      validate: {
      isDecimal: true
      }},
    stock: {
      type: INTEGER,
      allowNull: false,
      default: 10,
      validate: {
        isNumeric: true
      }
    },
    category_id: {
      type: INTEGER,
      ref: category_id
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
