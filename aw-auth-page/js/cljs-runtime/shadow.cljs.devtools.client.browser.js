goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21330 = arguments.length;
var i__5770__auto___21331 = (0);
while(true){
if((i__5770__auto___21331 < len__5769__auto___21330)){
args__5775__auto__.push((arguments[i__5770__auto___21331]));

var G__21332 = (i__5770__auto___21331 + (1));
i__5770__auto___21331 = G__21332;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq21051){
var G__21052 = cljs.core.first(seq21051);
var seq21051__$1 = cljs.core.next(seq21051);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21052,seq21051__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__21054 = cljs.core.seq(sources);
var chunk__21055 = null;
var count__21056 = (0);
var i__21057 = (0);
while(true){
if((i__21057 < count__21056)){
var map__21062 = chunk__21055.cljs$core$IIndexed$_nth$arity$2(null,i__21057);
var map__21062__$1 = cljs.core.__destructure_map(map__21062);
var src = map__21062__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21062__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21062__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21062__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21062__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e21063){var e_21333 = e21063;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21333);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21333.message)].join('')));
}

var G__21334 = seq__21054;
var G__21335 = chunk__21055;
var G__21336 = count__21056;
var G__21337 = (i__21057 + (1));
seq__21054 = G__21334;
chunk__21055 = G__21335;
count__21056 = G__21336;
i__21057 = G__21337;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21054);
if(temp__5804__auto__){
var seq__21054__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21054__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21054__$1);
var G__21338 = cljs.core.chunk_rest(seq__21054__$1);
var G__21339 = c__5568__auto__;
var G__21340 = cljs.core.count(c__5568__auto__);
var G__21341 = (0);
seq__21054 = G__21338;
chunk__21055 = G__21339;
count__21056 = G__21340;
i__21057 = G__21341;
continue;
} else {
var map__21064 = cljs.core.first(seq__21054__$1);
var map__21064__$1 = cljs.core.__destructure_map(map__21064);
var src = map__21064__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21064__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21064__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21064__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21064__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e21065){var e_21342 = e21065;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21342);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21342.message)].join('')));
}

var G__21343 = cljs.core.next(seq__21054__$1);
var G__21344 = null;
var G__21345 = (0);
var G__21346 = (0);
seq__21054 = G__21343;
chunk__21055 = G__21344;
count__21056 = G__21345;
i__21057 = G__21346;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__21066 = cljs.core.seq(js_requires);
var chunk__21067 = null;
var count__21068 = (0);
var i__21069 = (0);
while(true){
if((i__21069 < count__21068)){
var js_ns = chunk__21067.cljs$core$IIndexed$_nth$arity$2(null,i__21069);
var require_str_21347 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21347);


var G__21348 = seq__21066;
var G__21349 = chunk__21067;
var G__21350 = count__21068;
var G__21351 = (i__21069 + (1));
seq__21066 = G__21348;
chunk__21067 = G__21349;
count__21068 = G__21350;
i__21069 = G__21351;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21066);
if(temp__5804__auto__){
var seq__21066__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21066__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21066__$1);
var G__21352 = cljs.core.chunk_rest(seq__21066__$1);
var G__21353 = c__5568__auto__;
var G__21354 = cljs.core.count(c__5568__auto__);
var G__21355 = (0);
seq__21066 = G__21352;
chunk__21067 = G__21353;
count__21068 = G__21354;
i__21069 = G__21355;
continue;
} else {
var js_ns = cljs.core.first(seq__21066__$1);
var require_str_21356 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21356);


