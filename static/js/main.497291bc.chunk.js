(this["webpackJsonpcounter-component"]=this["webpackJsonpcounter-component"]||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(4),i=n.n(s),r=n(2),l=(n(9),n(0));var u=function(){var e=Object(a.useState)(1),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(1),i=Object(r.a)(s,2),u=i[0],j=i[1],o=Object(a.useState)(1e3),b=Object(r.a)(o,2),d=b[0],m=b[1],p=Object(a.useState)(""),h=Object(r.a)(p,2),x=h[0],O=h[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)("div",{className:"setMinMax",children:[Object(l.jsxs)("div",{className:"initialize",children:[Object(l.jsx)("label",{children:"Enter Minimum Value"}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{className:"initialValue",type:"number",onChange:function(e){var t=parseInt(e.target.value);isNaN(t)&&(t=0),t<=d?(j(t),c(t),O("")):O("Min value cannot be greater than Max value.")}})]}),Object(l.jsxs)("div",{className:"initialize",children:[Object(l.jsx)("label",{children:"Enter Maximum Value"}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{className:"initialValue",type:"number",onChange:function(e){var t=parseInt(e.target.value);isNaN(t)&&(t=1e3),t>=u?(m(t),x&&O("")):O("Max Value should be greater than or equal to Min value")}})]})]}),Object(l.jsx)("p",{className:"errorMessage",children:x}),Object(l.jsxs)("div",{className:"counter",children:[Object(l.jsx)("button",{className:"decBtn",onClick:function(){isNaN(parseInt(n))&&c(1),parseInt(n)<u&&c(u),parseInt(n)>u&&c(parseInt(n)-1)},children:"-"}),Object(l.jsx)("input",{className:"displayCounter",type:"number",value:n,onChange:function(e){console.log(e.target.value);var t=parseInt(e.target.value);t<=d?c(t):(isNaN(t)||""===t)&&c(NaN)}}),Object(l.jsx)("button",{className:"incBtn",onClick:function(){var e=parseInt(n);isNaN(e)?c(1):e<u&&c(u),e<d&&e>=u&&c(e+1)},children:"+"})]}),Object(l.jsx)("p",{children:"Default Minimum: 1 and Maximum: 1000. The Minimum and Maximum values can be changed using the textbox provided."})]})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,12)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(u,{})}),document.getElementById("root")),j()},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.497291bc.chunk.js.map