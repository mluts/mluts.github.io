goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__17541){
var map__17542 = p__17541;
var map__17542__$1 = cljs.core.__destructure_map(map__17542);
var m = map__17542__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17542__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17542__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__17545_18115 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17546_18116 = null;
var count__17547_18117 = (0);
var i__17548_18118 = (0);
while(true){
if((i__17548_18118 < count__17547_18117)){
var f_18119 = chunk__17546_18116.cljs$core$IIndexed$_nth$arity$2(null,i__17548_18118);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_18119], 0));


var G__18120 = seq__17545_18115;
var G__18121 = chunk__17546_18116;
var G__18122 = count__17547_18117;
var G__18123 = (i__17548_18118 + (1));
seq__17545_18115 = G__18120;
chunk__17546_18116 = G__18121;
count__17547_18117 = G__18122;
i__17548_18118 = G__18123;
continue;
} else {
var temp__5804__auto___18125 = cljs.core.seq(seq__17545_18115);
if(temp__5804__auto___18125){
var seq__17545_18127__$1 = temp__5804__auto___18125;
if(cljs.core.chunked_seq_QMARK_(seq__17545_18127__$1)){
var c__5568__auto___18128 = cljs.core.chunk_first(seq__17545_18127__$1);
var G__18129 = cljs.core.chunk_rest(seq__17545_18127__$1);
var G__18130 = c__5568__auto___18128;
var G__18131 = cljs.core.count(c__5568__auto___18128);
var G__18132 = (0);
seq__17545_18115 = G__18129;
chunk__17546_18116 = G__18130;
count__17547_18117 = G__18131;
i__17548_18118 = G__18132;
continue;
} else {
var f_18138 = cljs.core.first(seq__17545_18127__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_18138], 0));


var G__18139 = cljs.core.next(seq__17545_18127__$1);
var G__18140 = null;
var G__18141 = (0);
var G__18142 = (0);
seq__17545_18115 = G__18139;
chunk__17546_18116 = G__18140;
count__17547_18117 = G__18141;
i__17548_18118 = G__18142;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_18143 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_18143], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_18143)))?cljs.core.second(arglists_18143):arglists_18143)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__17567_18148 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17568_18149 = null;
var count__17569_18150 = (0);
var i__17570_18151 = (0);
while(true){
if((i__17570_18151 < count__17569_18150)){
var vec__17601_18153 = chunk__17568_18149.cljs$core$IIndexed$_nth$arity$2(null,i__17570_18151);
var name_18154 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17601_18153,(0),null);
var map__17604_18155 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17601_18153,(1),null);
var map__17604_18156__$1 = cljs.core.__destructure_map(map__17604_18155);
var doc_18157 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17604_18156__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18158 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17604_18156__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_18154], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_18158], 0));

if(cljs.core.truth_(doc_18157)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_18157], 0));
} else {
}


var G__18166 = seq__17567_18148;
var G__18167 = chunk__17568_18149;
var G__18168 = count__17569_18150;
var G__18169 = (i__17570_18151 + (1));
seq__17567_18148 = G__18166;
chunk__17568_18149 = G__18167;
count__17569_18150 = G__18168;
i__17570_18151 = G__18169;
continue;
} else {
var temp__5804__auto___18170 = cljs.core.seq(seq__17567_18148);
if(temp__5804__auto___18170){
var seq__17567_18173__$1 = temp__5804__auto___18170;
if(cljs.core.chunked_seq_QMARK_(seq__17567_18173__$1)){
var c__5568__auto___18175 = cljs.core.chunk_first(seq__17567_18173__$1);
var G__18176 = cljs.core.chunk_rest(seq__17567_18173__$1);
var G__18177 = c__5568__auto___18175;
var G__18178 = cljs.core.count(c__5568__auto___18175);
var G__18179 = (0);
seq__17567_18148 = G__18176;
chunk__17568_18149 = G__18177;
count__17569_18150 = G__18178;
i__17570_18151 = G__18179;
continue;
} else {
var vec__17615_18181 = cljs.core.first(seq__17567_18173__$1);
var name_18182 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17615_18181,(0),null);
var map__17618_18183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17615_18181,(1),null);
var map__17618_18184__$1 = cljs.core.__destructure_map(map__17618_18183);
var doc_18185 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17618_18184__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18186 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17618_18184__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_18182], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_18186], 0));

if(cljs.core.truth_(doc_18185)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_18185], 0));
} else {
}


var G__18190 = cljs.core.next(seq__17567_18173__$1);
var G__18191 = null;
var G__18192 = (0);
var G__18193 = (0);
seq__17567_18148 = G__18190;
chunk__17568_18149 = G__18191;
count__17569_18150 = G__18192;
i__17570_18151 = G__18193;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__17633 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__17634 = null;
var count__17635 = (0);
var i__17636 = (0);
while(true){
if((i__17636 < count__17635)){
var role = chunk__17634.cljs$core$IIndexed$_nth$arity$2(null,i__17636);
var temp__5804__auto___18196__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___18196__$1)){
var spec_18197 = temp__5804__auto___18196__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_18197)], 0));
} else {
}


var G__18198 = seq__17633;
var G__18199 = chunk__17634;
var G__18200 = count__17635;
var G__18201 = (i__17636 + (1));
seq__17633 = G__18198;
chunk__17634 = G__18199;
count__17635 = G__18200;
i__17636 = G__18201;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__17633);
if(temp__5804__auto____$1){
var seq__17633__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__17633__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17633__$1);
var G__18203 = cljs.core.chunk_rest(seq__17633__$1);
var G__18204 = c__5568__auto__;
var G__18205 = cljs.core.count(c__5568__auto__);
var G__18206 = (0);
seq__17633 = G__18203;
chunk__17634 = G__18204;
count__17635 = G__18205;
i__17636 = G__18206;
continue;
} else {
var role = cljs.core.first(seq__17633__$1);
var temp__5804__auto___18208__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___18208__$2)){
var spec_18210 = temp__5804__auto___18208__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_18210)], 0));
} else {
}


