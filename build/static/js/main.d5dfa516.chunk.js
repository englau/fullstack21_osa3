(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{40:function(e,n,t){"use strict";t.r(n);var c=t(16),r=t.n(c),a=t(6),o=t(3),u=t(1),i=t(0),l=function(e){return Object(i.jsxs)("div",{children:["filter shown with: ",Object(i.jsx)("input",{value:e.filter,onChange:e.handleFilter})]})},s=function(e){return Object(i.jsxs)("form",{onSubmit:e.addHlo,children:[Object(i.jsxs)("div",{children:["name: ",Object(i.jsx)("input",{value:e.newName,onChange:e.handleNameChange})]}),Object(i.jsxs)("div",{children:["number: ",Object(i.jsx)("input",{value:e.newNumber,onChange:e.handleNumberChange})]}),Object(i.jsx)("button",{type:"submit",children:"add"})]})},d=function(e){var n=e.person,t=e.handleDelete;return Object(i.jsxs)("li",{children:[n.name," ",n.number,Object(i.jsx)("button",{onClick:function(){return t(n.id)},children:"Delete"})]})},j=function(e){var n=e.filter,t=e.persons,c=e.filteredPersons,r=e.handleDelete;return""===n?Object(i.jsx)("div",{children:t.map((function(e){return Object(i.jsx)(d,{person:e,handleDelete:r},e.name)}))}):Object(i.jsx)("div",{children:c.map((function(e){return Object(i.jsx)(d,{person:e,handleDelete:r},e.name)}))})},f=(t(7),t(4)),b=t.n(f),h="/api/persons",m={getAll:function(){return b.a.get(h).then((function(e){return e.data}))},create:function(e){return b.a.post(h,e).then((function(e){return e.data}))},deletePerson:function(e){return b.a.delete("".concat(h,"/").concat(e)).then((function(e){return e.data}))},update:function(e,n){return b.a.put("".concat(h,"/").concat(e),n).then((function(e){return e.data}))}},O=function(e){var n=e.message,t=e.color;return null===n?null:!0===t?Object(i.jsx)("div",{className:"errorGreen",children:n}):Object(i.jsx)("div",{className:"errorRed",children:n})},p=function(){var e=Object(u.useState)([]),n=Object(o.a)(e,2),t=n[0],c=n[1],r=Object(u.useState)(""),d=Object(o.a)(r,2),f=d[0],b=d[1],h=Object(u.useState)(""),p=Object(o.a)(h,2),x=p[0],v=p[1],w=Object(u.useState)(""),g=Object(o.a)(w,2),C=g[0],N=g[1],D=Object(u.useState)(t),S=Object(o.a)(D,2),y=S[0],P=S[1],L=Object(u.useState)(null),k=Object(o.a)(L,2),A=k[0],T=k[1],E=Object(u.useState)(!0),F=Object(o.a)(E,2),H=F[0],J=F[1];Object(u.useEffect)((function(){console.log("effect"),m.getAll().then((function(e){c(e)}))}),[]);return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Phonebook"}),Object(i.jsx)(O,{message:A,color:H}),Object(i.jsx)(l,{filter:C,handleFilter:function(e){N(e.target.value),P(t.filter((function(n){return-1!==n.name.toLowerCase().indexOf(e.target.value.toLowerCase())})))}}),Object(i.jsx)("h3",{children:"Add a new"}),Object(i.jsx)(s,{personform:!0,addHlo:function(e){e.preventDefault();var n=t.map((function(e){return e.name.toLowerCase()})),r={name:f,number:x};if(!1===n.includes(f.toLowerCase()))m.create(r).then((function(e){c(t.concat(e)),b(""),v(""),N(""),P(t),J(!0),T("Added ".concat(f)),setTimeout((function(){T(null)}),5e3)})).catch((function(e){J(!1),T(e.response.data.error)})),b(""),v("");else if(window.confirm("".concat(f," is already added to phonebook, replace the old number to new one? "))){var o=t.find((function(e){return e.name.toLowerCase()===f.toLowerCase()})),u=Object(a.a)(Object(a.a)({},o),{},{number:x}),i=o.id;m.update(i,u).then((function(e){c(t.map((function(n){return n.id!==i?n:e})))})).catch((function(e){J(!1),T("Person ".concat(f," was already deleted")),setTimeout((function(){T(null)}),5e3)})),J(!0),T("Updated ".concat(f)),setTimeout((function(){T(null)}),5e3),b(""),v(""),N("")}},newName:f,handleNameChange:function(e){b(e.target.value)},newNumber:x,handleNumberChange:function(e){v(e.target.value)}}),Object(i.jsx)("h3",{children:"Numbers"}),Object(i.jsx)(j,{filteredPersons:y,persons:t,filter:C,handleDelete:function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Are you sure you want to delete ".concat(n.name,"?"))&&m.deletePerson(e).then((function(){var n=t.filter((function(n){return n.id!==e}));c(n),N("")})).catch((function(e){J(!1),T("Person ".concat(f," was already deleted")),setTimeout((function(){T(null)}),5e3)})),J(!0),T("Deleted ".concat(n.name)),setTimeout((function(){T(null)}),5e3)}})]})};r.a.render(Object(i.jsx)(p,{}),document.getElementById("root"))},7:function(e,n,t){}},[[40,1,2]]]);
//# sourceMappingURL=main.d5dfa516.chunk.js.map