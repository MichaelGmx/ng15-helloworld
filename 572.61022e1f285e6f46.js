"use strict";(self.webpackChunkng15_helloworld=self.webpackChunkng15_helloworld||[]).push([[572],{9572:(y,g,a)=>{a.r(g),a.d(g,{RatingStarModule:()=>Z});var m=a(1508),i=a(4006),u=a(4793),t=a(4650),s=a(6895),p=a(3889),v=a(9589),h=a(7150),l=a(1022);const _=function(n){return{selected:n}};function C(n,f){if(1&n){const e=t.EpF();t.ynx(0),t.O4$(),t.TgZ(1,"svg",2),t.NdJ("mouseover",function(){const d=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.displayText=c.disabled?"":d.text)})("mouseout",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.displayText=r.ratingText?r.ratingText:"")})("click",function(){const d=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.setRating(d))}),t._UZ(2,"polygon",3),t.qZA(),t.BQk()}if(2&n){const e=f.$implicit,o=t.oxw();t.xp6(1),t.s9C("title",e.text),t.Q6J("ngClass",t.VKq(2,_,e.stars<=o._value))}}const b=function(n){return{disabled:n}};let x=(()=>{class n{constructor(){this.ratings=[{stars:1,text:"must GTFO ASAP"},{stars:2,text:"meh"},{stars:3,text:"it's ok"},{stars:4,text:"I'd be sad if  black hole ate it"},{stars:5,text:"10/10 would write review on Taobao"}],this.displayText="",this.onChanged=()=>{},this.onTouched=()=>{}}writeValue(e){this._value=e}registerOnChange(e){this.onChanged=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.disabled=e}setRating(e){this.disabled||(this._value=e.stars,this.ratingText=e.text,this.onChanged(e.stars),this.onTouched())}static#t=this.\u0275fac=function(o){return new(o||n)};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-star-rater"]],features:[t._Bn([{provide:i.JU,useExisting:(0,t.Gpc)(()=>n),multi:!0}])],decls:4,vars:5,consts:[[1,"stars",3,"ngClass"],[4,"ngFor","ngForOf"],["height","25","width","23",1,"star","rating",3,"title","ngClass","mouseover","mouseout","click"],["points","9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78",2,"fill-rule","nonzero"]],template:function(o,r){1&o&&(t.TgZ(0,"i"),t._uU(1),t.qZA(),t.TgZ(2,"div",0),t.YNc(3,C,3,4,"ng-container",1),t.qZA()),2&o&&(t.xp6(1),t.Oqu(r.displayText),t.xp6(1),t.Q6J("ngClass",t.VKq(3,b,r.disabled)),t.xp6(1),t.Q6J("ngForOf",r.ratings))},dependencies:[s.mk,s.sg],styles:[".stars[_ngcontent-%COMP%]{cursor:pointer}.stars[_ngcontent-%COMP%]:hover   .star[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%]{fill:#ffd055!important}.stars.disabled[_ngcontent-%COMP%]:hover{cursor:not-allowed}.stars.disabled[_ngcontent-%COMP%]:hover   .star[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%]{fill:#d8d8d8!important}.stars[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%]{float:left;margin:0 5px}.stars[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%]{fill:#d8d8d8}.stars[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%]:hover ~ .star[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%]{fill:#d8d8d8!important}.stars[_ngcontent-%COMP%]   .star.selected[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%]{fill:#ffd055!important}"]})}return n})();function M(n,f){if(1&n&&(t.TgZ(0,"div"),t._uU(1),t.ALo(2,"json"),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.hij(" \u7ed3\u679c\uff1a",t.lcZ(2,1,e.formResult)," ")}}const O=function(){return[24,24]},P=[{path:"",component:(()=>{class n{constructor(){this.galaxyForm=new i.cw({rating:new i.NI({value:null,disabled:!1})})}onSubmit(){this.formResult=this.galaxyForm.getRawValue()}static#t=this.\u0275fac=function(o){return new(o||n)};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-rating-star"]],decls:33,vars:6,consts:[[1,"da-content-banner"],["routerLink","/"],[1,"da-content-banner-title"],[1,"da-content-wrapper"],[3,"daGutter"],[3,"daSpan","daXs"],[1,"da-content-card"],[1,"reference"],["target","_blank","href","https://zhuanlan.zhihu.com/p/97561640"],["target","_blank","href","https://dev.to/bitovi/understanding-angular-s-control-value-accessor-interface-5e7k"],["target","_blank","href","https://github.com/tehfedaykin/galaxy-rating-app"],[3,"formGroup","ngSubmit"],[1,"form-group"],["formControlName","rating"],["type","submit"],[4,"ngIf"]],template:function(o,r){1&o&&(t.TgZ(0,"div",0)(1,"d-breadcrumb")(2,"d-breadcrumb-item")(3,"a",1),t._uU(4,"\u9996\u9875"),t.qZA()(),t.TgZ(5,"d-breadcrumb-item"),t._uU(6,"Demo"),t.qZA(),t.TgZ(7,"d-breadcrumb-item"),t._uU(8,"Rating Star"),t.qZA()(),t.TgZ(9,"div",2),t._uU(10," Rating Star "),t.qZA()(),t.TgZ(11,"div",3)(12,"da-layout-row",4)(13,"da-col-item",5)(14,"div",6)(15,"div",7)(16,"p"),t._uU(17,"\u53c2\u8003\uff1a"),t.qZA(),t.TgZ(18,"a",8),t._uU(19,"\u53c2\u8003\u6587\u7ae0"),t.qZA(),t.TgZ(20,"a",9),t._uU(21,"\u53c2\u8003\u6587\u7ae0[\u539f\u6587\uff1a\u82f1]"),t.qZA(),t.TgZ(22,"a",10),t._uU(23,"\u6e90\u7801"),t.qZA()(),t.TgZ(24,"form",11),t.NdJ("ngSubmit",function(){return r.onSubmit()}),t.TgZ(25,"div",12)(26,"label"),t._uU(27," Rating: "),t._UZ(28,"app-star-rater",13),t.qZA()(),t.TgZ(29,"div",12)(30,"d-button",14),t._uU(31,"Submit"),t.qZA()()(),t.YNc(32,M,3,3,"div",15),t.qZA()()()()),2&o&&(t.xp6(12),t.Q6J("daGutter",t.DdM(5,O)),t.xp6(1),t.Q6J("daSpan",24)("daXs",24),t.xp6(11),t.Q6J("formGroup",r.galaxyForm),t.xp6(8),t.Q6J("ngIf",r.formResult))},dependencies:[s.O5,i._Y,i.JJ,i.JL,p.F,v.Y,h.r0,l.NX,l.GQ,i.sg,i.u,u.rH,x,s.Ts],styles:[".da-content-banner[_ngcontent-%COMP%]{background-color:var(--devui-base-bg, #ffffff);padding:16px 20px;font-size:var(--devui-font-size-lg, 14px)}.da-content-banner-title[_ngcontent-%COMP%]{margin:12px 0 16px;font-size:var(--devui-font-size-modal-title, 18px);font-weight:var(--devui-font-title-weight, bold)}.da-content-wrapper[_ngcontent-%COMP%]{padding:12px}.da-content-title[_ngcontent-%COMP%]{font-size:var(--devui-font-size-page-title, 16px);padding:16px;border-bottom:1px solid var(--devui-dividing-line, #f2f2f3)}.da-content-card[_ngcontent-%COMP%]{overflow:hidden;background-color:var(--devui-base-bg, #ffffff);border-radius:var(--devui-border-radius-card, 6px);box-shadow:var(--devui-shadow-length-base, 0 2px 6px 0) var(--devui-light-shadow, rgba(37, 43, 58, .12))}[_nghost-%COMP%]     .devui-tag-item.epic{color:var(--devui-light-text, #ffffff);background-color:var(--devui-danger, #f66f6a)}[_nghost-%COMP%]     .devui-tag-item.High{color:var(--devui-light-text, #ffffff);background-color:var(--devui-danger-line, #f66f6a)}[_nghost-%COMP%]     .devui-tag-item.Low{color:var(--devui-light-text, #ffffff);background-color:var(--devui-warning-line, #fa9841)}[_nghost-%COMP%]     .devui-tag-item.Medium{color:var(--devui-light-text, #ffffff);background-color:var(--devui-form-control-line, #d7d8da)}[_nghost-%COMP%]  d-breadcrumb d-breadcrumb-item a, [_nghost-%COMP%]  d-breadcrumb d-breadcrumb-item span{font-size:var(--devui-font-size-lg, 14px)!important}[_nghost-%COMP%]  d-breadcrumb d-breadcrumb-item:last-child span{color:var(--devui-text, #252b3a)}button[_ngcontent-%COMP%]{padding:.5rem 1rem}.summary-markdown[_ngcontent-%COMP%]{background-color:#e6f7ff;padding:1rem;border:1px solid #91d5ff;border-radius:.3rem}.da-content-card[_ngcontent-%COMP%]{min-height:300px;padding:1.5rem}.reference[_ngcontent-%COMP%]{margin-bottom:1rem}.reference[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;font-size:.875rem;padding-left:1rem}"]})}return n})()}];let T=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#n=this.\u0275mod=t.oAB({type:n});static#e=this.\u0275inj=t.cJS({imports:[u.Bz.forChild(P),u.Bz]})}return n})(),Z=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#n=this.\u0275mod=t.oAB({type:n});static#e=this.\u0275inj=t.cJS({imports:[m.m,i.UX,T]})}return n})()}}]);