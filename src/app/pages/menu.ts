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
          title: '@angular/core',
          link: '/angular/ng-core',
          children: [
            {
              title: '依赖注入',
              link: '/angular/ng-core/inject-demo',
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
    }
  ];
}