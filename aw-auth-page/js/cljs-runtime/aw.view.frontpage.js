goog.provide('aw.view.frontpage');
aw.view.frontpage.view = (function aw$view$frontpage$view(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"AW Frontpage"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__25257){
var vec__25258 = p__25257;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25258,(0),null);
var game = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25258,(1),null);
var _url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25258,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),aw.route_helpers.resolve_href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("aw","game","aw/game",-441522883),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"game_id","game_id",797586978),id], null))], null),game], null)], null);
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,aw.data.find_games()))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),aw.view.common.sign_out], null),"Sign-Out"], null)], null);
});

//# sourceMappingURL=aw.view.frontpage.js.map
