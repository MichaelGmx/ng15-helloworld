import { Component, Inject, InjectionToken } from '@angular/core';

export interface CustomConfig {
  apiEndpoint: string;
  title: string;
}

export const HERO_DI_CONFIG: CustomConfig = {
  apiEndpoint: 'api.heroes.com',
  title: 'Depedency Injection'
}
export const CUSTOM_CONFIG = new InjectionToken<CustomConfig>('custom.config');

@Component({
  selector: 'injection-token',
  templateUrl: './injection-token.component.html',
  providers: [
    // 使用 InjectionToken 自定义令牌
    { provide: CUSTOM_CONFIG, useValue: HERO_DI_CONFIG },
  ]
})
export class InjectionTokenComponent {

  title: string;
  apiEndpoint: string;

  constructor(
    @Inject(CUSTOM_CONFIG) config: CustomConfig,
  ) {
    this.title = config.title;
    this.apiEndpoint = config.apiEndpoint;
  }

}
