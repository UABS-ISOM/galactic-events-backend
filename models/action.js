"use strict";
module.exports = (sequelize, DataTypes) => {
  const Action = sequelize.define(
    "action",
    {
      actionId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      target: {
        type: DataTypes.STRING
      }
    },
    {
      timestamps: true,
      updatedAt: false
    }
  );

  return Action;
};
