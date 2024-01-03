import { Module } from '@nestjs/common';
import { SplinterlandsDataServicesModule } from 'src/frameworks/external-services/splinterlands/splinterlands-data-services.module';

@Module({
    imports: [SplinterlandsDataServicesModule],
    exports: [SplinterlandsDataServicesModule],
})
export class SplinterlandsServicesModule { }
