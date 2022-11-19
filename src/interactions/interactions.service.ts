import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityNotFoundError, Repository } from 'typeorm';
import { CreateInteractionDto } from './dto/create-interaction.dto';
import { UpdateInteractionDto } from './dto/update-interaction.dto';
import { Interaction } from './entities/interaction.entity';

@Injectable()
export class InteractionsService {
  constructor(
    @InjectRepository(Interaction)
    private interactionRepo: Repository<Interaction>,
  ) {}

  create(CreateInteractionDto: CreateInteractionDto) {
    const interaction = this.interactionRepo.create(CreateInteractionDto);
    return this.interactionRepo.save(interaction);
  }

  findAll() {
    return this.interactionRepo.find();
  }

  findOne(id: number) {
    return this.interactionRepo.findOne({where: {id: id}});
  }

  async update(id: number, UpdateInteractionDto: UpdateInteractionDto) {
    const updateResult = await this.interactionRepo.update(id, UpdateInteractionDto);
    if (!updateResult.affected) {
      throw new EntityNotFoundError(Interaction, id);
    }
    return this.interactionRepo.findOne({where: {id: id}});
  }

  async remove(id: number) {
    const deleteResult = await this.interactionRepo.delete(id);
    if (!deleteResult.affected) {
      throw new EntityNotFoundError(Interaction, id);
    }
  }
}
