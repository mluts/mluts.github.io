goog.provide('aw.route_helpers');
aw.route_helpers.resolve_href = (function aw$route_helpers$resolve_href(var_args){
var G__25164 = arguments.length;
switch (G__25164) {
case 2:
return aw.route_helpers.resolve_href.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return aw.route_helpers.resolve_href.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(aw.route_helpers.resolve_href.cljs$core$IFn$_invoke$arity$2 = (function (to,path_params){
return reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(to,path_params);
}));

(aw.route_helpers.resolve_href.cljs$core$IFn$_invoke$arity$1 = (function (to){
return reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(to);
}));

(aw.route_helpers.resolve_href.cljs$lang$maxFixedArity = 2);

aw.route_helpers.redirect_BANG_ = (function aw$route_helpers$redirect_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___25172 = arguments.length;
var i__5770__auto___25173 = (0);
while(true){
if((i__5770__auto___25173 < len__5769__auto___25172)){
args__5775__auto__.push((arguments[i__5770__auto___25173]));

var G__25174 = (i__5770__auto___25173 + (1));
i__5770__auto___25173 = G__25174;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return aw.route_helpers.redirect_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(aw.route_helpers.redirect_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (to,p__25167){
var vec__25168 = p__25167;
var push = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25168,(0),null);
if(cljs.core.truth_(push)){
return reitit.frontend.easy.push_state.cljs$core$IFn$_invoke$arity$1(to);
} else {
return reitit.frontend.easy.replace_state.cljs$core$IFn$_invoke$arity$1(to);
}
}));

(aw.route_helpers.redirect_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(aw.route_helpers.redirect_BANG_.cljs$lang$applyTo = (function (seq25165){
var G__25166 = cljs.core.first(seq25165);
var seq25165__$1 = cljs.core.next(seq25165);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25166,seq25165__$1);
}));

aw.route_helpers.route_perms = (function aw$route_helpers$route_perms(match){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(match,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"perms","perms",-1384176260)], null));
});
aw.route_helpers.route_view = (function aw$route_helpers$route_view(match){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(match,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"view","view",1247994814)], null));
});

//# sourceMappingURL=aw.route_helpers.js.map
