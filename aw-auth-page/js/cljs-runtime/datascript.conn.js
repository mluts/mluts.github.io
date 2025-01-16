goog.provide('datascript.conn');

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {extend_clj.core.IAtom3}
 * @implements {cljs.core.ILookup}
*/
datascript.conn.Conn = (function (atom,validator,watches,meta){
this.atom = atom;
this.validator = validator;
this.watches = watches;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 98306;
this.cljs$lang$protocol_mask$partition0$ = 6455552;
});
(datascript.conn.Conn.prototype.equiv = (function (other__21572__auto__){
var self__ = this;
var this__21571__auto__ = this;
return this__21571__auto__.cljs$core$IEquiv$_equiv$arity$2(null,other__21572__auto__);
}));

(datascript.conn.Conn.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this__21571__auto__,oldv__21579__auto__,newv__21574__auto__){
var self__ = this;
var this__21571__auto____$1 = this;
var seq__24114 = cljs.core.seq(self__.watches);
var chunk__24115 = null;
var count__24116 = (0);
var i__24117 = (0);
while(true){
if((i__24117 < count__24116)){
var vec__24132 = chunk__24115.cljs$core$IIndexed$_nth$arity$2(null,i__24117);
var k__21580__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24132,(0),null);
var f__21575__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24132,(1),null);
(f__21575__auto__.cljs$core$IFn$_invoke$arity$4 ? f__21575__auto__.cljs$core$IFn$_invoke$arity$4(k__21580__auto__,this__21571__auto____$1,oldv__21579__auto__,newv__21574__auto__) : f__21575__auto__.call(null,k__21580__auto__,this__21571__auto____$1,oldv__21579__auto__,newv__21574__auto__));


var G__24526 = seq__24114;
var G__24527 = chunk__24115;
var G__24528 = count__24116;
var G__24529 = (i__24117 + (1));
seq__24114 = G__24526;
chunk__24115 = G__24527;
count__24116 = G__24528;
i__24117 = G__24529;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24114);
if(temp__5804__auto__){
var seq__24114__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24114__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24114__$1);
var G__24534 = cljs.core.chunk_rest(seq__24114__$1);
var G__24535 = c__5568__auto__;
var G__24536 = cljs.core.count(c__5568__auto__);
var G__24537 = (0);
seq__24114 = G__24534;
chunk__24115 = G__24535;
count__24116 = G__24536;
i__24117 = G__24537;
continue;
} else {
var vec__24144 = cljs.core.first(seq__24114__$1);
var k__21580__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24144,(0),null);
var f__21575__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24144,(1),null);
(f__21575__auto__.cljs$core$IFn$_invoke$arity$4 ? f__21575__auto__.cljs$core$IFn$_invoke$arity$4(k__21580__auto__,this__21571__auto____$1,oldv__21579__auto__,newv__21574__auto__) : f__21575__auto__.call(null,k__21580__auto__,this__21571__auto____$1,oldv__21579__auto__,newv__21574__auto__));


var G__24542 = cljs.core.next(seq__24114__$1);
var G__24543 = null;
var G__24544 = (0);
var G__24545 = (0);
seq__24114 = G__24542;
chunk__24115 = G__24543;
count__24116 = G__24544;
i__24117 = G__24545;
continue;
}
} else {
return null;
}
}
break;
}
}));

(datascript.conn.Conn.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this__21571__auto__,key__21581__auto__,f__21575__auto__){
var self__ = this;
var this__21571__auto____$1 = this;
(this__21571__auto____$1.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,key__21581__auto__,f__21575__auto__));

return this__21571__auto____$1;
}));

(datascript.conn.Conn.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this__21571__auto__,key__21581__auto__){
var self__ = this;
var this__21571__auto____$1 = this;
return (this__21571__auto____$1.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,key__21581__auto__));
}));

(datascript.conn.Conn.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o__21573__auto__,other__21572__auto__){
var self__ = this;
var o__21573__auto____$1 = this;
return (o__21573__auto____$1 === other__21572__auto__);
}));

(datascript.conn.Conn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__21571__auto__){
var self__ = this;
var this__21571__auto____$1 = this;
return goog.getUid(this__21571__auto____$1);
}));

