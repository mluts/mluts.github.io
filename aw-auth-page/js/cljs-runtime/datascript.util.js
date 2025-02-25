goog.provide('datascript.util');
datascript.util._STAR_debug_STAR_ = false;
datascript.util.rand_bits = (function datascript$util$rand_bits(pow){
return cljs.core.rand_int(((1) << pow));
});
datascript.util.to_hex_string = (function datascript$util$to_hex_string(n,l){
var s = n.toString((16));
var c = cljs.core.count(s);
if((c > l)){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),l);
} else {
if((c < l)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((l - c),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
} else {
return s;

}
}
});
datascript.util.squuid = (function datascript$util$squuid(var_args){
var G__21462 = arguments.length;
switch (G__21462) {
case 0:
return datascript.util.squuid.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datascript.util.squuid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.util.squuid.cljs$core$IFn$_invoke$arity$0 = (function (){
return datascript.util.squuid.cljs$core$IFn$_invoke$arity$1((new Date()).getTime());
}));

(datascript.util.squuid.cljs$core$IFn$_invoke$arity$1 = (function (msec){
return cljs.core.uuid([cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.util.to_hex_string(((msec / (1000)) | (0)),(8))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.util.to_hex_string(datascript.util.rand_bits((16)),(4))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.util.to_hex_string(((datascript.util.rand_bits((16)) & (4095)) | (16384)),(4))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.util.to_hex_string(((datascript.util.rand_bits((16)) & (16383)) | (32768)),(4))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.util.to_hex_string(datascript.util.rand_bits((16)),(4))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.util.to_hex_string(datascript.util.rand_bits((16)),(4))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.util.to_hex_string(datascript.util.rand_bits((16)),(4)))].join(''));
}));

(datascript.util.squuid.cljs$lang$maxFixedArity = 1);

/**
 * Returns time that was used in [[squuid]] call, in milliseconds, rounded to the closest second.
 */
datascript.util.squuid_time_millis = (function datascript$util$squuid_time_millis(uuid){
return (parseInt(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid),(0),(8)),(16)) * (1000));
});
datascript.util.distinct_by = (function datascript$util$distinct_by(f,coll){
return cljs.core.persistent_BANG_(cljs.core.second(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__21515,el){
var vec__21518 = p__21515;
var seen = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21518,(0),null);
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21518,(1),null);
var acc = vec__21518;
var key = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(el) : f.call(null,el));
if(cljs.core.contains_QMARK_(seen,key)){
return acc;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(seen,key),cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(res,el)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY),cljs.core.transient$(cljs.core.PersistentVector.EMPTY)], null),coll)));
});
datascript.util.find = (function datascript$util$find(pred,xs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,x){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return cljs.core.reduced(x);
} else {
return null;
}
}),null,xs);
});
datascript.util.single = (function datascript$util$single(coll){
if((cljs.core.next(coll) == null)){
} else {
throw (new Error(["Assert failed: ","Expected single element","\n","(nil? (next coll))"].join('')));
}

return cljs.core.first(coll);
});
datascript.util.concatv = (function datascript$util$concatv(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21646 = arguments.length;
var i__5770__auto___21649 = (0);
while(true){
if((i__5770__auto___21649 < len__5769__auto___21646)){
args__5775__auto__.push((arguments[i__5770__auto___21649]));

var G__21650 = (i__5770__auto___21649 + (1));
i__5770__auto___21649 = G__21650;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return datascript.util.concatv.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(datascript.util.concatv.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.cat,xs);
}));

(datascript.util.concatv.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(datascript.util.concatv.cljs$lang$applyTo = (function (seq21556){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21556));
}));

datascript.util.zip = (function datascript$util$zip(var_args){
var G__21582 = arguments.length;
switch (G__21582) {
case 2:
return datascript.util.zip.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___21660 = arguments.length;
var i__5770__auto___21661 = (0);
while(true){
if((i__5770__auto___21661 < len__5769__auto___21660)){
args_arr__5794__auto__.push((arguments[i__5770__auto___21661]));

var G__21662 = (i__5770__auto___21661 + (1));
i__5770__auto___21661 = G__21662;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return datascript.util.zip.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(datascript.util.zip.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,a,b);
}));

(datascript.util.zip.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.mapv,cljs.core.vector,a,b,rest);
}));

/** @this {Function} */
(datascript.util.zip.cljs$lang$applyTo = (function (seq21568){
var G__21569 = cljs.core.first(seq21568);
var seq21568__$1 = cljs.core.next(seq21568);
var G__21570 = cljs.core.first(seq21568__$1);
var seq21568__$2 = cljs.core.next(seq21568__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21569,G__21570,seq21568__$2);
}));

(datascript.util.zip.cljs$lang$maxFixedArity = (2));

datascript.util.removem = (function datascript$util$removem(key_pred,m){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((key_pred.cljs$core$IFn$_invoke$arity$1 ? key_pred.cljs$core$IFn$_invoke$arity$1(k) : key_pred.call(null,k)))){
return m__$1;
} else {
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m__$1,k,v);
}
}),cljs.core.transient$(cljs.core.empty(m)),m));
});
datascript.util.conjv = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY);
datascript.util.conjs = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY);
/**
 * Same as reduce, but `f` takes [acc el idx]
 */
datascript.util.reduce_indexed = (function datascript$util$reduce_indexed(f,init,xs){
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__21636,x){
var vec__21637 = p__21636;
var acc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21637,(0),null);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21637,(1),null);
var res = (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(acc,x,idx) : f.call(null,acc,x,idx));
if(cljs.core.reduced_QMARK_(res)){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [res,idx], null));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [res,(idx + (1))], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [init,(0)], null),xs));
});

//# sourceMappingURL=datascript.util.js.map
