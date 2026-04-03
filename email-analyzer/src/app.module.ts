import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthModule } from './health/health.module';
import { DomainsModule } from './domains/domains.module';
import { PrismaModule } from './prisma/prisma.module';
import { DnsModule } from './dns/dns.module';

@Module({
  imports: [HealthModule, DomainsModule, PrismaModule, DnsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
