(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4efdda63"],{"1dde":function(t,n,e){var r=e("d039"),o=e("b622"),a=e("2d00"),c=o("species");t.exports=function(t){return a>=51||!r((function(){var n=[],e=n.constructor={};return e[c]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},"65f0":function(t,n,e){var r=e("861d"),o=e("e8b5"),a=e("b622"),c=a("species");t.exports=function(t,n){var e;return o(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!o(e.prototype)?r(e)&&(e=e[c],null===e&&(e=void 0)):e=void 0),new(void 0===e?Array:e)(0===n?0:n)}},8418:function(t,n,e){"use strict";var r=e("c04e"),o=e("9bf2"),a=e("5c6c");t.exports=function(t,n,e){var c=r(n);c in t?o.f(t,c,a(0,e)):t[c]=e}},"8db5":function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("Parent")],1)},o=[],a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("h2",[t._v("隔代组件通信方式2:$attrs和$listeners")]),e("ChildC",{attrs:{array:t.array},on:{getIndex:t.getIndex}}),e("button",{on:{click:t.add}},[t._v("添加一条数据，看看是否是响应式")])],1)},c=[],i=(e("99af"),e("b0c0"),function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("h3",[t._v("我是C组件")]),e("ChildD",t._b({on:{getIndex:t.$listeners.getIndex}},"ChildD",t.$attrs,!1))],1)}),s=[],u=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("h3",[t._v("我是D组件")]),e("ul",t._l(t.$attrs.array,(function(n,r){return e("li",{key:n},[t._v(" "+t._s(n)+" "),e("button",{on:{click:function(n){return t.passIndex(r)}}},[t._v("子组件通过$listeners的方式，传值给顶层组件")])])})),0)])},l=[],d={name:"ChildD",created:function(){console.log("d-attrs",this.$attrs),console.log("d-listeners",this.$listeners)},methods:{passIndex:function(t){var n={index:t,name:this.$options.name};this.$listeners.getIndex(n)}}},f=d,h=e("2877"),v=Object(h["a"])(f,u,l,!1,null,"f09113ee",null),p=v.exports,b={name:"ChildC",components:{ChildD:p},created:function(){console.log("c-attrs",this.$attrs),console.log("c-listeners",this.$listeners)},methods:{}},m=b,x=Object(h["a"])(m,i,s,!1,null,"5b96d852",null),y=x.exports,g={name:"Parent",components:{ChildC:y},created:function(){},data:function(){return{array:["我是顶层组件传递的值1","我是顶层组件传递的值2"]}},methods:{getIndex:function(t){alert("这是".concat(t.name,"组件传过来的下标：").concat(t.index))},add:function(){this.array.push("我是顶层组件传递的值".concat(this.array.length+1))}}},_=g,C=Object(h["a"])(_,a,c,!1,null,"54300d08",null),$=C.exports,w={name:"ViewB",components:{Parent:$}},I=w,k=Object(h["a"])(I,r,o,!1,null,"c64f4d96",null);n["default"]=k.exports},"99af":function(t,n,e){"use strict";var r=e("23e7"),o=e("d039"),a=e("e8b5"),c=e("861d"),i=e("7b0b"),s=e("50c4"),u=e("8418"),l=e("65f0"),d=e("1dde"),f=e("b622"),h=e("2d00"),v=f("isConcatSpreadable"),p=9007199254740991,b="Maximum allowed index exceeded",m=h>=51||!o((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),x=d("concat"),y=function(t){if(!c(t))return!1;var n=t[v];return void 0!==n?!!n:a(t)},g=!m||!x;r({target:"Array",proto:!0,forced:g},{concat:function(t){var n,e,r,o,a,c=i(this),d=l(c,0),f=0;for(n=-1,r=arguments.length;n<r;n++)if(a=-1===n?c:arguments[n],y(a)){if(o=s(a.length),f+o>p)throw TypeError(b);for(e=0;e<o;e++,f++)e in a&&u(d,f,a[e])}else{if(f>=p)throw TypeError(b);u(d,f++,a)}return d.length=f,d}})},b0c0:function(t,n,e){var r=e("83ab"),o=e("9bf2").f,a=Function.prototype,c=a.toString,i=/^\s*function ([^ (]*)/,s="name";r&&!(s in a)&&o(a,s,{configurable:!0,get:function(){try{return c.call(this).match(i)[1]}catch(t){return""}}})},e8b5:function(t,n,e){var r=e("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}}}]);