import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddTypeDTO, DeleteTypeDTO, UpdateTypeDTO } from './dto';
import { Type, TypeDocument } from './schema';

@Injectable()
export class TypeService {
  constructor(
    @InjectModel(Type.name)
    private model: Model<TypeDocument>
  ) { }

  async findAll() {
    return this.model
      .find()
      .sort({ updated: 'desc' })
      .exec();
  }
  
  async updateOne(dto: UpdateTypeDTO) {
    const conditions = { _id: dto.id };
    const options = { useFindAndModify: false, new: true };

    delete dto.id;

    return this.model
      .findOneAndUpdate(
        conditions,
        dto,
        options,
      )
      .exec();
  }

  async addOne(dto: AddTypeDTO) {
    return new this.model(dto).save();
  }

  async deleteOne(dto: DeleteTypeDTO) {
    return this.model
      .findByIdAndDelete(dto.id)
      .exec();
  }

}
