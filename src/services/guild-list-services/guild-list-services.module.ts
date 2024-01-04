import { Module } from '@nestjs/common';
import { GuildListServicesModule } from '../../frameworks';

@Module({
    imports: [GuildListServicesModule],
    exports: [GuildListServicesModule],
})
export class GuildListDataServicesModule { }
