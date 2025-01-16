goog.provide('starter.browser');
starter.browser.routes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("aw","frontpage","aw/frontpage",-927753714)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/login",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("aw","login","aw/login",55212581)], null)], null)], null);
starter.browser.ensure_coll = (function starter$browser$ensure_coll(v){
if(cljs.core.coll_QMARK_(v)){
return v;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null);
}
});
starter.browser.main = (function starter$browser$main(var_args){
var args__5775__auto__ = [];
var len__5769__auto___15767 = arguments.length;
var i__5770__auto___15768 = (0);
while(true){
if((i__5770__auto___15768 < len__5769__auto___15767)){
args__5775__auto__.push((arguments[i__5770__auto___15768]));

var G__15769 = (i__5770__auto___15768 + (1));
i__5770__auto___15768 = G__15769;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return starter.browser.main.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(starter.browser.main.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"container"], null),children], null);
}));

(starter.browser.main.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(starter.browser.main.cljs$lang$applyTo = (function (seq15758){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15758));
}));

starter.browser.keyboard_input = (function starter$browser$keyboard_input(var_args){
var args__5775__auto__ = [];
var len__5769__auto___15770 = arguments.length;
var i__5770__auto___15771 = (0);
while(true){
if((i__5770__auto___15771 < len__5769__auto___15770)){
args__5775__auto__.push((arguments[i__5770__auto___15771]));

var G__15772 = (i__5770__auto___15771 + (1));
i__5770__auto___15771 = G__15772;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return starter.browser.keyboard_input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(starter.browser.keyboard_input.cljs$core$IFn$_invoke$arity$variadic = (function (_name,state,p__15762){
var vec__15763 = p__15762;
var map__15766 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15763,(0),null);
var map__15766__$1 = cljs.core.__destructure_map(map__15766);
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15766__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),clojure.string.capitalize(cljs.core.name(_name)));
var _type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15766__$1,new cljs.core.Keyword(null,"type","type",1174270348),"text");
var kp = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15766__$1,new cljs.core.Keyword(null,"kp","kp",358367104),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_name], null));
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
})(),new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.name(_name),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),starter.browser.ensure_coll(kp)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (event){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,starter.browser.ensure_coll(kp),event.target.value);
})], null)], null);
}));

(starter.browser.keyboard_input.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(starter.browser.keyboard_input.cljs$lang$applyTo = (function (seq15759){
var G__15760 = cljs.core.first(seq15759);
var seq15759__$1 = cljs.core.next(seq15759);
var G__15761 = cljs.core.first(seq15759__$1);
var seq15759__$2 = cljs.core.next(seq15759__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15760,G__15761,seq15759__$2);
}));

starter.browser.login_form = (function starter$browser$login_form(state){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),starter.browser.keyboard_input.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"login","login",55217519),state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"login","login",55217519)], 0)),starter.browser.keyboard_input.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"password","password",417022471),state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"password","password",417022471)], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"Login",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return console.log("Submit!");
})], null)], null)], null);
});
starter.browser.login_page = (function starter$browser$login_page(){
var login_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"container"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"AW Login"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [starter.browser.login_form,login_state], null)], null);
});
});
starter.browser.app = (function starter$browser$app(){
return starter.browser.login_page();
});
starter.browser.start = (function starter$browser$start(){
console.log("start");

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [starter.browser.app], null),document.getElementById("app"));
});
starter.browser.init = (function starter$browser$init(){
console.log("init");

return starter.browser.start();
});
starter.browser.stop = (function starter$browser$stop(){
return console.log("stop");
});

//# sourceMappingURL=starter.browser.js.map
