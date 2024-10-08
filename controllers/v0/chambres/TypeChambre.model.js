import { DataTypes } from "sequelize";
import { sequelize } from "../../../sequelize.js";
import { User } from "../users/models/User.js";

export const TypeChambre = sequelize.define("TypeChambre", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  created_by: {
    type: DataTypes.UUID,
    allowNull: false,
  },
});

TypeChambre.belongsTo(User, {
  foreignKey: "created_by",
});
