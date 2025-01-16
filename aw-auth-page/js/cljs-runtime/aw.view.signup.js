goog.provide('aw.view.signup');
aw.view.signup.validate_BANG_ = (function aw$view$signup$validate_BANG_(state){
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.complement(clojure.string.blank_QMARK_)(new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)));
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = cljs.core.complement(clojure.string.blank_QMARK_)(new cljs.core.Keyword(null,"password-repeat","password-repeat",-152826064).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)));
if(cljs.core.truth_(and__5043__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),new cljs.core.Keyword(null,"password-repeat","password-repeat",-152826064).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)));
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update,new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"password-match","password-match",-2136850094)], 0));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update,new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"password-match","password-match",-2136850094)], 0));
}

if(aw.data.check_password_length(new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update,new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"password-too-short","password-too-short",-1325027484)], 0));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update,new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"password-too-short","password-too-short",-1325027484)], 0));
}

if(aw.data.check_username_length(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update,new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"username-too-short","username-too-short",-1437144544)], 0));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update,new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"username-too-short","username-too-short",-1437144544)], 0));
}
});
aw.view.signup.submit = (function aw$view$signup$submit(state,e){
e.preventDefault();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.PersistentHashSet.EMPTY);

aw.view.signup.validate_BANG_(state);

if(cljs.core.seq(new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))){
return console.error("Errors in signup form: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))));
} else {
if(aw.data.user_exists_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update,new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"user-already-exists","user-already-exists",-1309239124)], 0));
} else {
aw.data.register_user(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)));

return aw.route_helpers.redirect_BANG_(new cljs.core.Keyword("aw","signin","aw/signin",-353548337));
}
}
});
aw.view.signup.view = (function aw$view$signup$view(){
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.PersistentHashSet.EMPTY], null));
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"AW Sign-Up"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(aw.view.signup.submit,state)], null),((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),new cljs.core.Keyword(null,"username-too-short","username-too-short",-1437144544)))?aw.view.common.error_p("Username too short"):((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),new cljs.core.Keyword(null,"user-already-exists","user-already-exists",-1309239124)))?aw.view.common.error_p("Username already exists"):null)),aw.view.common.keyboard_input.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"username","username",1605666410),state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"username","username",1605666410),null], null), null)], null)], 0)),((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),new cljs.core.Keyword(null,"password-too-short","password-too-short",-1325027484)))?aw.view.common.error_p("Password too short"):null),aw.view.common.keyboard_input.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"password","password",417022471),state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"new-password","new-password",-1530942754),null], null), null)], null)], 0)),((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),new cljs.core.Keyword(null,"password-match","password-match",-2136850094)))?aw.view.common.error_p("Passwords do not match"):null),aw.view.common.keyboard_input.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"password-repeat","password-repeat",-152826064),state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Repeat Password",new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"new-password","new-password",-1530942754),null], null), null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"password","password",417022471)], null)], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"Sign-Up"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Already registered? ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),aw.route_helpers.resolve_href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("aw","signin","aw/signin",-353548337))], null),"Sign-In"], null)], null)], null);
});
});

//# sourceMappingURL=aw.view.signup.js.map
