goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_19423 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_19423(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_19426 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_19426(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__17758 = coll;
var G__17759 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__17758,G__17759) : shadow.dom.lazy_native_coll_seq.call(null,G__17758,G__17759));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__17900 = arguments.length;
switch (G__17900) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__17928 = arguments.length;
switch (G__17928) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__17957 = arguments.length;
switch (G__17957) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__17991 = arguments.length;
switch (G__17991) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__18033 = arguments.length;
switch (G__18033) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__18079 = arguments.length;
switch (G__18079) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e18111){if((e18111 instanceof Object)){
var e = e18111;
return console.log("didnt support attachEvent",el,e);
} else {
throw e18111;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__18134 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__18135 = null;
var count__18136 = (0);
var i__18137 = (0);
while(true){
if((i__18137 < count__18136)){
var el = chunk__18135.cljs$core$IIndexed$_nth$arity$2(null,i__18137);
var handler_19471__$1 = ((function (seq__18134,chunk__18135,count__18136,i__18137,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__18134,chunk__18135,count__18136,i__18137,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_19471__$1);


var G__19473 = seq__18134;
var G__19474 = chunk__18135;
var G__19475 = count__18136;
var G__19476 = (i__18137 + (1));
seq__18134 = G__19473;
chunk__18135 = G__19474;
count__18136 = G__19475;
i__18137 = G__19476;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18134);
if(temp__5804__auto__){
var seq__18134__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18134__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18134__$1);
var G__19477 = cljs.core.chunk_rest(seq__18134__$1);
var G__19478 = c__5568__auto__;
var G__19479 = cljs.core.count(c__5568__auto__);
var G__19480 = (0);
seq__18134 = G__19477;
chunk__18135 = G__19478;
count__18136 = G__19479;
i__18137 = G__19480;
continue;
} else {
var el = cljs.core.first(seq__18134__$1);
var handler_19482__$1 = ((function (seq__18134,chunk__18135,count__18136,i__18137,el,seq__18134__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__18134,chunk__18135,count__18136,i__18137,el,seq__18134__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_19482__$1);


var G__19484 = cljs.core.next(seq__18134__$1);
var G__19485 = null;
var G__19486 = (0);
var G__19487 = (0);
seq__18134 = G__19484;
chunk__18135 = G__19485;
count__18136 = G__19486;
i__18137 = G__19487;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__18220 = arguments.length;
switch (G__18220) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__18240 = cljs.core.seq(events);
var chunk__18241 = null;
var count__18242 = (0);
var i__18243 = (0);
while(true){
if((i__18243 < count__18242)){
var vec__18262 = chunk__18241.cljs$core$IIndexed$_nth$arity$2(null,i__18243);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18262,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18262,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__19490 = seq__18240;
var G__19491 = chunk__18241;
var G__19492 = count__18242;
var G__19493 = (i__18243 + (1));
seq__18240 = G__19490;
chunk__18241 = G__19491;
count__18242 = G__19492;
i__18243 = G__19493;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18240);
if(temp__5804__auto__){
var seq__18240__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18240__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18240__$1);
var G__19495 = cljs.core.chunk_rest(seq__18240__$1);
var G__19496 = c__5568__auto__;
var G__19497 = cljs.core.count(c__5568__auto__);
var G__19498 = (0);
seq__18240 = G__19495;
chunk__18241 = G__19496;
count__18242 = G__19497;
i__18243 = G__19498;
continue;
} else {
var vec__18274 = cljs.core.first(seq__18240__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18274,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18274,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__19499 = cljs.core.next(seq__18240__$1);
var G__19500 = null;
var G__19501 = (0);
var G__19502 = (0);
seq__18240 = G__19499;
chunk__18241 = G__19500;
count__18242 = G__19501;
i__18243 = G__19502;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__18282 = cljs.core.seq(styles);
var chunk__18283 = null;
var count__18284 = (0);
var i__18285 = (0);
while(true){
if((i__18285 < count__18284)){
var vec__18304 = chunk__18283.cljs$core$IIndexed$_nth$arity$2(null,i__18285);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18304,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18304,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__19503 = seq__18282;
var G__19504 = chunk__18283;
var G__19505 = count__18284;
var G__19506 = (i__18285 + (1));
seq__18282 = G__19503;
chunk__18283 = G__19504;
count__18284 = G__19505;
i__18285 = G__19506;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18282);
if(temp__5804__auto__){
var seq__18282__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18282__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18282__$1);
var G__19507 = cljs.core.chunk_rest(seq__18282__$1);
var G__19508 = c__5568__auto__;
var G__19509 = cljs.core.count(c__5568__auto__);
var G__19510 = (0);
seq__18282 = G__19507;
chunk__18283 = G__19508;
count__18284 = G__19509;
i__18285 = G__19510;
continue;
} else {
var vec__18317 = cljs.core.first(seq__18282__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18317,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18317,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__19511 = cljs.core.next(seq__18282__$1);
var G__19512 = null;
var G__19513 = (0);
var G__19514 = (0);
seq__18282 = G__19511;
chunk__18283 = G__19512;
count__18284 = G__19513;
i__18285 = G__19514;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__18330_19515 = key;
var G__18330_19516__$1 = (((G__18330_19515 instanceof cljs.core.Keyword))?G__18330_19515.fqn:null);
switch (G__18330_19516__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_19522 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_19522,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_19522,"aria-");
}
})())){
el.setAttribute(ks_19522,value);
} else {
(el[ks_19522] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__18402){
var map__18404 = p__18402;
var map__18404__$1 = cljs.core.__destructure_map(map__18404);
var props = map__18404__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18404__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__18408 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18408,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18408,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18408,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__18419 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__18419,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__18419;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__18431 = arguments.length;
switch (G__18431) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__18444){
var vec__18445 = p__18444;
var seq__18446 = cljs.core.seq(vec__18445);
var first__18447 = cljs.core.first(seq__18446);
var seq__18446__$1 = cljs.core.next(seq__18446);
var nn = first__18447;
var first__18447__$1 = cljs.core.first(seq__18446__$1);
var seq__18446__$2 = cljs.core.next(seq__18446__$1);
var np = first__18447__$1;
var nc = seq__18446__$2;
var node = vec__18445;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18451 = nn;
var G__18452 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__18451,G__18452) : create_fn.call(null,G__18451,G__18452));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18455 = nn;
var G__18456 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__18455,G__18456) : create_fn.call(null,G__18455,G__18456));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__18460 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18460,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18460,(1),null);
var seq__18463_19531 = cljs.core.seq(node_children);
var chunk__18464_19532 = null;
var count__18465_19533 = (0);
var i__18466_19534 = (0);
while(true){
if((i__18466_19534 < count__18465_19533)){
var child_struct_19537 = chunk__18464_19532.cljs$core$IIndexed$_nth$arity$2(null,i__18466_19534);
var children_19538 = shadow.dom.dom_node(child_struct_19537);
if(cljs.core.seq_QMARK_(children_19538)){
var seq__18581_19540 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_19538));
var chunk__18584_19541 = null;
var count__18585_19542 = (0);
var i__18586_19543 = (0);
while(true){
if((i__18586_19543 < count__18585_19542)){
var child_19544 = chunk__18584_19541.cljs$core$IIndexed$_nth$arity$2(null,i__18586_19543);
if(cljs.core.truth_(child_19544)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19544);


var G__19545 = seq__18581_19540;
var G__19546 = chunk__18584_19541;
var G__19547 = count__18585_19542;
var G__19548 = (i__18586_19543 + (1));
seq__18581_19540 = G__19545;
chunk__18584_19541 = G__19546;
count__18585_19542 = G__19547;
i__18586_19543 = G__19548;
continue;
} else {
var G__19549 = seq__18581_19540;
var G__19550 = chunk__18584_19541;
var G__19551 = count__18585_19542;
var G__19552 = (i__18586_19543 + (1));
seq__18581_19540 = G__19549;
chunk__18584_19541 = G__19550;
count__18585_19542 = G__19551;
i__18586_19543 = G__19552;
continue;
}
} else {
var temp__5804__auto___19553 = cljs.core.seq(seq__18581_19540);
if(temp__5804__auto___19553){
var seq__18581_19554__$1 = temp__5804__auto___19553;
if(cljs.core.chunked_seq_QMARK_(seq__18581_19554__$1)){
var c__5568__auto___19555 = cljs.core.chunk_first(seq__18581_19554__$1);
var G__19556 = cljs.core.chunk_rest(seq__18581_19554__$1);
var G__19557 = c__5568__auto___19555;
var G__19558 = cljs.core.count(c__5568__auto___19555);
var G__19559 = (0);
seq__18581_19540 = G__19556;
chunk__18584_19541 = G__19557;
count__18585_19542 = G__19558;
i__18586_19543 = G__19559;
continue;
} else {
var child_19560 = cljs.core.first(seq__18581_19554__$1);
if(cljs.core.truth_(child_19560)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19560);


var G__19562 = cljs.core.next(seq__18581_19554__$1);
var G__19563 = null;
var G__19564 = (0);
var G__19565 = (0);
seq__18581_19540 = G__19562;
chunk__18584_19541 = G__19563;
count__18585_19542 = G__19564;
i__18586_19543 = G__19565;
continue;
} else {
var G__19566 = cljs.core.next(seq__18581_19554__$1);
var G__19567 = null;
var G__19568 = (0);
var G__19569 = (0);
seq__18581_19540 = G__19566;
chunk__18584_19541 = G__19567;
count__18585_19542 = G__19568;
i__18586_19543 = G__19569;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_19538);
}


var G__19570 = seq__18463_19531;
var G__19571 = chunk__18464_19532;
var G__19572 = count__18465_19533;
var G__19573 = (i__18466_19534 + (1));
seq__18463_19531 = G__19570;
chunk__18464_19532 = G__19571;
count__18465_19533 = G__19572;
i__18466_19534 = G__19573;
continue;
} else {
var temp__5804__auto___19574 = cljs.core.seq(seq__18463_19531);
if(temp__5804__auto___19574){
var seq__18463_19575__$1 = temp__5804__auto___19574;
if(cljs.core.chunked_seq_QMARK_(seq__18463_19575__$1)){
var c__5568__auto___19576 = cljs.core.chunk_first(seq__18463_19575__$1);
var G__19577 = cljs.core.chunk_rest(seq__18463_19575__$1);
var G__19578 = c__5568__auto___19576;
var G__19579 = cljs.core.count(c__5568__auto___19576);
var G__19580 = (0);
seq__18463_19531 = G__19577;
chunk__18464_19532 = G__19578;
count__18465_19533 = G__19579;
i__18466_19534 = G__19580;
continue;
} else {
var child_struct_19581 = cljs.core.first(seq__18463_19575__$1);
var children_19583 = shadow.dom.dom_node(child_struct_19581);
if(cljs.core.seq_QMARK_(children_19583)){
var seq__18612_19584 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_19583));
var chunk__18614_19585 = null;
var count__18615_19586 = (0);
var i__18616_19587 = (0);
while(true){
if((i__18616_19587 < count__18615_19586)){
var child_19588 = chunk__18614_19585.cljs$core$IIndexed$_nth$arity$2(null,i__18616_19587);
if(cljs.core.truth_(child_19588)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19588);


var G__19589 = seq__18612_19584;
var G__19590 = chunk__18614_19585;
var G__19591 = count__18615_19586;
var G__19592 = (i__18616_19587 + (1));
seq__18612_19584 = G__19589;
chunk__18614_19585 = G__19590;
count__18615_19586 = G__19591;
i__18616_19587 = G__19592;
continue;
} else {
var G__19593 = seq__18612_19584;
var G__19594 = chunk__18614_19585;
var G__19595 = count__18615_19586;
var G__19596 = (i__18616_19587 + (1));
seq__18612_19584 = G__19593;
chunk__18614_19585 = G__19594;
count__18615_19586 = G__19595;
i__18616_19587 = G__19596;
continue;
}
} else {
var temp__5804__auto___19597__$1 = cljs.core.seq(seq__18612_19584);
if(temp__5804__auto___19597__$1){
var seq__18612_19598__$1 = temp__5804__auto___19597__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18612_19598__$1)){
var c__5568__auto___19599 = cljs.core.chunk_first(seq__18612_19598__$1);
var G__19600 = cljs.core.chunk_rest(seq__18612_19598__$1);
var G__19601 = c__5568__auto___19599;
var G__19602 = cljs.core.count(c__5568__auto___19599);
var G__19603 = (0);
seq__18612_19584 = G__19600;
chunk__18614_19585 = G__19601;
count__18615_19586 = G__19602;
i__18616_19587 = G__19603;
continue;
} else {
var child_19604 = cljs.core.first(seq__18612_19598__$1);
if(cljs.core.truth_(child_19604)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19604);


var G__19605 = cljs.core.next(seq__18612_19598__$1);
var G__19606 = null;
var G__19607 = (0);
var G__19608 = (0);
seq__18612_19584 = G__19605;
chunk__18614_19585 = G__19606;
count__18615_19586 = G__19607;
i__18616_19587 = G__19608;
continue;
} else {
var G__19609 = cljs.core.next(seq__18612_19598__$1);
var G__19610 = null;
var G__19611 = (0);
var G__19612 = (0);
seq__18612_19584 = G__19609;
chunk__18614_19585 = G__19610;
count__18615_19586 = G__19611;
i__18616_19587 = G__19612;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_19583);
}


var G__19613 = cljs.core.next(seq__18463_19575__$1);
var G__19614 = null;
var G__19615 = (0);
var G__19616 = (0);
seq__18463_19531 = G__19613;
chunk__18464_19532 = G__19614;
count__18465_19533 = G__19615;
i__18466_19534 = G__19616;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__18674 = cljs.core.seq(node);
var chunk__18675 = null;
var count__18676 = (0);
var i__18677 = (0);
while(true){
if((i__18677 < count__18676)){
var n = chunk__18675.cljs$core$IIndexed$_nth$arity$2(null,i__18677);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__19623 = seq__18674;
var G__19624 = chunk__18675;
var G__19625 = count__18676;
var G__19626 = (i__18677 + (1));
seq__18674 = G__19623;
chunk__18675 = G__19624;
count__18676 = G__19625;
i__18677 = G__19626;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18674);
if(temp__5804__auto__){
var seq__18674__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18674__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18674__$1);
var G__19628 = cljs.core.chunk_rest(seq__18674__$1);
var G__19629 = c__5568__auto__;
var G__19630 = cljs.core.count(c__5568__auto__);
var G__19631 = (0);
seq__18674 = G__19628;
chunk__18675 = G__19629;
count__18676 = G__19630;
i__18677 = G__19631;
continue;
} else {
var n = cljs.core.first(seq__18674__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__19632 = cljs.core.next(seq__18674__$1);
var G__19633 = null;
var G__19634 = (0);
var G__19635 = (0);
seq__18674 = G__19632;
chunk__18675 = G__19633;
count__18676 = G__19634;
i__18677 = G__19635;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__18701 = arguments.length;
switch (G__18701) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__18710 = arguments.length;
switch (G__18710) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__18735 = arguments.length;
switch (G__18735) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19651 = arguments.length;
var i__5770__auto___19652 = (0);
while(true){
if((i__5770__auto___19652 < len__5769__auto___19651)){
args__5775__auto__.push((arguments[i__5770__auto___19652]));

var G__19654 = (i__5770__auto___19652 + (1));
i__5770__auto___19652 = G__19654;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__18782_19655 = cljs.core.seq(nodes);
var chunk__18783_19656 = null;
var count__18784_19657 = (0);
var i__18785_19658 = (0);
while(true){
if((i__18785_19658 < count__18784_19657)){
var node_19659 = chunk__18783_19656.cljs$core$IIndexed$_nth$arity$2(null,i__18785_19658);
fragment.appendChild(shadow.dom._to_dom(node_19659));


var G__19662 = seq__18782_19655;
var G__19663 = chunk__18783_19656;
var G__19664 = count__18784_19657;
var G__19665 = (i__18785_19658 + (1));
seq__18782_19655 = G__19662;
chunk__18783_19656 = G__19663;
count__18784_19657 = G__19664;
i__18785_19658 = G__19665;
continue;
} else {
var temp__5804__auto___19666 = cljs.core.seq(seq__18782_19655);
if(temp__5804__auto___19666){
var seq__18782_19668__$1 = temp__5804__auto___19666;
if(cljs.core.chunked_seq_QMARK_(seq__18782_19668__$1)){
var c__5568__auto___19670 = cljs.core.chunk_first(seq__18782_19668__$1);
var G__19671 = cljs.core.chunk_rest(seq__18782_19668__$1);
var G__19672 = c__5568__auto___19670;
var G__19673 = cljs.core.count(c__5568__auto___19670);
var G__19674 = (0);
seq__18782_19655 = G__19671;
chunk__18783_19656 = G__19672;
count__18784_19657 = G__19673;
i__18785_19658 = G__19674;
continue;
} else {
var node_19675 = cljs.core.first(seq__18782_19668__$1);
fragment.appendChild(shadow.dom._to_dom(node_19675));


var G__19676 = cljs.core.next(seq__18782_19668__$1);
var G__19677 = null;
var G__19678 = (0);
var G__19679 = (0);
seq__18782_19655 = G__19676;
chunk__18783_19656 = G__19677;
count__18784_19657 = G__19678;
i__18785_19658 = G__19679;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq18773){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18773));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__18810_19685 = cljs.core.seq(scripts);
var chunk__18811_19686 = null;
var count__18812_19687 = (0);
var i__18813_19688 = (0);
while(true){
if((i__18813_19688 < count__18812_19687)){
var vec__18837_19691 = chunk__18811_19686.cljs$core$IIndexed$_nth$arity$2(null,i__18813_19688);
var script_tag_19692 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18837_19691,(0),null);
var script_body_19693 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18837_19691,(1),null);
eval(script_body_19693);


var G__19695 = seq__18810_19685;
var G__19696 = chunk__18811_19686;
var G__19697 = count__18812_19687;
var G__19698 = (i__18813_19688 + (1));
seq__18810_19685 = G__19695;
chunk__18811_19686 = G__19696;
count__18812_19687 = G__19697;
i__18813_19688 = G__19698;
continue;
} else {
var temp__5804__auto___19699 = cljs.core.seq(seq__18810_19685);
if(temp__5804__auto___19699){
var seq__18810_19700__$1 = temp__5804__auto___19699;
if(cljs.core.chunked_seq_QMARK_(seq__18810_19700__$1)){
var c__5568__auto___19701 = cljs.core.chunk_first(seq__18810_19700__$1);
var G__19702 = cljs.core.chunk_rest(seq__18810_19700__$1);
var G__19703 = c__5568__auto___19701;
var G__19705 = cljs.core.count(c__5568__auto___19701);
var G__19706 = (0);
seq__18810_19685 = G__19702;
chunk__18811_19686 = G__19703;
count__18812_19687 = G__19705;
i__18813_19688 = G__19706;
continue;
} else {
var vec__18849_19707 = cljs.core.first(seq__18810_19700__$1);
var script_tag_19708 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18849_19707,(0),null);
var script_body_19709 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18849_19707,(1),null);
eval(script_body_19709);


var G__19712 = cljs.core.next(seq__18810_19700__$1);
var G__19713 = null;
var G__19714 = (0);
var G__19715 = (0);
seq__18810_19685 = G__19712;
chunk__18811_19686 = G__19713;
count__18812_19687 = G__19714;
i__18813_19688 = G__19715;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__18856){
var vec__18857 = p__18856;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18857,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18857,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__18899 = arguments.length;
switch (G__18899) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__18946 = cljs.core.seq(style_keys);
var chunk__18947 = null;
var count__18948 = (0);
var i__18949 = (0);
while(true){
if((i__18949 < count__18948)){
var it = chunk__18947.cljs$core$IIndexed$_nth$arity$2(null,i__18949);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19725 = seq__18946;
var G__19726 = chunk__18947;
var G__19727 = count__18948;
var G__19728 = (i__18949 + (1));
seq__18946 = G__19725;
chunk__18947 = G__19726;
count__18948 = G__19727;
i__18949 = G__19728;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18946);
if(temp__5804__auto__){
var seq__18946__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18946__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18946__$1);
var G__19734 = cljs.core.chunk_rest(seq__18946__$1);
var G__19735 = c__5568__auto__;
var G__19736 = cljs.core.count(c__5568__auto__);
var G__19737 = (0);
seq__18946 = G__19734;
chunk__18947 = G__19735;
count__18948 = G__19736;
i__18949 = G__19737;
continue;
} else {
var it = cljs.core.first(seq__18946__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19738 = cljs.core.next(seq__18946__$1);
var G__19739 = null;
var G__19740 = (0);
var G__19741 = (0);
seq__18946 = G__19738;
chunk__18947 = G__19739;
count__18948 = G__19740;
i__18949 = G__19741;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k18964,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__18982 = k18964;
var G__18982__$1 = (((G__18982 instanceof cljs.core.Keyword))?G__18982.fqn:null);
switch (G__18982__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18964,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__18987){
var vec__18990 = p__18987;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18990,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18990,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18963){
var self__ = this;
var G__18963__$1 = this;
return (new cljs.core.RecordIter((0),G__18963__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18966,other18967){
var self__ = this;
var this18966__$1 = this;
return (((!((other18967 == null)))) && ((((this18966__$1.constructor === other18967.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18966__$1.x,other18967.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18966__$1.y,other18967.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18966__$1.__extmap,other18967.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k18964){
var self__ = this;
var this__5350__auto____$1 = this;
var G__19045 = k18964;
var G__19045__$1 = (((G__19045 instanceof cljs.core.Keyword))?G__19045.fqn:null);
switch (G__19045__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18964);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__18963){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__19049 = cljs.core.keyword_identical_QMARK_;
var expr__19050 = k__5352__auto__;
if(cljs.core.truth_((pred__19049.cljs$core$IFn$_invoke$arity$2 ? pred__19049.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__19050) : pred__19049.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__19050)))){
return (new shadow.dom.Coordinate(G__18963,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__19049.cljs$core$IFn$_invoke$arity$2 ? pred__19049.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__19050) : pred__19049.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__19050)))){
return (new shadow.dom.Coordinate(self__.x,G__18963,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__18963),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__18963){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__18963,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__18969){
var extmap__5385__auto__ = (function (){var G__19070 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18969,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__18969)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__19070);
} else {
return G__19070;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__18969),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__18969),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k19080,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__19094 = k19080;
var G__19094__$1 = (((G__19094 instanceof cljs.core.Keyword))?G__19094.fqn:null);
switch (G__19094__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19080,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__19099){
var vec__19100 = p__19099;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19100,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19100,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19079){
var self__ = this;
var G__19079__$1 = this;
return (new cljs.core.RecordIter((0),G__19079__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19081,other19082){
var self__ = this;
var this19081__$1 = this;
return (((!((other19082 == null)))) && ((((this19081__$1.constructor === other19082.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19081__$1.w,other19082.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19081__$1.h,other19082.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19081__$1.__extmap,other19082.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k19080){
var self__ = this;
var this__5350__auto____$1 = this;
var G__19148 = k19080;
var G__19148__$1 = (((G__19148 instanceof cljs.core.Keyword))?G__19148.fqn:null);
switch (G__19148__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k19080);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__19079){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__19154 = cljs.core.keyword_identical_QMARK_;
var expr__19155 = k__5352__auto__;
if(cljs.core.truth_((pred__19154.cljs$core$IFn$_invoke$arity$2 ? pred__19154.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__19155) : pred__19154.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__19155)))){
return (new shadow.dom.Size(G__19079,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__19154.cljs$core$IFn$_invoke$arity$2 ? pred__19154.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__19155) : pred__19154.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__19155)))){
return (new shadow.dom.Size(self__.w,G__19079,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__19079),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__19079){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__19079,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__19086){
var extmap__5385__auto__ = (function (){var G__19181 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19086,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__19086)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__19181);
} else {
return G__19181;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__19086),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__19086),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__19796 = (i + (1));
var G__19797 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__19796;
ret = G__19797;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__19211){
var vec__19212 = p__19211;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19212,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19212,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__19218 = arguments.length;
switch (G__19218) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__19809 = ps;
var G__19810 = (i + (1));
el__$1 = G__19809;
i = G__19810;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__19242 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19242,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19242,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19242,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__19250_19832 = cljs.core.seq(props);
var chunk__19251_19833 = null;
var count__19252_19834 = (0);
var i__19253_19835 = (0);
while(true){
if((i__19253_19835 < count__19252_19834)){
var vec__19272_19837 = chunk__19251_19833.cljs$core$IIndexed$_nth$arity$2(null,i__19253_19835);
var k_19838 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19272_19837,(0),null);
var v_19839 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19272_19837,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_19838);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19838),v_19839);


var G__19842 = seq__19250_19832;
var G__19843 = chunk__19251_19833;
var G__19844 = count__19252_19834;
var G__19845 = (i__19253_19835 + (1));
seq__19250_19832 = G__19842;
chunk__19251_19833 = G__19843;
count__19252_19834 = G__19844;
i__19253_19835 = G__19845;
continue;
} else {
var temp__5804__auto___19846 = cljs.core.seq(seq__19250_19832);
if(temp__5804__auto___19846){
var seq__19250_19847__$1 = temp__5804__auto___19846;
if(cljs.core.chunked_seq_QMARK_(seq__19250_19847__$1)){
var c__5568__auto___19848 = cljs.core.chunk_first(seq__19250_19847__$1);
var G__19849 = cljs.core.chunk_rest(seq__19250_19847__$1);
var G__19850 = c__5568__auto___19848;
var G__19851 = cljs.core.count(c__5568__auto___19848);
var G__19852 = (0);
seq__19250_19832 = G__19849;
chunk__19251_19833 = G__19850;
count__19252_19834 = G__19851;
i__19253_19835 = G__19852;
continue;
} else {
var vec__19275_19853 = cljs.core.first(seq__19250_19847__$1);
var k_19854 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19275_19853,(0),null);
var v_19855 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19275_19853,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_19854);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19854),v_19855);


var G__19856 = cljs.core.next(seq__19250_19847__$1);
var G__19857 = null;
var G__19858 = (0);
var G__19859 = (0);
seq__19250_19832 = G__19856;
chunk__19251_19833 = G__19857;
count__19252_19834 = G__19858;
i__19253_19835 = G__19859;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__19287 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19287,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19287,(1),null);
var seq__19290_19868 = cljs.core.seq(node_children);
var chunk__19292_19869 = null;
var count__19293_19870 = (0);
var i__19294_19871 = (0);
while(true){
if((i__19294_19871 < count__19293_19870)){
var child_struct_19877 = chunk__19292_19869.cljs$core$IIndexed$_nth$arity$2(null,i__19294_19871);
if((!((child_struct_19877 == null)))){
if(typeof child_struct_19877 === 'string'){
var text_19878 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19878),child_struct_19877].join(''));
} else {
var children_19879 = shadow.dom.svg_node(child_struct_19877);
if(cljs.core.seq_QMARK_(children_19879)){
var seq__19316_19882 = cljs.core.seq(children_19879);
var chunk__19318_19883 = null;
var count__19319_19884 = (0);
var i__19320_19885 = (0);
while(true){
if((i__19320_19885 < count__19319_19884)){
var child_19888 = chunk__19318_19883.cljs$core$IIndexed$_nth$arity$2(null,i__19320_19885);
if(cljs.core.truth_(child_19888)){
node.appendChild(child_19888);


var G__19892 = seq__19316_19882;
var G__19893 = chunk__19318_19883;
var G__19894 = count__19319_19884;
var G__19895 = (i__19320_19885 + (1));
seq__19316_19882 = G__19892;
chunk__19318_19883 = G__19893;
count__19319_19884 = G__19894;
i__19320_19885 = G__19895;
continue;
} else {
var G__19896 = seq__19316_19882;
var G__19897 = chunk__19318_19883;
var G__19898 = count__19319_19884;
var G__19899 = (i__19320_19885 + (1));
seq__19316_19882 = G__19896;
chunk__19318_19883 = G__19897;
count__19319_19884 = G__19898;
i__19320_19885 = G__19899;
continue;
}
} else {
var temp__5804__auto___19901 = cljs.core.seq(seq__19316_19882);
if(temp__5804__auto___19901){
var seq__19316_19905__$1 = temp__5804__auto___19901;
if(cljs.core.chunked_seq_QMARK_(seq__19316_19905__$1)){
var c__5568__auto___19907 = cljs.core.chunk_first(seq__19316_19905__$1);
var G__19908 = cljs.core.chunk_rest(seq__19316_19905__$1);
var G__19909 = c__5568__auto___19907;
var G__19910 = cljs.core.count(c__5568__auto___19907);
var G__19911 = (0);
seq__19316_19882 = G__19908;
chunk__19318_19883 = G__19909;
count__19319_19884 = G__19910;
i__19320_19885 = G__19911;
continue;
} else {
var child_19914 = cljs.core.first(seq__19316_19905__$1);
if(cljs.core.truth_(child_19914)){
node.appendChild(child_19914);


var G__19915 = cljs.core.next(seq__19316_19905__$1);
var G__19916 = null;
var G__19917 = (0);
var G__19918 = (0);
seq__19316_19882 = G__19915;
chunk__19318_19883 = G__19916;
count__19319_19884 = G__19917;
i__19320_19885 = G__19918;
continue;
} else {
var G__19919 = cljs.core.next(seq__19316_19905__$1);
var G__19920 = null;
var G__19921 = (0);
var G__19922 = (0);
seq__19316_19882 = G__19919;
chunk__19318_19883 = G__19920;
count__19319_19884 = G__19921;
i__19320_19885 = G__19922;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19879);
}
}


var G__19923 = seq__19290_19868;
var G__19924 = chunk__19292_19869;
var G__19926 = count__19293_19870;
var G__19927 = (i__19294_19871 + (1));
seq__19290_19868 = G__19923;
chunk__19292_19869 = G__19924;
count__19293_19870 = G__19926;
i__19294_19871 = G__19927;
continue;
} else {
var G__19930 = seq__19290_19868;
var G__19931 = chunk__19292_19869;
var G__19932 = count__19293_19870;
var G__19933 = (i__19294_19871 + (1));
seq__19290_19868 = G__19930;
chunk__19292_19869 = G__19931;
count__19293_19870 = G__19932;
i__19294_19871 = G__19933;
continue;
}
} else {
var temp__5804__auto___19934 = cljs.core.seq(seq__19290_19868);
if(temp__5804__auto___19934){
var seq__19290_19935__$1 = temp__5804__auto___19934;
if(cljs.core.chunked_seq_QMARK_(seq__19290_19935__$1)){
var c__5568__auto___19936 = cljs.core.chunk_first(seq__19290_19935__$1);
var G__19937 = cljs.core.chunk_rest(seq__19290_19935__$1);
var G__19938 = c__5568__auto___19936;
var G__19939 = cljs.core.count(c__5568__auto___19936);
var G__19940 = (0);
seq__19290_19868 = G__19937;
chunk__19292_19869 = G__19938;
count__19293_19870 = G__19939;
i__19294_19871 = G__19940;
continue;
} else {
var child_struct_19941 = cljs.core.first(seq__19290_19935__$1);
if((!((child_struct_19941 == null)))){
if(typeof child_struct_19941 === 'string'){
var text_19942 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19942),child_struct_19941].join(''));
} else {
var children_19943 = shadow.dom.svg_node(child_struct_19941);
if(cljs.core.seq_QMARK_(children_19943)){
var seq__19332_19947 = cljs.core.seq(children_19943);
var chunk__19334_19948 = null;
var count__19335_19949 = (0);
var i__19336_19950 = (0);
while(true){
if((i__19336_19950 < count__19335_19949)){
var child_19953 = chunk__19334_19948.cljs$core$IIndexed$_nth$arity$2(null,i__19336_19950);
if(cljs.core.truth_(child_19953)){
node.appendChild(child_19953);


var G__19957 = seq__19332_19947;
var G__19958 = chunk__19334_19948;
var G__19959 = count__19335_19949;
var G__19960 = (i__19336_19950 + (1));
seq__19332_19947 = G__19957;
chunk__19334_19948 = G__19958;
count__19335_19949 = G__19959;
i__19336_19950 = G__19960;
continue;
} else {
var G__19961 = seq__19332_19947;
var G__19962 = chunk__19334_19948;
var G__19963 = count__19335_19949;
var G__19964 = (i__19336_19950 + (1));
seq__19332_19947 = G__19961;
chunk__19334_19948 = G__19962;
count__19335_19949 = G__19963;
i__19336_19950 = G__19964;
continue;
}
} else {
var temp__5804__auto___19966__$1 = cljs.core.seq(seq__19332_19947);
if(temp__5804__auto___19966__$1){
var seq__19332_19967__$1 = temp__5804__auto___19966__$1;
if(cljs.core.chunked_seq_QMARK_(seq__19332_19967__$1)){
var c__5568__auto___19968 = cljs.core.chunk_first(seq__19332_19967__$1);
var G__19971 = cljs.core.chunk_rest(seq__19332_19967__$1);
var G__19972 = c__5568__auto___19968;
var G__19973 = cljs.core.count(c__5568__auto___19968);
var G__19974 = (0);
seq__19332_19947 = G__19971;
chunk__19334_19948 = G__19972;
count__19335_19949 = G__19973;
i__19336_19950 = G__19974;
continue;
} else {
var child_19975 = cljs.core.first(seq__19332_19967__$1);
if(cljs.core.truth_(child_19975)){
node.appendChild(child_19975);


var G__19976 = cljs.core.next(seq__19332_19967__$1);
var G__19977 = null;
var G__19978 = (0);
var G__19979 = (0);
seq__19332_19947 = G__19976;
chunk__19334_19948 = G__19977;
count__19335_19949 = G__19978;
i__19336_19950 = G__19979;
continue;
} else {
var G__19980 = cljs.core.next(seq__19332_19967__$1);
var G__19981 = null;
var G__19982 = (0);
var G__19983 = (0);
seq__19332_19947 = G__19980;
chunk__19334_19948 = G__19981;
count__19335_19949 = G__19982;
i__19336_19950 = G__19983;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19943);
}
}


var G__19984 = cljs.core.next(seq__19290_19935__$1);
var G__19985 = null;
var G__19986 = (0);
var G__19987 = (0);
seq__19290_19868 = G__19984;
chunk__19292_19869 = G__19985;
count__19293_19870 = G__19986;
i__19294_19871 = G__19987;
continue;
} else {
var G__19991 = cljs.core.next(seq__19290_19935__$1);
var G__19992 = null;
var G__19993 = (0);
var G__19994 = (0);
seq__19290_19868 = G__19991;
chunk__19292_19869 = G__19992;
count__19293_19870 = G__19993;
i__19294_19871 = G__19994;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19997 = arguments.length;
var i__5770__auto___19998 = (0);
while(true){
if((i__5770__auto___19998 < len__5769__auto___19997)){
args__5775__auto__.push((arguments[i__5770__auto___19998]));

var G__19999 = (i__5770__auto___19998 + (1));
i__5770__auto___19998 = G__19999;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq19348){
var G__19349 = cljs.core.first(seq19348);
var seq19348__$1 = cljs.core.next(seq19348);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19349,seq19348__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__19352 = arguments.length;
switch (G__19352) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__13967__auto___20037 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13968__auto__ = (function (){var switch__12962__auto__ = (function (state_19364){
var state_val_19365 = (state_19364[(1)]);
if((state_val_19365 === (1))){
var state_19364__$1 = state_19364;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19364__$1,(2),once_or_cleanup);
} else {
if((state_val_19365 === (2))){
var inst_19359 = (state_19364[(2)]);
var inst_19360 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_19364__$1 = (function (){var statearr_19368 = state_19364;
(statearr_19368[(7)] = inst_19359);

return statearr_19368;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19364__$1,inst_19360);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__12963__auto__ = null;
var shadow$dom$state_machine__12963__auto____0 = (function (){
var statearr_19372 = [null,null,null,null,null,null,null,null];
(statearr_19372[(0)] = shadow$dom$state_machine__12963__auto__);

(statearr_19372[(1)] = (1));

return statearr_19372;
});
var shadow$dom$state_machine__12963__auto____1 = (function (state_19364){
while(true){
var ret_value__12964__auto__ = (function (){try{while(true){
var result__12965__auto__ = switch__12962__auto__(state_19364);
if(cljs.core.keyword_identical_QMARK_(result__12965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12965__auto__;
}
break;
}
}catch (e19376){var ex__12966__auto__ = e19376;
var statearr_19377_20044 = state_19364;
(statearr_19377_20044[(2)] = ex__12966__auto__);


if(cljs.core.seq((state_19364[(4)]))){
var statearr_19379_20045 = state_19364;
(statearr_19379_20045[(1)] = cljs.core.first((state_19364[(4)])));

} else {
throw ex__12966__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20046 = state_19364;
state_19364 = G__20046;
continue;
} else {
return ret_value__12964__auto__;
}
break;
}
});
shadow$dom$state_machine__12963__auto__ = function(state_19364){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__12963__auto____0.call(this);
case 1:
return shadow$dom$state_machine__12963__auto____1.call(this,state_19364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__12963__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__12963__auto____0;
shadow$dom$state_machine__12963__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__12963__auto____1;
return shadow$dom$state_machine__12963__auto__;
})()
})();
var state__13969__auto__ = (function (){var statearr_19385 = f__13968__auto__();
(statearr_19385[(6)] = c__13967__auto___20037);

return statearr_19385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13969__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
