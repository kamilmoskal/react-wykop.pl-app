(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{156:function(e,a,t){e.exports=t.p+"static/media/logo_wykop.6b97d905.png"},188:function(e,a,t){e.exports=t(369)},193:function(e,a,t){},327:function(e,a,t){},329:function(e,a,t){},331:function(e,a,t){},333:function(e,a,t){},335:function(e,a,t){},337:function(e,a,t){},339:function(e,a,t){},341:function(e,a,t){},343:function(e,a,t){},345:function(e,a,t){},347:function(e,a,t){},349:function(e,a,t){},355:function(e,a,t){},357:function(e,a,t){},359:function(e,a,t){},361:function(e,a,t){},363:function(e,a,t){},369:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(51),s=t.n(c),r=t(16),i=t(17),m=t(19),o=t(18),u=t(20),p=(t(193),t(386)),d=t(92),h=t(382),E=t(380),v=t(89),g=t(156),k=t.n(g),f=t(378),N=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(m.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(l)))).state={activeItem:"Logo",searchBar:!1},t.handleItemClick=function(e,a){var n=a.name;return t.setState({activeItem:n})},t.handleSearchBar=function(){t.setState(function(e){return{searchBar:!e.searchBar}})},t.clickSearch=function(e,a){var n=a.name;t.handleItemClick(e,{name:n}),t.handleSearchBar()},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.state.activeItem;return l.a.createElement(p.a,{pointing:!0,secondary:!0,borderless:!0,className:"nav-menu",fixed:"top"},l.a.createElement("div",{className:"container"},l.a.createElement(p.a.Item,{className:"logo",name:"Logo",active:"Logo"===e,onClick:this.handleItemClick,as:f.a,to:"/"},l.a.createElement(d.a,{src:k.a,width:"93"})),this.state.searchBar?l.a.createElement(h.a,null,l.a.createElement(h.a.Field,null,l.a.createElement(E.a,{className:"search-bar",focus:this.state.searchBar,placeholder:"Szukaj"}))):l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a.Item,{name:"Wykopalisko",active:"Wykopalisko"===e,onClick:this.handleItemClick,as:f.a,to:"/wykopalisko"},"Wykopalisko",l.a.createElement(v.a,null,"501")),l.a.createElement(p.a.Item,{name:"Hity",active:"Hity"===e,onClick:this.handleItemClick,as:f.a,to:"/hity"}),l.a.createElement(p.a.Item,{name:"Mikroblog",active:"Mikroblog"===e,onClick:this.handleItemClick,as:f.a,to:"/mikroblog"})),l.a.createElement(p.a.Menu,{position:"right"},l.a.createElement(p.a.Item,{name:"Szukaj",active:"Szukaj"===e,onClick:this.clickSearch}),l.a.createElement(p.a.Item,{name:"Dodaj",active:"Dodaj"===e,onClick:this.handleItemClick}),l.a.createElement(p.a.Item,{name:"Zaloguj si\u0119",active:"Zaloguj si\u0119"===e,onClick:this.handleItemClick}))))}}]),a}(n.Component),w=(t(327),t(329),function(){return l.a.createElement("div",{className:"tag-bar"},l.a.createElement("ul",{className:"tag-list"},l.a.createElement("li",{className:"tag-item"},"Ciekawostki"),l.a.createElement("li",{className:"tag-item"},"Nauka"),l.a.createElement("li",{className:"tag-item"},"Historia"),l.a.createElement("li",{className:"tag-item"},"Rozrywka"),l.a.createElement("li",{className:"tag-item"},"Sport"),l.a.createElement("li",{className:"tag-item"},"Motoryzacja"),l.a.createElement("li",{className:"tag-item"},"Syria"),l.a.createElement("li",{className:"tag-item"},"\u015awiat"),l.a.createElement("li",{className:"tag-item"},"SpaceX"),l.a.createElement("li",{className:"tag-item"},"Programowanie"),l.a.createElement("li",{className:"tag-item"},"Technologia"),l.a.createElement("li",{className:"tag-item"},"AMA")))}),_=(t(331),t(384)),b=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(m.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(l)))).state={activeLeftItem:"aktywne",activeRightItem:"list"},t.handleLeftItemClick=function(e,a){var n=a.name;return t.setState({activeLeftItem:n})},t.handleRightItemClick=function(e,a){var n=a.icon;return t.setState({activeRightItem:n})},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this,a=this.state.activeLeftItem,t=this.state.activeRightItem;return l.a.createElement(p.a,{pointing:!0,secondary:!0,borderless:!0,className:"home-nav"},l.a.createElement(p.a.Item,{className:"title"},this.props.title.toUpperCase()),this.props.items&&this.props.items.map(function(t,n){return l.a.createElement(p.a.Item,{key:n,name:t,active:a===t,onClick:e.handleLeftItemClick,as:f.a,to:{}})}),l.a.createElement(p.a.Menu,{position:"right"},l.a.createElement(_.a,{icon:"list",active:"list"===t,onClick:this.handleRightItemClick}),l.a.createElement(_.a,{icon:"block layout",active:"block layout"===t,onClick:this.handleRightItemClick})))}}]),a}(n.Component),y=(t(333),t(41)),j=t.n(y),C=(t(115),function(e){function a(){return Object(r.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this,a=this.props.watchmode?"watchmode":null,t=this.props.news,n=t.tags?t.tags.split(" "):null;return l.a.createElement("div",{className:["news-preview",a].join(" ")},l.a.createElement("div",{className:"vote-counter"},l.a.createElement("span",{className:"vote-counter__number"},t.vote_count),l.a.createElement("span",{className:"vote-counter__name"},"wykop")),l.a.createElement("div",{className:"image-container"},l.a.createElement(f.a,{to:"/news/"+t.id},l.a.createElement(d.a,{src:t.preview?e.props.watchmode?"".concat(t.preview.split(",")[0],",w300h223.jpg"):"".concat(t.preview.split(",")[0],",w207h139.jpg"):"http://via.placeholder.com/300x223"}))),l.a.createElement("div",{className:"news-info"},l.a.createElement(f.a,{to:"/news/"+t.id},l.a.createElement("div",{className:["news-info__title",a].join(" ")},t.title)),l.a.createElement("div",{className:["news-info__data",a].join(" ")},l.a.createElement("span",null,"@",t.author.login),l.a.createElement("span",null,l.a.createElement("a",{href:t.source_url},"link")," "),l.a.createElement(_.a,{icon:"list"}),n&&n.map(function(e,a){return l.a.createElement("span",{key:a},e)})),l.a.createElement("div",{className:["news-info__describe",a].join(" ")},t.description),a?null:l.a.createElement("div",{className:"news-info__metadata"},l.a.createElement("span",null,l.a.createElement(_.a,{icon:"comments outline"}),t.comments_count," komentarzy"),l.a.createElement("span",null,"dodany ",j()(t.date).startOf("hour").fromNow()))))}}]),a}(n.Component)),I=(t(335),t(337),t(381)),O=function(e){var a=e.title?e.title.toUpperCase():"",t=e.secColor?"side-bar-header--sec":null;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:["side-bar-header",t].join(" ")},a),l.a.createElement(I.a,null))},R=(t(339),t(90)),S=function(){return l.a.createElement("div",{className:"news-preview-side"},l.a.createElement("div",{className:"image-container"},l.a.createElement(d.a,{src:"http://via.placeholder.com/113x64"})),l.a.createElement("div",{className:"news-data"},l.a.createElement("div",{className:"news-data__title"},"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, recusandae."),l.a.createElement("div",{className:"news-data__votes"},l.a.createElement(R.a,{name:"fire"}),l.a.createElement("span",null,"4989"))))},L=(t(341),function(e){var a=e.userRank?"meta-data__user--".concat(e.userRank):"";return l.a.createElement("div",{className:"comment-preview-side"},l.a.createElement("div",{className:"image-container"},l.a.createElement(d.a,{src:"http://via.placeholder.com/20x20"})),l.a.createElement("div",{className:"meta-data"},l.a.createElement("span",{className:["meta-data__user",a].join(" ")},"moski"),l.a.createElement("span",{className:"meta-data__date"},"2 tyg. temu")),l.a.createElement("div",{className:"votes"},"+2212"),l.a.createElement("div",{className:"comment"},"Lorem, ipsum dolor sitasd asd asd asd sd as asd  amet consectetur adipisicing elit. Voluptatum, voluptas."))}),z=(t(343),t(379)),A=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(m.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(l)))).state={value:"2019"},t.handleChange=function(e,a){var n=a.value;return t.setState({value:n})},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"archives-side"},l.a.createElement(z.a,{label:"2019",value:"2019",checked:"2019"===this.state.value,onChange:this.handleChange}),l.a.createElement(I.a,null),l.a.createElement(z.a,{label:"2018",value:"2018",checked:"2018"===this.state.value,onChange:this.handleChange}),l.a.createElement(I.a,null),l.a.createElement(z.a,{label:"2017",value:"2017",checked:"2017"===this.state.value,onChange:this.handleChange}),l.a.createElement(I.a,null),l.a.createElement(z.a,{label:"2016",value:"2016",checked:"2016"===this.state.value,onChange:this.handleChange}),l.a.createElement(I.a,null))}}]),a}(n.Component),W=(t(345),function(){return l.a.createElement("div",{className:"popular-tags-side"},l.a.createElement("span",{className:"tag"},"#loremipsum\xa0(1172)"),l.a.createElement("span",{className:"tag"},"#danielmagical\xa0(894)"),l.a.createElement("span",{className:"tag"},"#heheszki\xa0(733)"),l.a.createElement("span",{className:"tag"},"#skoki\xa0(704)"),l.a.createElement("span",{className:"tag"},"#loremip\xa0(1172)"),l.a.createElement("span",{className:"tag"},"#danielma\xa0(894)"),l.a.createElement("span",{className:"tag"},"#heheszki\xa0(733)"),l.a.createElement("span",{className:"tag"},"#skoki\xa0(704)"),l.a.createElement("span",{className:"tag"},"#loremipsum\xa0(1172)"),l.a.createElement("span",{className:"tag"},"#danielma\xa0(894)"),l.a.createElement("span",{className:"tag"},"#heheszki\xa0(733)"),l.a.createElement("span",{className:"tag"},"#skoki\xa0(704)"),l.a.createElement("span",{className:"tag"},"#loremip\xa0(1172)"),l.a.createElement("span",{className:"tag"},"#danielma\xa0(894)"),l.a.createElement("span",{className:"tag"},"#heheszki\xa0(733)"),l.a.createElement("span",{className:"tag"},"#skoki\xa0(704)"),l.a.createElement("span",{className:"tag"},"#loremip\xa0(1172)"),l.a.createElement("span",{className:"tag"},"#danielma\xa0(894)"),l.a.createElement("span",{className:"tag"},"#heheszki\xa0(733)"),l.a.createElement("span",{className:"tag"},"#skoki\xa0(704)"),l.a.createElement("span",{className:"tag"},"#loremip (1172)"),l.a.createElement("span",{className:"tag"},"#danielma\xa0(894)"),l.a.createElement("span",{className:"tag"},"#heheszki\xa0(733)"),l.a.createElement("span",{className:"tag"},"#skoki\xa0(704)"))}),T=function(e){function a(){return Object(r.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.pathname;return l.a.createElement(l.a.Fragment,null,"/mikroblog"===e?l.a.createElement("div",{className:"side-bar"},l.a.createElement("div",{className:"side-bar__popular-tags"},l.a.createElement(O,{title:"Popularne Tagi"}),l.a.createElement(W,null))):null,"/hity"===e?l.a.createElement("div",{className:"side-bar"},l.a.createElement("div",{className:"side-bar__archives"},l.a.createElement(O,{title:"Archiwum",secColor:!0}),l.a.createElement(A,null))):null,"/mikroblog"===e||"/hity"===e?l.a.createElement("div",{className:"side-bar"},l.a.createElement("div",{className:"side-bar__best-comments"},l.a.createElement(O,{title:"Najlepsze komentarze roku 2019"}),l.a.createElement(L,null),l.a.createElement(L,{userRank:"one"}),l.a.createElement(L,{userRank:"one"}),l.a.createElement(L,{userRank:"two"}),l.a.createElement(L,{userRank:"two"}),l.a.createElement(L,{userRank:"two"}),l.a.createElement(L,{userRank:"two"}))):null,"/hity"!==e?l.a.createElement("div",{className:"side-bar"},l.a.createElement("div",{className:"side-bar__recent-popular"},l.a.createElement(O,{title:"ostatnio popularne"}),l.a.createElement(S,null),l.a.createElement(S,null),l.a.createElement(S,null),l.a.createElement(S,null),l.a.createElement(S,null),l.a.createElement(S,null),l.a.createElement(S,null),l.a.createElement(S,null),l.a.createElement(S,null))):null)}}]),a}(n.Component),F=(t(347),function(e){var a=e.comment,t=a.author.avatar.indexOf("def")>=0?"".concat(a.author.avatar.split(",")[0],",q40.png"):"".concat(a.author.avatar.split(",")[0],",q40.jpg"),n=null,c=null,s=null;return 1===a.author.color?c="comments-item__head__login--1":2===a.author.color&&(c="comments-item__head__login--2"),a.id!==a.parent_id&&(n="comments-item--answer"),a.vote_count>0?s="comments-item__head__votes--plus":a.vote_count<0&&(s="comments-item__head__votes--minus"),l.a.createElement("div",{className:["comments-item",n].join(" ")},l.a.createElement("div",{className:"comments-item__img"},l.a.createElement(d.a,{src:t})),l.a.createElement("div",{className:"comments-item__head"},l.a.createElement("div",{className:["comments-item__head__login",c].join(" ")},a.author.login," ",l.a.createElement("span",null,j()(a.date).startOf("hour").fromNow())),l.a.createElement("div",{className:["comments-item__head__votes",s].join(" ")},a.vote_count>0?"+".concat(a.vote_count):a.vote_count)),l.a.createElement("div",{className:"comments-item__comment"},a.body))}),M=(t(349),t(383)),P=function(){return l.a.createElement("div",{className:"pagination-bar"},l.a.createElement(M.a,{defaultActivePage:1,ellipsisItem:{content:l.a.createElement(R.a,{name:"ellipsis horizontal"}),icon:!0},firstItem:null,lastItem:null,prevItem:{content:"poprzednia"},nextItem:{content:"nast\u0119pna"},totalPages:10}))},D=t(53),x=function(e){function a(){return Object(r.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidUpdate",value:function(e){e.location.pathname!==this.props.location.pathname&&("/wykopalisko"===this.props.location.pathname?this.fetchNewsList("Links/Upcoming/1"):"/hity"===this.props.location.pathname?this.fetchNewsList("Hits/Week"):"/"===this.props.location.pathname&&this.fetchNewsList("Links/Promoted/1"))}},{key:"componentDidMount",value:function(){this.fetchNewsList("Links/Promoted/1")}},{key:"fetchNewsList",value:function(e){this.props.getNewsList(e)}},{key:"render",value:function(){var e=this.props.location.pathname,a=null,t=null;"/"===e?(a="Strona g\u0142\xf3wna",t=["najnowsze","aktywne","ulubione"]):"/wykopalisko"===e?(a="Wykopalisko",t=["aktywne","najnowsze","wykopywane","komentowane"]):"/hity"===e?(a="Hity",t=["dnia","tygodnia","miesi\u0105ca","roku"]):"/mikroblog"===e&&(a="Mikroblog",t=["wszystkie wpisy","aktywne","gor\u0105ce dyskusje","ulubione"]);var n=this.props.newsList;return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"home-grid"},"/mikroblog"!==e?l.a.createElement(w,null):null,l.a.createElement("div",{className:"home-grid__left"},l.a.createElement(b,{title:"".concat(a," :"),items:t}),"/mikroblog"!==e?l.a.createElement(l.a.Fragment,null,n&&n.slice(0,7).map(function(e,a){return l.a.createElement(C,{news:e,key:a})}),l.a.createElement(P,null)):null,"/mikroblog"===e?l.a.createElement(l.a.Fragment,null,l.a.createElement(P,null)):null),l.a.createElement("div",{className:"home-grid__right"},l.a.createElement(T,{pathname:e}))))}}]),a}(n.Component),B=Object(D.b)(function(e){return{newsList:e.newsList}},function(e){return{getNewsList:function(a){e(function(e){return function(a){fetch("https://a2.wykop.pl/".concat(e,"/appkey/poow9X4hli")).then(function(e){return e.json()}).then(function(e){a({type:"NEWS_LIST",data:e})}).catch(function(e){a({type:"NEWS_LIST_ERROR",error:e})})}}(a))}}})(x),H=(t(355),t(357),function(e){var a=e.news;return l.a.createElement("div",{className:"news-info-side"},l.a.createElement("div",{className:"news-info-side__date"},"Dodany ",l.a.createElement("b",null,j()(a.date).startOf("hour").fromNow())," przez:"),l.a.createElement("div",{className:"news-info-side__user"},l.a.createElement(d.a,{src:"http://via.placeholder.com/40x40"}),l.a.createElement("div",{className:"login-name"},a.author.login),l.a.createElement("div",{className:"sign-date"},"do\u0142\u0105czy\u0142 5 lat 5 mies. temu")),l.a.createElement("div",{className:"news-info-side__numbers"},l.a.createElement("div",{className:"vote-up"},l.a.createElement("b",null,a.vote_count)," wykopali"),l.a.createElement("div",{className:"vote-down"},l.a.createElement("b",null,a.bury_count)," zakopali"),l.a.createElement("div",{className:"views"},l.a.createElement("b",null,"19 tys.")," wy\u015bwietle\u0144")))}),Z=(t(359),t(361),function(e){var a=e.item;return l.a.createElement("div",{className:"related-item"},l.a.createElement("div",{className:"related-item__head"},l.a.createElement(R.a,{name:"bars"})," ",l.a.createElement("span",null,a.vote_count)),l.a.createElement("div",{className:"related-item__img"},l.a.createElement(d.a,{src:"http://via.placeholder.com/207x137"})),l.a.createElement("div",{className:"related-item__title"},a.title),l.a.createElement("div",{className:"related-item__meta"},"doda\u0142: ",l.a.createElement("span",null,a.author.login)," z ",l.a.createElement("span",null,l.a.createElement("a",{href:a.url},"link"))))}),U=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(m.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(l)))).state={collapsed:!0},t.onToggleCollapse=function(){t.setState(function(e){return{collapsed:!e.collapsed}})},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.related,a="collapsed",t="Zobacz wi\u0119cej",n="angle down";return this.state.collapsed||(a="expanded",t="Zobacz mniej",n="angle up"),l.a.createElement("div",{className:"watch-news-related"},l.a.createElement(I.a,null),l.a.createElement("div",{className:"watch-news-related__title"},"POWI\u0104ZANE (",e.length,")"),l.a.createElement(I.a,null),l.a.createElement("div",{className:"watch-news-related__items ".concat(a)},e&&e.map(function(e,a){return l.a.createElement(Z,{item:e,key:a})})),l.a.createElement("div",{className:"watch-news-related__show-more",onClick:this.onToggleCollapse},t," ",l.a.createElement(R.a,{name:n})))}}]),a}(n.Component),X=(t(363),function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(m.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(l)))).state={activeMenuItem:"najstarsze"},t.handleMenuItemClick=function(e,a){var n=a.name;return t.setState({activeMenuItem:n})},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.state.activeMenuItem,a=this.props.news;return l.a.createElement("div",{className:"watch-news-comments"},l.a.createElement(p.a,{pointing:!0,secondary:!0,borderless:!0,className:"watch-news-comments__menu"},l.a.createElement(p.a.Item,{className:"title"},"KOMENTARZE (",a.comments_count,"):"),l.a.createElement(p.a.Item,{name:"najstarsze",active:"najstarsze"===e,onClick:this.handleMenuItemClick}),l.a.createElement(p.a.Item,{name:"najnowsze",active:"najnowsze"===e,onClick:this.handleMenuItemClick}),l.a.createElement(p.a.Item,{name:"najlepsze",active:"najlepsze"===e,onClick:this.handleMenuItemClick})),a.comments&&a.comments.slice(0,50).map(function(e,a){return l.a.createElement(F,{comment:e,key:a})}))}}]),a}(n.Component)),q=function(e){function a(){return Object(r.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.getSpecificNews(this.props.match.params.id),this.props.getRelatedSpecificNews(this.props.match.params.id)}},{key:"render",value:function(){var e=this.props,a=e.newsItem,t=e.newsRelated;return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"watch-news-grid"},l.a.createElement("div",{className:"watch-news-grid__left"},a&&l.a.createElement(C,{news:a,watchmode:!0}),t&&t.length>0?l.a.createElement(U,{related:t}):null,a&&l.a.createElement(X,{news:a}),l.a.createElement(P,null)),l.a.createElement("div",{className:"watch-news-grid__right"},a&&l.a.createElement(H,{news:a}),l.a.createElement(T,null))))}}]),a}(n.Component),J=Object(D.b)(function(e){return{newsItem:e.newsItem,newsRelated:e.newsRelated}},function(e){return{getSpecificNews:function(a){e(function(e){return function(a){fetch("https://a2.wykop.pl/Links/Link/".concat(e,"/withcomments/true/appkey/poow9X4hli")).then(function(e){return e.json()}).then(function(e){a({type:"SPECIFIC_NEWS",data:e})}).catch(function(e){a({type:"SPECIFIC_NEWS_ERROR",error:e})})}}(a))},getRelatedSpecificNews:function(a){e(function(e){return function(a){fetch("https://a2.wykop.pl/Links/Related/".concat(e,"/appkey/poow9X4hli")).then(function(e){return e.json()}).then(function(e){a({type:"RELATED_SPECIFIC_NEWS",data:e})}).catch(function(e){a({type:"RELATED_SPECIFIC_NEWS_ERROR",error:e})})}}(a))}}})(q),V=t(385),K=t(388),$=t(387),G=function(e){function a(){return Object(r.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(V.a,{basename:"/react-wykop.pl-app"},l.a.createElement("div",{className:"App"},l.a.createElement(N,null),l.a.createElement(K.a,null,l.a.createElement($.a,{exact:!0,path:"/",component:B}),l.a.createElement($.a,{path:"/wykopalisko/",component:B}),l.a.createElement($.a,{path:"/hity/",component:B}),l.a.createElement($.a,{path:"/mikroblog/",component:B}),l.a.createElement($.a,{path:"/news/:id",component:J}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(366);var Q=t(60),Y=t(93),ee={},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,a=arguments.length>1?arguments[1]:void 0;return"NEWS_LIST"===a.type?(console.log("NEWS_LIST loaded",a.data),Object(Y.a)({},e,{newsList:a.data.data})):"NEWS_LIST_ERROR"===a.type?(console.log("FETCH_DATA_ERROR",a.error),e):"SPECIFIC_NEWS"===a.type?(console.log("SPECIFIC_NEWS loaded",a.data),Object(Y.a)({},e,{newsItem:a.data.data})):"SPECIFIC_NEWS_ERROR"===a.type?(console.log("FETCH_DATA_ERROR",a.error),e):"RELATED_SPECIFIC_NEWS"===a.type?(console.log("RELATED_SPECIFIC_NEWS loaded",a.data),Object(Y.a)({},e,{newsRelated:a.data.data})):"RELATED_SPECIFIC_NEWS_ERROR"===a.type?(console.log("FETCH_DATA_ERROR",a.error),e):e},te=t(177),ne=Object(Q.c)(ae,Object(Q.a)(te.a));s.a.render(l.a.createElement(D.a,{store:ne},l.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[188,2,1]]]);
//# sourceMappingURL=main.0d13f59f.chunk.js.map