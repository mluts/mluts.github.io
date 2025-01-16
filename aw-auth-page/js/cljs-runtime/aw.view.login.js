goog.provide('aw.view.login');
aw.view.login.ensure_coll = (function aw$view$login$ensure_coll(v){
if(cljs.core.coll_QMARK_(v)){
return v;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null);
}
});
aw.view.login.keyboard_input = (function aw$view$login$keyboard_input(var_args){
var args__5775__auto__ = [];
var len__5769__auto___26056 = arguments.length;
var i__5770__auto___26057 = (0);
while(true){
if((i__5770__auto___26057 < len__5769__auto___26056)){
args__5775__auto__.push((arguments[i__5770__auto___26057]));

var G__26058 = (i__5770__auto___26057 + (1));
i__5770__auto___26057 = G__26058;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return aw.view.login.keyboard_input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(aw.view.login.keyboard_input.cljs$core$IFn$_invoke$arity$variadic = (function (_name,state,p__26051){
var vec__26052 = p__26051;
var map__26055 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26052,(0),null);
var map__26055__$1 = cljs.core.__destructure_map(map__26055);
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26055__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),clojure.string.capitalize(cljs.core.name(_name)));
var _type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26055__$1,new cljs.core.Keyword(null,"type","type",1174270348),"text");
var kp = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26055__$1,new cljs.core.Keyword(null,"kp","kp",358367104),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_name], null));
if((!((_name == null)))){
} else {
throw (new Error("Assert failed: (some? -name)"));
}

if((!((state == null)))){
} else {
throw (new Error("Assert failed: (some? state)"));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),_type,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),(function (){var or__5045__auto__ = placeholder;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return clojure.string.capitalize(cljs.core.name(_name));
}
})(),new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.name(_name),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),aw.view.login.ensure_coll(kp)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (event){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,aw.view.login.ensure_coll(kp),event.target.value);
})], null)], null);
}));

(aw.view.login.keyboard_input.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(aw.view.login.keyboard_input.cljs$lang$applyTo = (function (seq26048){
var G__26049 = cljs.core.first(seq26048);
var seq26048__$1 = cljs.core.next(seq26048);
var G__26050 = cljs.core.first(seq26048__$1);
var seq26048__$2 = cljs.core.next(seq26048__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26049,G__26050,seq26048__$2);
}));

aw.view.login.login_form = (function aw$view$login$login_form(state){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (e){
e.preventDefault();

return console.log("Submit!");
})], null),aw.view.login.keyboard_input.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"login","login",55217519),state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"login","login",55217519)], 0)),aw.view.login.keyboard_input.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"password","password",417022471),state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"password","password",417022471)], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"Login"], null)], null)], null);
});
aw.view.login.view = (function aw$view$login$view(){
var login_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"AW Login"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aw.view.login.login_form,login_state], null)], null);
});
});

//# sourceMappingURL=aw.view.login.js.map
