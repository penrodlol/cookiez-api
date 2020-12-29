import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddEnvironmentDTO, DeleteEnvironmentDTO, UpdateEnvironmentDTO } from './dto';
import { Environment, EnvironmentDocument } from './schema';

@Injectable()
export class EnvironmentService {
  constructor(
    @InjectModel(Environment.name)
    private model: Model<EnvironmentDocument>
  ) { }

  async findAll(uid: string) {
    return this.model
      .find({ uid })
      .sort({ updated: 'desc' })
      .exec();
  }
  
  async updateOne(dto: UpdateEnvironmentDTO) {
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

  async addOne(
    dto: AddEnvironmentDTO,
    uid: string,
  ) {
    return new this.model({ ...dto, uid }).save();
  }

  async deleteOne(dto: DeleteEnvironmentDTO) {
    return this.model
      .findByIdAndDelete(dto.id)
      .exec();
  }

}