var G__21357 = cljs.core.next(seq__21066__$1);
var G__21358 = null;
var G__21359 = (0);
var G__21360 = (0);
seq__21066 = G__21357;
chunk__21067 = G__21358;
count__21068 = G__21359;
i__21069 = G__21360;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__21071){
var map__21072 = p__21071;
var map__21072__$1 = cljs.core.__destructure_map(map__21072);
var msg = map__21072__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21072__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21072__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21073(s__21074){
return (new cljs.core.LazySeq(null,(function (){
var s__21074__$1 = s__21074;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__21074__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__21079 = cljs.core.first(xs__6360__auto__);
var map__21079__$1 = cljs.core.__destructure_map(map__21079);
var src = map__21079__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21079__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21079__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__21074__$1,map__21079,map__21079__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21072,map__21072__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21073_$_iter__21075(s__21076){
return (new cljs.core.LazySeq(null,((function (s__21074__$1,map__21079,map__21079__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21072,map__21072__$1,msg,info,reload_info){
return (function (){
var s__21076__$1 = s__21076;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__21076__$1);
if(temp__5804__auto____$1){
var s__21076__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21076__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__21076__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__21078 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__21077 = (0);
while(true){
if((i__21077 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__21077);
cljs.core.chunk_append(b__21078,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21361 = (i__21077 + (1));
i__21077 = G__21361;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21078),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21073_$_iter__21075(cljs.core.chunk_rest(s__21076__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21078),null);
}
} else {
var warning = cljs.core.first(s__21076__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21073_$_iter__21075(cljs.core.rest(s__21076__$2)));
}
} else {
return null;
}
break;
}
});})(s__21074__$1,map__21079,map__21079__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21072,map__21072__$1,msg,info,reload_info))
,null,null));
});})(s__21074__$1,map__21079,map__21079__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21072,map__21072__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21073(cljs.core.rest(s__21074__$1)));
} else {
var G__21362 = cljs.core.rest(s__21074__$1);
s__21074__$1 = G__21362;
continue;
}
} else {
var G__21363 = cljs.core.rest(s__21074__$1);
s__21074__$1 = G__21363;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__21080_21364 = cljs.core.seq(warnings);
var chunk__21081_21365 = null;
var count__21082_21366 = (0);
var i__21083_21367 = (0);
while(true){
if((i__21083_21367 < count__21082_21366)){
var map__21086_21368 = chunk__21081_21365.cljs$core$IIndexed$_nth$arity$2(null,i__21083_21367);
var map__21086_21369__$1 = cljs.core.__destructure_map(map__21086_21368);
var w_21370 = map__21086_21369__$1;
var msg_21371__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21086_21369__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21372 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21086_21369__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21373 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21086_21369__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21374 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21086_21369__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21374)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21372),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21373),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21371__$1)].join(''));


var G__21375 = seq__21080_21364;
var G__21376 = chunk__21081_21365;
var G__21377 = count__21082_21366;
var G__21378 = (i__21083_21367 + (1));
seq__21080_21364 = G__21375;
chunk__21081_21365 = G__21376;
count__21082_21366 = G__21377;
i__21083_21367 = G__21378;
continue;
} else {
var temp__5804__auto___21379 = cljs.core.seq(seq__21080_21364);
if(temp__5804__auto___21379){
var seq__21080_21380__$1 = temp__5804__auto___21379;
if(cljs.core.chunked_seq_QMARK_(seq__21080_21380__$1)){
var c__5568__auto___21381 = cljs.core.chunk_first(seq__21080_21380__$1);
var G__21382 = cljs.core.chunk_rest(seq__21080_21380__$1);
var G__21383 = c__5568__auto___21381;
var G__21384 = cljs.core.count(c__5568__auto___21381);
var G__21385 = (0);
seq__21080_21364 = G__21382;
chunk__21081_21365 = G__21383;
count__21082_21366 = G__21384;
i__21083_21367 = G__21385;
continue;
} else {
var map__21087_21386 = cljs.core.first(seq__21080_21380__$1);
var map__21087_21387__$1 = cljs.core.__destructure_map(map__21087_21386);
var w_21388 = map__21087_21387__$1;
var msg_21389__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21087_21387__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21390 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21087_21387__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21391 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21087_21387__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21392 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21087_21387__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21392)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21390),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21391),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21389__$1)].join(''));


