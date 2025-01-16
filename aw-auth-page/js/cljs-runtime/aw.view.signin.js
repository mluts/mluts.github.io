goog.provide('aw.view.signin');
aw.view.signin.submit = (function aw$view$signin$submit(state,e){
e.preventDefault();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.PersistentHashSet.EMPTY);

if(aw.data.user_exists_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))){
aw.session.authorize_BANG_();

return aw.route_helpers.redirect_BANG_(new cljs.core.Keyword("aw","frontpage","aw/frontpage",-927753714));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update,new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"password-incorrect","password-incorrect",2122578661)], 0));
}
});
aw.view.signin.view = (function aw$view$signin$view(){
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.PersistentHashSet.EMPTY], null));
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"AW Sign-In"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(aw.view.signin.submit,state)], null),aw.view.common.keyboard_input.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"username","username",1605666410),state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"username","username",1605666410),null], null), null)], null)], 0)),((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),new cljs.core.Keyword(null,"password-incorrect","password-incorrect",2122578661)))?aw.view.common.error_p("Username or password incorrect"):null),aw.view.common.keyboard_input.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"password","password",417022471),state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-password","current-password",-10574282),null], null), null)], null)], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"Sign-In"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Not registered? ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),aw.route_helpers.resolve_href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("aw","signup","aw/signup",1961019889))], null),"Sign-Up"], null)], null)], null);
});
});

//# sourceMappingURL=aw.view.signin.js.map