(datascript.conn.Conn.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this__21571__auto__,newv__21574__auto__){
var self__ = this;
var this__21571__auto____$1 = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(this__21571__auto____$1.extend_clj$core$IAtom3$swap_STAR_$arity$3(null,cljs.core.constantly(newv__21574__auto__),cljs.core.List.EMPTY),(1));
}));

(datascript.conn.Conn.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this__21571__auto__,f__21575__auto__){
var self__ = this;
var this__21571__auto____$1 = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(this__21571__auto____$1.extend_clj$core$IAtom3$swap_STAR_$arity$3(null,f__21575__auto__,cljs.core.List.EMPTY),(1));
}));

(datascript.conn.Conn.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this__21571__auto__,f__21575__auto__,a__21576__auto__){
var self__ = this;
var this__21571__auto____$1 = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(this__21571__auto____$1.extend_clj$core$IAtom3$swap_STAR_$arity$3(null,f__21575__auto__,(new cljs.core.List(null,a__21576__auto__,null,(1),null))),(1));
}));

(datascript.conn.Conn.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this__21571__auto__,f__21575__auto__,a__21576__auto__,b__21577__auto__){
var self__ = this;
var this__21571__auto____$1 = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(this__21571__auto____$1.extend_clj$core$IAtom3$swap_STAR_$arity$3(null,f__21575__auto__,(new cljs.core.List(null,a__21576__auto__,(new cljs.core.List(null,b__21577__auto__,null,(1),null)),(2),null))),(1));
}));

(datascript.conn.Conn.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this__21571__auto__,f__21575__auto__,a__21576__auto__,b__21577__auto__,xs__21578__auto__){
var self__ = this;
var this__21571__auto____$1 = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(this__21571__auto____$1.extend_clj$core$IAtom3$swap_STAR_$arity$3(null,f__21575__auto__,cljs.core.cons(a__21576__auto__,cljs.core.cons(b__21577__auto__,xs__21578__auto__))),(1));
}));

(datascript.conn.Conn.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__21571__auto__){
var self__ = this;
var this__21571__auto____$1 = this;
return self__.meta;
}));

(datascript.conn.Conn.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this__21571__auto__){
var self__ = this;
var this__21571__auto____$1 = this;
return this__21571__auto____$1.extend_clj$core$IAtom3$deref_impl$arity$1(null);
}));

(datascript.conn.Conn.prototype.extend_clj$core$IAtom3$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.conn.Conn.prototype.extend_clj$core$IAtom3$validate$arity$3 = (function (this__21571__auto__,validator__21584__auto__,value__21585__auto__){
var self__ = this;
var this__21571__auto____$1 = this;
if((!((validator__21584__auto__ == null)))){
if(cljs.core.truth_((validator__21584__auto__.cljs$core$IFn$_invoke$arity$1 ? validator__21584__auto__.cljs$core$IFn$_invoke$arity$1(value__21585__auto__) : validator__21584__auto__.call(null,value__21585__auto__)))){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid reference state",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value__21585__auto__], null));
}
} else {
return null;
}
}));

(datascript.conn.Conn.prototype.extend_clj$core$IAtom3$notify_watches$arity$3 = (function (this__21571__auto__,oldv__21579__auto__,newv__21574__auto__){
var self__ = this;
var this__21571__auto____$1 = this;
var seq__24204 = cljs.core.seq(self__.watches);
var chunk__24207 = null;
var count__24208 = (0);
var i__24209 = (0);
while(true){
if((i__24209 < count__24208)){
var vec__24220 = chunk__24207.cljs$core$IIndexed$_nth$arity$2(null,i__24209);
var k__21580__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24220,(0),null);
var w__21586__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24220,(1),null);
(w__21586__auto__.cljs$core$IFn$_invoke$arity$4 ? w__21586__auto__.cljs$core$IFn$_invoke$arity$4(k__21580__auto__,this__21571__auto____$1,oldv__21579__auto__,newv__21574__auto__) : w__21586__auto__.call(null,k__21580__auto__,this__21571__auto____$1,oldv__21579__auto__,newv__21574__auto__));


var G__24562 = seq__24204;
var G__24563 = chunk__24207;
var G__24564 = count__24208;
var G__24565 = (i__24209 + (1));
seq__24204 = G__24562;
chunk__24207 = G__24563;
count__24208 = G__24564;
i__24209 = G__24565;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24204);
if(temp__5804__auto__){
var seq__24204__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24204__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24204__$1);
var G__24566 = cljs.core.chunk_rest(seq__24204__$1);
var G__24567 = c__5568__auto__;
var G__24568 = cljs.core.count(c__5568__auto__);
var G__24569 = (0);
seq__24204 = G__24566;
chunk__24207 = G__24567;
count__24208 = G__24568;
i__24209 = G__24569;
continue;
} else {
var vec__24227 = cljs.core.first(seq__24204__$1);
var k__21580__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24227,(0),null);
var w__21586__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24227,(1),null);
(w__21586__auto__.cljs$core$IFn$_invoke$arity$4 ? w__21586__auto__.cljs$core$IFn$_invoke$arity$4(k__21580__auto__,this__21571__auto____$1,oldv__21579__auto__,newv__21574__auto__) : w__21586__auto__.call(null,k__21580__auto__,this__21571__auto____$1,oldv__21579__auto__,newv__21574__auto__));