var G__21393 = cljs.core.next(seq__21080_21380__$1);
var G__21394 = null;
var G__21395 = (0);
var G__21396 = (0);
seq__21080_21364 = G__21393;
chunk__21081_21365 = G__21394;
count__21082_21366 = G__21395;
i__21083_21367 = G__21396;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__21070_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__21070_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__21088){
var map__21089 = p__21088;
var map__21089__$1 = cljs.core.__destructure_map(map__21089);
var msg = map__21089__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21089__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21089__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__21090 = cljs.core.seq(updates);
var chunk__21092 = null;
var count__21093 = (0);
var i__21094 = (0);
while(true){
if((i__21094 < count__21093)){
var path = chunk__21092.cljs$core$IIndexed$_nth$arity$2(null,i__21094);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21204_21397 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21208_21398 = null;
var count__21209_21399 = (0);
var i__21210_21400 = (0);
while(true){
if((i__21210_21400 < count__21209_21399)){
var node_21401 = chunk__21208_21398.cljs$core$IIndexed$_nth$arity$2(null,i__21210_21400);
if(cljs.core.not(node_21401.shadow$old)){
var path_match_21402 = shadow.cljs.devtools.client.browser.match_paths(node_21401.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21402)){
var new_link_21403 = (function (){var G__21236 = node_21401.cloneNode(true);
G__21236.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21402),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21236;
})();
(node_21401.shadow$old = true);

(new_link_21403.onload = ((function (seq__21204_21397,chunk__21208_21398,count__21209_21399,i__21210_21400,seq__21090,chunk__21092,count__21093,i__21094,new_link_21403,path_match_21402,node_21401,path,map__21089,map__21089__$1,msg,updates,reload_info){
return (function (e){
var seq__21237_21404 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21239_21405 = null;
var count__21240_21406 = (0);
var i__21241_21407 = (0);
while(true){
if((i__21241_21407 < count__21240_21406)){
var map__21245_21408 = chunk__21239_21405.cljs$core$IIndexed$_nth$arity$2(null,i__21241_21407);
var map__21245_21409__$1 = cljs.core.__destructure_map(map__21245_21408);
var task_21410 = map__21245_21409__$1;
var fn_str_21411 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21245_21409__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21412 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21245_21409__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21413 = goog.getObjectByName(fn_str_21411,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21412)].join(''));

(fn_obj_21413.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21413.cljs$core$IFn$_invoke$arity$2(path,new_link_21403) : fn_obj_21413.call(null,path,new_link_21403));


var G__21414 = seq__21237_21404;
var G__21415 = chunk__21239_21405;
var G__21416 = count__21240_21406;
var G__21417 = (i__21241_21407 + (1));
seq__21237_21404 = G__21414;
chunk__21239_21405 = G__21415;
count__21240_21406 = G__21416;
i__21241_21407 = G__21417;
continue;
} else {
var temp__5804__auto___21418 = cljs.core.seq(seq__21237_21404);
if(temp__5804__auto___21418){
var seq__21237_21419__$1 = temp__5804__auto___21418;
if(cljs.core.chunked_seq_QMARK_(seq__21237_21419__$1)){
var c__5568__auto___21420 = cljs.core.chunk_first(seq__21237_21419__$1);
var G__21421 = cljs.core.chunk_rest(seq__21237_21419__$1);
var G__21422 = c__5568__auto___21420;
var G__21423 = cljs.core.count(c__5568__auto___21420);
var G__21424 = (0);
seq__21237_21404 = G__21421;
chunk__21239_21405 = G__21422;
count__21240_21406 = G__21423;
i__21241_21407 = G__21424;
continue;
} else {
var map__21246_21425 = cljs.core.first(seq__21237_21419__$1);
var map__21246_21426__$1 = cljs.core.__destructure_map(map__21246_21425);
var task_21427 = map__21246_21426__$1;
var fn_str_21428 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21246_21426__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21429 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21246_21426__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21430 = goog.getObjectByName(fn_str_21428,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21429)].join(''));

(fn_obj_21430.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21430.cljs$core$IFn$_invoke$arity$2(path,new_link_21403) : fn_obj_21430.call(null,path,new_link_21403));


var G__21431 = cljs.core.next(seq__21237_21419__$1);
var G__21432 = null;
var G__21433 = (0);
var G__21434 = (0);
seq__21237_21404 = G__21431;
chunk__21239_21405 = G__21432;
count__21240_21406 = G__21433;
i__21241_21407 = G__21434;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21401);
});})(seq__21204_21397,chunk__21208_21398,count__21209_21399,i__21210_21400,seq__21090,chunk__21092,count__21093,i__21094,new_link_21403,path_match_21402,node_21401,path,map__21089,map__21089__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21402], 0));

goog.dom.insertSiblingAfter(new_link_21403,node_21401);


var G__21435 = seq__21204_21397;
var G__21436 = chunk__21208_21398;
var G__21437 = count__21209_21399;
var G__21438 = (i__21210_21400 + (1));
seq__21204_21397 = G__21435;
chunk__21208_21398 = G__21436;
count__21209_21399 = G__21437;
i__21210_21400 = G__21438;
continue;
} else {
var G__21439 = seq__21204_21397;
var G__21440 = chunk__21208_21398;
var G__21441 = count__21209_21399;
var G__21442 = (i__21210_21400 + (1));
seq__21204_21397 = G__21439;
chunk__21208_21398 = G__21440;
count__21209_21399 = G__21441;
i__21210_21400 = G__21442;
continue;
}
} else {
var G__21443 = seq__21204_21397;
var G__21444 = chunk__21208_21398;
var G__21445 = count__21209_21399;
var G__21446 = (i__21210_21400 + (1));
seq__21204_21397 = G__21443;
chunk__21208_21398 = G__21444;
count__21209_21399 = G__21445;
i__21210_21400 = G__21446;
continue;
}
} else {
var temp__5804__auto___21447 = cljs.core.seq(seq__21204_21397);
if(temp__5804__auto___21447){
var seq__21204_21448__$1 = temp__5804__auto___21447;
if(cljs.core.chunked_seq_QMARK_(seq__21204_21448__$1)){
var c__5568__auto___21449 = cljs.core.chunk_first(seq__21204_21448__$1);
var G__21450 = cljs.core.chunk_rest(seq__21204_21448__$1);
var G__21451 = c__5568__auto___21449;
var G__21452 = cljs.core.count(c__5568__auto___21449);
var G__21453 = (0);
seq__21204_21397 = G__21450;
chunk__21208_21398 = G__21451;
count__21209_21399 = G__21452;
i__21210_21400 = G__21453;
continue;
} else {
var node_21454 = cljs.core.first(seq__21204_21448__$1);
if(cljs.core.not(node_21454.shadow$old)){
var path_match_21455 = shadow.cljs.devtools.client.browser.match_paths(node_21454.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21455)){
var new_link_21456 = (function (){var G__21247 = node_21454.cloneNode(true);
G__21247.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21455),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21247;
})();
(node_21454.shadow$old = true);

(new_link_21456.onload = ((function (seq__21204_21397,chunk__21208_21398,count__21209_21399,i__21210_21400,seq__21090,chunk__21092,count__21093,i__21094,new_link_21456,path_match_21455,node_21454,seq__21204_21448__$1,temp__5804__auto___21447,path,map__21089,map__21089__$1,msg,updates,reload_info){
return (function (e){
var seq__21248_21457 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21250_21458 = null;
var count__21251_21459 = (0);
var i__21252_21460 = (0);
while(true){
if((i__21252_21460 < count__21251_21459)){
var map__21256_21461 = chunk__21250_21458.cljs$core$IIndexed$_nth$arity$2(null,i__21252_21460);
var map__21256_21462__$1 = cljs.core.__destructure_map(map__21256_21461);
var task_21463 = map__21256_21462__$1;
var fn_str_21464 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21256_21462__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21465 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21256_21462__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21466 = goog.getObjectByName(fn_str_21464,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21465)].join(''));

(fn_obj_21466.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21466.cljs$core$IFn$_invoke$arity$2(path,new_link_21456) : fn_obj_21466.call(null,path,new_link_21456));


var G__21467 = seq__21248_21457;
var G__21468 = chunk__21250_21458;
var G__21469 = count__21251_21459;
var G__21470 = (i__21252_21460 + (1));
seq__21248_21457 = G__21467;
chunk__21250_21458 = G__21468;
count__21251_21459 = G__21469;
i__21252_21460 = G__21470;
continue;
} else {
var temp__5804__auto___21471__$1 = cljs.core.seq(seq__21248_21457);
if(temp__5804__auto___21471__$1){
var seq__21248_21472__$1 = temp__5804__auto___21471__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21248_21472__$1)){
var c__5568__auto___21473 = cljs.core.chunk_first(seq__21248_21472__$1);
var G__21474 = cljs.core.chunk_rest(seq__21248_21472__$1);
var G__21475 = c__5568__auto___21473;
var G__21476 = cljs.core.count(c__5568__auto___21473);
var G__21477 = (0);
seq__21248_21457 = G__21474;
chunk__21250_21458 = G__21475;
count__21251_21459 = G__21476;
i__21252_21460 = G__21477;
continue;
} else {
var map__21257_21478 = cljs.core.first(seq__21248_21472__$1);
var map__21257_21479__$1 = cljs.core.__destructure_map(map__21257_21478);
var task_21480 = map__21257_21479__$1;
var fn_str_21481 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21257_21479__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21482 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21257_21479__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21483 = goog.getObjectByName(fn_str_21481,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21482)].join(''));

(fn_obj_21483.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21483.cljs$core$IFn$_invoke$arity$2(path,new_link_21456) : fn_obj_21483.call(null,path,new_link_21456));


var G__21484 = cljs.core.next(seq__21248_21472__$1);
var G__21485 = null;
var G__21486 = (0);
var G__21487 = (0);
seq__21248_21457 = G__21484;
chunk__21250_21458 = G__21485;
count__21251_21459 = G__21486;
i__21252_21460 = G__21487;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21454);
});})(seq__21204_21397,chunk__21208_21398,count__21209_21399,i__21210_21400,seq__21090,chunk__21092,count__21093,i__21094,new_link_21456,path_match_21455,node_21454,seq__21204_21448__$1,temp__5804__auto___21447,path,map__21089,map__21089__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21455], 0));

goog.dom.insertSiblingAfter(new_link_21456,node_21454);


var G__21488 = cljs.core.next(seq__21204_21448__$1);
var G__21489 = null;
var G__21490 = (0);
var G__21491 = (0);
seq__21204_21397 = G__21488;
chunk__21208_21398 = G__21489;
count__21209_21399 = G__21490;
i__21210_21400 = G__21491;
continue;
} else {
var G__21492 = cljs.core.next(seq__21204_21448__$1);
var G__21493 = null;
var G__21494 = (0);
var G__21495 = (0);
seq__21204_21397 = G__21492;
chunk__21208_21398 = G__21493;
count__21209_21399 = G__21494;
i__21210_21400 = G__21495;
continue;
}
} else {
var G__21496 = cljs.core.next(seq__21204_21448__$1);
var G__21497 = null;
var G__21498 = (0);
var G__21499 = (0);
seq__21204_21397 = G__21496;
chunk__21208_21398 = G__21497;
count__21209_21399 = G__21498;
i__21210_21400 = G__21499;
continue;
}
}
} else {
}
}
break;
}


