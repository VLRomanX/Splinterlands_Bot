import { Module } from '@nestjs/common';
import { BattleServicesModule } from '../../frameworks';

@Module({
    imports: [BattleServicesModule],
    exports: [BattleServicesModule],
})
export class BattleDataServicesModule { }
