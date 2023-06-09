import { Dynamo } from "dynamodb-onetable/Dynamo";
import { Table } from "dynamodb-onetable";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

import { ConfigService } from "@nestjs/config";

const configService = new ConfigService();

const client = new Dynamo({
  client: new DynamoDBClient({
    region: configService.get<string>("DEFAULT_REGION"),
  }),
});

export const dynamoDbMainTable = new Table({
  client: client,
  name: configService.get<string>("DYNAMO_DB_MAIN_TABLE"),
  partial: true,
  schema: {
    version: "0.0.1",
    indexes: {
      primary: { hash: "PK", sort: "SK" },
      GSI1: { hash: "GSI1PK", sort: "GSI1SK" },
      GSI2: { hash: "GSI2PK" },
    },
    models: {
      User: {
        PK: { type: String, value: "USER" },
        SK: { type: String, value: "${userId}" },
        userRole: { type: String, enum: ["USER", "ADMIN"], required: true },
        userId: { type: String, generate: "ulid" },
        GSI1PK: { type: String },
        GSI1SK: { type: String },
        GSI2PK: { type: String },
        firstName: { type: String },
        lastName: { type: String },
        data: {
          type: Object,
          default: {},
          schema: {
            country: { type: String },
          },
        },
      },
    } as const,
    params: {
      isoDates: true,
      timestamps: true,
    },
  },
});
