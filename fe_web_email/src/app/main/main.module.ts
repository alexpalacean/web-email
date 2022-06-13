import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { mainRoutes } from './main.routes';

@NgModule({
    imports: [RouterModule.forChild(mainRoutes), SharedModule],
    providers: [SharedModule]
})
export class MainModule { }
