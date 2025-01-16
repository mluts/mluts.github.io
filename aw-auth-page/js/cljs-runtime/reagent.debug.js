goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__15758__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__15758 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15759__i = 0, G__15759__a = new Array(arguments.length -  0);
while (G__15759__i < G__15759__a.length) {G__15759__a[G__15759__i] = arguments[G__15759__i + 0]; ++G__15759__i;}
  args = new cljs.core.IndexedSeq(G__15759__a,0,null);
} 
return G__15758__delegate.call(this,args);};
G__15758.cljs$lang$maxFixedArity = 0;
G__15758.cljs$lang$applyTo = (function (arglist__15760){
var args = cljs.core.seq(arglist__15760);
return G__15758__delegate(args);
});
G__15758.cljs$core$IFn$_invoke$arity$variadic = G__15758__delegate;
return G__15758;
})()
);

(o.error = (function() { 
var G__15762__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__15762 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15763__i = 0, G__15763__a = new Array(arguments.length -  0);
while (G__15763__i < G__15763__a.length) {G__15763__a[G__15763__i] = arguments[G__15763__i + 0]; ++G__15763__i;}
  args = new cljs.core.IndexedSeq(G__15763__a,0,null);
} 
return G__15762__delegate.call(this,args);};
G__15762.cljs$lang$maxFixedArity = 0;
G__15762.cljs$lang$applyTo = (function (arglist__15764){
var args = cljs.core.seq(arglist__15764);
return G__15762__delegate(args);
});
G__15762.cljs$core$IFn$_invoke$arity$variadic = G__15762__delegate;
return G__15762;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
