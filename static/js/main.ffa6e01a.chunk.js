(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,,function(t,e,a){t.exports={statistics:"Statistics_statistics__ORlpg",list:"Statistics_list__YhZ4l",list_item:"Statistics_list_item__2r6z5",total:"Statistics_total__2uUNJ",positive:"Statistics_positive__2HFOP"}},,function(t,e,a){t.exports={section:"Section_section__JnqA1",title:"Section_title__3ak2q"}},,,,,function(t,e,a){t.exports={btn:"FeedbackOptions_btn__aANmz"}},,,,,,,function(t,e,a){},,,,function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var s=a(2),i=a.n(s),n=a(6),c=a.n(n),r=(a(17),a(7)),o=a(8),l=a(9),d=a(12),u=a(11),b=a(1),j=a.n(b),p=a(5),h=a.n(p),f=a(0);function O(t){var e=t.title,a=t.children;return Object(f.jsxs)("section",{className:h.a.section,children:[Object(f.jsx)("h2",{className:h.a.title,children:e}),a]})}O.defaultProps={title:"Please leave feedback"},O.propType={title:j.a.string.isRequired,children:j.a.node.isRequired};var v=a(3),_=a.n(v);function m(t){var e=t.good,a=t.neutral,s=t.bad,i=t.total,n=t.positivePercentage;return Object(f.jsxs)("div",{className:_.a.statistics,children:[Object(f.jsxs)("ul",{className:_.a.list,children:[Object(f.jsxs)("li",{className:_.a.list_item,children:["Good: ",e]}),Object(f.jsxs)("li",{className:_.a.list_item,children:["Neutral: ",a]}),Object(f.jsxs)("li",{className:_.a.list_item,children:["Bad: ",s]})]}),Object(f.jsxs)("p",{className:_.a.total,children:["Total: ",i]}),Object(f.jsxs)("p",{children:[Object(f.jsx)("span",{className:_.a.positive,children:"Positive feedback: "}),n,"%"]})]})}var x=a(10),k=a.n(x);function g(t){var e=t.options,a=t.onLeaveFeedback;return e.map((function(t){return Object(f.jsx)("button",{type:"button",onClick:function(){return a(t)},className:k.a.btn,children:t},t)}))}g.propType={options:j.a.arrayOf(j.a.string).isRequired,onLeaveFeedback:j.a.func.isRequired};a(21);function N(t){var e=t.message;return Object(f.jsx)("p",{children:e})}N.defaultProps={message:"No feedback given"},N.propType={message:j.a.string.isRequired};a(22);var F=function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(o.a)(this,a);for(var s=arguments.length,i=new Array(s),n=0;n<s;n++)i[n]=arguments[n];return(t=e.call.apply(e,[this].concat(i))).state={good:0,neutral:0,bad:0},t.addFeedback=function(e){t.setState((function(t){return Object(r.a)({},e,t[e]+1)}))},t.totalFeedback=function(){return Object.values(t.state).reduce((function(t,e){return t+e}),0)},t.positiveFeedbackPercentage=function(){return Math.round(t.state.good/t.totalFeedback()*100)||0},t}return Object(l.a)(a,[{key:"render",value:function(){var t=this.state,e=t.good,a=t.neutral,s=t.bad,i=this.totalFeedback(),n=this.positiveFeedbackPercentage();return Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)(O,{children:Object(f.jsx)(g,{options:Object.keys(this.state),onLeaveFeedback:this.addFeedback})}),Object(f.jsx)(O,{title:"Statistics",children:i?Object(f.jsx)(m,{good:e,neutral:a,bad:s,total:i,positivePercentage:n}):Object(f.jsx)(N,{})})]})}}]),a}(s.Component),y=F;c.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(y,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.ffa6e01a.chunk.js.map