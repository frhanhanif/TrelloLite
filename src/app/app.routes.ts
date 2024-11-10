import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import("../app/pages/home/home.component"),
        children:
        [
            {
                path: '',
                redirectTo:'boards',
                pathMatch: 'full'
            },
            {
                path: 'boards',
                loadComponent: () => import("./pages/boards/boards.component"),
            },
            {
                path: 'workspaces',
                loadComponent: () => import("./pages/workspaces/workspaces.component"),
            },
            
        ]
    },
    {
        path: 'workspace/board',
        loadComponent: () => import("./pages/workspace-board/workspace-board.component")
    }
];
