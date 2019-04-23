(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{378:function(t,e,r){},384:function(t,e,r){"use strict";var a=r(378);r.n(a).a},389:function(t,r,a){"use strict";a.r(r);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"works"},[r("route-info",{attrs:{pageTitle:"Работы"}}),r("div",{staticClass:"container works__container"},[r("transition",{attrs:{name:"card"}},[t.addWorkMode?r("Card",{attrs:{modifier:"full-size",title:"Добавление работы",type:"add"}},[r("div",{staticClass:"add-work"},[r("div",{staticClass:"add-work__container"},[r("div",{staticClass:"add-work__side add-work__side--image"},[t.newWork.photo?r("div",{staticClass:"add-work__change-image-container"},[r("div",{staticClass:"add-work__work-image",style:t.workImage}),r("label",{staticClass:"add-work__change-image-btn"},[t._v("Изменить превью"),r("input",{staticClass:"add-work__image-input",attrs:{type:"file"},on:{change:t.getPhotoUrl}})])]):r("div",{staticClass:"add-work__add-image-container"},[t._v("Перетащите или загрузите"),r("br"),t._v("для загрузки изображения"),r("div",{staticClass:"add-work__add-image-btn"},[r("label",{staticClass:"btn btn--gradient",attrs:{for:"work-image"}},[t._v("Загрузить")]),r("input",{staticClass:"add-work__image-input",attrs:{type:"file",id:"work-image"},on:{change:t.getPhotoUrl}})])])]),r("div",{staticClass:"add-work__side add-work__side--descriptions"},[r("div",{staticClass:"add-work__input-block"},[r("label",{staticClass:"add-work__input-label",attrs:{for:"work-name"}},[t._v("Название")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.newWork.title,expression:"newWork.title"}],staticClass:"add-work__input",attrs:{id:"work-name"},domProps:{value:t.newWork.title},on:{input:function(e){e.target.composing||t.$set(t.newWork,"title",e.target.value)}}})]),r("div",{staticClass:"add-work__input-block"},[r("label",{staticClass:"add-work__input-label",attrs:{for:"work-link"}},[t._v("Ссылка")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.newWork.link,expression:"newWork.link"}],staticClass:"add-work__input",attrs:{id:"work-link"},domProps:{value:t.newWork.link},on:{input:function(e){e.target.composing||t.$set(t.newWork,"link",e.target.value)}}})]),r("div",{staticClass:"add-work__input-block"},[r("label",{staticClass:"add-work__input-label",attrs:{for:"work-desc"}},[t._v("Описание")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newWork.description,expression:"newWork.description"}],staticClass:"add-work__input add-work__input--area",attrs:{id:"work-desc"},domProps:{value:t.newWork.description},on:{input:function(e){e.target.composing||t.$set(t.newWork,"description",e.target.value)}}})]),r("div",{staticClass:"add-work__input-block"},[r("label",{staticClass:"add-work__input-label",attrs:{for:"work-tags"}},[t._v("Добавление тегов")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.newWork.techs,expression:"newWork.techs"}],staticClass:"add-work__input",attrs:{id:"work-tags"},domProps:{value:t.newWork.techs},on:{input:[function(e){e.target.composing||t.$set(t.newWork,"techs",e.target.value)},t.watchTags]}}),r("div",{staticClass:"add-work__tags-container"},t._l(t.newWorkTags,function(t){return r("div",{staticClass:"add-work__tag"},[r("tag",{attrs:{title:t}})],1)}),0)])]),r("div",{staticClass:"add-work__footer"},[r("div",{staticClass:"add-work__footer-btn"},[r("button",{staticClass:"btn btn--cancel",on:{click:function(e){t.addWorkMode=!1}}},[t._v("Отменить")])]),r("div",{staticClass:"add-work__footer-btn"},[r("button",{staticClass:"btn btn--gradient",on:{click:function(e){return t.createWork(t.newWork)}}},[t._v("Сохранить")])])])])])]):t._e()],1),r("transition",{attrs:{name:"card"}},[t.editMode?r("Card",{attrs:{modifier:"full-size",title:"Редактирование работы",type:"add"}},[r("div",{staticClass:"add-work"},[r("div",{staticClass:"add-work__container"},[r("div",{staticClass:"add-work__side add-work__side--image"},[r("div",{staticClass:"add-work__change-image-container"},[r("div",{staticClass:"add-work__work-image",style:t.editableWorkPhoto}),r("label",{staticClass:"add-work__change-image-btn"},[t._v("Изменить превью"),r("input",{staticClass:"add-work__image-input",attrs:{type:"file"},on:{change:t.getEditablePhotoUrl}})])])]),r("div",{staticClass:"add-work__side add-work__side--descriptions"},[r("div",{staticClass:"add-work__input-block"},[r("label",{staticClass:"add-work__input-label",attrs:{for:"work-name"}},[t._v("Название")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.editableWork.title,expression:"editableWork.title"}],staticClass:"add-work__input",attrs:{id:"work-name"},domProps:{value:t.editableWork.title},on:{input:function(e){e.target.composing||t.$set(t.editableWork,"title",e.target.value)}}})]),r("div",{staticClass:"add-work__input-block"},[r("label",{staticClass:"add-work__input-label",attrs:{for:"work-link"}},[t._v("Ссылка")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.editableWork.title,expression:"editableWork.title"}],staticClass:"add-work__input",attrs:{id:"work-link"},domProps:{value:t.editableWork.title},on:{input:function(e){e.target.composing||t.$set(t.editableWork,"title",e.target.value)}}})]),r("div",{staticClass:"add-work__input-block"},[r("label",{staticClass:"add-work__input-label",attrs:{for:"work-desc"}},[t._v("Описание")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.editableWork.description,expression:"editableWork.description"}],staticClass:"add-work__input add-work__input--area",attrs:{id:"work-desc"},domProps:{value:t.editableWork.description},on:{input:function(e){e.target.composing||t.$set(t.editableWork,"description",e.target.value)}}})]),r("div",{staticClass:"add-work__input-block"},[r("label",{staticClass:"add-work__input-label",attrs:{for:"work-tags"}},[t._v("Добавление тегов")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.editableWork.techs,expression:"editableWork.techs"}],staticClass:"add-work__input",attrs:{id:"work-tags"},domProps:{value:t.editableWork.techs},on:{input:[function(e){e.target.composing||t.$set(t.editableWork,"techs",e.target.value)},function(e){return t.watchTags("edit")}]}}),r("div",{staticClass:"add-work__tags-container"},t._l(t.editableWork.taglist,function(t){return r("div",{staticClass:"add-work__tag"},[r("tag",{attrs:{title:t}})],1)}),0)])]),r("div",{staticClass:"add-work__footer"},[r("div",{staticClass:"add-work__footer-btn"},[r("button",{staticClass:"btn btn--cancel",on:{click:function(e){t.addWorkMode=!1}}},[t._v("Отменить")])]),r("div",{staticClass:"add-work__footer-btn"},[r("button",{staticClass:"btn btn--gradient",on:{click:t.saveEditableWork}},[t._v("Сохранить")])])])])])]):t._e()],1),r("div",{staticClass:"works__works-container"},[r("transition-group",{staticClass:"works__works-list",attrs:{tag:"ul",name:"card"}},[r("li",{key:"add-work-btn",staticClass:"works__work-item"},[r("add-btn",{attrs:{size:"card",name:"Добавить работу"},on:{addBtnHandler:function(e){return t.setMode("add")}}})],1),t._l(t.works,function(e){return r("li",{key:e.id,staticClass:"works__work-item"},[r("workItem",{attrs:{work:e},on:{removeWork:t.removeCurrentWork,editWork:t.changeCurrentWork}})],1)})],2)],1)],1)],1)};n._withStripped=!0;var o=a(131);function i(t,e,r,a,n,o,i){try{var s=t[o](i),d=s.value}catch(t){return void r(t)}s.done?e(d):Promise.resolve(d).then(a,n)}function s(t){return function(){var e=this,r=arguments;return new Promise(function(a,n){var o=t.apply(e,r);function s(t){i(o,a,n,s,d,"next",t)}function d(t){i(o,a,n,s,d,"throw",t)}s(void 0)})}}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),a.forEach(function(e){c(t,e,r[e])})}return t}function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var l={components:{addBtn:function(){return a.e(1).then(a.bind(null,401))},Card:function(){return a.e(0).then(a.bind(null,394))},routeInfo:function(){return a.e(2).then(a.bind(null,396))},tag:function(){return a.e(13).then(a.bind(null,397))},workItem:function(){return a.e(16).then(a.bind(null,398))}},data:function(){return{addWorkMode:!1,editMode:!1,newWork:{title:"",techs:"",photo:"",link:"",description:""},editableWork:{title:"",techs:"",photo:"",link:"",description:""},photoUrl:"",newWorkTags:[]}},computed:d({},Object(o.c)("works",{works:function(t){return t.works}}),{workImage:function(){return{backgroundImage:"url(".concat(this.photoUrl,")")}},editableWorkPhoto:function(){console.log(this.editableWork.photo);return this.editableWork.photo.match(/uploads/g)?{backgroundImage:"url(https://webdev-api.loftschool.com/".concat(this.editableWork.photo,")")}:{backgroundImage:"url(".concat(this.editableWork.photo,")")}}}),methods:d({},Object(o.b)("works",["fetchWork","addWork","removeWork","changeWork"]),{setMode:function(t){switch(t){case"add":this.addWorkMode=!0,this.editMode=!1;break;case"edit":this.editMode=!0,this.addWorkMode=!1;break;case"default":this.editMode=!1,this.addWorkMode=!1}},resetAddForm:function(){this.newWork.title="",this.newWork.techs="",this.newWork.photo="",this.newWork.link="",this.newWork.description=""},watchTags:function(t){"edit"===t?(console.log("true",!0),this.editableWork.taglist=this.editableWork.techs.split(" ")):this.newWorkTags=this.newWork.techs.split(" ")},getBase64:function(t){try{return this.newWork.photo=t,new Promise(function(e,r){var a=new FileReader;a.readAsDataURL(t),a.onload=function(){return e(a.result)},a.onerror=function(t){return r(t)}})}catch(t){console.log("error.message",t.message)}},createFormData:function(t){try{var e=new FormData;return e.append("title",t.title),e.append("techs",t.techs),e.append("link",t.link),e.append("photo",t.photo),e.append("description",t.description),t.id&&e.append("id",t.id),e}catch(t){console.log("error.message",t.message)}},getPhotoUrl:function(){var t=s(regeneratorRuntime.mark(function t(){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.getBase64(e.target.files[0]);case 3:r=t.sent,this.photoUrl=r,t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}},t,this,[[0,7]])}));return function(){return t.apply(this,arguments)}}(),getEditablePhotoUrl:function(){var t=s(regeneratorRuntime.mark(function t(e){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.getBase64(e.target.files[0]);case 3:r=t.sent,this.editableWork.photo=r,t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("error",t.t0);case 10:case"end":return t.stop()}},t,this,[[0,7]])}));return function(e){return t.apply(this,arguments)}}(),createWork:function(){var t=s(regeneratorRuntime.mark(function t(e){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.createFormData(e);case 3:return r=t.sent,t.next=6,this.addWork(r);case 6:return t.sent,t.next=9,this.fetchWork();case 9:return t.next=11,this.resetAddForm();case 11:this.setMode("default"),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),console.log("error.message",t.t0.message);case 17:case"end":return t.stop()}},t,this,[[0,14]])}));return function(e){return t.apply(this,arguments)}}(),removeCurrentWork:function(){var t=s(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.removeWork(e);case 3:return t.next=5,this.fetchWork();case 5:t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}},t,this,[[0,7]])}));return function(e){return t.apply(this,arguments)}}(),setEditableWork:function(t){this.editableWork.id=t.id,this.editableWork.title=t.title,this.editableWork.techs=t.techs,this.editableWork.photo=t.photo,this.editableWork.link=t.link,this.editableWork.description=t.description},changeCurrentWork:function(){var t=s(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.setEditableWork(e);case 3:return t.next=5,this.setMode("edit");case 5:t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}},t,this,[[0,7]])}));return function(e){return t.apply(this,arguments)}}(),saveEditableWork:function(){var t=s(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.setMode("default"),t.next=4,this.createFormData(this.editableWork);case 4:return t.sent,t.next=7,this.changeWork(this.editableWork);case 7:return t.next=9,this.fetchWork();case 9:t.next=13;break;case 11:t.prev=11,t.t0=t.catch(0);case 13:case"end":return t.stop()}},t,this,[[0,11]])}));return function(){return t.apply(this,arguments)}}()}),created:function(){var t=s(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.fetchWork();case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.log("error.message",t.t0.message);case 8:case"end":return t.stop()}},t,this,[[0,5]])}));return function(){return t.apply(this,arguments)}}(),updated:function(){var t=s(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()},u=(a(384),a(94)),k=Object(u.a)(l,n,[],!1,null,"15e9648a",null);k.options.__file="src/admin/components/pages/workPage.vue";r.default=k.exports}}]);