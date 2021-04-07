import { Schema } from 'mongoose'

export const createDefaultSchema = (obj: unknown): Schema => new Schema(Object.assign({}, obj), { timestamps: true, versionKey: false })

export const createWithoutTimestampSchema = (obj: unknown): Schema => new Schema(Object.assign({}, obj), { versionKey: false })
