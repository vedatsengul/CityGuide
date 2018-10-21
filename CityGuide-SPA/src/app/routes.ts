import { ValueComponent } from "./value/value.component";
import { CityComponent } from "./city/city.component";
import { CityDetailComponent } from "./city/city-detail/city-detail.component";
import { Routes} from "@angular/router"
import { CityAddComponent } from "./city/city-add/city-add.component";

export const appRoutes:Routes = [
    {path:"city", component:CityComponent},    
    {path:"cityadd", component:CityAddComponent},
    {path:"cityDetail/:cityId", component:CityDetailComponent},
    {path:"value", component:ValueComponent},
    {path:"**", redirectTo:"city", pathMatch:"full"}
];
