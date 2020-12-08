import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Type, TypeDocument } from './schema';

@Injectable()
export class TypeService {
  constructor(
    @InjectModel(Type.name)
    private model: Model<TypeDocument>
  ) { }
  
}
