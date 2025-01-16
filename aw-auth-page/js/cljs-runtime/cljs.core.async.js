goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14103 = (function (f,blockable,meta14104){
this.f = f;
this.blockable = blockable;
this.meta14104 = meta14104;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14103.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14105,meta14104__$1){
var self__ = this;
var _14105__$1 = this;
return (new cljs.core.async.t_cljs$core$async14103(self__.f,self__.blockable,meta14104__$1));
}));

(cljs.core.async.t_cljs$core$async14103.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14105){
var self__ = this;
var _14105__$1 = this;
return self__.meta14104;
}));

(cljs.core.async.t_cljs$core$async14103.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14103.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14103.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14103.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14103.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14104","meta14104",994160849,null)], null);
}));

(cljs.core.async.t_cljs$core$async14103.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14103.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14103");

(cljs.core.async.t_cljs$core$async14103.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14103");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14103.
 */
cljs.core.async.__GT_t_cljs$core$async14103 = (function cljs$core$async$__GT_t_cljs$core$async14103(f,blockable,meta14104){
return (new cljs.core.async.t_cljs$core$async14103(f,blockable,meta14104));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14102 = arguments.length;
switch (G__14102) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async14103(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__14117 = arguments.length;
switch (G__14117) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__14122 = arguments.length;
switch (G__14122) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__14136 = arguments.length;
switch (G__14136) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_17609 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17609) : fn1.call(null,val_17609));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17609) : fn1.call(null,val_17609));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__14146 = arguments.length;
switch (G__14146) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___17638 = n;
var x_17639 = (0);
while(true){
if((x_17639 < n__5636__auto___17638)){
(a[x_17639] = x_17639);

var G__17641 = (x_17639 + (1));
x_17639 = G__17641;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14157 = (function (flag,meta14158){
this.flag = flag;
this.meta14158 = meta14158;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14157.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14159,meta14158__$1){
var self__ = this;
var _14159__$1 = this;
return (new cljs.core.async.t_cljs$core$async14157(self__.flag,meta14158__$1));
}));

(cljs.core.async.t_cljs$core$async14157.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14159){
var self__ = this;
var _14159__$1 = this;
return self__.meta14158;
}));

(cljs.core.async.t_cljs$core$async14157.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14157.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14157.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14157.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async14157.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14158","meta14158",-93693649,null)], null);
}));

(cljs.core.async.t_cljs$core$async14157.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14157.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14157");

(cljs.core.async.t_cljs$core$async14157.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14157");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14157.
 */
cljs.core.async.__GT_t_cljs$core$async14157 = (function cljs$core$async$__GT_t_cljs$core$async14157(flag,meta14158){
return (new cljs.core.async.t_cljs$core$async14157(flag,meta14158));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async14157(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14174 = (function (flag,cb,meta14175){
this.flag = flag;
this.cb = cb;
this.meta14175 = meta14175;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14174.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14176,meta14175__$1){
var self__ = this;
var _14176__$1 = this;
return (new cljs.core.async.t_cljs$core$async14174(self__.flag,self__.cb,meta14175__$1));
}));

(cljs.core.async.t_cljs$core$async14174.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14176){
var self__ = this;
var _14176__$1 = this;
return self__.meta14175;
}));

(cljs.core.async.t_cljs$core$async14174.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14174.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14174.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14174.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async14174.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14175","meta14175",853951447,null)], null);
}));

