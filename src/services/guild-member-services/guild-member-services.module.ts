import { Module } from '@nestjs/common';
import { GuildMemberServicesModule } from '../../frameworks';

@Module({
    imports: [GuildMemberServicesModule],
    exports: [GuildMemberServicesModule],
})
export class GuildMemberDataServicesModule { }