var G__21500 = seq__21090;
var G__21501 = chunk__21092;
var G__21502 = count__21093;
var G__21503 = (i__21094 + (1));
seq__21090 = G__21500;
chunk__21092 = G__21501;
count__21093 = G__21502;
i__21094 = G__21503;
continue;
} else {
var G__21504 = seq__21090;
var G__21505 = chunk__21092;
var G__21506 = count__21093;
var G__21507 = (i__21094 + (1));
seq__21090 = G__21504;
chunk__21092 = G__21505;
count__21093 = G__21506;
i__21094 = G__21507;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21090);
if(temp__5804__auto__){
var seq__21090__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21090__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21090__$1);
var G__21508 = cljs.core.chunk_rest(seq__21090__$1);
var G__21509 = c__5568__auto__;
var G__21510 = cljs.core.count(c__5568__auto__);
var G__21511 = (0);
seq__21090 = G__21508;
chunk__21092 = G__21509;
count__21093 = G__21510;
i__21094 = G__21511;
continue;
} else {
var path = cljs.core.first(seq__21090__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21258_21512 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21262_21513 = null;
var count__21263_21514 = (0);
var i__21264_21515 = (0);
while(true){
if((i__21264_21515 < count__21263_21514)){
var node_21516 = chunk__21262_21513.cljs$core$IIndexed$_nth$arity$2(null,i__21264_21515);
if(cljs.core.not(node_21516.shadow$old)){
var path_match_21517 = shadow.cljs.devtools.client.browser.match_paths(node_21516.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21517)){
var new_link_21518 = (function (){var G__21290 = node_21516.cloneNode(true);
G__21290.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21517),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21290;
})();
(node_21516.shadow$old = true);

(new_link_21518.onload = ((function (seq__21258_21512,chunk__21262_21513,count__21263_21514,i__21264_21515,seq__21090,chunk__21092,count__21093,i__21094,new_link_21518,path_match_21517,node_21516,path,seq__21090__$1,temp__5804__auto__,map__21089,map__21089__$1,msg,updates,reload_info){
return (function (e){
var seq__21291_21519 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21293_21520 = null;
var count__21294_21521 = (0);
var i__21295_21522 = (0);
while(true){
if((i__21295_21522 < count__21294_21521)){
var map__21299_21523 = chunk__21293_21520.cljs$core$IIndexed$_nth$arity$2(null,i__21295_21522);
var map__21299_21524__$1 = cljs.core.__destructure_map(map__21299_21523);
var task_21525 = map__21299_21524__$1;
var fn_str_21526 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21299_21524__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21527 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21299_21524__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21528 = goog.getObjectByName(fn_str_21526,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21527)].join(''));

(fn_obj_21528.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21528.cljs$core$IFn$_invoke$arity$2(path,new_link_21518) : fn_obj_21528.call(null,path,new_link_21518));


var G__21529 = seq__21291_21519;
var G__21530 = chunk__21293_21520;
var G__21531 = count__21294_21521;
var G__21532 = (i__21295_21522 + (1));
seq__21291_21519 = G__21529;
chunk__21293_21520 = G__21530;
count__21294_21521 = G__21531;
i__21295_21522 = G__21532;
continue;
} else {
var temp__5804__auto___21533__$1 = cljs.core.seq(seq__21291_21519);
if(temp__5804__auto___21533__$1){
var seq__21291_21534__$1 = temp__5804__auto___21533__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21291_21534__$1)){
var c__5568__auto___21535 = cljs.core.chunk_first(seq__21291_21534__$1);
var G__21536 = cljs.core.chunk_rest(seq__21291_21534__$1);
var G__21537 = c__5568__auto___21535;
var G__21538 = cljs.core.count(c__5568__auto___21535);
var G__21539 = (0);
seq__21291_21519 = G__21536;
chunk__21293_21520 = G__21537;
count__21294_21521 = G__21538;
i__21295_21522 = G__21539;
continue;
} else {
var map__21300_21540 = cljs.core.first(seq__21291_21534__$1);
var map__21300_21541__$1 = cljs.core.__destructure_map(map__21300_21540);
var task_21542 = map__21300_21541__$1;
var fn_str_21543 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21300_21541__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21544 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21300_21541__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21545 = goog.getObjectByName(fn_str_21543,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21544)].join(''));

(fn_obj_21545.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21545.cljs$core$IFn$_invoke$arity$2(path,new_link_21518) : fn_obj_21545.call(null,path,new_link_21518));


var G__21546 = cljs.core.next(seq__21291_21534__$1);
var G__21547 = null;
var G__21548 = (0);
var G__21549 = (0);
seq__21291_21519 = G__21546;
chunk__21293_21520 = G__21547;
count__21294_21521 = G__21548;
i__21295_21522 = G__21549;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21516);
});})(seq__21258_21512,chunk__21262_21513,count__21263_21514,i__21264_21515,seq__21090,chunk__21092,count__21093,i__21094,new_link_21518,path_match_21517,node_21516,path,seq__21090__$1,temp__5804__auto__,map__21089,map__21089__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21517], 0));

goog.dom.insertSiblingAfter(new_link_21518,node_21516);


var G__21550 = seq__21258_21512;
var G__21551 = chunk__21262_21513;
var G__21552 = count__21263_21514;
var G__21553 = (i__21264_21515 + (1));
seq__21258_21512 = G__21550;
chunk__21262_21513 = G__21551;
count__21263_21514 = G__21552;
i__21264_21515 = G__21553;
continue;
} else {
var G__21554 = seq__21258_21512;
var G__21555 = chunk__21262_21513;
var G__21556 = count__21263_21514;
var G__21557 = (i__21264_21515 + (1));
seq__21258_21512 = G__21554;
chunk__21262_21513 = G__21555;
count__21263_21514 = G__21556;
i__21264_21515 = G__21557;
continue;
}
} else {
var G__21558 = seq__21258_21512;
var G__21559 = chunk__21262_21513;
var G__21560 = count__21263_21514;
var G__21561 = (i__21264_21515 + (1));
seq__21258_21512 = G__21558;
chunk__21262_21513 = G__21559;
count__21263_21514 = G__21560;
i__21264_21515 = G__21561;
continue;
}
} else {
var temp__5804__auto___21562__$1 = cljs.core.seq(seq__21258_21512);
if(temp__5804__auto___21562__$1){
var seq__21258_21563__$1 = temp__5804__auto___21562__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21258_21563__$1)){
var c__5568__auto___21564 = cljs.core.chunk_first(seq__21258_21563__$1);
var G__21565 = cljs.core.chunk_rest(seq__21258_21563__$1);
var G__21566 = c__5568__auto___21564;
var G__21567 = cljs.core.count(c__5568__auto___21564);
var G__21568 = (0);
seq__21258_21512 = G__21565;
chunk__21262_21513 = G__21566;
count__21263_21514 = G__21567;
i__21264_21515 = G__21568;
continue;
} else {
var node_21569 = cljs.core.first(seq__21258_21563__$1);
if(cljs.core.not(node_21569.shadow$old)){
var path_match_21570 = shadow.cljs.devtools.client.browser.match_paths(node_21569.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21570)){
var new_link_21571 = (function (){var G__21301 = node_21569.cloneNode(true);
G__21301.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21570),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21301;
})();
(node_21569.shadow$old = true);

(new_link_21571.onload = ((function (seq__21258_21512,chunk__21262_21513,count__21263_21514,i__21264_21515,seq__21090,chunk__21092,count__21093,i__21094,new_link_21571,path_match_21570,node_21569,seq__21258_21563__$1,temp__5804__auto___21562__$1,path,seq__21090__$1,temp__5804__auto__,map__21089,map__21089__$1,msg,updates,reload_info){
return (function (e){
var seq__21302_21572 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21304_21573 = null;
var count__21305_21574 = (0);
var i__21306_21575 = (0);
while(true){
if((i__21306_21575 < count__21305_21574)){
var map__21310_21576 = chunk__21304_21573.cljs$core$IIndexed$_nth$arity$2(null,i__21306_21575);
var map__21310_21577__$1 = cljs.core.__destructure_map(map__21310_21576);
var task_21578 = map__21310_21577__$1;
var fn_str_21579 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21310_21577__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21580 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21310_21577__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21581 = goog.getObjectByName(fn_str_21579,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21580)].join(''));

(fn_obj_21581.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21581.cljs$core$IFn$_invoke$arity$2(path,new_link_21571) : fn_obj_21581.call(null,path,new_link_21571));


var G__21582 = seq__21302_21572;
var G__21583 = chunk__21304_21573;
var G__21584 = count__21305_21574;
var G__21585 = (i__21306_21575 + (1));
seq__21302_21572 = G__21582;
chunk__21304_21573 = G__21583;
count__21305_21574 = G__21584;
i__21306_21575 = G__21585;
continue;
} else {
var temp__5804__auto___21586__$2 = cljs.core.seq(seq__21302_21572);
if(temp__5804__auto___21586__$2){
var seq__21302_21587__$1 = temp__5804__auto___21586__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21302_21587__$1)){
var c__5568__auto___21588 = cljs.core.chunk_first(seq__21302_21587__$1);
var G__21589 = cljs.core.chunk_rest(seq__21302_21587__$1);
var G__21590 = c__5568__auto___21588;
var G__21591 = cljs.core.count(c__5568__auto___21588);
var G__21592 = (0);
seq__21302_21572 = G__21589;
chunk__21304_21573 = G__21590;
count__21305_21574 = G__21591;
i__21306_21575 = G__21592;
continue;
} else {
var map__21311_21593 = cljs.core.first(seq__21302_21587__$1);
var map__21311_21594__$1 = cljs.core.__destructure_map(map__21311_21593);
var task_21595 = map__21311_21594__$1;
var fn_str_21596 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21311_21594__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21597 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21311_21594__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21598 = goog.getObjectByName(fn_str_21596,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21597)].join(''));

(fn_obj_21598.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21598.cljs$core$IFn$_invoke$arity$2(path,new_link_21571) : fn_obj_21598.call(null,path,new_link_21571));


var G__21599 = cljs.core.next(seq__21302_21587__$1);
var G__21600 = null;
var G__21601 = (0);
var G__21602 = (0);
seq__21302_21572 = G__21599;
chunk__21304_21573 = G__21600;
count__21305_21574 = G__21601;
i__21306_21575 = G__21602;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21569);
});})(seq__21258_21512,chunk__21262_21513,count__21263_21514,i__21264_21515,seq__21090,chunk__21092,count__21093,i__21094,new_link_21571,path_match_21570,node_21569,seq__21258_21563__$1,temp__5804__auto___21562__$1,path,seq__21090__$1,temp__5804__auto__,map__21089,map__21089__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21570], 0));

