import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute           } from '@angular/router';
import { Location                 } from '@angular/common';

import { Hero        } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(
    // route: URL から Hero id を取得するために使う
    private route:       ActivatedRoute,
    private heroService: HeroService,
    // location: 前のビューに戻るために使う
    private location:    Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    // + 演算子で文字列を数値に変換する
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  // Hero 詳細データの保存
  save(): void {
    // 処理が終わったら、this.goBack で前のページに戻る
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
}