var G__24571 = cljs.core.next(seq__24204__$1);
var G__24572 = null;
var G__24573 = (0);
var G__24574 = (0);
seq__24204 = G__24571;
chunk__24207 = G__24572;
count__24208 = G__24573;
i__24209 = G__24574;
continue;
}
} else {
return null;
}
}
break;
}
}));

(datascript.conn.Conn.prototype.extend_clj$core$IAtom3$swap_STAR_$arity$3 = (function (this__21571__auto__,f__21575__auto__,args__21587__auto__){
var self__ = this;
var this__21571__auto____$1 = this;
var oldv__21579__auto__ = cljs.core.deref(this__21571__auto____$1);
var newv__21574__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f__21575__auto__,oldv__21579__auto__,args__21587__auto__);
this__21571__auto____$1.extend_clj$core$IAtom3$validate$arity$3(null,self__.validator,newv__21574__auto__);

this__21571__auto____$1.extend_clj$core$IAtom3$compare_and_set_impl$arity$3(null,oldv__21579__auto__,newv__21574__auto__);

this__21571__auto____$1.extend_clj$core$IAtom3$notify_watches$arity$3(null,oldv__21579__auto__,newv__21574__auto__);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [oldv__21579__auto__,newv__21574__auto__], null);
}));

(datascript.conn.Conn.prototype.extend_clj$core$IAtom3$deref_impl$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.atom));
}));

(datascript.conn.Conn.prototype.extend_clj$core$IAtom3$compare_and_set_impl$arity$3 = (function (this$,oldv,newv){
var self__ = this;
var this$__$1 = this;
return cljs.core.compare_and_set_BANG_(self__.atom,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(self__.atom),new cljs.core.Keyword(null,"db","db",993250759),oldv),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(self__.atom),new cljs.core.Keyword(null,"db","db",993250759),newv));
}));

(datascript.conn.Conn.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__21571__auto__,k__21580__auto__){
var self__ = this;
var this__21571__auto____$1 = this;
return this__21571__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__21580__auto__,null);
}));

(datascript.conn.Conn.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__21571__auto__,k__21580__auto__,not_found__21583__auto__){
var self__ = this;
var this__21571__auto____$1 = this;
var G__24257 = k__21580__auto__;
var G__24257__$1 = (((G__24257 instanceof cljs.core.Keyword))?G__24257.fqn:null);
switch (G__24257__$1) {
case "atom":
return self__.atom;

break;
default:
return not_found__21583__auto__;

}
}));

(datascript.conn.Conn.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"atom","atom",1243487874,null),new cljs.core.Symbol(null,"validator","validator",-325659154,null),new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null)], null);
}));

(datascript.conn.Conn.cljs$lang$type = true);

(datascript.conn.Conn.cljs$lang$ctorStr = "datascript.conn/Conn");

(datascript.conn.Conn.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"datascript.conn/Conn");
}));

/**
 * Positional factory function for datascript.conn/Conn.
 */
datascript.conn.__GT_Conn = (function datascript$conn$__GT_Conn(atom,validator,watches,meta){
return (new datascript.conn.Conn(atom,validator,watches,meta));
});


