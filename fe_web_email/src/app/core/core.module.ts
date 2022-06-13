import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { ApiService } from './api.service';
import { AuthService } from './auth-api.service';

@NgModule({
    imports: [HttpClientModule, RouterModule, BrowserAnimationsModule],
    providers: [ApiService, AuthService],
})
export class CoreModule { }
