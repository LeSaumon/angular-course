import { Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';

export const routes: Routes = [
    {
        path: "",
        title: "Home page",
        component: HomeComponent
    },
    {
        path: "todo",
        title: "Todo page",
        component: TodoListComponent
    },
    {
        path: "shop",
        title: "Shopping page",
        component: ShopComponent
    }

];
