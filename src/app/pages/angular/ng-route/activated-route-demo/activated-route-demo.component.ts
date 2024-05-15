import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-activated-route-demo',
  templateUrl: './activated-route-demo.component.html',
  styleUrls: ['./activated-route-demo.component.scss']
})
export class ActivatedRouteDemoComponent implements OnInit {

  name: string;
  age: number;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    // 若访问： http://localhost:4200/angular/router/route?name=testval&age=23
    // 
    this.activatedRoute.queryParams.subscribe(params => {
      this.name = params['name'];   // testval
      this.age = params['age'];     // 23
    });
  }

  getParamsDemo() {
    this.router.navigate(['/angular', 'ng-route', 'activated-route'], { queryParams: { name: 'testval', age: 23 } });
    // this.router.navigateByUrl('/angular/ng-route/activated-route?name=testval&age=23');   // 同理
  }
}
