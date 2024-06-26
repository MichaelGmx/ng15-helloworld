export default function (values: any) {
  return [
    {
      title: values['gettingStarted']['title'],
      menuIcon: 'icon icon-console',
      link: '/getting-started',
      children: [
        {
          title: values['gettingStarted']['sample'],
          link: '/getting-started/sample',
        }
      ],
    },
    {
      title: 'Angular',
      menuIcon: 'icon icon-code',
      link: '/angular',
      children: [
        {
          title: '生命周期',
          link: '/angular/life-cycle',
          children: [
            {
              title: 'Peek-A-Boo',
              link: '/angular/life-cycle/peek-a-boo',
            },
            {
              title: 'Spy Directive',
              link: '/angular/life-cycle/spy',
            },
            {
              title: 'OnChanges',
              link: '/angular/life-cycle/on-changes',
            },
            {
              title: 'DoCheck',
              link: '/angular/life-cycle/do-check',
            },

            {
              title: 'AafterView',
              link: '/angular/life-cycle/after-view',
            },
            {
              title: 'AfterContent',
              link: '/angular/life-cycle/after-content',
            },
            {
              title: 'Counter Spy',
              link: '/angular/life-cycle/counter-spy',
            },
          ],
        },
        {
          title: '@angular/common',
          link: '/angular/ng-common',
          children: [
            {
              title: '*ngIf',
              link: '/angular/ng-common/ng-if',
            },
            {
              title: '*ngfor',
              link: '/angular/ng-common/ng-for',
            },
            {
              title: 'Pipe 内置管道',
              link: '/angular/ng-common/pipe',
            },
            {
              title: '*ngTemplateOutlet',
              link: '/angular/ng-common/ng-template-outlet',
            },
            {
              title: '*ngComponentOutlet',
              link: '/angular/ng-common/ng-component-outlet',
            },
          ],
        },
        {
          title: '@angular/core',
          link: '/angular/ng-core',
          children: [
            {
              title: '依赖注入',
              link: '/angular/ng-core/inject',
            },
            {
              title: 'ngZone',
              link: '/angular/ng-core/ng-zone',
            },
            {
              title: 'Renderer2',
              link: '/angular/ng-core/renderer2',
            },
            {
              title: 'Change Detector',
              link: '/angular/ng-core/change-detector',
            },
            {
              title: '变更检测策略',
              link: '/angular/ng-core/change-detection-strategy',
            },
            {
              title: 'TemplateRef ViewContainerRef',
              link: '/angular/ng-core/template-container-ref',
            },
            {
              title: '内容投影 ng-content',
              link: '/angular/ng-core/ng-content',
            },
            {
              title: '@ViewChild @ViewChildren',
              link: '/angular/ng-core/view-child',
            },
            {
              title: '@ContentChild @ContentChildren',
              link: '/angular/ng-core/content-child',
            },
            {
              title: '动态组件',
              link: '/angular/ng-core/dynamic-component',
            },
            {
              title: 'ViewContainerRef(不全面)',
              link: '/angular/ng-core/view-container',
            },
          ],
        },
        {
          title: '@angular/forms',
          link: '/angular/ng-form',
          children: [
            {
              title: '简单示例',
              link: '/angular/ng-form/simple-form',
            },
            {
              title: 'ngModel',
              link: '/angular/ng-form/ng-model',
            },
            {
              title: 'Reactive Form',
              link: '/angular/ng-form/reactive-form',
            },
            {
              title: 'ControlValueAccessor',
              link: '/angular/ng-form/control-value-accessor',
            },
          ],
        },
        {
          title: '@angular/router',
          link: '/angular/ng-route',
          children: [
            {
              title: 'ActivatedRoute',
              link: '/angular/ng-route/activated-route',
            },
            {
              title: '嵌套路由',
              link: '/angular/ng-route/nest-router',
            },
          ],
        },
        {
          title: '样式',
          link: '/angular/style',
          children: [
            {
              title: '样式封装',
              link: '/angular/style/style-encapsure',
            },
            {
              title: '主题 Theme',
              link: '/angular/style/theme',
            },
          ],
        },
        {
          title: '@angular/animations',
          link: '/angular/ng-animations',
          children: [
            {
              title: '简单示例',
              link: '/angular/ng-animations/sample-animate-demo',
            },
            {
              title: '练习',
              link: '/angular/ng-animations/my-practice',
            },
          ],
        }
      ],
    },
    {
      title: 'Material',
      menuIcon: 'icon icon-code',
      link: '/material',
      children: [
        {
          title: 'cdk',
          link: '/material/cdk',
          children: [
            {
              title: 'cdkDrag',
              link: '/material/cdk/drag-drop',
            },
            {
              title: 'cdkDropList',
              link: '/material/cdk/drop-list',
            },
          ],
        },
        {
          title: 'components',
          link: '/material/components',
          children: [
            {
              title: '表格 Table',
              link: '/material/components/table',
            },
          ],
        },
      ],
    },
    {
      title: 'Google Map',
      menuIcon: 'icon icon-gps',
      link: '/google-map',
      children: [
        {
          title: 'Geocoder 地址转义',
          link: '/google-map/geocoder',
        },
        {
          title: 'Direction 路线规划',
          link: '/google-map/direction',
        },
        {
          title: 'StreetView 街景',
          link: '/google-map/street-view',
        },
      ],
    },
    {
      title: 'RxJS',
      menuIcon: 'icon icon-code',
      link: '/rxjs',
      children: [
        {
          title: '第一次尝试',
          link: '/rxjs/first-rxjs',
        },
        {
          title: 'observable',
          link: '/rxjs/observable',
        },
        {
          title: 'subject',
          link: '/rxjs/subject',
        },
        {
          title: 'operators',
          link: '/rxjs/operators',
        },
        {
          title: 'Demo - 实现Autocomplete',
          link: '/rxjs/demo-autocomplete',
        },
      ],
    },
    {
      title: 'Demo',
      menuIcon: 'icon icon-code',
      link: '/demo',
      children: [
        {
          title: 'todo',
          link: '/demo/todo',
        },
        {
          title: 'Rating Star',
          link: '/demo/rating-star',
        },
      ],
    },
  ];
}