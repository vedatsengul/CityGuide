import { ValueComponent } from "./value/value.component";
import { CityComponent } from "./city/city.component";
import { Routes} from "@angular/router"

export const appRoutes:Routes = [
    {path:"city", component:CityComponent},
    {path:"value", component:ValueComponent},
    {path:"**", redirectTo:"city", pathMatch:"full"}
];
