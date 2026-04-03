import { Injectable } from '@nestjs/common';
import { CreateDomainDto } from './dto/create-domain.dto';
import { UpdateDomainDto } from './dto/update-domain.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DomainsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createDomainDto: CreateDomainDto) {
    return this.prisma.domain.create({
      data: {
        name: createDomainDto.name!,
      },
    });
  }

  findAll() {
    return this.prisma.domain.findMany();
  }

  findOne(id: string) {
    return this.prisma.domain.findUnique({
      where: { id },
    });
  }

  update(id: string, updateDomainDto: UpdateDomainDto) {
    return this.prisma.domain.update({
      where: { id },
      data: {
        name: updateDomainDto.name,
      },
    });
  }

  remove(id: string) {
    return this.prisma.domain.delete({
      where: { id },
    });
  }
}