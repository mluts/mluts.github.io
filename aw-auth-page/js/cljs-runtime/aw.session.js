goog.provide('aw.session');
aw.session.unauthorized_perms = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unauthorized-only","unauthorized-only",516183469),null], null), null);
aw.session.authorized_perms = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"authorized-only","authorized-only",-988382453),null], null), null);
aw.session.session = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"perms","perms",-1384176260),aw.session.unauthorized_perms], null));
aw.session.authorize_BANG_ = (function aw$session$authorize_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(aw.session.session,cljs.core.update,new cljs.core.Keyword(null,"perms","perms",-1384176260),clojure.set.union,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([aw.session.authorized_perms], 0));
});
aw.session.deauthorize_BANG_ = (function aw$session$deauthorize_BANG_(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(aw.session.session,cljs.core.assoc,new cljs.core.Keyword(null,"perms","perms",-1384176260),aw.session.unauthorized_perms);

return aw.route_helpers.redirect_BANG_(new cljs.core.Keyword("aw","signin","aw/signin",-353548337));
});
aw.session.perms_ok_QMARK_ = (function aw$session$perms_ok_QMARK_(var_args){
var G__25176 = arguments.length;
switch (G__25176) {
case 1:
return aw.session.perms_ok_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return aw.session.perms_ok_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(aw.session.perms_ok_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (object_perms){
return aw.session.perms_ok_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"perms","perms",-1384176260).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aw.session.session)),object_perms);
}));

(aw.session.perms_ok_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (user_perms,object_perms){
return clojure.set.superset_QMARK_((function (){var or__5045__auto__ = user_perms;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),(function (){var or__5045__auto__ = object_perms;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})());
}));

(aw.session.perms_ok_QMARK_.cljs$lang$maxFixedArity = 2);

aw.session.authorized_QMARK_ = (function aw$session$authorized_QMARK_(){
return clojure.set.subset_QMARK_(aw.session.authorized_perms,new cljs.core.Keyword(null,"perms","perms",-1384176260).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aw.session.session)));
});

//# sourceMappingURL=aw.session.js.map