(cljs.core.async.t_cljs$core$async14174.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14174.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14174");

(cljs.core.async.t_cljs$core$async14174.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14174");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14174.
 */
cljs.core.async.__GT_t_cljs$core$async14174 = (function cljs$core$async$__GT_t_cljs$core$async14174(flag,cb,meta14175){
return (new cljs.core.async.t_cljs$core$async14174(flag,cb,meta14175));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async14174(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14183_SHARP_){
var G__14190 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14183_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14190) : fret.call(null,G__14190));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14184_SHARP_){
var G__14191 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14184_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14191) : fret.call(null,G__14191));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17669 = (i + (1));
i = G__17669;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17670 = arguments.length;
var i__5770__auto___17671 = (0);
while(true){
if((i__5770__auto___17671 < len__5769__auto___17670)){
args__5775__auto__.push((arguments[i__5770__auto___17671]));

var G__17672 = (i__5770__auto___17671 + (1));
i__5770__auto___17671 = G__17672;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14202){
var map__14203 = p__14202;
var map__14203__$1 = cljs.core.__destructure_map(map__14203);
var opts = map__14203__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14198){
var G__14199 = cljs.core.first(seq14198);
var seq14198__$1 = cljs.core.next(seq14198);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14199,seq14198__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__14214 = arguments.length;
switch (G__14214) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__13967__auto___17686 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13968__auto__ = (function (){var switch__12962__auto__ = (function (state_14273){
var state_val_14275 = (state_14273[(1)]);
if((state_val_14275 === (7))){
var inst_14267 = (state_14273[(2)]);
var state_14273__$1 = state_14273;
var statearr_14292_17692 = state_14273__$1;
(statearr_14292_17692[(2)] = inst_14267);

(statearr_14292_17692[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14275 === (1))){
var state_14273__$1 = state_14273;
var statearr_14298_17697 = state_14273__$1;
(statearr_14298_17697[(2)] = null);

(statearr_14298_17697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14275 === (4))){
var inst_14237 = (state_14273[(7)]);
var inst_14237__$1 = (state_14273[(2)]);
var inst_14243 = (inst_14237__$1 == null);
var state_14273__$1 = (function (){var statearr_14307 = state_14273;
(statearr_14307[(7)] = inst_14237__$1);

return statearr_14307;
})();
if(cljs.core.truth_(inst_14243)){
var statearr_14308_17707 = state_14273__$1;
(statearr_14308_17707[(1)] = (5));

} else {
var statearr_14310_17708 = state_14273__$1;
(statearr_14310_17708[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14275 === (13))){
var state_14273__$1 = state_14273;
var statearr_14316_17718 = state_14273__$1;
(statearr_14316_17718[(2)] = null);

(statearr_14316_17718[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14275 === (6))){
var inst_14237 = (state_14273[(7)]);
var state_14273__$1 = state_14273;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14273__$1,(11),to,inst_14237);
} else {
if((state_val_14275 === (3))){
var inst_14270 = (state_14273[(2)]);
var state_14273__$1 = state_14273;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14273__$1,inst_14270);
} else {
if((state_val_14275 === (12))){
var state_14273__$1 = state_14273;
var statearr_14324_17721 = state_14273__$1;
(statearr_14324_17721[(2)] = null);

(statearr_14324_17721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14275 === (2))){
var state_14273__$1 = state_14273;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14273__$1,(4),from);
} else {
if((state_val_14275 === (11))){
var inst_14257 = (state_14273[(2)]);
var state_14273__$1 = state_14273;
if(cljs.core.truth_(inst_14257)){
var statearr_14326_17723 = state_14273__$1;
(statearr_14326_17723[(1)] = (12));

} else {
var statearr_14329_17724 = state_14273__$1;
(statearr_14329_17724[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14275 === (9))){
var state_14273__$1 = state_14273;
var statearr_14332_17725 = state_14273__$1;
(statearr_14332_17725[(2)] = null);

(statearr_14332_17725[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14275 === (5))){
var state_14273__$1 = state_14273;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14334_17726 = state_14273__$1;
(statearr_14334_17726[(1)] = (8));

} else {
var statearr_14335_17727 = state_14273__$1;
(statearr_14335_17727[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14275 === (14))){
var inst_14265 = (state_14273[(2)]);
var state_14273__$1 = state_14273;
var statearr_14337_17732 = state_14273__$1;
(statearr_14337_17732[(2)] = inst_14265);

(statearr_14337_17732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14275 === (10))){
var inst_14254 = (state_14273[(2)]);
var state_14273__$1 = state_14273;
var statearr_14343_17737 = state_14273__$1;
(statearr_14343_17737[(2)] = inst_14254);

(statearr_14343_17737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14275 === (8))){
var inst_14250 = cljs.core.async.close_BANG_(to);
var state_14273__$1 = state_14273;
var statearr_14347_17741 = state_14273__$1;
(statearr_14347_17741[(2)] = inst_14250);

(statearr_14347_17741[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12963__auto__ = null;
var cljs$core$async$state_machine__12963__auto____0 = (function (){
var statearr_14353 = [null,null,null,null,null,null,null,null];
(statearr_14353[(0)] = cljs$core$async$state_machine__12963__auto__);

(statearr_14353[(1)] = (1));

return statearr_14353;
});
var cljs$core$async$state_machine__12963__auto____1 = (function (state_14273){
while(true){
var ret_value__12964__auto__ = (function (){try{while(true){
var result__12965__auto__ = switch__12962__auto__(state_14273);
if(cljs.core.keyword_identical_QMARK_(result__12965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12965__auto__;
}
break;
}
}catch (e14355){var ex__12966__auto__ = e14355;
var statearr_14356_17764 = state_14273;
(statearr_14356_17764[(2)] = ex__12966__auto__);


if(cljs.core.seq((state_14273[(4)]))){
var statearr_14357_17765 = state_14273;
(statearr_14357_17765[(1)] = cljs.core.first((state_14273[(4)])));

} else {
throw ex__12966__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17766 = state_14273;
state_14273 = G__17766;
continue;
} else {
return ret_value__12964__auto__;
}
break;
}
});
cljs$core$async$state_machine__12963__auto__ = function(state_14273){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12963__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12963__auto____1.call(this,state_14273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12963__auto____0;
cljs$core$async$state_machine__12963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12963__auto____1;
return cljs$core$async$state_machine__12963__auto__;
})()
})();
var state__13969__auto__ = (function (){var statearr_14359 = f__13968__auto__();
(statearr_14359[(6)] = c__13967__auto___17686);

return statearr_14359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13969__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__14380){
var vec__14384 = p__14380;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14384,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14384,(1),null);
var job = vec__14384;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__13967__auto___17773 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13968__auto__ = (function (){var switch__12962__auto__ = (function (state_14397){
var state_val_14399 = (state_14397[(1)]);
if((state_val_14399 === (1))){
var state_14397__$1 = state_14397;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14397__$1,(2),res,v);
} else {
if((state_val_14399 === (2))){
var inst_14393 = (state_14397[(2)]);
var inst_14395 = cljs.core.async.close_BANG_(res);
var state_14397__$1 = (function (){var statearr_14405 = state_14397;
(statearr_14405[(7)] = inst_14393);

return statearr_14405;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14397__$1,inst_14395);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12963__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12963__auto____0 = (function (){
var statearr_14413 = [null,null,null,null,null,null,null,null];
(statearr_14413[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12963__auto__);

(statearr_14413[(1)] = (1));

return statearr_14413;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12963__auto____1 = (function (state_14397){
while(true){
var ret_value__12964__auto__ = (function (){try{while(true){
var result__12965__auto__ = switch__12962__auto__(state_14397);
if(cljs.core.keyword_identical_QMARK_(result__12965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12965__auto__;
}
break;
}
}catch (e14416){var ex__12966__auto__ = e14416;
var statearr_14418_17790 = state_14397;
(statearr_14418_17790[(2)] = ex__12966__auto__);


if(cljs.core.seq((state_14397[(4)]))){
var statearr_14420_17791 = state_14397;
(statearr_14420_17791[(1)] = cljs.core.first((state_14397[(4)])));

} else {
throw ex__12966__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17796 = state_14397;
state_14397 = G__17796;
continue;
} else {
return ret_value__12964__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12963__auto__ = function(state_14397){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12963__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12963__auto____1.call(this,state_14397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12963__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12963__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12963__auto__;
})()
})();
var state__13969__auto__ = (function (){var statearr_14425 = f__13968__auto__();
(statearr_14425[(6)] = c__13967__auto___17773);

return statearr_14425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13969__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__14432){
var vec__14433 = p__14432;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14433,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14433,(1),null);
var job = vec__14433;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___17821 = n;
var __17822 = (0);
while(true){
if((__17822 < n__5636__auto___17821)){
var G__14443_17823 = type;
var G__14443_17824__$1 = (((G__14443_17823 instanceof cljs.core.Keyword))?G__14443_17823.fqn:null);
switch (G__14443_17824__$1) {
case "compute":
var c__13967__auto___17826 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17822,c__13967__auto___17826,G__14443_17823,G__14443_17824__$1,n__5636__auto___17821,jobs,results,process__$1,async){
return (function (){
var f__13968__auto__ = (function (){var switch__12962__auto__ = ((function (__17822,c__13967__auto___17826,G__14443_17823,G__14443_17824__$1,n__5636__auto___17821,jobs,results,process__$1,async){
return (function (state_14461){
var state_val_14462 = (state_14461[(1)]);
if((state_val_14462 === (1))){
var state_14461__$1 = state_14461;
var statearr_14466_17827 = state_14461__$1;
(statearr_14466_17827[(2)] = null);

(statearr_14466_17827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14462 === (2))){
var state_14461__$1 = state_14461;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14461__$1,(4),jobs);
} else {
if((state_val_14462 === (3))){
var inst_14459 = (state_14461[(2)]);
var state_14461__$1 = state_14461;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14461__$1,inst_14459);
} else {
if((state_val_14462 === (4))){
var inst_14448 = (state_14461[(2)]);
var inst_14450 = process__$1(inst_14448);
var state_14461__$1 = state_14461;
if(cljs.core.truth_(inst_14450)){
var statearr_14478_17829 = state_14461__$1;
(statearr_14478_17829[(1)] = (5));

} else {
var statearr_14481_17830 = state_14461__$1;
(statearr_14481_17830[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14462 === (5))){
var state_14461__$1 = state_14461;
var statearr_14490_17831 = state_14461__$1;
(statearr_14490_17831[(2)] = null);

(statearr_14490_17831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14462 === (6))){
var state_14461__$1 = state_14461;
var statearr_14492_17836 = state_14461__$1;
(statearr_14492_17836[(2)] = null);

(statearr_14492_17836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14462 === (7))){
var inst_14456 = (state_14461[(2)]);
var state_14461__$1 = state_14461;
var statearr_14496_17837 = state_14461__$1;
(statearr_14496_17837[(2)] = inst_14456);

(statearr_14496_17837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17822,c__13967__auto___17826,G__14443_17823,G__14443_17824__$1,n__5636__auto___17821,jobs,results,process__$1,async))
;
return ((function (__17822,switch__12962__auto__,c__13967__auto___17826,G__14443_17823,G__14443_17824__$1,n__5636__auto___17821,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12963__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12963__auto____0 = (function (){
var statearr_14502 = [null,null,null,null,null,null,null];
(statearr_14502[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12963__auto__);

(statearr_14502[(1)] = (1));

return statearr_14502;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12963__auto____1 = (function (state_14461){
while(true){
var ret_value__12964__auto__ = (function (){try{while(true){
var result__12965__auto__ = switch__12962__auto__(state_14461);
if(cljs.core.keyword_identical_QMARK_(result__12965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12965__auto__;
}
break;
}
}catch (e14507){var ex__12966__auto__ = e14507;
var statearr_14508_17844 = state_14461;
(statearr_14508_17844[(2)] = ex__12966__auto__);


if(cljs.core.seq((state_14461[(4)]))){
var statearr_14511_17846 = state_14461;
(statearr_14511_17846[(1)] = cljs.core.first((state_14461[(4)])));

} else {
throw ex__12966__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17847 = state_14461;
state_14461 = G__17847;
continue;
} else {
return ret_value__12964__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12963__auto__ = function(state_14461){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12963__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12963__auto____1.call(this,state_14461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12963__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12963__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12963__auto__;
})()
;})(__17822,switch__12962__auto__,c__13967__auto___17826,G__14443_17823,G__14443_17824__$1,n__5636__auto___17821,jobs,results,process__$1,async))
})();
var state__13969__auto__ = (function (){var statearr_14515 = f__13968__auto__();
(statearr_14515[(6)] = c__13967__auto___17826);

return statearr_14515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13969__auto__);
});})(__17822,c__13967__auto___17826,G__14443_17823,G__14443_17824__$1,n__5636__auto___17821,jobs,results,process__$1,async))
);


break;
case "async":
var c__13967__auto___17848 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17822,c__13967__auto___17848,G__14443_17823,G__14443_17824__$1,n__5636__auto___17821,jobs,results,process__$1,async){
return (function (){
var f__13968__auto__ = (function (){var switch__12962__auto__ = ((function (__17822,c__13967__auto___17848,G__14443_17823,G__14443_17824__$1,n__5636__auto___17821,jobs,results,process__$1,async){
return (function (state_14535){
var state_val_14536 = (state_14535[(1)]);
if((state_val_14536 === (1))){
var state_14535__$1 = state_14535;
var statearr_14546_17855 = state_14535__$1;
(statearr_14546_17855[(2)] = null);

(statearr_14546_17855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14536 === (2))){
var state_14535__$1 = state_14535;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14535__$1,(4),jobs);
} else {
if((state_val_14536 === (3))){
var inst_14533 = (state_14535[(2)]);
var state_14535__$1 = state_14535;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14535__$1,inst_14533);
} else {
if((state_val_14536 === (4))){
var inst_14522 = (state_14535[(2)]);
var inst_14523 = async(inst_14522);
var state_14535__$1 = state_14535;
if(cljs.core.truth_(inst_14523)){
var statearr_14554_17867 = state_14535__$1;
(statearr_14554_17867[(1)] = (5));

} else {
var statearr_14558_17868 = state_14535__$1;
(statearr_14558_17868[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14536 === (5))){
var state_14535__$1 = state_14535;
var statearr_14560_17870 = state_14535__$1;
(statearr_14560_17870[(2)] = null);

(statearr_14560_17870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14536 === (6))){
var state_14535__$1 = state_14535;
var statearr_14561_17871 = state_14535__$1;
(statearr_14561_17871[(2)] = null);

(statearr_14561_17871[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14536 === (7))){
var inst_14530 = (state_14535[(2)]);
var state_14535__$1 = state_14535;
var statearr_14565_17875 = state_14535__$1;
(statearr_14565_17875[(2)] = inst_14530);

(statearr_14565_17875[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17822,c__13967__auto___17848,G__14443_17823,G__14443_17824__$1,n__5636__auto___17821,jobs,results,process__$1,async))
;
return ((function (__17822,switch__12962__auto__,c__13967__auto___17848,G__14443_17823,G__14443_17824__$1,n__5636__auto___17821,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12963__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12963__auto____0 = (function (){
var statearr_14568 = [null,null,null,null,null,null,null];
(statearr_14568[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12963__auto__);

(statearr_14568[(1)] = (1));

return statearr_14568;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12963__auto____1 = (function (state_14535){
while(true){
var ret_value__12964__auto__ = (function (){try{while(true){
var result__12965__auto__ = switch__12962__auto__(state_14535);
if(cljs.core.keyword_identical_QMARK_(result__12965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12965__auto__;
}
break;
}
}catch (e14574){var ex__12966__auto__ = e14574;
var statearr_14576_17883 = state_14535;
(statearr_14576_17883[(2)] = ex__12966__auto__);


if(cljs.core.seq((state_14535[(4)]))){
var statearr_14577_17893 = state_14535;
(statearr_14577_17893[(1)] = cljs.core.first((state_14535[(4)])));

} else {
throw ex__12966__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17895 = state_14535;
state_14535 = G__17895;
continue;
} else {
return ret_value__12964__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12963__auto__ = function(state_14535){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12963__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12963__auto____1.call(this,state_14535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12963__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12963__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12963__auto__;
})()
;})(__17822,switch__12962__auto__,c__13967__auto___17848,G__14443_17823,G__14443_17824__$1,n__5636__auto___17821,jobs,results,process__$1,async))
})();
var state__13969__auto__ = (function (){var statearr_14582 = f__13968__auto__();
(statearr_14582[(6)] = c__13967__auto___17848);

return statearr_14582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13969__auto__);
});})(__17822,c__13967__auto___17848,G__14443_17823,G__14443_17824__$1,n__5636__auto___17821,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14443_17824__$1)].join('')));

}

var G__17908 = (__17822 + (1));
__17822 = G__17908;
continue;
} else {
}
break;
}

var c__13967__auto___17909 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13968__auto__ = (function (){var switch__12962__auto__ = (function (state_14615){
var state_val_14616 = (state_14615[(1)]);
if((state_val_14616 === (7))){
var inst_14609 = (state_14615[(2)]);
var state_14615__$1 = state_14615;
var statearr_14626_17914 = state_14615__$1;
(statearr_14626_17914[(2)] = inst_14609);

(statearr_14626_17914[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14616 === (1))){
var state_14615__$1 = state_14615;
var statearr_14629_17915 = state_14615__$1;
(statearr_14629_17915[(2)] = null);

(statearr_14629_17915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14616 === (4))){
var inst_14590 = (state_14615[(7)]);
var inst_14590__$1 = (state_14615[(2)]);
var inst_14592 = (inst_14590__$1 == null);
var state_14615__$1 = (function (){var statearr_14632 = state_14615;
(statearr_14632[(7)] = inst_14590__$1);

return statearr_14632;
})();
if(cljs.core.truth_(inst_14592)){
var statearr_14633_17919 = state_14615__$1;
(statearr_14633_17919[(1)] = (5));

} else {
var statearr_14636_17920 = state_14615__$1;
(statearr_14636_17920[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14616 === (6))){
var inst_14597 = (state_14615[(8)]);
var inst_14590 = (state_14615[(7)]);
var inst_14597__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14599 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14600 = [inst_14590,inst_14597__$1];
var inst_14601 = (new cljs.core.PersistentVector(null,2,(5),inst_14599,inst_14600,null));
var state_14615__$1 = (function (){var statearr_14639 = state_14615;
(statearr_14639[(8)] = inst_14597__$1);

return statearr_14639;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14615__$1,(8),jobs,inst_14601);
} else {
if((state_val_14616 === (3))){
var inst_14612 = (state_14615[(2)]);
var state_14615__$1 = state_14615;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14615__$1,inst_14612);
} else {
if((state_val_14616 === (2))){
var state_14615__$1 = state_14615;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14615__$1,(4),from);
} else {
if((state_val_14616 === (9))){
var inst_14605 = (state_14615[(2)]);
var state_14615__$1 = (function (){var statearr_14644 = state_14615;
(statearr_14644[(9)] = inst_14605);

return statearr_14644;
})();
var statearr_14650_17930 = state_14615__$1;
(statearr_14650_17930[(2)] = null);

(statearr_14650_17930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14616 === (5))){
var inst_14595 = cljs.core.async.close_BANG_(jobs);
var state_14615__$1 = state_14615;
var statearr_14653_17931 = state_14615__$1;
(statearr_14653_17931[(2)] = inst_14595);

(statearr_14653_17931[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14616 === (8))){
var inst_14597 = (state_14615[(8)]);
var inst_14603 = (state_14615[(2)]);
var state_14615__$1 = (function (){var statearr_14654 = state_14615;
(statearr_14654[(10)] = inst_14603);

return statearr_14654;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14615__$1,(9),results,inst_14597);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12963__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12963__auto____0 = (function (){
var statearr_14658 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14658[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12963__auto__);

(statearr_14658[(1)] = (1));

return statearr_14658;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12963__auto____1 = (function (state_14615){
while(true){
var ret_value__12964__auto__ = (function (){try{while(true){
var result__12965__auto__ = switch__12962__auto__(state_14615);
if(cljs.core.keyword_identical_QMARK_(result__12965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12965__auto__;
}
break;
}
}catch (e14661){var ex__12966__auto__ = e14661;
var statearr_14662_17938 = state_14615;
(statearr_14662_17938[(2)] = ex__12966__auto__);


if(cljs.core.seq((state_14615[(4)]))){
var statearr_14663_17939 = state_14615;
(statearr_14663_17939[(1)] = cljs.core.first((state_14615[(4)])));

} else {
throw ex__12966__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17941 = state_14615;
state_14615 = G__17941;
continue;
} else {
return ret_value__12964__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12963__auto__ = function(state_14615){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12963__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12963__auto____1.call(this,state_14615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12963__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12963__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12963__auto__;
})()
})();
var state__13969__auto__ = (function (){var statearr_14670 = f__13968__auto__();
(statearr_14670[(6)] = c__13967__auto___17909);

return statearr_14670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13969__auto__);
}));


var c__13967__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13968__auto__ = (function (){var switch__12962__auto__ = (function (state_14720){
var state_val_14721 = (state_14720[(1)]);
if((state_val_14721 === (7))){
var inst_14715 = (state_14720[(2)]);
var state_14720__$1 = state_14720;
var statearr_14725_17949 = state_14720__$1;
(statearr_14725_17949[(2)] = inst_14715);

(statearr_14725_17949[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14721 === (20))){
var state_14720__$1 = state_14720;
var statearr_14727_17958 = state_14720__$1;
(statearr_14727_17958[(2)] = null);

(statearr_14727_17958[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14721 === (1))){
var state_14720__$1 = state_14720;
var statearr_14728_17959 = state_14720__$1;
(statearr_14728_17959[(2)] = null);

(statearr_14728_17959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14721 === (4))){
var inst_14675 = (state_14720[(7)]);
var inst_14675__$1 = (state_14720[(2)]);
var inst_14676 = (inst_14675__$1 == null);
var state_14720__$1 = (function (){var statearr_14733 = state_14720;
(statearr_14733[(7)] = inst_14675__$1);

return statearr_14733;
})();
if(cljs.core.truth_(inst_14676)){
var statearr_14734_17963 = state_14720__$1;
(statearr_14734_17963[(1)] = (5));

} else {
var statearr_14736_17964 = state_14720__$1;
(statearr_14736_17964[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14721 === (15))){
var inst_14693 = (state_14720[(8)]);
var state_14720__$1 = state_14720;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14720__$1,(18),to,inst_14693);
} else {
if((state_val_14721 === (21))){
var inst_14710 = (state_14720[(2)]);
var state_14720__$1 = state_14720;
var statearr_14741_17968 = state_14720__$1;
(statearr_14741_17968[(2)] = inst_14710);

(statearr_14741_17968[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14721 === (13))){
var inst_14712 = (state_14720[(2)]);
var state_14720__$1 = (function (){var statearr_14744 = state_14720;
(statearr_14744[(9)] = inst_14712);

return statearr_14744;
})();
var statearr_14746_17969 = state_14720__$1;
(statearr_14746_17969[(2)] = null);

(statearr_14746_17969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14721 === (6))){
var inst_14675 = (state_14720[(7)]);
var state_14720__$1 = state_14720;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14720__$1,(11),inst_14675);
} else {
if((state_val_14721 === (17))){
var inst_14704 = (state_14720[(2)]);
var state_14720__$1 = state_14720;
if(cljs.core.truth_(inst_14704)){
var statearr_14748_17971 = state_14720__$1;
(statearr_14748_17971[(1)] = (19));

} else {
var statearr_14749_17972 = state_14720__$1;
(statearr_14749_17972[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14721 === (3))){
var inst_14717 = (state_14720[(2)]);
var state_14720__$1 = state_14720;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14720__$1,inst_14717);
} else {
if((state_val_14721 === (12))){
var inst_14688 = (state_14720[(10)]);
var state_14720__$1 = state_14720;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14720__$1,(14),inst_14688);
} else {
if((state_val_14721 === (2))){
var state_14720__$1 = state_14720;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14720__$1,(4),results);
} else {
if((state_val_14721 === (19))){
var state_14720__$1 = state_14720;
var statearr_14754_17977 = state_14720__$1;
(statearr_14754_17977[(2)] = null);

(statearr_14754_17977[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14721 === (11))){
var inst_14688 = (state_14720[(2)]);
var state_14720__$1 = (function (){var statearr_14757 = state_14720;
(statearr_14757[(10)] = inst_14688);

return statearr_14757;
})();
var statearr_14758_17978 = state_14720__$1;
(statearr_14758_17978[(2)] = null);

(statearr_14758_17978[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14721 === (9))){
var state_14720__$1 = state_14720;
var statearr_14762_17980 = state_14720__$1;
(statearr_14762_17980[(2)] = null);

(statearr_14762_17980[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14721 === (5))){
var state_14720__$1 = state_14720;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14764_17982 = state_14720__$1;
(statearr_14764_17982[(1)] = (8));

} else {
var statearr_14765_17985 = state_14720__$1;
(statearr_14765_17985[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14721 === (14))){
var inst_14696 = (state_14720[(11)]);
var inst_14693 = (state_14720[(8)]);
var inst_14693__$1 = (state_14720[(2)]);
var inst_14695 = (inst_14693__$1 == null);
var inst_14696__$1 = cljs.core.not(inst_14695);
var state_14720__$1 = (function (){var statearr_14772 = state_14720;
(statearr_14772[(11)] = inst_14696__$1);

(statearr_14772[(8)] = inst_14693__$1);

return statearr_14772;
})();
if(inst_14696__$1){
var statearr_14775_17988 = state_14720__$1;
(statearr_14775_17988[(1)] = (15));

} else {
var statearr_14777_17989 = state_14720__$1;
(statearr_14777_17989[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14721 === (16))){
var inst_14696 = (state_14720[(11)]);
var state_14720__$1 = state_14720;
var statearr_14780_17990 = state_14720__$1;
(statearr_14780_17990[(2)] = inst_14696);

(statearr_14780_17990[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14721 === (10))){
var inst_14683 = (state_14720[(2)]);
var state_14720__$1 = state_14720;
var statearr_14781_17992 = state_14720__$1;
(statearr_14781_17992[(2)] = inst_14683);

(statearr_14781_17992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14721 === (18))){
var inst_14699 = (state_14720[(2)]);
var state_14720__$1 = state_14720;
var statearr_14783_17995 = state_14720__$1;
(statearr_14783_17995[(2)] = inst_14699);

(statearr_14783_17995[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14721 === (8))){
var inst_14679 = cljs.core.async.close_BANG_(to);
var state_14720__$1 = state_14720;
var statearr_14786_17998 = state_14720__$1;
(statearr_14786_17998[(2)] = inst_14679);

(statearr_14786_17998[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12963__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12963__auto____0 = (function (){
var statearr_14795 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14795[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12963__auto__);

(statearr_14795[(1)] = (1));

return statearr_14795;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12963__auto____1 = (function (state_14720){
while(true){
var ret_value__12964__auto__ = (function (){try{while(true){
var result__12965__auto__ = switch__12962__auto__(state_14720);
if(cljs.core.keyword_identical_QMARK_(result__12965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12965__auto__;
}
break;
}
}catch (e14797){var ex__12966__auto__ = e14797;
var statearr_14800_17999 = state_14720;
(statearr_14800_17999[(2)] = ex__12966__auto__);


if(cljs.core.seq((state_14720[(4)]))){
var statearr_14804_18000 = state_14720;
(statearr_14804_18000[(1)] = cljs.core.first((state_14720[(4)])));

} else {
throw ex__12966__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18001 = state_14720;
state_14720 = G__18001;
continue;
} else {
return ret_value__12964__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12963__auto__ = function(state_14720){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12963__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12963__auto____1.call(this,state_14720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12963__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12963__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12963__auto__;
})()
})();
var state__13969__auto__ = (function (){var statearr_14810 = f__13968__auto__();
(statearr_14810[(6)] = c__13967__auto__);

return statearr_14810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13969__auto__);
}));

return c__13967__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__14819 = arguments.length;
switch (G__14819) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__14832 = arguments.length;
switch (G__14832) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__14850 = arguments.length;
switch (G__14850) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__13967__auto___18034 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13968__auto__ = (function (){var switch__12962__auto__ = (function (state_14890){
var state_val_14891 = (state_14890[(1)]);
if((state_val_14891 === (7))){
var inst_14885 = (state_14890[(2)]);
var state_14890__$1 = state_14890;
var statearr_14892_18035 = state_14890__$1;
(statearr_14892_18035[(2)] = inst_14885);

(statearr_14892_18035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14891 === (1))){
var state_14890__$1 = state_14890;
var statearr_14893_18036 = state_14890__$1;
(statearr_14893_18036[(2)] = null);

(statearr_14893_18036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14891 === (4))){
var inst_14860 = (state_14890[(7)]);
var inst_14860__$1 = (state_14890[(2)]);
var inst_14862 = (inst_14860__$1 == null);
var state_14890__$1 = (function (){var statearr_14897 = state_14890;
(statearr_14897[(7)] = inst_14860__$1);

return statearr_14897;
})();
if(cljs.core.truth_(inst_14862)){
var statearr_14900_18037 = state_14890__$1;
(statearr_14900_18037[(1)] = (5));

} else {
var statearr_14901_18038 = state_14890__$1;
(statearr_14901_18038[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14891 === (13))){
var state_14890__$1 = state_14890;
var statearr_14904_18039 = state_14890__$1;
(statearr_14904_18039[(2)] = null);

(statearr_14904_18039[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14891 === (6))){
var inst_14860 = (state_14890[(7)]);
var inst_14868 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_14860) : p.call(null,inst_14860));
var state_14890__$1 = state_14890;
if(cljs.core.truth_(inst_14868)){
var statearr_14905_18040 = state_14890__$1;
(statearr_14905_18040[(1)] = (9));

} else {
var statearr_14906_18044 = state_14890__$1;
(statearr_14906_18044[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14891 === (3))){
var inst_14888 = (state_14890[(2)]);
var state_14890__$1 = state_14890;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14890__$1,inst_14888);
} else {
if((state_val_14891 === (12))){
var state_14890__$1 = state_14890;
var statearr_14909_18047 = state_14890__$1;
(statearr_14909_18047[(2)] = null);

(statearr_14909_18047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14891 === (2))){
var state_14890__$1 = state_14890;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14890__$1,(4),ch);
} else {
if((state_val_14891 === (11))){
var inst_14860 = (state_14890[(7)]);
var inst_14876 = (state_14890[(2)]);
var state_14890__$1 = state_14890;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14890__$1,(8),inst_14876,inst_14860);
} else {
if((state_val_14891 === (9))){
var state_14890__$1 = state_14890;
var statearr_14913_18054 = state_14890__$1;
(statearr_14913_18054[(2)] = tc);

(statearr_14913_18054[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14891 === (5))){
var inst_14865 = cljs.core.async.close_BANG_(tc);
var inst_14866 = cljs.core.async.close_BANG_(fc);
var state_14890__$1 = (function (){var statearr_14915 = state_14890;
(statearr_14915[(8)] = inst_14865);

return statearr_14915;
})();
var statearr_14916_18055 = state_14890__$1;
(statearr_14916_18055[(2)] = inst_14866);

(statearr_14916_18055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14891 === (14))){
var inst_14883 = (state_14890[(2)]);
var state_14890__$1 = state_14890;
var statearr_14919_18061 = state_14890__$1;
(statearr_14919_18061[(2)] = inst_14883);

(statearr_14919_18061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14891 === (10))){
var state_14890__$1 = state_14890;
var statearr_14922_18062 = state_14890__$1;
(statearr_14922_18062[(2)] = fc);

(statearr_14922_18062[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14891 === (8))){
var inst_14878 = (state_14890[(2)]);
var state_14890__$1 = state_14890;
if(cljs.core.truth_(inst_14878)){
var statearr_14927_18063 = state_14890__$1;
(statearr_14927_18063[(1)] = (12));

} else {
var statearr_14928_18064 = state_14890__$1;
(statearr_14928_18064[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12963__auto__ = null;
var cljs$core$async$state_machine__12963__auto____0 = (function (){
var statearr_14932 = [null,null,null,null,null,null,null,null,null];
(statearr_14932[(0)] = cljs$core$async$state_machine__12963__auto__);

(statearr_14932[(1)] = (1));

return statearr_14932;
});
var cljs$core$async$state_machine__12963__auto____1 = (function (state_14890){
while(true){
var ret_value__12964__auto__ = (function (){try{while(true){
var result__12965__auto__ = switch__12962__auto__(state_14890);
if(cljs.core.keyword_identical_QMARK_(result__12965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12965__auto__;
}
break;
}
}catch (e14933){var ex__12966__auto__ = e14933;
var statearr_14934_18074 = state_14890;
(statearr_14934_18074[(2)] = ex__12966__auto__);


if(cljs.core.seq((state_14890[(4)]))){
var statearr_14935_18076 = state_14890;
(statearr_14935_18076[(1)] = cljs.core.first((state_14890[(4)])));

} else {
throw ex__12966__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18078 = state_14890;
state_14890 = G__18078;
continue;
} else {
return ret_value__12964__auto__;
}
break;
}
});
cljs$core$async$state_machine__12963__auto__ = function(state_14890){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12963__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12963__auto____1.call(this,state_14890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12963__auto____0;
cljs$core$async$state_machine__12963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12963__auto____1;
return cljs$core$async$state_machine__12963__auto__;
})()
})();
var state__13969__auto__ = (function (){var statearr_14936 = f__13968__auto__();
(statearr_14936[(6)] = c__13967__auto___18034);

return statearr_14936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13969__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__13967__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13968__auto__ = (function (){var switch__12962__auto__ = (function (state_14958){
var state_val_14959 = (state_14958[(1)]);
if((state_val_14959 === (7))){
var inst_14954 = (state_14958[(2)]);
var state_14958__$1 = state_14958;
var statearr_14962_18080 = state_14958__$1;
(statearr_14962_18080[(2)] = inst_14954);

(statearr_14962_18080[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14959 === (1))){
var inst_14937 = init;
var inst_14938 = inst_14937;
var state_14958__$1 = (function (){var statearr_14963 = state_14958;
(statearr_14963[(7)] = inst_14938);

return statearr_14963;
})();
var statearr_14964_18081 = state_14958__$1;
(statearr_14964_18081[(2)] = null);

(statearr_14964_18081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14959 === (4))){
var inst_14941 = (state_14958[(8)]);
var inst_14941__$1 = (state_14958[(2)]);
var inst_14942 = (inst_14941__$1 == null);
var state_14958__$1 = (function (){var statearr_14965 = state_14958;
(statearr_14965[(8)] = inst_14941__$1);

return statearr_14965;
})();
if(cljs.core.truth_(inst_14942)){
var statearr_14966_18082 = state_14958__$1;
(statearr_14966_18082[(1)] = (5));

} else {
var statearr_14968_18083 = state_14958__$1;
(statearr_14968_18083[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14959 === (6))){
var inst_14945 = (state_14958[(9)]);
var inst_14938 = (state_14958[(7)]);
var inst_14941 = (state_14958[(8)]);
var inst_14945__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_14938,inst_14941) : f.call(null,inst_14938,inst_14941));
var inst_14946 = cljs.core.reduced_QMARK_(inst_14945__$1);
var state_14958__$1 = (function (){var statearr_14970 = state_14958;
(statearr_14970[(9)] = inst_14945__$1);

return statearr_14970;
})();
if(inst_14946){
var statearr_14976_18091 = state_14958__$1;
(statearr_14976_18091[(1)] = (8));

} else {
var statearr_14977_18092 = state_14958__$1;
(statearr_14977_18092[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14959 === (3))){
var inst_14956 = (state_14958[(2)]);
var state_14958__$1 = state_14958;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14958__$1,inst_14956);
} else {
if((state_val_14959 === (2))){
var state_14958__$1 = state_14958;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14958__$1,(4),ch);
} else {
if((state_val_14959 === (9))){
var inst_14945 = (state_14958[(9)]);
var inst_14938 = inst_14945;
var state_14958__$1 = (function (){var statearr_14979 = state_14958;
(statearr_14979[(7)] = inst_14938);

return statearr_14979;
})();
var statearr_14980_18097 = state_14958__$1;
(statearr_14980_18097[(2)] = null);

(statearr_14980_18097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14959 === (5))){
var inst_14938 = (state_14958[(7)]);
var state_14958__$1 = state_14958;
var statearr_14983_18098 = state_14958__$1;
(statearr_14983_18098[(2)] = inst_14938);

(statearr_14983_18098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14959 === (10))){
var inst_14952 = (state_14958[(2)]);
var state_14958__$1 = state_14958;
var statearr_14990_18099 = state_14958__$1;
(statearr_14990_18099[(2)] = inst_14952);

(statearr_14990_18099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14959 === (8))){
var inst_14945 = (state_14958[(9)]);
var inst_14948 = cljs.core.deref(inst_14945);
var state_14958__$1 = state_14958;
var statearr_14991_18102 = state_14958__$1;
(statearr_14991_18102[(2)] = inst_14948);

(statearr_14991_18102[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__12963__auto__ = null;
var cljs$core$async$reduce_$_state_machine__12963__auto____0 = (function (){
var statearr_14993 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14993[(0)] = cljs$core$async$reduce_$_state_machine__12963__auto__);

(statearr_14993[(1)] = (1));

return statearr_14993;
});
var cljs$core$async$reduce_$_state_machine__12963__auto____1 = (function (state_14958){
while(true){
var ret_value__12964__auto__ = (function (){try{while(true){
var result__12965__auto__ = switch__12962__auto__(state_14958);
if(cljs.core.keyword_identical_QMARK_(result__12965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12965__auto__;
}
break;
}
}catch (e14994){var ex__12966__auto__ = e14994;
var statearr_14995_18112 = state_14958;
(statearr_14995_18112[(2)] = ex__12966__auto__);


if(cljs.core.seq((state_14958[(4)]))){
var statearr_14998_18113 = state_14958;
(statearr_14998_18113[(1)] = cljs.core.first((state_14958[(4)])));

} else {
throw ex__12966__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18114 = state_14958;
state_14958 = G__18114;
continue;
} else {
return ret_value__12964__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__12963__auto__ = function(state_14958){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__12963__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__12963__auto____1.call(this,state_14958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__12963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__12963__auto____0;
cljs$core$async$reduce_$_state_machine__12963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__12963__auto____1;
return cljs$core$async$reduce_$_state_machine__12963__auto__;
})()
})();
var state__13969__auto__ = (function (){var statearr_15005 = f__13968__auto__();
(statearr_15005[(6)] = c__13967__auto__);

return statearr_15005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13969__auto__);
}));

return c__13967__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__13967__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13968__auto__ = (function (){var switch__12962__auto__ = (function (state_15020){
var state_val_15021 = (state_15020[(1)]);
if((state_val_15021 === (1))){
var inst_15015 = cljs.core.async.reduce(f__$1,init,ch);
var state_15020__$1 = state_15020;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15020__$1,(2),inst_15015);
} else {
if((state_val_15021 === (2))){
var inst_15017 = (state_15020[(2)]);
var inst_15018 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15017) : f__$1.call(null,inst_15017));
var state_15020__$1 = state_15020;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15020__$1,inst_15018);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__12963__auto__ = null;
var cljs$core$async$transduce_$_state_machine__12963__auto____0 = (function (){
var statearr_15032 = [null,null,null,null,null,null,null];
(statearr_15032[(0)] = cljs$core$async$transduce_$_state_machine__12963__auto__);

(statearr_15032[(1)] = (1));

return statearr_15032;
});
var cljs$core$async$transduce_$_state_machine__12963__auto____1 = (function (state_15020){
while(true){
var ret_value__12964__auto__ = (function (){try{while(true){
var result__12965__auto__ = switch__12962__auto__(state_15020);
if(cljs.core.keyword_identical_QMARK_(result__12965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12965__auto__;
}
break;
}
}catch (e15033){var ex__12966__auto__ = e15033;
var statearr_15035_18124 = state_15020;
(statearr_15035_18124[(2)] = ex__12966__auto__);


if(cljs.core.seq((state_15020[(4)]))){
var statearr_15038_18126 = state_15020;
(statearr_15038_18126[(1)] = cljs.core.first((state_15020[(4)])));

} else {
throw ex__12966__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18133 = state_15020;
state_15020 = G__18133;
continue;
} else {
return ret_value__12964__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__12963__auto__ = function(state_15020){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__12963__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__12963__auto____1.call(this,state_15020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__12963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__12963__auto____0;
cljs$core$async$transduce_$_state_machine__12963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__12963__auto____1;
return cljs$core$async$transduce_$_state_machine__12963__auto__;
})()
})();
var state__13969__auto__ = (function (){var statearr_15042 = f__13968__auto__();
(statearr_15042[(6)] = c__13967__auto__);

return statearr_15042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13969__auto__);
}));

return c__13967__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__15049 = arguments.length;
switch (G__15049) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__13967__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13968__auto__ = (function (){var switch__12962__auto__ = (function (state_15087){
var state_val_15088 = (state_15087[(1)]);
if((state_val_15088 === (7))){
var inst_15067 = (state_15087[(2)]);
var state_15087__$1 = state_15087;
var statearr_15091_18146 = state_15087__$1;
(statearr_15091_18146[(2)] = inst_15067);

(statearr_15091_18146[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15088 === (1))){
var inst_15058 = cljs.core.seq(coll);
var inst_15059 = inst_15058;
var state_15087__$1 = (function (){var statearr_15098 = state_15087;
(statearr_15098[(7)] = inst_15059);

return statearr_15098;
})();
var statearr_15099_18147 = state_15087__$1;
(statearr_15099_18147[(2)] = null);

(statearr_15099_18147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15088 === (4))){
var inst_15059 = (state_15087[(7)]);
var inst_15065 = cljs.core.first(inst_15059);
var state_15087__$1 = state_15087;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15087__$1,(7),ch,inst_15065);
} else {
if((state_val_15088 === (13))){
var inst_15081 = (state_15087[(2)]);
var state_15087__$1 = state_15087;
var statearr_15104_18152 = state_15087__$1;
(statearr_15104_18152[(2)] = inst_15081);

(statearr_15104_18152[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15088 === (6))){
var inst_15070 = (state_15087[(2)]);
var state_15087__$1 = state_15087;
if(cljs.core.truth_(inst_15070)){
var statearr_15110_18163 = state_15087__$1;
(statearr_15110_18163[(1)] = (8));

} else {
var statearr_15111_18164 = state_15087__$1;
(statearr_15111_18164[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15088 === (3))){
var inst_15085 = (state_15087[(2)]);
var state_15087__$1 = state_15087;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15087__$1,inst_15085);
} else {
if((state_val_15088 === (12))){
var state_15087__$1 = state_15087;
var statearr_15113_18165 = state_15087__$1;
(statearr_15113_18165[(2)] = null);

(statearr_15113_18165[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15088 === (2))){
var inst_15059 = (state_15087[(7)]);
var state_15087__$1 = state_15087;
if(cljs.core.truth_(inst_15059)){
var statearr_15117_18171 = state_15087__$1;
(statearr_15117_18171[(1)] = (4));

} else {
var statearr_15122_18174 = state_15087__$1;
(statearr_15122_18174[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15088 === (11))){
var inst_15078 = cljs.core.async.close_BANG_(ch);
var state_15087__$1 = state_15087;
var statearr_15125_18180 = state_15087__$1;
(statearr_15125_18180[(2)] = inst_15078);

(statearr_15125_18180[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15088 === (9))){
var state_15087__$1 = state_15087;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15128_18187 = state_15087__$1;
(statearr_15128_18187[(1)] = (11));

} else {
var statearr_15129_18188 = state_15087__$1;
(statearr_15129_18188[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15088 === (5))){
var inst_15059 = (state_15087[(7)]);
var state_15087__$1 = state_15087;
var statearr_15135_18189 = state_15087__$1;
(statearr_15135_18189[(2)] = inst_15059);

(statearr_15135_18189[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15088 === (10))){
var inst_15083 = (state_15087[(2)]);
var state_15087__$1 = state_15087;
var statearr_15138_18194 = state_15087__$1;
(statearr_15138_18194[(2)] = inst_15083);

(statearr_15138_18194[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15088 === (8))){
var inst_15059 = (state_15087[(7)]);
var inst_15072 = cljs.core.next(inst_15059);
var inst_15059__$1 = inst_15072;
var state_15087__$1 = (function (){var statearr_15139 = state_15087;
(statearr_15139[(7)] = inst_15059__$1);

return statearr_15139;
})();
var statearr_15142_18195 = state_15087__$1;
(statearr_15142_18195[(2)] = null);

(statearr_15142_18195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12963__auto__ = null;
var cljs$core$async$state_machine__12963__auto____0 = (function (){
var statearr_15147 = [null,null,null,null,null,null,null,null];
(statearr_15147[(0)] = cljs$core$async$state_machine__12963__auto__);

(statearr_15147[(1)] = (1));

return statearr_15147;
});
var cljs$core$async$state_machine__12963__auto____1 = (function (state_15087){
while(true){
var ret_value__12964__auto__ = (function (){try{while(true){
var result__12965__auto__ = switch__12962__auto__(state_15087);
if(cljs.core.keyword_identical_QMARK_(result__12965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12965__auto__;
}
break;
}
}catch (e15149){var ex__12966__auto__ = e15149;
var statearr_15150_18202 = state_15087;
(statearr_15150_18202[(2)] = ex__12966__auto__);


if(cljs.core.seq((state_15087[(4)]))){
var statearr_15151_18207 = state_15087;
(statearr_15151_18207[(1)] = cljs.core.first((state_15087[(4)])));

} else {
throw ex__12966__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18209 = state_15087;
state_15087 = G__18209;
continue;
} else {
return ret_value__12964__auto__;
}
break;
}
});
cljs$core$async$state_machine__12963__auto__ = function(state_15087){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12963__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12963__auto____1.call(this,state_15087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12963__auto____0;
cljs$core$async$state_machine__12963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12963__auto____1;
return cljs$core$async$state_machine__12963__auto__;
})()
})();
var state__13969__auto__ = (function (){var statearr_15154 = f__13968__auto__();
(statearr_15154[(6)] = c__13967__auto__);

return statearr_15154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13969__auto__);
}));

return c__13967__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__15169 = arguments.length;
switch (G__15169) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_18225 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_18225(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_18228 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_18228(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_18230 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_18230(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_18238 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_18238(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15258 = (function (ch,cs,meta15259){
this.ch = ch;
this.cs = cs;
this.meta15259 = meta15259;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15258.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15260,meta15259__$1){
var self__ = this;
var _15260__$1 = this;
return (new cljs.core.async.t_cljs$core$async15258(self__.ch,self__.cs,meta15259__$1));
}));

(cljs.core.async.t_cljs$core$async15258.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15260){
var self__ = this;
var _15260__$1 = this;
return self__.meta15259;
}));

(cljs.core.async.t_cljs$core$async15258.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15258.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15258.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15258.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15258.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15258.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15258.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15259","meta15259",-332713187,null)], null);
}));

(cljs.core.async.t_cljs$core$async15258.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15258.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15258");

(cljs.core.async.t_cljs$core$async15258.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15258");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15258.
 */
cljs.core.async.__GT_t_cljs$core$async15258 = (function cljs$core$async$__GT_t_cljs$core$async15258(ch,cs,meta15259){
return (new cljs.core.async.t_cljs$core$async15258(ch,cs,meta15259));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async15258(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__13967__auto___18255 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13968__auto__ = (function (){var switch__12962__auto__ = (function (state_15436){
var state_val_15437 = (state_15436[(1)]);
if((state_val_15437 === (7))){
var inst_15431 = (state_15436[(2)]);
var state_15436__$1 = state_15436;
var statearr_15438_18256 = state_15436__$1;
(statearr_15438_18256[(2)] = inst_15431);

(statearr_15438_18256[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (20))){
var inst_15323 = (state_15436[(7)]);
var inst_15335 = cljs.core.first(inst_15323);
var inst_15336 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15335,(0),null);
var inst_15337 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15335,(1),null);
var state_15436__$1 = (function (){var statearr_15441 = state_15436;
(statearr_15441[(8)] = inst_15336);

return statearr_15441;
})();
if(cljs.core.truth_(inst_15337)){
var statearr_15442_18265 = state_15436__$1;
(statearr_15442_18265[(1)] = (22));

} else {
var statearr_15443_18266 = state_15436__$1;
(statearr_15443_18266[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (27))){
var inst_15291 = (state_15436[(9)]);
var inst_15365 = (state_15436[(10)]);
var inst_15367 = (state_15436[(11)]);
var inst_15377 = (state_15436[(12)]);
var inst_15377__$1 = cljs.core._nth(inst_15365,inst_15367);
var inst_15379 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15377__$1,inst_15291,done);
var state_15436__$1 = (function (){var statearr_15448 = state_15436;
(statearr_15448[(12)] = inst_15377__$1);

return statearr_15448;
})();
if(cljs.core.truth_(inst_15379)){
var statearr_15449_18267 = state_15436__$1;
(statearr_15449_18267[(1)] = (30));

} else {
var statearr_15450_18268 = state_15436__$1;
(statearr_15450_18268[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (1))){
var state_15436__$1 = state_15436;
var statearr_15451_18273 = state_15436__$1;
(statearr_15451_18273[(2)] = null);

(statearr_15451_18273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (24))){
var inst_15323 = (state_15436[(7)]);
var inst_15342 = (state_15436[(2)]);
var inst_15343 = cljs.core.next(inst_15323);
var inst_15300 = inst_15343;
var inst_15301 = null;
var inst_15302 = (0);
var inst_15303 = (0);
var state_15436__$1 = (function (){var statearr_15453 = state_15436;
(statearr_15453[(13)] = inst_15302);

(statearr_15453[(14)] = inst_15342);

(statearr_15453[(15)] = inst_15300);

(statearr_15453[(16)] = inst_15303);

(statearr_15453[(17)] = inst_15301);

return statearr_15453;
})();
var statearr_15455_18277 = state_15436__$1;
(statearr_15455_18277[(2)] = null);

(statearr_15455_18277[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (39))){
var state_15436__$1 = state_15436;
var statearr_15459_18278 = state_15436__$1;
(statearr_15459_18278[(2)] = null);

(statearr_15459_18278[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (4))){
var inst_15291 = (state_15436[(9)]);
var inst_15291__$1 = (state_15436[(2)]);
var inst_15292 = (inst_15291__$1 == null);
var state_15436__$1 = (function (){var statearr_15460 = state_15436;
(statearr_15460[(9)] = inst_15291__$1);

return statearr_15460;
})();
if(cljs.core.truth_(inst_15292)){
var statearr_15461_18280 = state_15436__$1;
(statearr_15461_18280[(1)] = (5));

} else {
var statearr_15462_18281 = state_15436__$1;
(statearr_15462_18281[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (15))){
var inst_15302 = (state_15436[(13)]);
var inst_15300 = (state_15436[(15)]);
var inst_15303 = (state_15436[(16)]);
var inst_15301 = (state_15436[(17)]);
var inst_15319 = (state_15436[(2)]);
var inst_15320 = (inst_15303 + (1));
var tmp15456 = inst_15302;
var tmp15457 = inst_15300;
var tmp15458 = inst_15301;
var inst_15300__$1 = tmp15457;
var inst_15301__$1 = tmp15458;
var inst_15302__$1 = tmp15456;
var inst_15303__$1 = inst_15320;
var state_15436__$1 = (function (){var statearr_15463 = state_15436;
(statearr_15463[(13)] = inst_15302__$1);

(statearr_15463[(18)] = inst_15319);

(statearr_15463[(15)] = inst_15300__$1);

(statearr_15463[(16)] = inst_15303__$1);

(statearr_15463[(17)] = inst_15301__$1);

return statearr_15463;
})();
var statearr_15464_18289 = state_15436__$1;
(statearr_15464_18289[(2)] = null);

(statearr_15464_18289[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (21))){
var inst_15346 = (state_15436[(2)]);
var state_15436__$1 = state_15436;
var statearr_15468_18290 = state_15436__$1;
(statearr_15468_18290[(2)] = inst_15346);

(statearr_15468_18290[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (31))){
var inst_15377 = (state_15436[(12)]);
var inst_15382 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15377);
var state_15436__$1 = state_15436;
var statearr_15472_18291 = state_15436__$1;
(statearr_15472_18291[(2)] = inst_15382);

(statearr_15472_18291[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (32))){
var inst_15366 = (state_15436[(19)]);
var inst_15365 = (state_15436[(10)]);
var inst_15364 = (state_15436[(20)]);
var inst_15367 = (state_15436[(11)]);
var inst_15384 = (state_15436[(2)]);
var inst_15385 = (inst_15367 + (1));
var tmp15465 = inst_15366;
var tmp15466 = inst_15365;
var tmp15467 = inst_15364;
var inst_15364__$1 = tmp15467;
var inst_15365__$1 = tmp15466;
var inst_15366__$1 = tmp15465;
var inst_15367__$1 = inst_15385;
var state_15436__$1 = (function (){var statearr_15474 = state_15436;
(statearr_15474[(19)] = inst_15366__$1);

(statearr_15474[(10)] = inst_15365__$1);

(statearr_15474[(20)] = inst_15364__$1);

(statearr_15474[(21)] = inst_15384);

(statearr_15474[(11)] = inst_15367__$1);

return statearr_15474;
})();
var statearr_15476_18296 = state_15436__$1;
(statearr_15476_18296[(2)] = null);

(statearr_15476_18296[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (40))){
var inst_15398 = (state_15436[(22)]);
var inst_15402 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15398);
var state_15436__$1 = state_15436;
var statearr_15480_18299 = state_15436__$1;
(statearr_15480_18299[(2)] = inst_15402);

(statearr_15480_18299[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (33))){
var inst_15388 = (state_15436[(23)]);
var inst_15390 = cljs.core.chunked_seq_QMARK_(inst_15388);
var state_15436__$1 = state_15436;
if(inst_15390){
var statearr_15484_18300 = state_15436__$1;
(statearr_15484_18300[(1)] = (36));

} else {
var statearr_15486_18301 = state_15436__$1;
(statearr_15486_18301[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (13))){
var inst_15313 = (state_15436[(24)]);
var inst_15316 = cljs.core.async.close_BANG_(inst_15313);
var state_15436__$1 = state_15436;
var statearr_15488_18307 = state_15436__$1;
(statearr_15488_18307[(2)] = inst_15316);

(statearr_15488_18307[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (22))){
var inst_15336 = (state_15436[(8)]);
var inst_15339 = cljs.core.async.close_BANG_(inst_15336);
var state_15436__$1 = state_15436;
var statearr_15492_18308 = state_15436__$1;
(statearr_15492_18308[(2)] = inst_15339);

(statearr_15492_18308[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (36))){
var inst_15388 = (state_15436[(23)]);
var inst_15392 = cljs.core.chunk_first(inst_15388);
var inst_15394 = cljs.core.chunk_rest(inst_15388);
var inst_15395 = cljs.core.count(inst_15392);
var inst_15364 = inst_15394;
var inst_15365 = inst_15392;
var inst_15366 = inst_15395;
var inst_15367 = (0);
var state_15436__$1 = (function (){var statearr_15495 = state_15436;
(statearr_15495[(19)] = inst_15366);

(statearr_15495[(10)] = inst_15365);

(statearr_15495[(20)] = inst_15364);

(statearr_15495[(11)] = inst_15367);

return statearr_15495;
})();
var statearr_15496_18310 = state_15436__$1;
(statearr_15496_18310[(2)] = null);

(statearr_15496_18310[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (41))){
var inst_15388 = (state_15436[(23)]);
var inst_15404 = (state_15436[(2)]);
var inst_15406 = cljs.core.next(inst_15388);
var inst_15364 = inst_15406;
var inst_15365 = null;
var inst_15366 = (0);
var inst_15367 = (0);
var state_15436__$1 = (function (){var statearr_15500 = state_15436;
(statearr_15500[(25)] = inst_15404);

(statearr_15500[(19)] = inst_15366);

(statearr_15500[(10)] = inst_15365);

(statearr_15500[(20)] = inst_15364);

(statearr_15500[(11)] = inst_15367);

return statearr_15500;
})();
var statearr_15506_18320 = state_15436__$1;
(statearr_15506_18320[(2)] = null);

(statearr_15506_18320[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (43))){
var state_15436__$1 = state_15436;
var statearr_15510_18321 = state_15436__$1;
(statearr_15510_18321[(2)] = null);

(statearr_15510_18321[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (29))){
var inst_15419 = (state_15436[(2)]);
var state_15436__$1 = state_15436;
var statearr_15513_18322 = state_15436__$1;
(statearr_15513_18322[(2)] = inst_15419);

(statearr_15513_18322[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (44))){
var inst_15428 = (state_15436[(2)]);
var state_15436__$1 = (function (){var statearr_15515 = state_15436;
(statearr_15515[(26)] = inst_15428);

return statearr_15515;
})();
var statearr_15517_18327 = state_15436__$1;
(statearr_15517_18327[(2)] = null);

(statearr_15517_18327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (6))){
var inst_15356 = (state_15436[(27)]);
var inst_15355 = cljs.core.deref(cs);
var inst_15356__$1 = cljs.core.keys(inst_15355);
var inst_15357 = cljs.core.count(inst_15356__$1);
var inst_15358 = cljs.core.reset_BANG_(dctr,inst_15357);
var inst_15363 = cljs.core.seq(inst_15356__$1);
var inst_15364 = inst_15363;
var inst_15365 = null;
var inst_15366 = (0);
var inst_15367 = (0);
var state_15436__$1 = (function (){var statearr_15520 = state_15436;
(statearr_15520[(28)] = inst_15358);

(statearr_15520[(19)] = inst_15366);

(statearr_15520[(10)] = inst_15365);

(statearr_15520[(20)] = inst_15364);

(statearr_15520[(11)] = inst_15367);

(statearr_15520[(27)] = inst_15356__$1);

return statearr_15520;
})();
var statearr_15524_18329 = state_15436__$1;
(statearr_15524_18329[(2)] = null);

(statearr_15524_18329[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (28))){
var inst_15388 = (state_15436[(23)]);
var inst_15364 = (state_15436[(20)]);
var inst_15388__$1 = cljs.core.seq(inst_15364);
var state_15436__$1 = (function (){var statearr_15525 = state_15436;
(statearr_15525[(23)] = inst_15388__$1);

return statearr_15525;
})();
if(inst_15388__$1){
var statearr_15526_18332 = state_15436__$1;
(statearr_15526_18332[(1)] = (33));

} else {
var statearr_15527_18333 = state_15436__$1;
(statearr_15527_18333[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (25))){
var inst_15366 = (state_15436[(19)]);
var inst_15367 = (state_15436[(11)]);
var inst_15372 = (inst_15367 < inst_15366);
var inst_15373 = inst_15372;
var state_15436__$1 = state_15436;
if(cljs.core.truth_(inst_15373)){
var statearr_15530_18338 = state_15436__$1;
(statearr_15530_18338[(1)] = (27));

} else {
var statearr_15531_18339 = state_15436__$1;
(statearr_15531_18339[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (34))){
var state_15436__$1 = state_15436;
var statearr_15538_18342 = state_15436__$1;
(statearr_15538_18342[(2)] = null);

(statearr_15538_18342[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (17))){
var state_15436__$1 = state_15436;
var statearr_15541_18344 = state_15436__$1;
(statearr_15541_18344[(2)] = null);

(statearr_15541_18344[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (3))){
var inst_15433 = (state_15436[(2)]);
var state_15436__$1 = state_15436;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15436__$1,inst_15433);
} else {
if((state_val_15437 === (12))){
var inst_15351 = (state_15436[(2)]);
var state_15436__$1 = state_15436;
var statearr_15542_18345 = state_15436__$1;
(statearr_15542_18345[(2)] = inst_15351);

(statearr_15542_18345[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (2))){
var state_15436__$1 = state_15436;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15436__$1,(4),ch);
} else {
if((state_val_15437 === (23))){
var state_15436__$1 = state_15436;
var statearr_15551_18350 = state_15436__$1;
(statearr_15551_18350[(2)] = null);

(statearr_15551_18350[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (35))){
var inst_15413 = (state_15436[(2)]);
var state_15436__$1 = state_15436;
var statearr_15555_18351 = state_15436__$1;
(statearr_15555_18351[(2)] = inst_15413);

(statearr_15555_18351[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (19))){
var inst_15323 = (state_15436[(7)]);
var inst_15327 = cljs.core.chunk_first(inst_15323);
var inst_15328 = cljs.core.chunk_rest(inst_15323);
var inst_15329 = cljs.core.count(inst_15327);
var inst_15300 = inst_15328;
var inst_15301 = inst_15327;
var inst_15302 = inst_15329;
var inst_15303 = (0);
var state_15436__$1 = (function (){var statearr_15558 = state_15436;
(statearr_15558[(13)] = inst_15302);

(statearr_15558[(15)] = inst_15300);

(statearr_15558[(16)] = inst_15303);

(statearr_15558[(17)] = inst_15301);

return statearr_15558;
})();
var statearr_15559_18354 = state_15436__$1;
(statearr_15559_18354[(2)] = null);

(statearr_15559_18354[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (11))){
var inst_15323 = (state_15436[(7)]);
var inst_15300 = (state_15436[(15)]);
var inst_15323__$1 = cljs.core.seq(inst_15300);
var state_15436__$1 = (function (){var statearr_15562 = state_15436;
(statearr_15562[(7)] = inst_15323__$1);

return statearr_15562;
})();
if(inst_15323__$1){
var statearr_15566_18355 = state_15436__$1;
(statearr_15566_18355[(1)] = (16));

} else {
var statearr_15567_18356 = state_15436__$1;
(statearr_15567_18356[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (9))){
var inst_15353 = (state_15436[(2)]);
var state_15436__$1 = state_15436;
var statearr_15570_18357 = state_15436__$1;
(statearr_15570_18357[(2)] = inst_15353);

(statearr_15570_18357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (5))){
var inst_15298 = cljs.core.deref(cs);
var inst_15299 = cljs.core.seq(inst_15298);
var inst_15300 = inst_15299;
var inst_15301 = null;
var inst_15302 = (0);
var inst_15303 = (0);
var state_15436__$1 = (function (){var statearr_15575 = state_15436;
(statearr_15575[(13)] = inst_15302);

(statearr_15575[(15)] = inst_15300);

(statearr_15575[(16)] = inst_15303);

(statearr_15575[(17)] = inst_15301);

return statearr_15575;
})();
var statearr_15576_18358 = state_15436__$1;
(statearr_15576_18358[(2)] = null);

(statearr_15576_18358[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (14))){
var state_15436__$1 = state_15436;
var statearr_15578_18359 = state_15436__$1;
(statearr_15578_18359[(2)] = null);

(statearr_15578_18359[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (45))){
var inst_15425 = (state_15436[(2)]);
var state_15436__$1 = state_15436;
var statearr_15581_18361 = state_15436__$1;
(statearr_15581_18361[(2)] = inst_15425);

(statearr_15581_18361[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (26))){
var inst_15356 = (state_15436[(27)]);
var inst_15421 = (state_15436[(2)]);
var inst_15422 = cljs.core.seq(inst_15356);
var state_15436__$1 = (function (){var statearr_15584 = state_15436;
(statearr_15584[(29)] = inst_15421);

return statearr_15584;
})();
if(inst_15422){
var statearr_15586_18363 = state_15436__$1;
(statearr_15586_18363[(1)] = (42));

} else {
var statearr_15587_18364 = state_15436__$1;
(statearr_15587_18364[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (16))){
var inst_15323 = (state_15436[(7)]);
var inst_15325 = cljs.core.chunked_seq_QMARK_(inst_15323);
var state_15436__$1 = state_15436;
if(inst_15325){
var statearr_15592_18365 = state_15436__$1;
(statearr_15592_18365[(1)] = (19));

} else {
var statearr_15593_18366 = state_15436__$1;
(statearr_15593_18366[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (38))){
var inst_15410 = (state_15436[(2)]);
var state_15436__$1 = state_15436;
var statearr_15594_18368 = state_15436__$1;
(statearr_15594_18368[(2)] = inst_15410);

(statearr_15594_18368[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (30))){
var state_15436__$1 = state_15436;
var statearr_15596_18370 = state_15436__$1;
(statearr_15596_18370[(2)] = null);

(statearr_15596_18370[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (10))){
var inst_15303 = (state_15436[(16)]);
var inst_15301 = (state_15436[(17)]);
var inst_15312 = cljs.core._nth(inst_15301,inst_15303);
var inst_15313 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15312,(0),null);
var inst_15314 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15312,(1),null);
var state_15436__$1 = (function (){var statearr_15599 = state_15436;
(statearr_15599[(24)] = inst_15313);

return statearr_15599;
})();
if(cljs.core.truth_(inst_15314)){
var statearr_15605_18372 = state_15436__$1;
(statearr_15605_18372[(1)] = (13));

} else {
var statearr_15606_18373 = state_15436__$1;
(statearr_15606_18373[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (18))){
var inst_15349 = (state_15436[(2)]);
var state_15436__$1 = state_15436;
var statearr_15608_18378 = state_15436__$1;
(statearr_15608_18378[(2)] = inst_15349);

(statearr_15608_18378[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (42))){
var state_15436__$1 = state_15436;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15436__$1,(45),dchan);
} else {
if((state_val_15437 === (37))){
var inst_15398 = (state_15436[(22)]);
var inst_15291 = (state_15436[(9)]);
var inst_15388 = (state_15436[(23)]);
var inst_15398__$1 = cljs.core.first(inst_15388);
var inst_15399 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15398__$1,inst_15291,done);
var state_15436__$1 = (function (){var statearr_15610 = state_15436;
(statearr_15610[(22)] = inst_15398__$1);

return statearr_15610;
})();
if(cljs.core.truth_(inst_15399)){
var statearr_15611_18386 = state_15436__$1;
(statearr_15611_18386[(1)] = (39));

} else {
var statearr_15614_18387 = state_15436__$1;
(statearr_15614_18387[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (8))){
var inst_15302 = (state_15436[(13)]);
var inst_15303 = (state_15436[(16)]);
var inst_15306 = (inst_15303 < inst_15302);
var inst_15307 = inst_15306;
var state_15436__$1 = state_15436;
if(cljs.core.truth_(inst_15307)){
var statearr_15615_18395 = state_15436__$1;
(statearr_15615_18395[(1)] = (10));

} else {
var statearr_15616_18396 = state_15436__$1;
(statearr_15616_18396[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__12963__auto__ = null;
var cljs$core$async$mult_$_state_machine__12963__auto____0 = (function (){
var statearr_15637 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15637[(0)] = cljs$core$async$mult_$_state_machine__12963__auto__);

(statearr_15637[(1)] = (1));

return statearr_15637;
});
var cljs$core$async$mult_$_state_machine__12963__auto____1 = (function (state_15436){
while(true){
var ret_value__12964__auto__ = (function (){try{while(true){
var result__12965__auto__ = switch__12962__auto__(state_15436);
if(cljs.core.keyword_identical_QMARK_(result__12965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12965__auto__;
}
break;
}
}catch (e15639){var ex__12966__auto__ = e15639;
var statearr_15646_18397 = state_15436;
(statearr_15646_18397[(2)] = ex__12966__auto__);


if(cljs.core.seq((state_15436[(4)]))){
var statearr_15649_18400 = state_15436;
(statearr_15649_18400[(1)] = cljs.core.first((state_15436[(4)])));

} else {
throw ex__12966__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18401 = state_15436;
state_15436 = G__18401;
continue;
} else {
return ret_value__12964__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__12963__auto__ = function(state_15436){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__12963__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__12963__auto____1.call(this,state_15436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__12963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__12963__auto____0;
cljs$core$async$mult_$_state_machine__12963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__12963__auto____1;
return cljs$core$async$mult_$_state_machine__12963__auto__;
})()
})();
var state__13969__auto__ = (function (){var statearr_15655 = f__13968__auto__();
(statearr_15655[(6)] = c__13967__auto___18255);

return statearr_15655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13969__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__15666 = arguments.length;
switch (G__15666) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_18420 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_18420(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_18428 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_18428(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_18435 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_18435(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18436 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_18436(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18440 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18440(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18441 = arguments.length;
var i__5770__auto___18442 = (0);
while(true){
if((i__5770__auto___18442 < len__5769__auto___18441)){
args__5775__auto__.push((arguments[i__5770__auto___18442]));

var G__18443 = (i__5770__auto___18442 + (1));
i__5770__auto___18442 = G__18443;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15743){
var map__15745 = p__15743;
var map__15745__$1 = cljs.core.__destructure_map(map__15745);
var opts = map__15745__$1;
var statearr_15749_18448 = state;
(statearr_15749_18448[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_15751_18449 = state;
(statearr_15751_18449[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_15752_18450 = state;
(statearr_15752_18450[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15738){
var G__15739 = cljs.core.first(seq15738);
var seq15738__$1 = cljs.core.next(seq15738);
var G__15740 = cljs.core.first(seq15738__$1);
var seq15738__$2 = cljs.core.next(seq15738__$1);
var G__15741 = cljs.core.first(seq15738__$2);
var seq15738__$3 = cljs.core.next(seq15738__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15739,G__15740,G__15741,seq15738__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15771 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15772){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta15772 = meta15772;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15771.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15773,meta15772__$1){
var self__ = this;
var _15773__$1 = this;
return (new cljs.core.async.t_cljs$core$async15771(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15772__$1));
}));

(cljs.core.async.t_cljs$core$async15771.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15773){
var self__ = this;
var _15773__$1 = this;
return self__.meta15772;
}));

(cljs.core.async.t_cljs$core$async15771.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15771.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async15771.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15771.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15771.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15771.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15771.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15771.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15771.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta15772","meta15772",1868731954,null)], null);
}));

(cljs.core.async.t_cljs$core$async15771.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15771.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15771");

(cljs.core.async.t_cljs$core$async15771.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15771");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15771.
 */
cljs.core.async.__GT_t_cljs$core$async15771 = (function cljs$core$async$__GT_t_cljs$core$async15771(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15772){
return (new cljs.core.async.t_cljs$core$async15771(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15772));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async15771(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__13967__auto___18500 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13968__auto__ = (function (){var switch__12962__auto__ = (function (state_15863){
var state_val_15864 = (state_15863[(1)]);
if((state_val_15864 === (7))){
var inst_15823 = (state_15863[(2)]);
var state_15863__$1 = state_15863;
if(cljs.core.truth_(inst_15823)){
var statearr_15866_18501 = state_15863__$1;
(statearr_15866_18501[(1)] = (8));

} else {
var statearr_15868_18502 = state_15863__$1;
(statearr_15868_18502[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15864 === (20))){
var inst_15816 = (state_15863[(7)]);
var state_15863__$1 = state_15863;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15863__$1,(23),out,inst_15816);
} else {
if((state_val_15864 === (1))){
var inst_15792 = calc_state();
var inst_15793 = cljs.core.__destructure_map(inst_15792);
var inst_15794 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15793,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15798 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15793,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15799 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15793,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_15800 = inst_15792;
var state_15863__$1 = (function (){var statearr_15869 = state_15863;
(statearr_15869[(8)] = inst_15799);

(statearr_15869[(9)] = inst_15800);

(statearr_15869[(10)] = inst_15798);

(statearr_15869[(11)] = inst_15794);

return statearr_15869;
})();
var statearr_15871_18518 = state_15863__$1;
(statearr_15871_18518[(2)] = null);

(statearr_15871_18518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15864 === (24))){
var inst_15806 = (state_15863[(12)]);
var inst_15800 = inst_15806;
var state_15863__$1 = (function (){var statearr_15875 = state_15863;
(statearr_15875[(9)] = inst_15800);

return statearr_15875;
})();
var statearr_15876_18526 = state_15863__$1;
(statearr_15876_18526[(2)] = null);

(statearr_15876_18526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15864 === (4))){
var inst_15816 = (state_15863[(7)]);
var inst_15818 = (state_15863[(13)]);
var inst_15815 = (state_15863[(2)]);
var inst_15816__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15815,(0),null);
var inst_15817 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15815,(1),null);
var inst_15818__$1 = (inst_15816__$1 == null);
var state_15863__$1 = (function (){var statearr_15877 = state_15863;
(statearr_15877[(7)] = inst_15816__$1);

(statearr_15877[(13)] = inst_15818__$1);

(statearr_15877[(14)] = inst_15817);

return statearr_15877;
})();
if(cljs.core.truth_(inst_15818__$1)){
var statearr_15878_18538 = state_15863__$1;
(statearr_15878_18538[(1)] = (5));

} else {
var statearr_15879_18543 = state_15863__$1;
(statearr_15879_18543[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15864 === (15))){
var inst_15837 = (state_15863[(15)]);
var inst_15807 = (state_15863[(16)]);
var inst_15837__$1 = cljs.core.empty_QMARK_(inst_15807);
var state_15863__$1 = (function (){var statearr_15884 = state_15863;
(statearr_15884[(15)] = inst_15837__$1);

return statearr_15884;
})();
if(inst_15837__$1){
var statearr_15885_18552 = state_15863__$1;
(statearr_15885_18552[(1)] = (17));

} else {
var statearr_15886_18554 = state_15863__$1;
(statearr_15886_18554[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15864 === (21))){
var inst_15806 = (state_15863[(12)]);
var inst_15800 = inst_15806;
var state_15863__$1 = (function (){var statearr_15887 = state_15863;
(statearr_15887[(9)] = inst_15800);

return statearr_15887;
})();
var statearr_15888_18557 = state_15863__$1;
(statearr_15888_18557[(2)] = null);

(statearr_15888_18557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15864 === (13))){
var inst_15830 = (state_15863[(2)]);
var inst_15831 = calc_state();
var inst_15800 = inst_15831;
var state_15863__$1 = (function (){var statearr_15889 = state_15863;
(statearr_15889[(9)] = inst_15800);

(statearr_15889[(17)] = inst_15830);

return statearr_15889;
})();
var statearr_15890_18569 = state_15863__$1;
(statearr_15890_18569[(2)] = null);

(statearr_15890_18569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15864 === (22))){
var inst_15857 = (state_15863[(2)]);
var state_15863__$1 = state_15863;
var statearr_15891_18570 = state_15863__$1;
(statearr_15891_18570[(2)] = inst_15857);

(statearr_15891_18570[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15864 === (6))){
var inst_15817 = (state_15863[(14)]);
var inst_15821 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15817,change);
var state_15863__$1 = state_15863;
var statearr_15892_18572 = state_15863__$1;
(statearr_15892_18572[(2)] = inst_15821);

(statearr_15892_18572[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15864 === (25))){
var state_15863__$1 = state_15863;
var statearr_15893_18573 = state_15863__$1;
(statearr_15893_18573[(2)] = null);

(statearr_15893_18573[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15864 === (17))){
var inst_15817 = (state_15863[(14)]);
var inst_15808 = (state_15863[(18)]);
var inst_15839 = (inst_15808.cljs$core$IFn$_invoke$arity$1 ? inst_15808.cljs$core$IFn$_invoke$arity$1(inst_15817) : inst_15808.call(null,inst_15817));
var inst_15840 = cljs.core.not(inst_15839);
var state_15863__$1 = state_15863;
var statearr_15894_18574 = state_15863__$1;
(statearr_15894_18574[(2)] = inst_15840);

(statearr_15894_18574[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15864 === (3))){
var inst_15861 = (state_15863[(2)]);
var state_15863__$1 = state_15863;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15863__$1,inst_15861);
} else {
if((state_val_15864 === (12))){
var state_15863__$1 = state_15863;
var statearr_15895_18575 = state_15863__$1;
(statearr_15895_18575[(2)] = null);

(statearr_15895_18575[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15864 === (2))){
var inst_15806 = (state_15863[(12)]);
var inst_15800 = (state_15863[(9)]);
var inst_15806__$1 = cljs.core.__destructure_map(inst_15800);
var inst_15807 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15806__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15808 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15806__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15810 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15806__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_15863__$1 = (function (){var statearr_15898 = state_15863;
(statearr_15898[(12)] = inst_15806__$1);

(statearr_15898[(16)] = inst_15807);

(statearr_15898[(18)] = inst_15808);

return statearr_15898;
})();
return cljs.core.async.ioc_alts_BANG_(state_15863__$1,(4),inst_15810);
} else {
if((state_val_15864 === (23))){
var inst_15848 = (state_15863[(2)]);
var state_15863__$1 = state_15863;
if(cljs.core.truth_(inst_15848)){
var statearr_15899_18580 = state_15863__$1;
(statearr_15899_18580[(1)] = (24));

} else {
var statearr_15900_18582 = state_15863__$1;
(statearr_15900_18582[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15864 === (19))){
var inst_15843 = (state_15863[(2)]);
var state_15863__$1 = state_15863;
var statearr_15901_18588 = state_15863__$1;
(statearr_15901_18588[(2)] = inst_15843);

(statearr_15901_18588[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15864 === (11))){
var inst_15817 = (state_15863[(14)]);
var inst_15827 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_15817);
var state_15863__$1 = state_15863;
var statearr_15913_18589 = state_15863__$1;
(statearr_15913_18589[(2)] = inst_15827);

(statearr_15913_18589[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15864 === (9))){
var inst_15834 = (state_15863[(19)]);
var inst_15807 = (state_15863[(16)]);
var inst_15817 = (state_15863[(14)]);
var inst_15834__$1 = (inst_15807.cljs$core$IFn$_invoke$arity$1 ? inst_15807.cljs$core$IFn$_invoke$arity$1(inst_15817) : inst_15807.call(null,inst_15817));
var state_15863__$1 = (function (){var statearr_15918 = state_15863;
(statearr_15918[(19)] = inst_15834__$1);

return statearr_15918;
})();
if(cljs.core.truth_(inst_15834__$1)){
var statearr_15922_18590 = state_15863__$1;
(statearr_15922_18590[(1)] = (14));

} else {
var statearr_15923_18591 = state_15863__$1;
(statearr_15923_18591[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15864 === (5))){
var inst_15818 = (state_15863[(13)]);
var state_15863__$1 = state_15863;
var statearr_15924_18592 = state_15863__$1;
(statearr_15924_18592[(2)] = inst_15818);

(statearr_15924_18592[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15864 === (14))){
var inst_15834 = (state_15863[(19)]);
var state_15863__$1 = state_15863;
var statearr_15925_18593 = state_15863__$1;
(statearr_15925_18593[(2)] = inst_15834);

(statearr_15925_18593[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15864 === (26))){
var inst_15853 = (state_15863[(2)]);
var state_15863__$1 = state_15863;
var statearr_15926_18594 = state_15863__$1;
(statearr_15926_18594[(2)] = inst_15853);

(statearr_15926_18594[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15864 === (16))){
var inst_15845 = (state_15863[(2)]);
var state_15863__$1 = state_15863;
if(cljs.core.truth_(inst_15845)){
var statearr_15929_18595 = state_15863__$1;
(statearr_15929_18595[(1)] = (20));

} else {
var statearr_15933_18596 = state_15863__$1;
(statearr_15933_18596[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15864 === (10))){
var inst_15859 = (state_15863[(2)]);
var state_15863__$1 = state_15863;
var statearr_15934_18597 = state_15863__$1;
(statearr_15934_18597[(2)] = inst_15859);

(statearr_15934_18597[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15864 === (18))){
var inst_15837 = (state_15863[(15)]);
var state_15863__$1 = state_15863;
var statearr_15935_18598 = state_15863__$1;
(statearr_15935_18598[(2)] = inst_15837);

(statearr_15935_18598[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15864 === (8))){
var inst_15816 = (state_15863[(7)]);
var inst_15825 = (inst_15816 == null);
var state_15863__$1 = state_15863;
if(cljs.core.truth_(inst_15825)){
var statearr_15936_18599 = state_15863__$1;
(statearr_15936_18599[(1)] = (11));

} else {
var statearr_15937_18600 = state_15863__$1;
(statearr_15937_18600[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__12963__auto__ = null;
var cljs$core$async$mix_$_state_machine__12963__auto____0 = (function (){
var statearr_15938 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15938[(0)] = cljs$core$async$mix_$_state_machine__12963__auto__);

(statearr_15938[(1)] = (1));

return statearr_15938;
});
var cljs$core$async$mix_$_state_machine__12963__auto____1 = (function (state_15863){
while(true){
var ret_value__12964__auto__ = (function (){try{while(true){
var result__12965__auto__ = switch__12962__auto__(state_15863);
if(cljs.core.keyword_identical_QMARK_(result__12965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12965__auto__;
}
break;
}
}catch (e15940){var ex__12966__auto__ = e15940;
var statearr_15941_18601 = state_15863;
(statearr_15941_18601[(2)] = ex__12966__auto__);


if(cljs.core.seq((state_15863[(4)]))){
var statearr_15942_18603 = state_15863;
(statearr_15942_18603[(1)] = cljs.core.first((state_15863[(4)])));

} else {
throw ex__12966__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18604 = state_15863;
state_15863 = G__18604;
continue;
} else {
return ret_value__12964__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__12963__auto__ = function(state_15863){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__12963__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__12963__auto____1.call(this,state_15863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__12963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__12963__auto____0;
cljs$core$async$mix_$_state_machine__12963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__12963__auto____1;
return cljs$core$async$mix_$_state_machine__12963__auto__;
})()
})();
var state__13969__auto__ = (function (){var statearr_15944 = f__13968__auto__();
(statearr_15944[(6)] = c__13967__auto___18500);

return statearr_15944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13969__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_18611 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_18611(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_18629 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_18629(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_18631 = (function() {
var G__18632 = null;
var G__18632__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__18632__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__18632 = function(p,v){
switch(arguments.length){
case 1:
return G__18632__1.call(this,p);
case 2:
return G__18632__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18632.cljs$core$IFn$_invoke$arity$1 = G__18632__1;
G__18632.cljs$core$IFn$_invoke$arity$2 = G__18632__2;
return G__18632;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__15971 = arguments.length;
switch (G__15971) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18631(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18631(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15998 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta15999){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta15999 = meta15999;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15998.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16000,meta15999__$1){
var self__ = this;
var _16000__$1 = this;
return (new cljs.core.async.t_cljs$core$async15998(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta15999__$1));
}));

(cljs.core.async.t_cljs$core$async15998.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16000){
var self__ = this;
var _16000__$1 = this;
return self__.meta15999;
}));

(cljs.core.async.t_cljs$core$async15998.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15998.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15998.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15998.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async15998.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async15998.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async15998.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async15998.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta15999","meta15999",1349413371,null)], null);
}));

(cljs.core.async.t_cljs$core$async15998.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15998.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15998");

(cljs.core.async.t_cljs$core$async15998.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15998");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15998.
 */
cljs.core.async.__GT_t_cljs$core$async15998 = (function cljs$core$async$__GT_t_cljs$core$async15998(ch,topic_fn,buf_fn,mults,ensure_mult,meta15999){
return (new cljs.core.async.t_cljs$core$async15998(ch,topic_fn,buf_fn,mults,ensure_mult,meta15999));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__15987 = arguments.length;
switch (G__15987) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__15981_SHARP_){
if(cljs.core.truth_((p1__15981_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__15981_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__15981_SHARP_.call(null,topic)))){
return p1__15981_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__15981_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async15998(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__13967__auto___18649 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13968__auto__ = (function (){var switch__12962__auto__ = (function (state_16124){
var state_val_16125 = (state_16124[(1)]);
if((state_val_16125 === (7))){
var inst_16118 = (state_16124[(2)]);
var state_16124__$1 = state_16124;
var statearr_16128_18651 = state_16124__$1;
(statearr_16128_18651[(2)] = inst_16118);

(statearr_16128_18651[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16125 === (20))){
var state_16124__$1 = state_16124;
var statearr_16132_18652 = state_16124__$1;
(statearr_16132_18652[(2)] = null);

(statearr_16132_18652[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16125 === (1))){
var state_16124__$1 = state_16124;
var statearr_16133_18653 = state_16124__$1;
(statearr_16133_18653[(2)] = null);

(statearr_16133_18653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16125 === (24))){
var inst_16100 = (state_16124[(7)]);
var inst_16110 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16100);
var state_16124__$1 = state_16124;
var statearr_16135_18658 = state_16124__$1;
(statearr_16135_18658[(2)] = inst_16110);

(statearr_16135_18658[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16125 === (4))){
var inst_16030 = (state_16124[(8)]);
var inst_16030__$1 = (state_16124[(2)]);
var inst_16031 = (inst_16030__$1 == null);
var state_16124__$1 = (function (){var statearr_16140 = state_16124;
(statearr_16140[(8)] = inst_16030__$1);

return statearr_16140;
})();
if(cljs.core.truth_(inst_16031)){
var statearr_16141_18659 = state_16124__$1;
(statearr_16141_18659[(1)] = (5));

} else {
var statearr_16142_18660 = state_16124__$1;
(statearr_16142_18660[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16125 === (15))){
var inst_16094 = (state_16124[(2)]);
var state_16124__$1 = state_16124;
var statearr_16143_18662 = state_16124__$1;
(statearr_16143_18662[(2)] = inst_16094);

(statearr_16143_18662[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16125 === (21))){
var inst_16115 = (state_16124[(2)]);
var state_16124__$1 = (function (){var statearr_16144 = state_16124;
(statearr_16144[(9)] = inst_16115);

return statearr_16144;
})();
var statearr_16145_18668 = state_16124__$1;
(statearr_16145_18668[(2)] = null);

(statearr_16145_18668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16125 === (13))){
var inst_16068 = (state_16124[(10)]);
var inst_16070 = cljs.core.chunked_seq_QMARK_(inst_16068);
var state_16124__$1 = state_16124;
if(inst_16070){
var statearr_16146_18669 = state_16124__$1;
(statearr_16146_18669[(1)] = (16));

} else {
var statearr_16147_18670 = state_16124__$1;
(statearr_16147_18670[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16125 === (22))){
var inst_16106 = (state_16124[(2)]);
var state_16124__$1 = state_16124;
if(cljs.core.truth_(inst_16106)){
var statearr_16148_18672 = state_16124__$1;
(statearr_16148_18672[(1)] = (23));

} else {
var statearr_16149_18673 = state_16124__$1;
(statearr_16149_18673[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16125 === (6))){
var inst_16102 = (state_16124[(11)]);
var inst_16100 = (state_16124[(7)]);
var inst_16030 = (state_16124[(8)]);
var inst_16100__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16030) : topic_fn.call(null,inst_16030));
var inst_16101 = cljs.core.deref(mults);
var inst_16102__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16101,inst_16100__$1);
var state_16124__$1 = (function (){var statearr_16150 = state_16124;
(statearr_16150[(11)] = inst_16102__$1);

(statearr_16150[(7)] = inst_16100__$1);

return statearr_16150;
})();
if(cljs.core.truth_(inst_16102__$1)){
var statearr_16151_18678 = state_16124__$1;
(statearr_16151_18678[(1)] = (19));

} else {
var statearr_16152_18679 = state_16124__$1;
(statearr_16152_18679[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16125 === (25))){
var inst_16112 = (state_16124[(2)]);
var state_16124__$1 = state_16124;
var statearr_16156_18680 = state_16124__$1;
(statearr_16156_18680[(2)] = inst_16112);

(statearr_16156_18680[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16125 === (17))){
var inst_16068 = (state_16124[(10)]);
var inst_16079 = cljs.core.first(inst_16068);
var inst_16086 = cljs.core.async.muxch_STAR_(inst_16079);
var inst_16087 = cljs.core.async.close_BANG_(inst_16086);
var inst_16088 = cljs.core.next(inst_16068);
var inst_16040 = inst_16088;
var inst_16041 = null;
var inst_16042 = (0);
var inst_16043 = (0);
var state_16124__$1 = (function (){var statearr_16157 = state_16124;
(statearr_16157[(12)] = inst_16087);

(statearr_16157[(13)] = inst_16043);

(statearr_16157[(14)] = inst_16042);

(statearr_16157[(15)] = inst_16041);

(statearr_16157[(16)] = inst_16040);

return statearr_16157;
})();
var statearr_16158_18682 = state_16124__$1;
(statearr_16158_18682[(2)] = null);

(statearr_16158_18682[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16125 === (3))){
var inst_16120 = (state_16124[(2)]);
var state_16124__$1 = state_16124;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16124__$1,inst_16120);
} else {
if((state_val_16125 === (12))){
var inst_16096 = (state_16124[(2)]);
var state_16124__$1 = state_16124;
var statearr_16161_18683 = state_16124__$1;
(statearr_16161_18683[(2)] = inst_16096);

(statearr_16161_18683[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16125 === (2))){
var state_16124__$1 = state_16124;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16124__$1,(4),ch);
} else {
if((state_val_16125 === (23))){
var state_16124__$1 = state_16124;
var statearr_16173_18684 = state_16124__$1;
(statearr_16173_18684[(2)] = null);

(statearr_16173_18684[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16125 === (19))){
var inst_16102 = (state_16124[(11)]);
var inst_16030 = (state_16124[(8)]);
var inst_16104 = cljs.core.async.muxch_STAR_(inst_16102);
var state_16124__$1 = state_16124;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16124__$1,(22),inst_16104,inst_16030);
} else {
if((state_val_16125 === (11))){
var inst_16068 = (state_16124[(10)]);
var inst_16040 = (state_16124[(16)]);
var inst_16068__$1 = cljs.core.seq(inst_16040);
var state_16124__$1 = (function (){var statearr_16180 = state_16124;
(statearr_16180[(10)] = inst_16068__$1);

return statearr_16180;
})();
if(inst_16068__$1){
var statearr_16183_18688 = state_16124__$1;
(statearr_16183_18688[(1)] = (13));

} else {
var statearr_16184_18689 = state_16124__$1;
(statearr_16184_18689[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16125 === (9))){
var inst_16098 = (state_16124[(2)]);
var state_16124__$1 = state_16124;
var statearr_16188_18690 = state_16124__$1;
(statearr_16188_18690[(2)] = inst_16098);

(statearr_16188_18690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16125 === (5))){
var inst_16037 = cljs.core.deref(mults);
var inst_16038 = cljs.core.vals(inst_16037);
var inst_16039 = cljs.core.seq(inst_16038);
var inst_16040 = inst_16039;
var inst_16041 = null;
var inst_16042 = (0);
var inst_16043 = (0);
var state_16124__$1 = (function (){var statearr_16197 = state_16124;
(statearr_16197[(13)] = inst_16043);

(statearr_16197[(14)] = inst_16042);

(statearr_16197[(15)] = inst_16041);

(statearr_16197[(16)] = inst_16040);

return statearr_16197;
})();
var statearr_16201_18695 = state_16124__$1;
(statearr_16201_18695[(2)] = null);

(statearr_16201_18695[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16125 === (14))){
var state_16124__$1 = state_16124;
var statearr_16205_18696 = state_16124__$1;
(statearr_16205_18696[(2)] = null);

(statearr_16205_18696[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16125 === (16))){
var inst_16068 = (state_16124[(10)]);
var inst_16072 = cljs.core.chunk_first(inst_16068);
var inst_16073 = cljs.core.chunk_rest(inst_16068);
var inst_16074 = cljs.core.count(inst_16072);
var inst_16040 = inst_16073;
var inst_16041 = inst_16072;
var inst_16042 = inst_16074;
var inst_16043 = (0);
var state_16124__$1 = (function (){var statearr_16206 = state_16124;
(statearr_16206[(13)] = inst_16043);

(statearr_16206[(14)] = inst_16042);

(statearr_16206[(15)] = inst_16041);

(statearr_16206[(16)] = inst_16040);

return statearr_16206;
})();
var statearr_16217_18697 = state_16124__$1;
(statearr_16217_18697[(2)] = null);

(statearr_16217_18697[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16125 === (10))){
var inst_16043 = (state_16124[(13)]);
var inst_16042 = (state_16124[(14)]);
var inst_16041 = (state_16124[(15)]);
var inst_16040 = (state_16124[(16)]);
var inst_16048 = cljs.core._nth(inst_16041,inst_16043);
var inst_16049 = cljs.core.async.muxch_STAR_(inst_16048);
var inst_16050 = cljs.core.async.close_BANG_(inst_16049);
var inst_16059 = (inst_16043 + (1));
var tmp16202 = inst_16042;
var tmp16203 = inst_16041;
var tmp16204 = inst_16040;
var inst_16040__$1 = tmp16204;
var inst_16041__$1 = tmp16203;
var inst_16042__$1 = tmp16202;
var inst_16043__$1 = inst_16059;
var state_16124__$1 = (function (){var statearr_16225 = state_16124;
(statearr_16225[(17)] = inst_16050);

(statearr_16225[(13)] = inst_16043__$1);

(statearr_16225[(14)] = inst_16042__$1);

(statearr_16225[(15)] = inst_16041__$1);

(statearr_16225[(16)] = inst_16040__$1);

return statearr_16225;
})();
var statearr_16226_18702 = state_16124__$1;
(statearr_16226_18702[(2)] = null);

(statearr_16226_18702[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16125 === (18))){
var inst_16091 = (state_16124[(2)]);
var state_16124__$1 = state_16124;
var statearr_16227_18703 = state_16124__$1;
(statearr_16227_18703[(2)] = inst_16091);

(statearr_16227_18703[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16125 === (8))){
var inst_16043 = (state_16124[(13)]);
var inst_16042 = (state_16124[(14)]);
var inst_16045 = (inst_16043 < inst_16042);
var inst_16046 = inst_16045;
var state_16124__$1 = state_16124;
if(cljs.core.truth_(inst_16046)){
var statearr_16228_18704 = state_16124__$1;
(statearr_16228_18704[(1)] = (10));

} else {
var statearr_16229_18705 = state_16124__$1;
(statearr_16229_18705[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12963__auto__ = null;
var cljs$core$async$state_machine__12963__auto____0 = (function (){
var statearr_16230 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16230[(0)] = cljs$core$async$state_machine__12963__auto__);

(statearr_16230[(1)] = (1));

return statearr_16230;
});
var cljs$core$async$state_machine__12963__auto____1 = (function (state_16124){
while(true){
var ret_value__12964__auto__ = (function (){try{while(true){
var result__12965__auto__ = switch__12962__auto__(state_16124);
if(cljs.core.keyword_identical_QMARK_(result__12965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12965__auto__;
}
break;
}
}catch (e16231){var ex__12966__auto__ = e16231;
var statearr_16232_18706 = state_16124;
(statearr_16232_18706[(2)] = ex__12966__auto__);


if(cljs.core.seq((state_16124[(4)]))){
var statearr_16233_18708 = state_16124;
(statearr_16233_18708[(1)] = cljs.core.first((state_16124[(4)])));

} else {
throw ex__12966__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18709 = state_16124;
state_16124 = G__18709;
continue;
} else {
return ret_value__12964__auto__;
}
break;
}
});
cljs$core$async$state_machine__12963__auto__ = function(state_16124){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12963__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12963__auto____1.call(this,state_16124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12963__auto____0;
cljs$core$async$state_machine__12963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12963__auto____1;
return cljs$core$async$state_machine__12963__auto__;
})()
})();
var state__13969__auto__ = (function (){var statearr_16241 = f__13968__auto__();
(statearr_16241[(6)] = c__13967__auto___18649);

return statearr_16241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13969__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__16253 = arguments.length;
switch (G__16253) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__16264 = arguments.length;
switch (G__16264) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__16277 = arguments.length;
switch (G__16277) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__13967__auto___18728 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13968__auto__ = (function (){var switch__12962__auto__ = (function (state_16358){
var state_val_16359 = (state_16358[(1)]);
if((state_val_16359 === (7))){
var state_16358__$1 = state_16358;
var statearr_16367_18729 = state_16358__$1;
(statearr_16367_18729[(2)] = null);

(statearr_16367_18729[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16359 === (1))){
var state_16358__$1 = state_16358;
var statearr_16370_18730 = state_16358__$1;
(statearr_16370_18730[(2)] = null);

(statearr_16370_18730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16359 === (4))){
var inst_16297 = (state_16358[(7)]);
var inst_16298 = (state_16358[(8)]);
var inst_16300 = (inst_16298 < inst_16297);
var state_16358__$1 = state_16358;
if(cljs.core.truth_(inst_16300)){
var statearr_16371_18731 = state_16358__$1;
(statearr_16371_18731[(1)] = (6));

} else {
var statearr_16372_18732 = state_16358__$1;
(statearr_16372_18732[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16359 === (15))){
var inst_16337 = (state_16358[(9)]);
var inst_16346 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16337);
var state_16358__$1 = state_16358;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16358__$1,(17),out,inst_16346);
} else {
if((state_val_16359 === (13))){
var inst_16337 = (state_16358[(9)]);
var inst_16337__$1 = (state_16358[(2)]);
var inst_16338 = cljs.core.some(cljs.core.nil_QMARK_,inst_16337__$1);
var state_16358__$1 = (function (){var statearr_16386 = state_16358;
(statearr_16386[(9)] = inst_16337__$1);

return statearr_16386;
})();
if(cljs.core.truth_(inst_16338)){
var statearr_16387_18736 = state_16358__$1;
(statearr_16387_18736[(1)] = (14));

} else {
var statearr_16388_18737 = state_16358__$1;
(statearr_16388_18737[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16359 === (6))){
var state_16358__$1 = state_16358;
var statearr_16389_18738 = state_16358__$1;
(statearr_16389_18738[(2)] = null);

(statearr_16389_18738[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16359 === (17))){
var inst_16348 = (state_16358[(2)]);
var state_16358__$1 = (function (){var statearr_16393 = state_16358;
(statearr_16393[(10)] = inst_16348);

return statearr_16393;
})();
var statearr_16394_18740 = state_16358__$1;
(statearr_16394_18740[(2)] = null);

(statearr_16394_18740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16359 === (3))){
var inst_16353 = (state_16358[(2)]);
var state_16358__$1 = state_16358;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16358__$1,inst_16353);
} else {
if((state_val_16359 === (12))){
var _ = (function (){var statearr_16395 = state_16358;
(statearr_16395[(4)] = cljs.core.rest((state_16358[(4)])));

return statearr_16395;
})();
var state_16358__$1 = state_16358;
var ex16392 = (state_16358__$1[(2)]);
var statearr_16396_18742 = state_16358__$1;
(statearr_16396_18742[(5)] = ex16392);


if((ex16392 instanceof Object)){
var statearr_16397_18744 = state_16358__$1;
(statearr_16397_18744[(1)] = (11));

(statearr_16397_18744[(5)] = null);

} else {
throw ex16392;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16359 === (2))){
var inst_16296 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16297 = cnt;
var inst_16298 = (0);
var state_16358__$1 = (function (){var statearr_16403 = state_16358;
(statearr_16403[(7)] = inst_16297);

(statearr_16403[(8)] = inst_16298);

(statearr_16403[(11)] = inst_16296);

return statearr_16403;
})();
var statearr_16404_18748 = state_16358__$1;
(statearr_16404_18748[(2)] = null);

(statearr_16404_18748[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16359 === (11))){
var inst_16313 = (state_16358[(2)]);
var inst_16314 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16358__$1 = (function (){var statearr_16407 = state_16358;
(statearr_16407[(12)] = inst_16313);

return statearr_16407;
})();
var statearr_16410_18754 = state_16358__$1;
(statearr_16410_18754[(2)] = inst_16314);

(statearr_16410_18754[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16359 === (9))){
var inst_16298 = (state_16358[(8)]);
var _ = (function (){var statearr_16411 = state_16358;
(statearr_16411[(4)] = cljs.core.cons((12),(state_16358[(4)])));

return statearr_16411;
})();
var inst_16320 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16298) : chs__$1.call(null,inst_16298));
var inst_16321 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16298) : done.call(null,inst_16298));
var inst_16322 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16320,inst_16321);
var ___$1 = (function (){var statearr_16414 = state_16358;
(statearr_16414[(4)] = cljs.core.rest((state_16358[(4)])));

return statearr_16414;
})();
var state_16358__$1 = state_16358;
var statearr_16419_18756 = state_16358__$1;
(statearr_16419_18756[(2)] = inst_16322);

(statearr_16419_18756[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16359 === (5))){
var inst_16332 = (state_16358[(2)]);
var state_16358__$1 = (function (){var statearr_16426 = state_16358;
(statearr_16426[(13)] = inst_16332);

return statearr_16426;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16358__$1,(13),dchan);
} else {
if((state_val_16359 === (14))){
var inst_16340 = cljs.core.async.close_BANG_(out);
var state_16358__$1 = state_16358;
var statearr_16442_18758 = state_16358__$1;
(statearr_16442_18758[(2)] = inst_16340);

(statearr_16442_18758[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16359 === (16))){
var inst_16351 = (state_16358[(2)]);
var state_16358__$1 = state_16358;
var statearr_16446_18761 = state_16358__$1;
(statearr_16446_18761[(2)] = inst_16351);

(statearr_16446_18761[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16359 === (10))){
var inst_16298 = (state_16358[(8)]);
var inst_16325 = (state_16358[(2)]);
var inst_16326 = (inst_16298 + (1));
var inst_16298__$1 = inst_16326;
var state_16358__$1 = (function (){var statearr_16450 = state_16358;
(statearr_16450[(14)] = inst_16325);

(statearr_16450[(8)] = inst_16298__$1);

return statearr_16450;
})();
var statearr_16454_18768 = state_16358__$1;
(statearr_16454_18768[(2)] = null);

(statearr_16454_18768[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16359 === (8))){
var inst_16330 = (state_16358[(2)]);
var state_16358__$1 = state_16358;
var statearr_16455_18769 = state_16358__$1;
(statearr_16455_18769[(2)] = inst_16330);

(statearr_16455_18769[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12963__auto__ = null;
var cljs$core$async$state_machine__12963__auto____0 = (function (){
var statearr_16459 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16459[(0)] = cljs$core$async$state_machine__12963__auto__);

(statearr_16459[(1)] = (1));

return statearr_16459;
});
var cljs$core$async$state_machine__12963__auto____1 = (function (state_16358){
while(true){
var ret_value__12964__auto__ = (function (){try{while(true){
var result__12965__auto__ = switch__12962__auto__(state_16358);
if(cljs.core.keyword_identical_QMARK_(result__12965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12965__auto__;
}
break;
}
}catch (e16462){var ex__12966__auto__ = e16462;
var statearr_16464_18771 = state_16358;
(statearr_16464_18771[(2)] = ex__12966__auto__);


if(cljs.core.seq((state_16358[(4)]))){
var statearr_16465_18772 = state_16358;
(statearr_16465_18772[(1)] = cljs.core.first((state_16358[(4)])));

} else {
throw ex__12966__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18774 = state_16358;
state_16358 = G__18774;
continue;
} else {
return ret_value__12964__auto__;
}
break;
}
});
cljs$core$async$state_machine__12963__auto__ = function(state_16358){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12963__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12963__auto____1.call(this,state_16358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12963__auto____0;
cljs$core$async$state_machine__12963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12963__auto____1;
return cljs$core$async$state_machine__12963__auto__;
})()
})();
var state__13969__auto__ = (function (){var statearr_16468 = f__13968__auto__();
(statearr_16468[(6)] = c__13967__auto___18728);

return statearr_16468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13969__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__16471 = arguments.length;
switch (G__16471) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13967__auto___18777 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13968__auto__ = (function (){var switch__12962__auto__ = (function (state_16515){
var state_val_16516 = (state_16515[(1)]);
if((state_val_16516 === (7))){
var inst_16494 = (state_16515[(7)]);
var inst_16495 = (state_16515[(8)]);
var inst_16494__$1 = (state_16515[(2)]);
var inst_16495__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16494__$1,(0),null);
var inst_16496 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16494__$1,(1),null);
var inst_16497 = (inst_16495__$1 == null);
var state_16515__$1 = (function (){var statearr_16526 = state_16515;
(statearr_16526[(7)] = inst_16494__$1);

(statearr_16526[(9)] = inst_16496);

(statearr_16526[(8)] = inst_16495__$1);

return statearr_16526;
})();
if(cljs.core.truth_(inst_16497)){
var statearr_16527_18788 = state_16515__$1;
(statearr_16527_18788[(1)] = (8));

} else {
var statearr_16528_18789 = state_16515__$1;
(statearr_16528_18789[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16516 === (1))){
var inst_16476 = cljs.core.vec(chs);
var inst_16477 = inst_16476;
var state_16515__$1 = (function (){var statearr_16529 = state_16515;
(statearr_16529[(10)] = inst_16477);

return statearr_16529;
})();
var statearr_16530_18793 = state_16515__$1;
(statearr_16530_18793[(2)] = null);

(statearr_16530_18793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16516 === (4))){
var inst_16477 = (state_16515[(10)]);
var state_16515__$1 = state_16515;
return cljs.core.async.ioc_alts_BANG_(state_16515__$1,(7),inst_16477);
} else {
if((state_val_16516 === (6))){
var inst_16511 = (state_16515[(2)]);
var state_16515__$1 = state_16515;
var statearr_16540_18795 = state_16515__$1;
(statearr_16540_18795[(2)] = inst_16511);

(statearr_16540_18795[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16516 === (3))){
var inst_16513 = (state_16515[(2)]);
var state_16515__$1 = state_16515;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16515__$1,inst_16513);
} else {
if((state_val_16516 === (2))){
var inst_16477 = (state_16515[(10)]);
var inst_16483 = cljs.core.count(inst_16477);
var inst_16484 = (inst_16483 > (0));
var state_16515__$1 = state_16515;
if(cljs.core.truth_(inst_16484)){
var statearr_16545_18799 = state_16515__$1;
(statearr_16545_18799[(1)] = (4));

} else {
var statearr_16547_18800 = state_16515__$1;
(statearr_16547_18800[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16516 === (11))){
var inst_16477 = (state_16515[(10)]);
var inst_16504 = (state_16515[(2)]);
var tmp16541 = inst_16477;
var inst_16477__$1 = tmp16541;
var state_16515__$1 = (function (){var statearr_16548 = state_16515;
(statearr_16548[(11)] = inst_16504);

(statearr_16548[(10)] = inst_16477__$1);

return statearr_16548;
})();
var statearr_16558_18802 = state_16515__$1;
(statearr_16558_18802[(2)] = null);

(statearr_16558_18802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16516 === (9))){
var inst_16495 = (state_16515[(8)]);
var state_16515__$1 = state_16515;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16515__$1,(11),out,inst_16495);
} else {
if((state_val_16516 === (5))){
var inst_16509 = cljs.core.async.close_BANG_(out);
var state_16515__$1 = state_16515;
var statearr_16563_18803 = state_16515__$1;
(statearr_16563_18803[(2)] = inst_16509);

(statearr_16563_18803[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16516 === (10))){
var inst_16507 = (state_16515[(2)]);
var state_16515__$1 = state_16515;
var statearr_16565_18804 = state_16515__$1;
(statearr_16565_18804[(2)] = inst_16507);

(statearr_16565_18804[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16516 === (8))){
var inst_16494 = (state_16515[(7)]);
var inst_16477 = (state_16515[(10)]);
var inst_16496 = (state_16515[(9)]);
var inst_16495 = (state_16515[(8)]);
var inst_16499 = (function (){var cs = inst_16477;
var vec__16486 = inst_16494;
var v = inst_16495;
var c = inst_16496;
return (function (p1__16469_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16469_SHARP_);
});
})();
var inst_16500 = cljs.core.filterv(inst_16499,inst_16477);
var inst_16477__$1 = inst_16500;
var state_16515__$1 = (function (){var statearr_16567 = state_16515;
(statearr_16567[(10)] = inst_16477__$1);

return statearr_16567;
})();
var statearr_16568_18805 = state_16515__$1;
(statearr_16568_18805[(2)] = null);

(statearr_16568_18805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12963__auto__ = null;
var cljs$core$async$state_machine__12963__auto____0 = (function (){
var statearr_16573 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16573[(0)] = cljs$core$async$state_machine__12963__auto__);

(statearr_16573[(1)] = (1));

return statearr_16573;
});
var cljs$core$async$state_machine__12963__auto____1 = (function (state_16515){
while(true){
var ret_value__12964__auto__ = (function (){try{while(true){
var result__12965__auto__ = switch__12962__auto__(state_16515);
if(cljs.core.keyword_identical_QMARK_(result__12965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12965__auto__;
}
break;
}
}catch (e16574){var ex__12966__auto__ = e16574;
var statearr_16575_18806 = state_16515;
(statearr_16575_18806[(2)] = ex__12966__auto__);


if(cljs.core.seq((state_16515[(4)]))){
var statearr_16579_18807 = state_16515;
(statearr_16579_18807[(1)] = cljs.core.first((state_16515[(4)])));

} else {
throw ex__12966__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18809 = state_16515;
state_16515 = G__18809;
continue;
} else {
return ret_value__12964__auto__;
}
break;
}
});
cljs$core$async$state_machine__12963__auto__ = function(state_16515){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12963__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12963__auto____1.call(this,state_16515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12963__auto____0;
cljs$core$async$state_machine__12963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12963__auto____1;
return cljs$core$async$state_machine__12963__auto__;
})()
})();
var state__13969__auto__ = (function (){var statearr_16581 = f__13968__auto__();
(statearr_16581[(6)] = c__13967__auto___18777);

return statearr_16581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13969__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__16588 = arguments.length;
switch (G__16588) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13967__auto___18823 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13968__auto__ = (function (){var switch__12962__auto__ = (function (state_16641){
var state_val_16642 = (state_16641[(1)]);
if((state_val_16642 === (7))){
var inst_16607 = (state_16641[(7)]);
var inst_16607__$1 = (state_16641[(2)]);
var inst_16608 = (inst_16607__$1 == null);
var inst_16609 = cljs.core.not(inst_16608);
var state_16641__$1 = (function (){var statearr_16655 = state_16641;
(statearr_16655[(7)] = inst_16607__$1);

return statearr_16655;
})();
if(inst_16609){
var statearr_16656_18825 = state_16641__$1;
(statearr_16656_18825[(1)] = (8));

} else {
var statearr_16657_18826 = state_16641__$1;
(statearr_16657_18826[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16642 === (1))){
var inst_16600 = (0);
var state_16641__$1 = (function (){var statearr_16658 = state_16641;
(statearr_16658[(8)] = inst_16600);

return statearr_16658;
})();
var statearr_16659_18827 = state_16641__$1;
(statearr_16659_18827[(2)] = null);

(statearr_16659_18827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16642 === (4))){
var state_16641__$1 = state_16641;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16641__$1,(7),ch);
} else {
if((state_val_16642 === (6))){
var inst_16630 = (state_16641[(2)]);
var state_16641__$1 = state_16641;
var statearr_16661_18831 = state_16641__$1;
(statearr_16661_18831[(2)] = inst_16630);

(statearr_16661_18831[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16642 === (3))){
var inst_16632 = (state_16641[(2)]);
var inst_16636 = cljs.core.async.close_BANG_(out);
var state_16641__$1 = (function (){var statearr_16662 = state_16641;
(statearr_16662[(9)] = inst_16632);

return statearr_16662;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16641__$1,inst_16636);
} else {
if((state_val_16642 === (2))){
var inst_16600 = (state_16641[(8)]);
var inst_16604 = (inst_16600 < n);
var state_16641__$1 = state_16641;
if(cljs.core.truth_(inst_16604)){
var statearr_16663_18832 = state_16641__$1;
(statearr_16663_18832[(1)] = (4));

} else {
var statearr_16664_18833 = state_16641__$1;
(statearr_16664_18833[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16642 === (11))){
var inst_16600 = (state_16641[(8)]);
var inst_16621 = (state_16641[(2)]);
var inst_16623 = (inst_16600 + (1));
var inst_16600__$1 = inst_16623;
var state_16641__$1 = (function (){var statearr_16667 = state_16641;
(statearr_16667[(8)] = inst_16600__$1);

(statearr_16667[(10)] = inst_16621);

return statearr_16667;
})();
var statearr_16668_18836 = state_16641__$1;
(statearr_16668_18836[(2)] = null);

(statearr_16668_18836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16642 === (9))){
var state_16641__$1 = state_16641;
var statearr_16674_18840 = state_16641__$1;
(statearr_16674_18840[(2)] = null);

(statearr_16674_18840[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16642 === (5))){
var state_16641__$1 = state_16641;
var statearr_16675_18841 = state_16641__$1;
(statearr_16675_18841[(2)] = null);

(statearr_16675_18841[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16642 === (10))){
var inst_16627 = (state_16641[(2)]);
var state_16641__$1 = state_16641;
var statearr_16676_18842 = state_16641__$1;
(statearr_16676_18842[(2)] = inst_16627);

(statearr_16676_18842[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16642 === (8))){
var inst_16607 = (state_16641[(7)]);
var state_16641__$1 = state_16641;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16641__$1,(11),out,inst_16607);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12963__auto__ = null;
var cljs$core$async$state_machine__12963__auto____0 = (function (){
var statearr_16684 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16684[(0)] = cljs$core$async$state_machine__12963__auto__);

(statearr_16684[(1)] = (1));

return statearr_16684;
});
var cljs$core$async$state_machine__12963__auto____1 = (function (state_16641){
while(true){
var ret_value__12964__auto__ = (function (){try{while(true){
var result__12965__auto__ = switch__12962__auto__(state_16641);
if(cljs.core.keyword_identical_QMARK_(result__12965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12965__auto__;
}
break;
}
}catch (e16685){var ex__12966__auto__ = e16685;
var statearr_16686_18847 = state_16641;
(statearr_16686_18847[(2)] = ex__12966__auto__);


if(cljs.core.seq((state_16641[(4)]))){
var statearr_16689_18848 = state_16641;
(statearr_16689_18848[(1)] = cljs.core.first((state_16641[(4)])));

} else {
throw ex__12966__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18852 = state_16641;
state_16641 = G__18852;
continue;
} else {
return ret_value__12964__auto__;
}
break;
}
});
cljs$core$async$state_machine__12963__auto__ = function(state_16641){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12963__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12963__auto____1.call(this,state_16641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12963__auto____0;
cljs$core$async$state_machine__12963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12963__auto____1;
return cljs$core$async$state_machine__12963__auto__;
})()
})();
var state__13969__auto__ = (function (){var statearr_16692 = f__13968__auto__();
(statearr_16692[(6)] = c__13967__auto___18823);

return statearr_16692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13969__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16711 = (function (f,ch,meta16698,_,fn1,meta16712){
this.f = f;
this.ch = ch;
this.meta16698 = meta16698;
this._ = _;
this.fn1 = fn1;
this.meta16712 = meta16712;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16711.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16713,meta16712__$1){
var self__ = this;
var _16713__$1 = this;
return (new cljs.core.async.t_cljs$core$async16711(self__.f,self__.ch,self__.meta16698,self__._,self__.fn1,meta16712__$1));
}));

(cljs.core.async.t_cljs$core$async16711.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16713){
var self__ = this;
var _16713__$1 = this;
return self__.meta16712;
}));

(cljs.core.async.t_cljs$core$async16711.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16711.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async16711.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16711.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__16695_SHARP_){
var G__16720 = (((p1__16695_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16695_SHARP_) : self__.f.call(null,p1__16695_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__16720) : f1.call(null,G__16720));
});
}));

(cljs.core.async.t_cljs$core$async16711.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16698","meta16698",805224014,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async16697","cljs.core.async/t_cljs$core$async16697",-726025761,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta16712","meta16712",-996135017,null)], null);
}));

(cljs.core.async.t_cljs$core$async16711.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16711.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16711");

(cljs.core.async.t_cljs$core$async16711.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16711");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16711.
 */
cljs.core.async.__GT_t_cljs$core$async16711 = (function cljs$core$async$__GT_t_cljs$core$async16711(f,ch,meta16698,_,fn1,meta16712){
return (new cljs.core.async.t_cljs$core$async16711(f,ch,meta16698,_,fn1,meta16712));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16697 = (function (f,ch,meta16698){
this.f = f;
this.ch = ch;
this.meta16698 = meta16698;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16699,meta16698__$1){
var self__ = this;
var _16699__$1 = this;
return (new cljs.core.async.t_cljs$core$async16697(self__.f,self__.ch,meta16698__$1));
}));

(cljs.core.async.t_cljs$core$async16697.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16699){
var self__ = this;
var _16699__$1 = this;
return self__.meta16698;
}));

(cljs.core.async.t_cljs$core$async16697.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16697.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16697.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16697.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16697.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async16711(self__.f,self__.ch,self__.meta16698,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__16727 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__16727) : self__.f.call(null,G__16727));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async16697.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16697.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async16697.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16698","meta16698",805224014,null)], null);
}));

(cljs.core.async.t_cljs$core$async16697.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16697.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16697");

(cljs.core.async.t_cljs$core$async16697.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16697");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16697.
 */
cljs.core.async.__GT_t_cljs$core$async16697 = (function cljs$core$async$__GT_t_cljs$core$async16697(f,ch,meta16698){
return (new cljs.core.async.t_cljs$core$async16697(f,ch,meta16698));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16697(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16738 = (function (f,ch,meta16739){
this.f = f;
this.ch = ch;
this.meta16739 = meta16739;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16738.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16740,meta16739__$1){
var self__ = this;
var _16740__$1 = this;
return (new cljs.core.async.t_cljs$core$async16738(self__.f,self__.ch,meta16739__$1));
}));

(cljs.core.async.t_cljs$core$async16738.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16740){
var self__ = this;
var _16740__$1 = this;
return self__.meta16739;
}));

(cljs.core.async.t_cljs$core$async16738.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16738.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16738.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16738.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16738.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16738.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async16738.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16739","meta16739",-583437524,null)], null);
}));

(cljs.core.async.t_cljs$core$async16738.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16738.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16738");

(cljs.core.async.t_cljs$core$async16738.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16738");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16738.
 */
cljs.core.async.__GT_t_cljs$core$async16738 = (function cljs$core$async$__GT_t_cljs$core$async16738(f,ch,meta16739){
return (new cljs.core.async.t_cljs$core$async16738(f,ch,meta16739));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16738(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16775 = (function (p,ch,meta16776){
this.p = p;
this.ch = ch;
this.meta16776 = meta16776;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16775.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16777,meta16776__$1){
var self__ = this;
var _16777__$1 = this;
return (new cljs.core.async.t_cljs$core$async16775(self__.p,self__.ch,meta16776__$1));
}));

(cljs.core.async.t_cljs$core$async16775.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16777){
var self__ = this;
var _16777__$1 = this;
return self__.meta16776;
}));

(cljs.core.async.t_cljs$core$async16775.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16775.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16775.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16775.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16775.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16775.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16775.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async16775.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16776","meta16776",-108046564,null)], null);
}));

(cljs.core.async.t_cljs$core$async16775.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16775.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16775");

(cljs.core.async.t_cljs$core$async16775.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16775");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16775.
 */
cljs.core.async.__GT_t_cljs$core$async16775 = (function cljs$core$async$__GT_t_cljs$core$async16775(p,ch,meta16776){
return (new cljs.core.async.t_cljs$core$async16775(p,ch,meta16776));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async16775(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__16815 = arguments.length;
switch (G__16815) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13967__auto___18930 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13968__auto__ = (function (){var switch__12962__auto__ = (function (state_16850){
var state_val_16851 = (state_16850[(1)]);
if((state_val_16851 === (7))){
var inst_16846 = (state_16850[(2)]);
var state_16850__$1 = state_16850;
var statearr_16856_18931 = state_16850__$1;
(statearr_16856_18931[(2)] = inst_16846);

(statearr_16856_18931[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16851 === (1))){
var state_16850__$1 = state_16850;
var statearr_16858_18932 = state_16850__$1;
(statearr_16858_18932[(2)] = null);

(statearr_16858_18932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16851 === (4))){
var inst_16828 = (state_16850[(7)]);
var inst_16828__$1 = (state_16850[(2)]);
var inst_16829 = (inst_16828__$1 == null);
var state_16850__$1 = (function (){var statearr_16860 = state_16850;
(statearr_16860[(7)] = inst_16828__$1);

return statearr_16860;
})();
if(cljs.core.truth_(inst_16829)){
var statearr_16864_18933 = state_16850__$1;
(statearr_16864_18933[(1)] = (5));

} else {
var statearr_16866_18935 = state_16850__$1;
(statearr_16866_18935[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16851 === (6))){
var inst_16828 = (state_16850[(7)]);
var inst_16833 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16828) : p.call(null,inst_16828));
var state_16850__$1 = state_16850;
if(cljs.core.truth_(inst_16833)){
var statearr_16870_18936 = state_16850__$1;
(statearr_16870_18936[(1)] = (8));

} else {
var statearr_16871_18937 = state_16850__$1;
(statearr_16871_18937[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16851 === (3))){
var inst_16848 = (state_16850[(2)]);
var state_16850__$1 = state_16850;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16850__$1,inst_16848);
} else {
if((state_val_16851 === (2))){
var state_16850__$1 = state_16850;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16850__$1,(4),ch);
} else {
if((state_val_16851 === (11))){
var inst_16840 = (state_16850[(2)]);
var state_16850__$1 = state_16850;
var statearr_16872_18938 = state_16850__$1;
(statearr_16872_18938[(2)] = inst_16840);

(statearr_16872_18938[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16851 === (9))){
var state_16850__$1 = state_16850;
var statearr_16873_18942 = state_16850__$1;
(statearr_16873_18942[(2)] = null);

(statearr_16873_18942[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16851 === (5))){
var inst_16831 = cljs.core.async.close_BANG_(out);
var state_16850__$1 = state_16850;
var statearr_16877_18944 = state_16850__$1;
(statearr_16877_18944[(2)] = inst_16831);

(statearr_16877_18944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16851 === (10))){
var inst_16843 = (state_16850[(2)]);
var state_16850__$1 = (function (){var statearr_16885 = state_16850;
(statearr_16885[(8)] = inst_16843);

return statearr_16885;
})();
var statearr_16886_18950 = state_16850__$1;
(statearr_16886_18950[(2)] = null);

(statearr_16886_18950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16851 === (8))){
var inst_16828 = (state_16850[(7)]);
var state_16850__$1 = state_16850;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16850__$1,(11),out,inst_16828);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12963__auto__ = null;
var cljs$core$async$state_machine__12963__auto____0 = (function (){
var statearr_16893 = [null,null,null,null,null,null,null,null,null];
(statearr_16893[(0)] = cljs$core$async$state_machine__12963__auto__);

(statearr_16893[(1)] = (1));

return statearr_16893;
});
var cljs$core$async$state_machine__12963__auto____1 = (function (state_16850){
while(true){
var ret_value__12964__auto__ = (function (){try{while(true){
var result__12965__auto__ = switch__12962__auto__(state_16850);
if(cljs.core.keyword_identical_QMARK_(result__12965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12965__auto__;
}
break;
}
}catch (e16894){var ex__12966__auto__ = e16894;
var statearr_16895_18951 = state_16850;
(statearr_16895_18951[(2)] = ex__12966__auto__);


if(cljs.core.seq((state_16850[(4)]))){
var statearr_16896_18955 = state_16850;
(statearr_16896_18955[(1)] = cljs.core.first((state_16850[(4)])));

} else {
throw ex__12966__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18958 = state_16850;
state_16850 = G__18958;
continue;
} else {
return ret_value__12964__auto__;
}
break;
}
});
cljs$core$async$state_machine__12963__auto__ = function(state_16850){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12963__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12963__auto____1.call(this,state_16850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12963__auto____0;
cljs$core$async$state_machine__12963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12963__auto____1;
return cljs$core$async$state_machine__12963__auto__;
})()
})();
var state__13969__auto__ = (function (){var statearr_16904 = f__13968__auto__();
(statearr_16904[(6)] = c__13967__auto___18930);

return statearr_16904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13969__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__16913 = arguments.length;
switch (G__16913) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__13967__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13968__auto__ = (function (){var switch__12962__auto__ = (function (state_16990){
var state_val_16991 = (state_16990[(1)]);
if((state_val_16991 === (7))){
var inst_16985 = (state_16990[(2)]);
var state_16990__$1 = state_16990;
var statearr_16997_18962 = state_16990__$1;
(statearr_16997_18962[(2)] = inst_16985);

(statearr_16997_18962[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16991 === (20))){
var inst_16952 = (state_16990[(7)]);
var inst_16966 = (state_16990[(2)]);
var inst_16967 = cljs.core.next(inst_16952);
var inst_16938 = inst_16967;
var inst_16939 = null;
var inst_16940 = (0);
var inst_16941 = (0);
var state_16990__$1 = (function (){var statearr_17000 = state_16990;
(statearr_17000[(8)] = inst_16966);

(statearr_17000[(9)] = inst_16938);

(statearr_17000[(10)] = inst_16941);

(statearr_17000[(11)] = inst_16940);

(statearr_17000[(12)] = inst_16939);

return statearr_17000;
})();
var statearr_17002_18965 = state_16990__$1;
(statearr_17002_18965[(2)] = null);

(statearr_17002_18965[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16991 === (1))){
var state_16990__$1 = state_16990;
var statearr_17005_18968 = state_16990__$1;
(statearr_17005_18968[(2)] = null);

(statearr_17005_18968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16991 === (4))){
var inst_16927 = (state_16990[(13)]);
var inst_16927__$1 = (state_16990[(2)]);
var inst_16928 = (inst_16927__$1 == null);
var state_16990__$1 = (function (){var statearr_17006 = state_16990;
(statearr_17006[(13)] = inst_16927__$1);

return statearr_17006;
})();
if(cljs.core.truth_(inst_16928)){
var statearr_17007_18970 = state_16990__$1;
(statearr_17007_18970[(1)] = (5));

} else {
var statearr_17008_18971 = state_16990__$1;
(statearr_17008_18971[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16991 === (15))){
var state_16990__$1 = state_16990;
var statearr_17016_18973 = state_16990__$1;
(statearr_17016_18973[(2)] = null);

(statearr_17016_18973[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16991 === (21))){
var state_16990__$1 = state_16990;
var statearr_17018_18976 = state_16990__$1;
(statearr_17018_18976[(2)] = null);

(statearr_17018_18976[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16991 === (13))){
var inst_16938 = (state_16990[(9)]);
var inst_16941 = (state_16990[(10)]);
var inst_16940 = (state_16990[(11)]);
var inst_16939 = (state_16990[(12)]);
var inst_16948 = (state_16990[(2)]);
var inst_16949 = (inst_16941 + (1));
var tmp17009 = inst_16938;
var tmp17010 = inst_16940;
var tmp17011 = inst_16939;
var inst_16938__$1 = tmp17009;
var inst_16939__$1 = tmp17011;
var inst_16940__$1 = tmp17010;
var inst_16941__$1 = inst_16949;
var state_16990__$1 = (function (){var statearr_17019 = state_16990;
(statearr_17019[(9)] = inst_16938__$1);

(statearr_17019[(14)] = inst_16948);

(statearr_17019[(10)] = inst_16941__$1);

(statearr_17019[(11)] = inst_16940__$1);

(statearr_17019[(12)] = inst_16939__$1);

return statearr_17019;
})();
var statearr_17020_18978 = state_16990__$1;
(statearr_17020_18978[(2)] = null);

(statearr_17020_18978[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16991 === (22))){
var state_16990__$1 = state_16990;
var statearr_17021_18979 = state_16990__$1;
(statearr_17021_18979[(2)] = null);

(statearr_17021_18979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16991 === (6))){
var inst_16927 = (state_16990[(13)]);
var inst_16936 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16927) : f.call(null,inst_16927));
var inst_16937 = cljs.core.seq(inst_16936);
var inst_16938 = inst_16937;
var inst_16939 = null;
var inst_16940 = (0);
var inst_16941 = (0);
var state_16990__$1 = (function (){var statearr_17022 = state_16990;
(statearr_17022[(9)] = inst_16938);

(statearr_17022[(10)] = inst_16941);

(statearr_17022[(11)] = inst_16940);

(statearr_17022[(12)] = inst_16939);

return statearr_17022;
})();
var statearr_17026_18981 = state_16990__$1;
(statearr_17026_18981[(2)] = null);

(statearr_17026_18981[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16991 === (17))){
var inst_16952 = (state_16990[(7)]);
var inst_16958 = cljs.core.chunk_first(inst_16952);
var inst_16960 = cljs.core.chunk_rest(inst_16952);
var inst_16961 = cljs.core.count(inst_16958);
var inst_16938 = inst_16960;
var inst_16939 = inst_16958;
var inst_16940 = inst_16961;
var inst_16941 = (0);
var state_16990__$1 = (function (){var statearr_17028 = state_16990;
(statearr_17028[(9)] = inst_16938);

(statearr_17028[(10)] = inst_16941);

(statearr_17028[(11)] = inst_16940);

(statearr_17028[(12)] = inst_16939);

return statearr_17028;
})();
var statearr_17029_18983 = state_16990__$1;
(statearr_17029_18983[(2)] = null);

(statearr_17029_18983[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16991 === (3))){
var inst_16987 = (state_16990[(2)]);
var state_16990__$1 = state_16990;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16990__$1,inst_16987);
} else {
if((state_val_16991 === (12))){
var inst_16975 = (state_16990[(2)]);
var state_16990__$1 = state_16990;
var statearr_17032_18984 = state_16990__$1;
(statearr_17032_18984[(2)] = inst_16975);

(statearr_17032_18984[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16991 === (2))){
var state_16990__$1 = state_16990;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16990__$1,(4),in$);
} else {
if((state_val_16991 === (23))){
var inst_16983 = (state_16990[(2)]);
var state_16990__$1 = state_16990;
var statearr_17035_18985 = state_16990__$1;
(statearr_17035_18985[(2)] = inst_16983);

(statearr_17035_18985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16991 === (19))){
var inst_16970 = (state_16990[(2)]);
var state_16990__$1 = state_16990;
var statearr_17036_18986 = state_16990__$1;
(statearr_17036_18986[(2)] = inst_16970);

(statearr_17036_18986[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16991 === (11))){
var inst_16938 = (state_16990[(9)]);
var inst_16952 = (state_16990[(7)]);
var inst_16952__$1 = cljs.core.seq(inst_16938);
var state_16990__$1 = (function (){var statearr_17037 = state_16990;
(statearr_17037[(7)] = inst_16952__$1);

return statearr_17037;
})();
if(inst_16952__$1){
var statearr_17039_18988 = state_16990__$1;
(statearr_17039_18988[(1)] = (14));

} else {
var statearr_17040_18989 = state_16990__$1;
(statearr_17040_18989[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16991 === (9))){
var inst_16977 = (state_16990[(2)]);
var inst_16978 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_16990__$1 = (function (){var statearr_17045 = state_16990;
(statearr_17045[(15)] = inst_16977);

return statearr_17045;
})();
if(cljs.core.truth_(inst_16978)){
var statearr_17046_18993 = state_16990__$1;
(statearr_17046_18993[(1)] = (21));

} else {
var statearr_17047_18994 = state_16990__$1;
(statearr_17047_18994[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16991 === (5))){
var inst_16930 = cljs.core.async.close_BANG_(out);
var state_16990__$1 = state_16990;
var statearr_17048_18996 = state_16990__$1;
(statearr_17048_18996[(2)] = inst_16930);

(statearr_17048_18996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16991 === (14))){
var inst_16952 = (state_16990[(7)]);
var inst_16954 = cljs.core.chunked_seq_QMARK_(inst_16952);
var state_16990__$1 = state_16990;
if(inst_16954){
var statearr_17049_19001 = state_16990__$1;
(statearr_17049_19001[(1)] = (17));

} else {
var statearr_17050_19002 = state_16990__$1;
(statearr_17050_19002[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16991 === (16))){
var inst_16973 = (state_16990[(2)]);
var state_16990__$1 = state_16990;
var statearr_17054_19007 = state_16990__$1;
(statearr_17054_19007[(2)] = inst_16973);

(statearr_17054_19007[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16991 === (10))){
var inst_16941 = (state_16990[(10)]);
var inst_16939 = (state_16990[(12)]);
var inst_16946 = cljs.core._nth(inst_16939,inst_16941);
var state_16990__$1 = state_16990;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16990__$1,(13),out,inst_16946);
} else {
if((state_val_16991 === (18))){
var inst_16952 = (state_16990[(7)]);
var inst_16964 = cljs.core.first(inst_16952);
var state_16990__$1 = state_16990;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16990__$1,(20),out,inst_16964);
} else {
if((state_val_16991 === (8))){
var inst_16941 = (state_16990[(10)]);
var inst_16940 = (state_16990[(11)]);
var inst_16943 = (inst_16941 < inst_16940);
var inst_16944 = inst_16943;
var state_16990__$1 = state_16990;
if(cljs.core.truth_(inst_16944)){
var statearr_17058_19010 = state_16990__$1;
(statearr_17058_19010[(1)] = (10));

} else {
var statearr_17059_19011 = state_16990__$1;
(statearr_17059_19011[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__12963__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__12963__auto____0 = (function (){
var statearr_17060 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17060[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__12963__auto__);

(statearr_17060[(1)] = (1));

return statearr_17060;
});
var cljs$core$async$mapcat_STAR__$_state_machine__12963__auto____1 = (function (state_16990){
while(true){
var ret_value__12964__auto__ = (function (){try{while(true){
var result__12965__auto__ = switch__12962__auto__(state_16990);
if(cljs.core.keyword_identical_QMARK_(result__12965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12965__auto__;
}
break;
}
}catch (e17061){var ex__12966__auto__ = e17061;
var statearr_17062_19015 = state_16990;
(statearr_17062_19015[(2)] = ex__12966__auto__);


if(cljs.core.seq((state_16990[(4)]))){
var statearr_17066_19016 = state_16990;
(statearr_17066_19016[(1)] = cljs.core.first((state_16990[(4)])));

} else {
throw ex__12966__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19020 = state_16990;
state_16990 = G__19020;
continue;
} else {
return ret_value__12964__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__12963__auto__ = function(state_16990){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__12963__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__12963__auto____1.call(this,state_16990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__12963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__12963__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__12963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__12963__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__12963__auto__;
})()
})();
var state__13969__auto__ = (function (){var statearr_17067 = f__13968__auto__();
(statearr_17067[(6)] = c__13967__auto__);

return statearr_17067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13969__auto__);
}));

return c__13967__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17072 = arguments.length;
switch (G__17072) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__17077 = arguments.length;
switch (G__17077) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__17082 = arguments.length;
switch (G__17082) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13967__auto___19032 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13968__auto__ = (function (){var switch__12962__auto__ = (function (state_17118){
var state_val_17119 = (state_17118[(1)]);
if((state_val_17119 === (7))){
var inst_17107 = (state_17118[(2)]);
var state_17118__$1 = state_17118;
var statearr_17132_19033 = state_17118__$1;
(statearr_17132_19033[(2)] = inst_17107);

(statearr_17132_19033[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17119 === (1))){
var inst_17085 = null;
var state_17118__$1 = (function (){var statearr_17134 = state_17118;
(statearr_17134[(7)] = inst_17085);

return statearr_17134;
})();
var statearr_17135_19037 = state_17118__$1;
(statearr_17135_19037[(2)] = null);

(statearr_17135_19037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17119 === (4))){
var inst_17092 = (state_17118[(8)]);
var inst_17092__$1 = (state_17118[(2)]);
var inst_17093 = (inst_17092__$1 == null);
var inst_17094 = cljs.core.not(inst_17093);
var state_17118__$1 = (function (){var statearr_17140 = state_17118;
(statearr_17140[(8)] = inst_17092__$1);

return statearr_17140;
})();
if(inst_17094){
var statearr_17141_19038 = state_17118__$1;
(statearr_17141_19038[(1)] = (5));

} else {
var statearr_17142_19039 = state_17118__$1;
(statearr_17142_19039[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17119 === (6))){
var state_17118__$1 = state_17118;
var statearr_17143_19040 = state_17118__$1;
(statearr_17143_19040[(2)] = null);

(statearr_17143_19040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17119 === (3))){
var inst_17110 = (state_17118[(2)]);
var inst_17114 = cljs.core.async.close_BANG_(out);
var state_17118__$1 = (function (){var statearr_17146 = state_17118;
(statearr_17146[(9)] = inst_17110);

return statearr_17146;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17118__$1,inst_17114);
} else {
if((state_val_17119 === (2))){
var state_17118__$1 = state_17118;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17118__$1,(4),ch);
} else {
if((state_val_17119 === (11))){
var inst_17092 = (state_17118[(8)]);
var inst_17101 = (state_17118[(2)]);
var inst_17085 = inst_17092;
var state_17118__$1 = (function (){var statearr_17149 = state_17118;
(statearr_17149[(7)] = inst_17085);

(statearr_17149[(10)] = inst_17101);

return statearr_17149;
})();
var statearr_17151_19046 = state_17118__$1;
(statearr_17151_19046[(2)] = null);

(statearr_17151_19046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17119 === (9))){
var inst_17092 = (state_17118[(8)]);
var state_17118__$1 = state_17118;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17118__$1,(11),out,inst_17092);
} else {
if((state_val_17119 === (5))){
var inst_17085 = (state_17118[(7)]);
var inst_17092 = (state_17118[(8)]);
var inst_17096 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17092,inst_17085);
var state_17118__$1 = state_17118;
if(inst_17096){
var statearr_17155_19047 = state_17118__$1;
(statearr_17155_19047[(1)] = (8));

} else {
var statearr_17156_19048 = state_17118__$1;
(statearr_17156_19048[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17119 === (10))){
var inst_17104 = (state_17118[(2)]);
var state_17118__$1 = state_17118;
var statearr_17158_19052 = state_17118__$1;
(statearr_17158_19052[(2)] = inst_17104);

(statearr_17158_19052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17119 === (8))){
var inst_17085 = (state_17118[(7)]);
var tmp17153 = inst_17085;
var inst_17085__$1 = tmp17153;
var state_17118__$1 = (function (){var statearr_17161 = state_17118;
(statearr_17161[(7)] = inst_17085__$1);

return statearr_17161;
})();
var statearr_17162_19053 = state_17118__$1;
(statearr_17162_19053[(2)] = null);

(statearr_17162_19053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12963__auto__ = null;
var cljs$core$async$state_machine__12963__auto____0 = (function (){
var statearr_17164 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17164[(0)] = cljs$core$async$state_machine__12963__auto__);

(statearr_17164[(1)] = (1));

return statearr_17164;
});
var cljs$core$async$state_machine__12963__auto____1 = (function (state_17118){
while(true){
var ret_value__12964__auto__ = (function (){try{while(true){
var result__12965__auto__ = switch__12962__auto__(state_17118);
if(cljs.core.keyword_identical_QMARK_(result__12965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12965__auto__;
}
break;
}
}catch (e17165){var ex__12966__auto__ = e17165;
var statearr_17166_19054 = state_17118;
(statearr_17166_19054[(2)] = ex__12966__auto__);


if(cljs.core.seq((state_17118[(4)]))){
var statearr_17169_19056 = state_17118;
(statearr_17169_19056[(1)] = cljs.core.first((state_17118[(4)])));

} else {
throw ex__12966__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19057 = state_17118;
state_17118 = G__19057;
continue;
} else {
return ret_value__12964__auto__;
}
break;
}
});
cljs$core$async$state_machine__12963__auto__ = function(state_17118){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12963__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12963__auto____1.call(this,state_17118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12963__auto____0;
cljs$core$async$state_machine__12963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12963__auto____1;
return cljs$core$async$state_machine__12963__auto__;
})()
})();
var state__13969__auto__ = (function (){var statearr_17179 = f__13968__auto__();
(statearr_17179[(6)] = c__13967__auto___19032);

return statearr_17179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13969__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17194 = arguments.length;
switch (G__17194) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13967__auto___19059 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13968__auto__ = (function (){var switch__12962__auto__ = (function (state_17250){
var state_val_17251 = (state_17250[(1)]);
if((state_val_17251 === (7))){
var inst_17242 = (state_17250[(2)]);
var state_17250__$1 = state_17250;
var statearr_17292_19060 = state_17250__$1;
(statearr_17292_19060[(2)] = inst_17242);

(statearr_17292_19060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17251 === (1))){
var inst_17199 = (new Array(n));
var inst_17200 = inst_17199;
var inst_17201 = (0);
var state_17250__$1 = (function (){var statearr_17296 = state_17250;
(statearr_17296[(7)] = inst_17201);

(statearr_17296[(8)] = inst_17200);

return statearr_17296;
})();
var statearr_17297_19061 = state_17250__$1;
(statearr_17297_19061[(2)] = null);

(statearr_17297_19061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17251 === (4))){
var inst_17206 = (state_17250[(9)]);
var inst_17206__$1 = (state_17250[(2)]);
var inst_17207 = (inst_17206__$1 == null);
var inst_17208 = cljs.core.not(inst_17207);
var state_17250__$1 = (function (){var statearr_17305 = state_17250;
(statearr_17305[(9)] = inst_17206__$1);

return statearr_17305;
})();
if(inst_17208){
var statearr_17309_19062 = state_17250__$1;
(statearr_17309_19062[(1)] = (5));

} else {
var statearr_17311_19063 = state_17250__$1;
(statearr_17311_19063[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17251 === (15))){
var inst_17236 = (state_17250[(2)]);
var state_17250__$1 = state_17250;
var statearr_17316_19064 = state_17250__$1;
(statearr_17316_19064[(2)] = inst_17236);

(statearr_17316_19064[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17251 === (13))){
var state_17250__$1 = state_17250;
var statearr_17319_19069 = state_17250__$1;
(statearr_17319_19069[(2)] = null);

(statearr_17319_19069[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17251 === (6))){
var inst_17201 = (state_17250[(7)]);
var inst_17228 = (inst_17201 > (0));
var state_17250__$1 = state_17250;
if(cljs.core.truth_(inst_17228)){
var statearr_17324_19071 = state_17250__$1;
(statearr_17324_19071[(1)] = (12));

} else {
var statearr_17325_19072 = state_17250__$1;
(statearr_17325_19072[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17251 === (3))){
var inst_17248 = (state_17250[(2)]);
var state_17250__$1 = state_17250;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17250__$1,inst_17248);
} else {
if((state_val_17251 === (12))){
var inst_17200 = (state_17250[(8)]);
var inst_17234 = cljs.core.vec(inst_17200);
var state_17250__$1 = state_17250;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17250__$1,(15),out,inst_17234);
} else {
if((state_val_17251 === (2))){
var state_17250__$1 = state_17250;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17250__$1,(4),ch);
} else {
if((state_val_17251 === (11))){
var inst_17221 = (state_17250[(2)]);
var inst_17222 = (new Array(n));
var inst_17200 = inst_17222;
var inst_17201 = (0);
var state_17250__$1 = (function (){var statearr_17345 = state_17250;
(statearr_17345[(7)] = inst_17201);

(statearr_17345[(8)] = inst_17200);

(statearr_17345[(10)] = inst_17221);

return statearr_17345;
})();
var statearr_17349_19073 = state_17250__$1;
(statearr_17349_19073[(2)] = null);

(statearr_17349_19073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17251 === (9))){
var inst_17200 = (state_17250[(8)]);
var inst_17219 = cljs.core.vec(inst_17200);
var state_17250__$1 = state_17250;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17250__$1,(11),out,inst_17219);
} else {
if((state_val_17251 === (5))){
var inst_17201 = (state_17250[(7)]);
var inst_17206 = (state_17250[(9)]);
var inst_17200 = (state_17250[(8)]);
var inst_17212 = (state_17250[(11)]);
var inst_17210 = (inst_17200[inst_17201] = inst_17206);
var inst_17212__$1 = (inst_17201 + (1));
var inst_17213 = (inst_17212__$1 < n);
var state_17250__$1 = (function (){var statearr_17353 = state_17250;
(statearr_17353[(12)] = inst_17210);

(statearr_17353[(11)] = inst_17212__$1);

return statearr_17353;
})();
if(cljs.core.truth_(inst_17213)){
var statearr_17354_19074 = state_17250__$1;
(statearr_17354_19074[(1)] = (8));

} else {
var statearr_17355_19075 = state_17250__$1;
(statearr_17355_19075[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17251 === (14))){
var inst_17239 = (state_17250[(2)]);
var inst_17240 = cljs.core.async.close_BANG_(out);
var state_17250__$1 = (function (){var statearr_17359 = state_17250;
(statearr_17359[(13)] = inst_17239);

return statearr_17359;
})();
var statearr_17362_19076 = state_17250__$1;
(statearr_17362_19076[(2)] = inst_17240);

(statearr_17362_19076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17251 === (10))){
var inst_17225 = (state_17250[(2)]);
var state_17250__$1 = state_17250;
var statearr_17365_19077 = state_17250__$1;
(statearr_17365_19077[(2)] = inst_17225);

(statearr_17365_19077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17251 === (8))){
var inst_17200 = (state_17250[(8)]);
var inst_17212 = (state_17250[(11)]);
var tmp17356 = inst_17200;
var inst_17200__$1 = tmp17356;
var inst_17201 = inst_17212;
var state_17250__$1 = (function (){var statearr_17366 = state_17250;
(statearr_17366[(7)] = inst_17201);

(statearr_17366[(8)] = inst_17200__$1);

return statearr_17366;
})();
var statearr_17369_19078 = state_17250__$1;
(statearr_17369_19078[(2)] = null);

(statearr_17369_19078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12963__auto__ = null;
var cljs$core$async$state_machine__12963__auto____0 = (function (){
var statearr_17373 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17373[(0)] = cljs$core$async$state_machine__12963__auto__);

(statearr_17373[(1)] = (1));

return statearr_17373;
});
var cljs$core$async$state_machine__12963__auto____1 = (function (state_17250){
while(true){
var ret_value__12964__auto__ = (function (){try{while(true){
var result__12965__auto__ = switch__12962__auto__(state_17250);
if(cljs.core.keyword_identical_QMARK_(result__12965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12965__auto__;
}
break;
}
}catch (e17377){var ex__12966__auto__ = e17377;
var statearr_17378_19083 = state_17250;
(statearr_17378_19083[(2)] = ex__12966__auto__);


if(cljs.core.seq((state_17250[(4)]))){
var statearr_17380_19084 = state_17250;
(statearr_17380_19084[(1)] = cljs.core.first((state_17250[(4)])));

} else {
throw ex__12966__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19085 = state_17250;
state_17250 = G__19085;
continue;
} else {
return ret_value__12964__auto__;
}
break;
}
});
cljs$core$async$state_machine__12963__auto__ = function(state_17250){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12963__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12963__auto____1.call(this,state_17250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12963__auto____0;
cljs$core$async$state_machine__12963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12963__auto____1;
return cljs$core$async$state_machine__12963__auto__;
})()
})();
var state__13969__auto__ = (function (){var statearr_17384 = f__13968__auto__();
(statearr_17384[(6)] = c__13967__auto___19059);

return statearr_17384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13969__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17396 = arguments.length;
switch (G__17396) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13967__auto___19088 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13968__auto__ = (function (){var switch__12962__auto__ = (function (state_17447){
var state_val_17448 = (state_17447[(1)]);
if((state_val_17448 === (7))){
var inst_17443 = (state_17447[(2)]);
var state_17447__$1 = state_17447;
var statearr_17450_19089 = state_17447__$1;
(statearr_17450_19089[(2)] = inst_17443);

(statearr_17450_19089[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17448 === (1))){
var inst_17401 = [];
var inst_17402 = inst_17401;
var inst_17403 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17447__$1 = (function (){var statearr_17452 = state_17447;
(statearr_17452[(7)] = inst_17402);

(statearr_17452[(8)] = inst_17403);

return statearr_17452;
})();
var statearr_17453_19091 = state_17447__$1;
(statearr_17453_19091[(2)] = null);

(statearr_17453_19091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17448 === (4))){
var inst_17406 = (state_17447[(9)]);
var inst_17406__$1 = (state_17447[(2)]);
var inst_17407 = (inst_17406__$1 == null);
var inst_17408 = cljs.core.not(inst_17407);
var state_17447__$1 = (function (){var statearr_17454 = state_17447;
(statearr_17454[(9)] = inst_17406__$1);

return statearr_17454;
})();
if(inst_17408){
var statearr_17455_19092 = state_17447__$1;
(statearr_17455_19092[(1)] = (5));

} else {
var statearr_17457_19093 = state_17447__$1;
(statearr_17457_19093[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17448 === (15))){
var inst_17402 = (state_17447[(7)]);
var inst_17435 = cljs.core.vec(inst_17402);
var state_17447__$1 = state_17447;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17447__$1,(18),out,inst_17435);
} else {
if((state_val_17448 === (13))){
var inst_17430 = (state_17447[(2)]);
var state_17447__$1 = state_17447;
var statearr_17463_19095 = state_17447__$1;
(statearr_17463_19095[(2)] = inst_17430);

(statearr_17463_19095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17448 === (6))){
var inst_17402 = (state_17447[(7)]);
var inst_17432 = inst_17402.length;
var inst_17433 = (inst_17432 > (0));
var state_17447__$1 = state_17447;
if(cljs.core.truth_(inst_17433)){
var statearr_17464_19096 = state_17447__$1;
(statearr_17464_19096[(1)] = (15));

} else {
var statearr_17465_19097 = state_17447__$1;
(statearr_17465_19097[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17448 === (17))){
var inst_17440 = (state_17447[(2)]);
var inst_17441 = cljs.core.async.close_BANG_(out);
var state_17447__$1 = (function (){var statearr_17468 = state_17447;
(statearr_17468[(10)] = inst_17440);

return statearr_17468;
})();
var statearr_17470_19098 = state_17447__$1;
(statearr_17470_19098[(2)] = inst_17441);

(statearr_17470_19098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17448 === (3))){
var inst_17445 = (state_17447[(2)]);
var state_17447__$1 = state_17447;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17447__$1,inst_17445);
} else {
if((state_val_17448 === (12))){
var inst_17402 = (state_17447[(7)]);
var inst_17422 = cljs.core.vec(inst_17402);
var state_17447__$1 = state_17447;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17447__$1,(14),out,inst_17422);
} else {
if((state_val_17448 === (2))){
var state_17447__$1 = state_17447;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17447__$1,(4),ch);
} else {
if((state_val_17448 === (11))){
var inst_17402 = (state_17447[(7)]);
var inst_17410 = (state_17447[(11)]);
var inst_17406 = (state_17447[(9)]);
var inst_17419 = inst_17402.push(inst_17406);
var tmp17471 = inst_17402;
var inst_17402__$1 = tmp17471;
var inst_17403 = inst_17410;
var state_17447__$1 = (function (){var statearr_17474 = state_17447;
(statearr_17474[(7)] = inst_17402__$1);

(statearr_17474[(12)] = inst_17419);

(statearr_17474[(8)] = inst_17403);

return statearr_17474;
})();
var statearr_17475_19103 = state_17447__$1;
(statearr_17475_19103[(2)] = null);

(statearr_17475_19103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17448 === (9))){
var inst_17403 = (state_17447[(8)]);
var inst_17414 = cljs.core.keyword_identical_QMARK_(inst_17403,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_17447__$1 = state_17447;
var statearr_17476_19110 = state_17447__$1;
(statearr_17476_19110[(2)] = inst_17414);

(statearr_17476_19110[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17448 === (5))){
var inst_17410 = (state_17447[(11)]);
var inst_17406 = (state_17447[(9)]);
var inst_17403 = (state_17447[(8)]);
var inst_17411 = (state_17447[(13)]);
var inst_17410__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17406) : f.call(null,inst_17406));
var inst_17411__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17410__$1,inst_17403);
var state_17447__$1 = (function (){var statearr_17480 = state_17447;
(statearr_17480[(11)] = inst_17410__$1);

(statearr_17480[(13)] = inst_17411__$1);

return statearr_17480;
})();
if(inst_17411__$1){
var statearr_17483_19112 = state_17447__$1;
(statearr_17483_19112[(1)] = (8));

} else {
var statearr_17484_19113 = state_17447__$1;
(statearr_17484_19113[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17448 === (14))){
var inst_17410 = (state_17447[(11)]);
var inst_17406 = (state_17447[(9)]);
var inst_17424 = (state_17447[(2)]);
var inst_17426 = [];
var inst_17427 = inst_17426.push(inst_17406);
var inst_17402 = inst_17426;
var inst_17403 = inst_17410;
var state_17447__$1 = (function (){var statearr_17491 = state_17447;
(statearr_17491[(14)] = inst_17424);

(statearr_17491[(7)] = inst_17402);

(statearr_17491[(15)] = inst_17427);

(statearr_17491[(8)] = inst_17403);

return statearr_17491;
})();
var statearr_17492_19114 = state_17447__$1;
(statearr_17492_19114[(2)] = null);

(statearr_17492_19114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17448 === (16))){
var state_17447__$1 = state_17447;
var statearr_17493_19115 = state_17447__$1;
(statearr_17493_19115[(2)] = null);

(statearr_17493_19115[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17448 === (10))){
var inst_17416 = (state_17447[(2)]);
var state_17447__$1 = state_17447;
if(cljs.core.truth_(inst_17416)){
var statearr_17494_19116 = state_17447__$1;
(statearr_17494_19116[(1)] = (11));

} else {
var statearr_17495_19117 = state_17447__$1;
(statearr_17495_19117[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17448 === (18))){
var inst_17437 = (state_17447[(2)]);
var state_17447__$1 = state_17447;
var statearr_17500_19121 = state_17447__$1;
(statearr_17500_19121[(2)] = inst_17437);

(statearr_17500_19121[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17448 === (8))){
var inst_17411 = (state_17447[(13)]);
var state_17447__$1 = state_17447;
var statearr_17501_19122 = state_17447__$1;
(statearr_17501_19122[(2)] = inst_17411);

(statearr_17501_19122[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12963__auto__ = null;
var cljs$core$async$state_machine__12963__auto____0 = (function (){
var statearr_17508 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17508[(0)] = cljs$core$async$state_machine__12963__auto__);

(statearr_17508[(1)] = (1));

return statearr_17508;
});
var cljs$core$async$state_machine__12963__auto____1 = (function (state_17447){
while(true){
var ret_value__12964__auto__ = (function (){try{while(true){
var result__12965__auto__ = switch__12962__auto__(state_17447);
if(cljs.core.keyword_identical_QMARK_(result__12965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12965__auto__;
}
break;
}
}catch (e17509){var ex__12966__auto__ = e17509;
var statearr_17510_19125 = state_17447;
(statearr_17510_19125[(2)] = ex__12966__auto__);


if(cljs.core.seq((state_17447[(4)]))){
var statearr_17511_19126 = state_17447;
(statearr_17511_19126[(1)] = cljs.core.first((state_17447[(4)])));

} else {
throw ex__12966__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19127 = state_17447;
state_17447 = G__19127;
continue;
} else {
return ret_value__12964__auto__;
}
break;
}
});
cljs$core$async$state_machine__12963__auto__ = function(state_17447){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12963__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12963__auto____1.call(this,state_17447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12963__auto____0;
cljs$core$async$state_machine__12963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12963__auto____1;
return cljs$core$async$state_machine__12963__auto__;
})()
})();
var state__13969__auto__ = (function (){var statearr_17514 = f__13968__auto__();
(statearr_17514[(6)] = c__13967__auto___19088);

return statearr_17514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13969__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
