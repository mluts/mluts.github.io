goog.provide('aw.view.common');
aw.view.common.ensure_coll = (function aw$view$common$ensure_coll(v){
if(cljs.core.coll_QMARK_(v)){
return v;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null);
}
});
aw.view.common.keyboard_input = (function aw$view$common$keyboard_input(var_args){
var args__5775__auto__ = [];
var len__5769__auto___25222 = arguments.length;
var i__5770__auto___25223 = (0);
while(true){
if((i__5770__auto___25223 < len__5769__auto___25222)){
args__5775__auto__.push((arguments[i__5770__auto___25223]));

var G__25224 = (i__5770__auto___25223 + (1));
i__5770__auto___25223 = G__25224;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return aw.view.common.keyboard_input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(aw.view.common.keyboard_input.cljs$core$IFn$_invoke$arity$variadic = (function (_name,state,p__25217){
var vec__25218 = p__25217;
var map__25221 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25218,(0),null);
var map__25221__$1 = cljs.core.__destructure_map(map__25221);
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25221__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),clojure.string.capitalize(cljs.core.name(_name)));
var _type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25221__$1,new cljs.core.Keyword(null,"type","type",1174270348),"text");
var kp = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25221__$1,new cljs.core.Keyword(null,"kp","kp",358367104),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_name], null));
var flags = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25221__$1,new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY);
if((!((_name == null)))){
} else {
throw (new Error("Assert failed: (some? -name)"));
}

if((!((state == null)))){
} else {
throw (new Error("Assert failed: (some? state)"));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),_type,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),(function (){var or__5045__auto__ = placeholder;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return clojure.string.capitalize(cljs.core.name(_name));
}
})(),new cljs.core.Keyword(null,"autoComplete","autoComplete",-219243415),((cljs.core.contains_QMARK_(flags,new cljs.core.Keyword(null,"username","username",1605666410)))?"username":((cljs.core.contains_QMARK_(flags,new cljs.core.Keyword(null,"new-password","new-password",-1530942754)))?"new-password":((cljs.core.contains_QMARK_(flags,new cljs.core.Keyword(null,"current-password","current-password",-10574282)))?"current-password":null))),new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.name(_name),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),aw.view.common.ensure_coll(kp)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (event){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,aw.view.common.ensure_coll(kp),event.target.value);
})], null)], null);
}));

(aw.view.common.keyboard_input.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(aw.view.common.keyboard_input.cljs$lang$applyTo = (function (seq25214){
var G__25215 = cljs.core.first(seq25214);
var seq25214__$1 = cljs.core.next(seq25214);
var G__25216 = cljs.core.first(seq25214__$1);
var seq25214__$2 = cljs.core.next(seq25214__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25215,G__25216,seq25214__$2);
}));

aw.view.common.error_p = (function aw$view$common$error_p(text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"pico-color-pink-500"], null),text], null);
});
aw.view.common.sign_out = (function aw$view$common$sign_out(_e){
aw.session.deauthorize_BANG_();

return aw.route_helpers.redirect_BANG_(new cljs.core.Keyword("aw","signin","aw/signin",-353548337));
});

//# sourceMappingURL=aw.view.common.js.map
