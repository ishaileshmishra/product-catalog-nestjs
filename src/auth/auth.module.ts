import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'

@Module({
    imports: [
        // in case of orm: type orm module.forFeature([array of entity])
    ],
    controllers: [AuthController,],
    providers: [AuthService,],
})
export class AuthModule{}