datascript.conn.__GT_Conn = (function datascript$conn$__GT_Conn(var_args){
var G__24284 = arguments.length;
switch (G__24284) {
case 1:
return datascript.conn.__GT_Conn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___24592 = arguments.length;
var i__5770__auto___24594 = (0);
while(true){
if((i__5770__auto___24594 < len__5769__auto___24592)){
args_arr__5794__auto__.push((arguments[i__5770__auto___24594]));

var G__24595 = (i__5770__auto___24594 + (1));
i__5770__auto___24594 = G__24595;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((1)),(0),null));
return datascript.conn.__GT_Conn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5795__auto__);

}
});

(datascript.conn.__GT_Conn.cljs$core$IFn$_invoke$arity$1 = (function (atom){
return (new datascript.conn.Conn(atom,null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY));
}));

(datascript.conn.__GT_Conn.cljs$core$IFn$_invoke$arity$variadic = (function (atom,rest__21588__auto__){
var opts__21589__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,rest__21588__auto__);
var ref__21590__auto__ = (new datascript.conn.Conn(atom,null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY));
var temp__5808__auto___24598 = new cljs.core.Keyword(null,"validator","validator",-1966190681).cljs$core$IFn$_invoke$arity$1(opts__21589__auto__);
if((temp__5808__auto___24598 == null)){
} else {
var validator__21584__auto___24599 = temp__5808__auto___24598;
ref__21590__auto__.extend_clj$core$IAtom3$validate$arity$3(null,validator__21584__auto___24599,cljs.core.deref(ref__21590__auto__));

(ref__21590__auto__.validator = validator__21584__auto___24599);
}

var temp__5808__auto___24600 = new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(opts__21589__auto__);
if((temp__5808__auto___24600 == null)){
} else {
var meta__21591__auto___24601 = temp__5808__auto___24600;
cljs.core.reset_meta_BANG_(ref__21590__auto__,meta__21591__auto___24601);
}

return ref__21590__auto__;
}));

/** @this {Function} */
(datascript.conn.__GT_Conn.cljs$lang$applyTo = (function (seq24278){
var G__24279 = cljs.core.first(seq24278);
var seq24278__$1 = cljs.core.next(seq24278);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24279,seq24278__$1);
}));

(datascript.conn.__GT_Conn.cljs$lang$maxFixedArity = (1));


datascript.conn.make_conn = (function datascript$conn$make_conn(opts){
var G__24334 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(opts);
return (datascript.conn.__GT_Conn.cljs$core$IFn$_invoke$arity$1 ? datascript.conn.__GT_Conn.cljs$core$IFn$_invoke$arity$1(G__24334) : datascript.conn.__GT_Conn.call(null,G__24334));
});
datascript.conn.with$ = (function datascript$conn$with(var_args){
var G__24344 = arguments.length;
switch (G__24344) {
case 2:
return datascript.conn.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.conn.with$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.conn.with$.cljs$core$IFn$_invoke$arity$2 = (function (db,tx_data){
return datascript.conn.with$.cljs$core$IFn$_invoke$arity$3(db,tx_data,null);
}));

(datascript.conn.with$.cljs$core$IFn$_invoke$arity$3 = (function (db,tx_data,tx_meta){
if(datascript.db.db_QMARK_(db)){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

if((db instanceof datascript.db.FilteredDB)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Filtered DB cannot be modified",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transaction","filtered","transaction/filtered",1699706605)], null));
} else {
return datascript.db.transact_tx_data(datascript.db.__GT_TxReport(db,db,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tx_meta),tx_data);
}
}));

(datascript.conn.with$.cljs$lang$maxFixedArity = 3);

/**
 * Applies transaction to an immutable db value, returning new immutable db value. Same as `(:db-after (with db tx-data))`.
 */
