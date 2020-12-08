import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Environment, EnvironmentDocument } from './schema';

@Injectable()
export class EnvironmentService {
  constructor(
    @InjectModel(Environment.name)
    private model: Model<EnvironmentDocument>
  ) { }
  
}
