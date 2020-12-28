import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddCookieDTO, DeleteCookieDTO, UpdateCookieDTO } from './dto';
import { Cookie, CookieDocument } from './schema';

@Injectable()
export class CookieService {
  constructor(
    @InjectModel(Cookie.name)
    private model: Model<CookieDocument>
  ) { }

  async findAll() {
    return this.model
      .find()
      .sort({ updated: 'desc' })
      .exec();
  }
  
  async updateOne(dto: UpdateCookieDTO) {
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

  async addOne(dto: AddCookieDTO) {
    return new this.model(dto).save();
  }

  async deleteOne(dto: DeleteCookieDTO) {
    return this.model
      .findByIdAndDelete(dto.id)
      .exec();
  }

}