datascript.conn.db_with = (function datascript$conn$db_with(db,tx_data){
if(datascript.db.db_QMARK_(db)){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(datascript.conn.with$.cljs$core$IFn$_invoke$arity$2(db,tx_data));
});
datascript.conn.conn_QMARK_ = (function datascript$conn$conn_QMARK_(conn){
var and__5043__auto__ = (((!((conn == null))))?(((((conn.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === conn.cljs$core$IDeref$))))?true:(((!conn.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,conn):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,conn));
if(and__5043__auto__){
var temp__5806__auto__ = cljs.core.deref(conn);
if((temp__5806__auto__ == null)){
return true;
} else {
var db = temp__5806__auto__;
return datascript.db.db_QMARK_(db);
}
} else {
return and__5043__auto__;
}
});
datascript.conn.conn_from_db = (function datascript$conn$conn_from_db(db){
if(datascript.db.db_QMARK_(db)){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

var temp__5806__auto__ = datascript.storage.storage(db);
if((temp__5806__auto__ == null)){
return datascript.conn.make_conn(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),db], null));
} else {
var storage = temp__5806__auto__;
datascript.storage.store.cljs$core$IFn$_invoke$arity$1(db);

return datascript.conn.make_conn(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"tx-tail","tx-tail",1116487556),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"db-last-stored","db-last-stored",-2068760702),db], null));
}
});
datascript.conn.conn_from_datoms = (function datascript$conn$conn_from_datoms(var_args){
var G__24379 = arguments.length;
switch (G__24379) {
case 1:
return datascript.conn.conn_from_datoms.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.conn.conn_from_datoms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.conn.conn_from_datoms.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.conn.conn_from_datoms.cljs$core$IFn$_invoke$arity$1 = (function (datoms){
return datascript.conn.conn_from_db(datascript.db.init_db(datoms,null,cljs.core.PersistentArrayMap.EMPTY));
}));

(datascript.conn.conn_from_datoms.cljs$core$IFn$_invoke$arity$2 = (function (datoms,schema){
return datascript.conn.conn_from_db(datascript.db.init_db(datoms,schema,cljs.core.PersistentArrayMap.EMPTY));
}));

(datascript.conn.conn_from_datoms.cljs$core$IFn$_invoke$arity$3 = (function (datoms,schema,opts){
return datascript.conn.conn_from_db(datascript.db.init_db(datoms,schema,datascript.storage.maybe_adapt_storage(opts)));
}));

(datascript.conn.conn_from_datoms.cljs$lang$maxFixedArity = 3);

datascript.conn.create_conn = (function datascript$conn$create_conn(var_args){
var G__24392 = arguments.length;
switch (G__24392) {
case 0:
return datascript.conn.create_conn.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datascript.conn.create_conn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.conn.create_conn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.conn.create_conn.cljs$core$IFn$_invoke$arity$0 = (function (){
return datascript.conn.conn_from_db(datascript.db.empty_db(null,cljs.core.PersistentArrayMap.EMPTY));
}));

(datascript.conn.create_conn.cljs$core$IFn$_invoke$arity$1 = (function (schema){
return datascript.conn.conn_from_db(datascript.db.empty_db(schema,cljs.core.PersistentArrayMap.EMPTY));
}));

(datascript.conn.create_conn.cljs$core$IFn$_invoke$arity$2 = (function (schema,opts){
return datascript.conn.conn_from_db(datascript.db.empty_db(schema,datascript.storage.maybe_adapt_storage(opts)));
}));

(datascript.conn.create_conn.cljs$lang$maxFixedArity = 2);

datascript.conn._transact_BANG_ = (function datascript$conn$_transact_BANG_(conn,tx_data,tx_meta){
if(datascript.conn.conn_QMARK_(conn)){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

var _STAR_report = cljs.core.volatile_BANG_(null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(conn,(function (db){
var r = datascript.conn.with$.cljs$core$IFn$_invoke$arity$3(db,tx_data,tx_meta);
cljs.core.vreset_BANG_(_STAR_report,r);

return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(r);
}));

return cljs.core.deref(_STAR_report);
});
datascript.conn.transact_BANG_ = (function datascript$conn$transact_BANG_(var_args){
var G__24414 = arguments.length;
switch (G__24414) {
case 2:
return datascript.conn.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.conn.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.conn.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,tx_data){
return datascript.conn.transact_BANG_.cljs$core$IFn$_invoke$arity$3(conn,tx_data,null);
}));

(datascript.conn.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,tx_data,tx_meta){
if(datascript.conn.conn_QMARK_(conn)){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

var report = datascript.conn._transact_BANG_(conn,tx_data,tx_meta);
var seq__24419_24673 = cljs.core.seq(new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"atom","atom",-397043653).cljs$core$IFn$_invoke$arity$1(conn))));
var chunk__24420_24674 = null;
var count__24421_24675 = (0);
var i__24422_24676 = (0);
while(true){
if((i__24422_24676 < count__24421_24675)){
var vec__24435_24679 = chunk__24420_24674.cljs$core$IIndexed$_nth$arity$2(null,i__24422_24676);
var __24680 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24435_24679,(0),null);
var callback_24681 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24435_24679,(1),null);
(callback_24681.cljs$core$IFn$_invoke$arity$1 ? callback_24681.cljs$core$IFn$_invoke$arity$1(report) : callback_24681.call(null,report));


var G__24691 = seq__24419_24673;
var G__24693 = chunk__24420_24674;
var G__24694 = count__24421_24675;
var G__24695 = (i__24422_24676 + (1));
seq__24419_24673 = G__24691;
chunk__24420_24674 = G__24693;
count__24421_24675 = G__24694;
i__24422_24676 = G__24695;
continue;
} else {
var temp__5804__auto___24701 = cljs.core.seq(seq__24419_24673);
if(temp__5804__auto___24701){
var seq__24419_24702__$1 = temp__5804__auto___24701;
if(cljs.core.chunked_seq_QMARK_(seq__24419_24702__$1)){
var c__5568__auto___24705 = cljs.core.chunk_first(seq__24419_24702__$1);
var G__24707 = cljs.core.chunk_rest(seq__24419_24702__$1);
var G__24708 = c__5568__auto___24705;
var G__24709 = cljs.core.count(c__5568__auto___24705);
var G__24710 = (0);
seq__24419_24673 = G__24707;
chunk__24420_24674 = G__24708;
count__24421_24675 = G__24709;
i__24422_24676 = G__24710;
continue;
} else {
var vec__24440_24711 = cljs.core.first(seq__24419_24702__$1);
var __24712 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24440_24711,(0),null);
var callback_24713 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24440_24711,(1),null);
(callback_24713.cljs$core$IFn$_invoke$arity$1 ? callback_24713.cljs$core$IFn$_invoke$arity$1(report) : callback_24713.call(null,report));


var G__24714 = cljs.core.next(seq__24419_24702__$1);
var G__24715 = null;
var G__24716 = (0);
var G__24717 = (0);
seq__24419_24673 = G__24714;
chunk__24420_24674 = G__24715;
count__24421_24675 = G__24716;
i__24422_24676 = G__24717;
continue;
}
} else {
}
}
break;
}

return report;
}));

