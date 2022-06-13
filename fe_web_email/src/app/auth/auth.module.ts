import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { routes } from './auth.routes';

@NgModule({
    imports: [RouterModule.forChild(routes), SharedModule],
    declarations: [RegisterComponent, LoginComponent],
})
export class AuthModule { }