var G__18212 = cljs.core.next(seq__17633__$1);
var G__18213 = null;
var G__18214 = (0);
var G__18215 = (0);
seq__17633 = G__18212;
chunk__17634 = G__18213;
count__17635 = G__18214;
i__17636 = G__18215;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__18226 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__18227 = cljs.core.ex_cause(t);
via = G__18226;
t = G__18227;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__17802 = datafied_throwable;
var map__17802__$1 = cljs.core.__destructure_map(map__17802);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17802__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17802__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17802__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__17803 = cljs.core.last(via);
var map__17803__$1 = cljs.core.__destructure_map(map__17803);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17803__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17803__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17803__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__17805 = data;
var map__17805__$1 = cljs.core.__destructure_map(map__17805);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17805__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17805__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17805__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__17806 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__17806__$1 = cljs.core.__destructure_map(map__17806);
var top_data = map__17806__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17806__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__17828 = phase;
var G__17828__$1 = (((G__17828 instanceof cljs.core.Keyword))?G__17828.fqn:null);
switch (G__17828__$1) {
case "read-source":
var map__17842 = data;
var map__17842__$1 = cljs.core.__destructure_map(map__17842);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17842__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17842__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__17843 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__17843__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17843,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__17843);
var G__17843__$2 = (cljs.core.truth_((function (){var fexpr__17849 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__17849.cljs$core$IFn$_invoke$arity$1 ? fexpr__17849.cljs$core$IFn$_invoke$arity$1(source) : fexpr__17849.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__17843__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__17843__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17843__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__17843__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__17857 = top_data;
var G__17857__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17857,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__17857);
var G__17857__$2 = (cljs.core.truth_((function (){var fexpr__17869 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__17869.cljs$core$IFn$_invoke$arity$1 ? fexpr__17869.cljs$core$IFn$_invoke$arity$1(source) : fexpr__17869.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__17857__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__17857__$1);
var G__17857__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17857__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__17857__$2);
var G__17857__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17857__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__17857__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17857__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__17857__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__17880 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17880,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17880,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17880,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17880,(3),null);
var G__17901 = top_data;
var G__17901__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17901,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__17901);
var G__17901__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17901__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__17901__$1);
var G__17901__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17901__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__17901__$2);
var G__17901__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17901__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__17901__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17901__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__17901__$4;
}

break;
case "execution":
var vec__17922 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17922,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17922,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17922,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17922,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__17786_SHARP_){
var or__5045__auto__ = (p1__17786_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__17932 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__17932.cljs$core$IFn$_invoke$arity$1 ? fexpr__17932.cljs$core$IFn$_invoke$arity$1(p1__17786_SHARP_) : fexpr__17932.call(null,p1__17786_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__17937 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__17937__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17937,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__17937);
var G__17937__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17937__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__17937__$1);
var G__17937__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17937__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__17937__$2);
var G__17937__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17937__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__17937__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17937__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__17937__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17828__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__17979){
var map__17981 = p__17979;
var map__17981__$1 = cljs.core.__destructure_map(map__17981);
var triage_data = map__17981__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17981__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17981__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17981__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17981__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17981__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17981__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17981__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17981__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__18005 = phase;
var G__18005__$1 = (((G__18005 instanceof cljs.core.Keyword))?G__18005.fqn:null);
switch (G__18005__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__18009 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__18010 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18011 = loc;
var G__18012 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18024_18312 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18025_18313 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18026_18314 = true;
var _STAR_print_fn_STAR__temp_val__18027_18315 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18026_18314);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18027_18315);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17970_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__17970_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18025_18313);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18024_18312);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__18009,G__18010,G__18011,G__18012) : format.call(null,G__18009,G__18010,G__18011,G__18012));

break;
case "macroexpansion":
var G__18041 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__18042 = cause_type;
var G__18043 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18045 = loc;
var G__18046 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18041,G__18042,G__18043,G__18045,G__18046) : format.call(null,G__18041,G__18042,G__18043,G__18045,G__18046));

break;
case "compile-syntax-check":
var G__18048 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__18049 = cause_type;
var G__18050 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18051 = loc;
var G__18052 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18048,G__18049,G__18050,G__18051,G__18052) : format.call(null,G__18048,G__18049,G__18050,G__18051,G__18052));

break;
case "compilation":
var G__18056 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__18057 = cause_type;
var G__18058 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18059 = loc;
var G__18060 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18056,G__18057,G__18058,G__18059,G__18060) : format.call(null,G__18056,G__18057,G__18058,G__18059,G__18060));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__18065 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__18066 = symbol;
var G__18067 = loc;
var G__18068 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18070_18334 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18071_18335 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18072_18336 = true;
var _STAR_print_fn_STAR__temp_val__18073_18337 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18072_18336);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18073_18337);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17976_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__17976_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18071_18335);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18070_18334);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__18065,G__18066,G__18067,G__18068) : format.call(null,G__18065,G__18066,G__18067,G__18068));
} else {
var G__18084 = "Execution error%s at %s(%s).\n%s\n";
var G__18085 = cause_type;
var G__18086 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18087 = loc;
var G__18088 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18084,G__18085,G__18086,G__18087,G__18088) : format.call(null,G__18084,G__18085,G__18086,G__18087,G__18088));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18005__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