(datascript.conn.transact_BANG_.cljs$lang$maxFixedArity = 3);

datascript.conn.reset_conn_BANG_ = (function datascript$conn$reset_conn_BANG_(var_args){
var G__24448 = arguments.length;
switch (G__24448) {
case 2:
return datascript.conn.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.conn.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.conn.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,db){
return datascript.conn.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$3(conn,db,null);
}));

(datascript.conn.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,db,tx_meta){
if(datascript.conn.conn_QMARK_(conn)){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

if(datascript.db.db_QMARK_(db)){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

var db_before = cljs.core.deref(conn);
var report = datascript.db.map__GT_TxReport(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),db_before,new cljs.core.Keyword(null,"db-after","db-after",-571884666),db,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(db_before)?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24444_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__24444_SHARP_,new cljs.core.Keyword(null,"added","added",2057651688),false);
}),datascript.db._datoms(db_before,new cljs.core.Keyword(null,"eavt","eavt",-666437073),null,null,null,null)):null),datascript.db._datoms(db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),null,null,null,null)),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta], null));
var temp__5806__auto___24723 = datascript.storage.storage(db_before);
if((temp__5806__auto___24723 == null)){
cljs.core.reset_BANG_(conn,db);
} else {
var storage_24724 = temp__5806__auto___24723;
datascript.storage.store.cljs$core$IFn$_invoke$arity$1(db);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"atom","atom",-397043653).cljs$core$IFn$_invoke$arity$1(conn),cljs.core.assoc,new cljs.core.Keyword(null,"db","db",993250759),db,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"tx-tail","tx-tail",1116487556),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"db-last-stored","db-last-stored",-2068760702),db], 0));
}

