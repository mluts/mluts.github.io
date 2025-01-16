goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__13109){
var map__13110 = p__13109;
var map__13110__$1 = cljs.core.__destructure_map(map__13110);
var runtime = map__13110__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13110__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_13517 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_13517)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__13128 = runtime;
var G__13129 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_13517);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__13128,G__13129) : shadow.remote.runtime.shared.process.call(null,G__13128,G__13129));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__13133,res){
var map__13135 = p__13133;
var map__13135__$1 = cljs.core.__destructure_map(map__13135);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13135__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13135__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__13138 = res;
var G__13138__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13138,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__13138);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13138__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__13138__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__13149 = arguments.length;
switch (G__13149) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__13157,msg,handlers,timeout_after_ms){
var map__13158 = p__13157;
var map__13158__$1 = cljs.core.__destructure_map(map__13158);
var runtime = map__13158__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13158__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13543 = arguments.length;
var i__5770__auto___13544 = (0);
while(true){
if((i__5770__auto___13544 < len__5769__auto___13543)){
args__5775__auto__.push((arguments[i__5770__auto___13544]));

var G__13545 = (i__5770__auto___13544 + (1));
i__5770__auto___13544 = G__13545;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__13180,ev,args){
var map__13182 = p__13180;
var map__13182__$1 = cljs.core.__destructure_map(map__13182);
var runtime = map__13182__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13182__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__13183 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__13186 = null;
var count__13187 = (0);
var i__13188 = (0);
while(true){
if((i__13188 < count__13187)){
var ext = chunk__13186.cljs$core$IIndexed$_nth$arity$2(null,i__13188);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__13555 = seq__13183;
var G__13556 = chunk__13186;
var G__13557 = count__13187;
var G__13558 = (i__13188 + (1));
seq__13183 = G__13555;
chunk__13186 = G__13556;
count__13187 = G__13557;
i__13188 = G__13558;
continue;
} else {
var G__13559 = seq__13183;
var G__13560 = chunk__13186;
var G__13561 = count__13187;
var G__13562 = (i__13188 + (1));
seq__13183 = G__13559;
chunk__13186 = G__13560;
count__13187 = G__13561;
i__13188 = G__13562;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13183);
if(temp__5804__auto__){
var seq__13183__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13183__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__13183__$1);
var G__13563 = cljs.core.chunk_rest(seq__13183__$1);
var G__13564 = c__5568__auto__;
var G__13565 = cljs.core.count(c__5568__auto__);
var G__13566 = (0);
seq__13183 = G__13563;
chunk__13186 = G__13564;
count__13187 = G__13565;
i__13188 = G__13566;
continue;
} else {
var ext = cljs.core.first(seq__13183__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__13568 = cljs.core.next(seq__13183__$1);
var G__13569 = null;
var G__13570 = (0);
var G__13571 = (0);
seq__13183 = G__13568;
chunk__13186 = G__13569;
count__13187 = G__13570;
i__13188 = G__13571;
continue;
} else {
var G__13574 = cljs.core.next(seq__13183__$1);
var G__13575 = null;
var G__13576 = (0);
var G__13577 = (0);
seq__13183 = G__13574;
chunk__13186 = G__13575;
count__13187 = G__13576;
i__13188 = G__13577;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq13169){
var G__13170 = cljs.core.first(seq13169);
var seq13169__$1 = cljs.core.next(seq13169);
var G__13171 = cljs.core.first(seq13169__$1);
var seq13169__$2 = cljs.core.next(seq13169__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13170,G__13171,seq13169__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__13212,p__13213){
var map__13215 = p__13212;
var map__13215__$1 = cljs.core.__destructure_map(map__13215);
var runtime = map__13215__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13215__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__13216 = p__13213;
var map__13216__$1 = cljs.core.__destructure_map(map__13216);
var msg = map__13216__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13216__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__13219 = cljs.core.deref(state_ref);
var map__13219__$1 = cljs.core.__destructure_map(map__13219);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13219__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13219__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__13232,msg){
var map__13233 = p__13232;
var map__13233__$1 = cljs.core.__destructure_map(map__13233);
var runtime = map__13233__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13233__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__13299,key,p__13300){
var map__13306 = p__13299;
var map__13306__$1 = cljs.core.__destructure_map(map__13306);
var state = map__13306__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13306__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__13307 = p__13300;
var map__13307__$1 = cljs.core.__destructure_map(map__13307);
var spec = map__13307__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13307__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__13329,key,spec){
var map__13331 = p__13329;
var map__13331__$1 = cljs.core.__destructure_map(map__13331);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13331__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__13334_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__13334_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__13335_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__13335_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__13336_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__13336_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__13337_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__13337_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__13338_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__13338_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__13395,key){
var map__13396 = p__13395;
var map__13396__$1 = cljs.core.__destructure_map(map__13396);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13396__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__13423,msg){
var map__13424 = p__13423;
var map__13424__$1 = cljs.core.__destructure_map(map__13424);
var runtime = map__13424__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13424__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__13436,p__13437){
var map__13438 = p__13436;
var map__13438__$1 = cljs.core.__destructure_map(map__13438);
var runtime = map__13438__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13438__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__13439 = p__13437;
var map__13439__$1 = cljs.core.__destructure_map(map__13439);
var msg = map__13439__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13439__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13439__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__13464 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__13466 = null;
var count__13467 = (0);
var i__13468 = (0);
while(true){
if((i__13468 < count__13467)){
var map__13491 = chunk__13466.cljs$core$IIndexed$_nth$arity$2(null,i__13468);
var map__13491__$1 = cljs.core.__destructure_map(map__13491);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13491__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__13661 = seq__13464;
var G__13662 = chunk__13466;
var G__13663 = count__13467;
var G__13664 = (i__13468 + (1));
seq__13464 = G__13661;
chunk__13466 = G__13662;
count__13467 = G__13663;
i__13468 = G__13664;
continue;
} else {
var G__13665 = seq__13464;
var G__13666 = chunk__13466;
var G__13667 = count__13467;
var G__13668 = (i__13468 + (1));
seq__13464 = G__13665;
chunk__13466 = G__13666;
count__13467 = G__13667;
i__13468 = G__13668;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13464);
if(temp__5804__auto__){
var seq__13464__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13464__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__13464__$1);
var G__13670 = cljs.core.chunk_rest(seq__13464__$1);
var G__13671 = c__5568__auto__;
var G__13672 = cljs.core.count(c__5568__auto__);
var G__13673 = (0);
seq__13464 = G__13670;
chunk__13466 = G__13671;
count__13467 = G__13672;
i__13468 = G__13673;
continue;
} else {
var map__13503 = cljs.core.first(seq__13464__$1);
var map__13503__$1 = cljs.core.__destructure_map(map__13503);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13503__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__13676 = cljs.core.next(seq__13464__$1);
var G__13677 = null;
var G__13678 = (0);
var G__13679 = (0);
seq__13464 = G__13676;
chunk__13466 = G__13677;
count__13467 = G__13678;
i__13468 = G__13679;
continue;
} else {
var G__13683 = cljs.core.next(seq__13464__$1);
var G__13685 = null;
var G__13686 = (0);
var G__13687 = (0);
seq__13464 = G__13683;
chunk__13466 = G__13685;
count__13467 = G__13686;
i__13468 = G__13687;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
