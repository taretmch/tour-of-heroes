import { NgModule             } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent      } from './heroes/heroes.component';
import { DashboardComponent   } from './dashboard/dashboard.component';
import { HeroDetailComponent  } from './hero-detail/hero-detail.component';

const routes: Routes = [
  // デフォルトルート
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // @path: URL にマッチする文字列
  // @component: そのルートに遷移するときにルーターが作成すべきコンポーネント
  { path: 'heroes',     component: HeroesComponent        },
  { path: 'dashboard',  component: DashboardComponent     },
  { path: 'detail/:id', component: HeroDetailComponent    },
];

@NgModule({
  // ルートにパスを設定
  imports: [RouterModule.forRoot(routes)],
  // アプリ全体で RouterModule を使えるように設定
  exports: [RouterModule]
})
export class AppRoutingModule { }