var seq__24467_24726 = cljs.core.seq(new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"atom","atom",-397043653).cljs$core$IFn$_invoke$arity$1(conn))));
var chunk__24468_24727 = null;
var count__24469_24728 = (0);
var i__24470_24729 = (0);
while(true){
if((i__24470_24729 < count__24469_24728)){
var vec__24485_24731 = chunk__24468_24727.cljs$core$IIndexed$_nth$arity$2(null,i__24470_24729);
var __24732 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24485_24731,(0),null);
var callback_24733 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24485_24731,(1),null);
(callback_24733.cljs$core$IFn$_invoke$arity$1 ? callback_24733.cljs$core$IFn$_invoke$arity$1(report) : callback_24733.call(null,report));


var G__24735 = seq__24467_24726;
var G__24736 = chunk__24468_24727;
var G__24737 = count__24469_24728;
var G__24738 = (i__24470_24729 + (1));
seq__24467_24726 = G__24735;
chunk__24468_24727 = G__24736;
count__24469_24728 = G__24737;
i__24470_24729 = G__24738;
continue;
} else {
var temp__5804__auto___24739 = cljs.core.seq(seq__24467_24726);
if(temp__5804__auto___24739){
var seq__24467_24740__$1 = temp__5804__auto___24739;
if(cljs.core.chunked_seq_QMARK_(seq__24467_24740__$1)){
var c__5568__auto___24741 = cljs.core.chunk_first(seq__24467_24740__$1);
var G__24742 = cljs.core.chunk_rest(seq__24467_24740__$1);
var G__24743 = c__5568__auto___24741;
var G__24744 = cljs.core.count(c__5568__auto___24741);
var G__24745 = (0);
seq__24467_24726 = G__24742;
chunk__24468_24727 = G__24743;
count__24469_24728 = G__24744;
i__24470_24729 = G__24745;
continue;
} else {
var vec__24489_24746 = cljs.core.first(seq__24467_24740__$1);
var __24747 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24489_24746,(0),null);
var callback_24748 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24489_24746,(1),null);
(callback_24748.cljs$core$IFn$_invoke$arity$1 ? callback_24748.cljs$core$IFn$_invoke$arity$1(report) : callback_24748.call(null,report));


var G__24752 = cljs.core.next(seq__24467_24740__$1);
var G__24753 = null;
var G__24754 = (0);
var G__24755 = (0);
seq__24467_24726 = G__24752;
chunk__24468_24727 = G__24753;
count__24469_24728 = G__24754;
i__24470_24729 = G__24755;
continue;
}
} else {
}
}
break;
}

return db;
}));

(datascript.conn.reset_conn_BANG_.cljs$lang$maxFixedArity = 3);

datascript.conn.reset_schema_BANG_ = (function datascript$conn$reset_schema_BANG_(conn,schema){
if(datascript.conn.conn_QMARK_(conn)){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

var db = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(conn,datascript.db.with_schema,schema);
return db;
});
datascript.conn.listen_BANG_ = (function datascript$conn$listen_BANG_(var_args){
var G__24498 = arguments.length;
switch (G__24498) {
case 2:
return datascript.conn.listen_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.conn.listen_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.conn.listen_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,callback){
return datascript.conn.listen_BANG_.cljs$core$IFn$_invoke$arity$3(conn,cljs.core.rand.cljs$core$IFn$_invoke$arity$0(),callback);
}));

(datascript.conn.listen_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,key,callback){
if(datascript.conn.conn_QMARK_(conn)){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"atom","atom",-397043653).cljs$core$IFn$_invoke$arity$1(conn),cljs.core.update,new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key,callback], 0));

return key;
}));

(datascript.conn.listen_BANG_.cljs$lang$maxFixedArity = 3);

datascript.conn.unlisten_BANG_ = (function datascript$conn$unlisten_BANG_(conn,key){
if(datascript.conn.conn_QMARK_(conn)){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"atom","atom",-397043653).cljs$core$IFn$_invoke$arity$1(conn),cljs.core.update,new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key], 0));
});

//# sourceMappingURL=datascript.conn.js.map
