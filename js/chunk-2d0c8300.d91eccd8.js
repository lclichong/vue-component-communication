(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c8300"],{"548c":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("Parent")],1)},r=[],s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("h2",[t._v("父子组件通信方式5:$attrs和$listeners")]),e("Child",{attrs:{array:t.array},on:{getIndex:t.getIndex}}),e("button",{on:{click:t.add}},[t._v("添加一条数据，看看是否是响应式")])],1)},c=[],i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("ul",t._l(t.$attrs.array,(function(n,a){return e("li",{key:n},[t._v(" "+t._s(n)+" "),e("button",{on:{click:function(n){return t.passIndex(a)}}},[t._v("子组件通过$listeners的方式，传值给父组件")])])})),0)])},l=[],o={name:"Child",created:function(){console.log(this.$attrs),console.log(this.$listeners)},methods:{passIndex:function(t){this.$listeners.getIndex(t)}}},u=o,d=e("2877"),h=Object(d["a"])(u,i,l,!1,null,"5bbe6dda",null),f=h.exports,p={name:"Parent",components:{Child:f},data:function(){return{array:["我是父组件传递的值1","我是父组件传递的值2"]}},methods:{getIndex:function(t){alert("这是子组件传过来的下标：".concat(t))},add:function(){this.array.push("我是父组件传递的值".concat(this.array.length+1))}}},_=p,v=Object(d["a"])(_,s,c,!1,null,"422f9412",null),m=v.exports,$={name:"ViewE",components:{Parent:m}},b=$,x=Object(d["a"])(b,a,r,!1,null,"6f0c4e02",null);n["default"]=x.exports}}]);