goog.dom.insertSiblingAfter(new_link_21571,node_21569);


var G__21603 = cljs.core.next(seq__21258_21563__$1);
var G__21604 = null;
var G__21605 = (0);
var G__21606 = (0);
seq__21258_21512 = G__21603;
chunk__21262_21513 = G__21604;
count__21263_21514 = G__21605;
i__21264_21515 = G__21606;
continue;
} else {
var G__21607 = cljs.core.next(seq__21258_21563__$1);
var G__21608 = null;
var G__21609 = (0);
var G__21610 = (0);
seq__21258_21512 = G__21607;
chunk__21262_21513 = G__21608;
count__21263_21514 = G__21609;
i__21264_21515 = G__21610;
continue;
}
} else {
var G__21611 = cljs.core.next(seq__21258_21563__$1);
var G__21612 = null;
var G__21613 = (0);
var G__21614 = (0);
seq__21258_21512 = G__21611;
chunk__21262_21513 = G__21612;
count__21263_21514 = G__21613;
i__21264_21515 = G__21614;
continue;
}
}
} else {
}
}
break;
}


var G__21615 = cljs.core.next(seq__21090__$1);
var G__21616 = null;
var G__21617 = (0);
var G__21618 = (0);
seq__21090 = G__21615;
chunk__21092 = G__21616;
count__21093 = G__21617;
i__21094 = G__21618;
continue;
} else {
var G__21619 = cljs.core.next(seq__21090__$1);
var G__21620 = null;
var G__21621 = (0);
var G__21622 = (0);
seq__21090 = G__21619;
chunk__21092 = G__21620;
count__21093 = G__21621;
i__21094 = G__21622;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__21312){
var map__21313 = p__21312;
var map__21313__$1 = cljs.core.__destructure_map(map__21313);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21313__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21314,done,error){
var map__21315 = p__21314;
var map__21315__$1 = cljs.core.__destructure_map(map__21315);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21315__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21316,done,error){
var map__21317 = p__21316;
var map__21317__$1 = cljs.core.__destructure_map(map__21317);
var msg = map__21317__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21317__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21317__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21317__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21318){
var map__21319 = p__21318;
var map__21319__$1 = cljs.core.__destructure_map(map__21319);
var src = map__21319__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21319__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21320 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21320) : done.call(null,G__21320));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21321){
var map__21322 = p__21321;
var map__21322__$1 = cljs.core.__destructure_map(map__21322);
var msg__$1 = map__21322__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21322__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e21323){var ex = e21323;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21324){
var map__21325 = p__21324;
var map__21325__$1 = cljs.core.__destructure_map(map__21325);
var env = map__21325__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21325__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21326){
var map__21327 = p__21326;
var map__21327__$1 = cljs.core.__destructure_map(map__21327);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21327__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21327__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__21328){
var map__21329 = p__21328;
var map__21329__$1 = cljs.core.__destructure_map(map__21329);
var svc = map__21329__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21329__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
