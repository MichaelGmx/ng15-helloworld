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
          title: '@ng-core',
          link: '/angular/ng-core',
          children: [
            {
              title: '依赖注入',
              link: '/angular/ng-core/inject-demo',
            },
          ],
        },
        {
          title: '@ng-animations',
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