goog.provide('shadow.animate');

/**
 * @interface
 */
shadow.animate.Animation = function(){};

var shadow$animate$Animation$_animate_from$dyn_20942 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.animate._animate_from[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.animate._animate_from["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-from",this$);
}
}
});
/**
 * return a map of {attr initial-value}
 */
shadow.animate._animate_from = (function shadow$animate$_animate_from(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_from$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_from$arity$1(this$);
} else {
return shadow$animate$Animation$_animate_from$dyn_20942(this$);
}
});

var shadow$animate$Animation$_animate_to$dyn_20943 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.animate._animate_to[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.animate._animate_to["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-to",this$);
}
}
});
/**
 * return a map of {attr target-value}
 */
shadow.animate._animate_to = (function shadow$animate$_animate_to(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_to$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_to$arity$1(this$);
} else {
return shadow$animate$Animation$_animate_to$dyn_20943(this$);
}
});

var shadow$animate$Animation$_animate_toggles$dyn_20944 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.animate._animate_toggles[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.animate._animate_toggles["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-toggles",this$);
}
}
});
/**
 * return a map of {attr target-value}
 */
shadow.animate._animate_toggles = (function shadow$animate$_animate_toggles(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_toggles$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_toggles$arity$1(this$);
} else {
return shadow$animate$Animation$_animate_toggles$dyn_20944(this$);
}
});

var shadow$animate$Animation$_animate_timings$dyn_20945 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.animate._animate_timings[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.animate._animate_timings["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-timings",this$);
}
}
});
/**
 * return a map of {attr timing-function}
 */
shadow.animate._animate_timings = (function shadow$animate$_animate_timings(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_timings$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_timings$arity$1(this$);
} else {
return shadow$animate$Animation$_animate_timings$dyn_20945(this$);
}
});

var shadow$animate$Animation$_animate_delays$dyn_20946 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.animate._animate_delays[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.animate._animate_delays["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-delays",this$);
}
}
});
/**
 * return a map of {attr transition-delay}
 */
shadow.animate._animate_delays = (function shadow$animate$_animate_delays(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_delays$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_delays$arity$1(this$);
} else {
return shadow$animate$Animation$_animate_delays$dyn_20946(this$);
}
});

shadow.animate.transition_string = (function shadow$animate$transition_string(duration,adef){
var timings = shadow.animate._animate_timings(adef);
var delays = shadow.animate._animate_delays(adef);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__20653){
var vec__20655 = p__20653;
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20655,(0),null);
var timing = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20655,(1),null);
return [cljs.core.name(attr)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(duration),"ms"," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(timing),(function (){var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(delays,attr);
if(cljs.core.truth_((function (){var and__5043__auto__ = delay;
if(cljs.core.truth_(and__5043__auto__)){
return (delay > (0));
} else {
return and__5043__auto__;
}
})())){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(delay),"ms"].join('');
} else {
return null;
}
})()].join('');
}),timings));
});

/**
 * @interface
 */
shadow.animate.IAnimator = function(){};

var shadow$animate$IAnimator$get_duration$dyn_20947 = (function (animator){
var x__5393__auto__ = (((animator == null))?null:animator);
var m__5394__auto__ = (shadow.animate.get_duration[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__5394__auto__.call(null,animator));
} else {
var m__5392__auto__ = (shadow.animate.get_duration["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__5392__auto__.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.get-duration",animator);
}
}
});
shadow.animate.get_duration = (function shadow$animate$get_duration(animator){
if((((!((animator == null)))) && ((!((animator.shadow$animate$IAnimator$get_duration$arity$1 == null)))))){
return animator.shadow$animate$IAnimator$get_duration$arity$1(animator);
} else {
return shadow$animate$IAnimator$get_duration$dyn_20947(animator);
}
});

var shadow$animate$IAnimator$init_BANG_$dyn_20948 = (function (animator){
var x__5393__auto__ = (((animator == null))?null:animator);
var m__5394__auto__ = (shadow.animate.init_BANG_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__5394__auto__.call(null,animator));
} else {
var m__5392__auto__ = (shadow.animate.init_BANG_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__5392__auto__.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.init!",animator);
}
}
});
/**
 * apply the initial values
 */
shadow.animate.init_BANG_ = (function shadow$animate$init_BANG_(animator){
if((((!((animator == null)))) && ((!((animator.shadow$animate$IAnimator$init_BANG_$arity$1 == null)))))){
return animator.shadow$animate$IAnimator$init_BANG_$arity$1(animator);
} else {
return shadow$animate$IAnimator$init_BANG_$dyn_20948(animator);
}
});

var shadow$animate$IAnimator$start_BANG_$dyn_20949 = (function (animator){
var x__5393__auto__ = (((animator == null))?null:animator);
var m__5394__auto__ = (shadow.animate.start_BANG_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__5394__auto__.call(null,animator));
} else {
var m__5392__auto__ = (shadow.animate.start_BANG_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__5392__auto__.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.start!",animator);
}
}
});
/**
 * start the animation, must return a channel that closes once the animation is done
 */
shadow.animate.start_BANG_ = (function shadow$animate$start_BANG_(animator){
if((((!((animator == null)))) && ((!((animator.shadow$animate$IAnimator$start_BANG_$arity$1 == null)))))){
return animator.shadow$animate$IAnimator$start_BANG_$arity$1(animator);
} else {
return shadow$animate$IAnimator$start_BANG_$dyn_20949(animator);
}
});

var shadow$animate$IAnimator$finish_BANG_$dyn_20950 = (function (animator){
var x__5393__auto__ = (((animator == null))?null:animator);
var m__5394__auto__ = (shadow.animate.finish_BANG_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__5394__auto__.call(null,animator));
} else {
var m__5392__auto__ = (shadow.animate.finish_BANG_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__5392__auto__.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.finish!",animator);
}
}
});
/**
 * cleanup
 */
shadow.animate.finish_BANG_ = (function shadow$animate$finish_BANG_(animator){
if((((!((animator == null)))) && ((!((animator.shadow$animate$IAnimator$finish_BANG_$arity$1 == null)))))){
return animator.shadow$animate$IAnimator$finish_BANG_$arity$1(animator);
} else {
return shadow$animate$IAnimator$finish_BANG_$dyn_20950(animator);
}
});


/**
* @constructor
 * @implements {shadow.animate.IAnimator}
*/
shadow.animate.Animator = (function (duration,items){
this.duration = duration;
this.items = items;
});
(shadow.animate.Animator.prototype.shadow$animate$IAnimator$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.Animator.prototype.shadow$animate$IAnimator$get_duration$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.duration;
}));

(shadow.animate.Animator.prototype.shadow$animate$IAnimator$init_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__5636__auto__ = self__.items.length;
var i__11275__auto__ = (0);
while(true){
if((i__11275__auto__ < n__5636__auto__)){
var map__20677_20951 = (self__.items[i__11275__auto__]);
var map__20677_20952__$1 = cljs.core.__destructure_map(map__20677_20951);
var el_20953 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20677_20952__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var from_20954 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20677_20952__$1,new cljs.core.Keyword(null,"from","from",1815293044));
goog.style.setStyle(el_20953,from_20954);

var G__20955 = (i__11275__auto__ + (1));
i__11275__auto__ = G__20955;
continue;
} else {
return null;
}
break;
}
}));

(shadow.animate.Animator.prototype.shadow$animate$IAnimator$start_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__5636__auto__ = self__.items.length;
var i__11275__auto__ = (0);
while(true){
if((i__11275__auto__ < n__5636__auto__)){
var map__20679_20956 = (self__.items[i__11275__auto__]);
var map__20679_20957__$1 = cljs.core.__destructure_map(map__20679_20956);
var el_20958 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20679_20957__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var to_20959 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20679_20957__$1,new cljs.core.Keyword(null,"to","to",192099007));
var transition_20960 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20679_20957__$1,new cljs.core.Keyword(null,"transition","transition",765692007));
(to_20959["transition"] = transition_20960);

goog.style.setStyle(el_20958,to_20959);

var G__20961 = (i__11275__auto__ + (1));
i__11275__auto__ = G__20961;
continue;
} else {
return null;
}
break;
}
}));

(shadow.animate.Animator.prototype.shadow$animate$IAnimator$finish_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__5636__auto__ = self__.items.length;
var i__11275__auto__ = (0);
while(true){
if((i__11275__auto__ < n__5636__auto__)){
var map__20680_20962 = (self__.items[i__11275__auto__]);
var map__20680_20963__$1 = cljs.core.__destructure_map(map__20680_20962);
var el_20964 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20680_20963__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var toggles_20965 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20680_20963__$1,new cljs.core.Keyword(null,"toggles","toggles",1077909479));
(toggles_20965["transition"] = null);

goog.style.setStyle(el_20964,toggles_20965);

var G__20966 = (i__11275__auto__ + (1));
i__11275__auto__ = G__20966;
continue;
} else {
return null;
}
break;
}
}));

(shadow.animate.Animator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"duration","duration",-1210334701,null),new cljs.core.Symbol(null,"items","items",-1622480831,null)], null);
}));

(shadow.animate.Animator.cljs$lang$type = true);

(shadow.animate.Animator.cljs$lang$ctorStr = "shadow.animate/Animator");

(shadow.animate.Animator.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.animate/Animator");
}));

/**
 * Positional factory function for shadow.animate/Animator.
 */
shadow.animate.__GT_Animator = (function shadow$animate$__GT_Animator(duration,items){
return (new shadow.animate.Animator(duration,items));
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
shadow.animate.AnimationStep = (function (el,from,to,toggles,transition,__meta,__extmap,__hash){
this.el = el;
this.from = from;
this.to = to;
this.toggles = toggles;
this.transition = transition;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.animate.AnimationStep.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k20682,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__20698 = k20682;
var G__20698__$1 = (((G__20698 instanceof cljs.core.Keyword))?G__20698.fqn:null);
switch (G__20698__$1) {
case "el":
return self__.el;

break;
case "from":
return self__.from;

break;
case "to":
return self__.to;

break;
case "toggles":
return self__.toggles;

break;
case "transition":
return self__.transition;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20682,else__5346__auto__);

}
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__20716){
var vec__20721 = p__20716;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20721,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20721,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.animate.AnimationStep{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"el","el",-1618201118),self__.el],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"from","from",1815293044),self__.from],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"to","to",192099007),self__.to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"toggles","toggles",1077909479),self__.toggles],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transition","transition",765692007),self__.transition],null))], null),self__.__extmap));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20681){
var self__ = this;
var G__20681__$1 = this;
return (new cljs.core.RecordIter((0),G__20681__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"el","el",-1618201118),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"toggles","toggles",1077909479),new cljs.core.Keyword(null,"transition","transition",765692007)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (630436239 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20683,other20684){
var self__ = this;
var this20683__$1 = this;
return (((!((other20684 == null)))) && ((((this20683__$1.constructor === other20684.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20683__$1.el,other20684.el)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20683__$1.from,other20684.from)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20683__$1.to,other20684.to)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20683__$1.toggles,other20684.toggles)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20683__$1.transition,other20684.transition)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20683__$1.__extmap,other20684.__extmap)))))))))))))));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"el","el",-1618201118),null,new cljs.core.Keyword(null,"transition","transition",765692007),null,new cljs.core.Keyword(null,"toggles","toggles",1077909479),null,new cljs.core.Keyword(null,"from","from",1815293044),null,new cljs.core.Keyword(null,"to","to",192099007),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k20682){
var self__ = this;
var this__5350__auto____$1 = this;
var G__20736 = k20682;
var G__20736__$1 = (((G__20736 instanceof cljs.core.Keyword))?G__20736.fqn:null);
switch (G__20736__$1) {
case "el":
case "from":
case "to":
case "toggles":
case "transition":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k20682);

}
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__20681){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__20746 = cljs.core.keyword_identical_QMARK_;
var expr__20747 = k__5352__auto__;
if(cljs.core.truth_((pred__20746.cljs$core$IFn$_invoke$arity$2 ? pred__20746.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"el","el",-1618201118),expr__20747) : pred__20746.call(null,new cljs.core.Keyword(null,"el","el",-1618201118),expr__20747)))){
return (new shadow.animate.AnimationStep(G__20681,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20746.cljs$core$IFn$_invoke$arity$2 ? pred__20746.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"from","from",1815293044),expr__20747) : pred__20746.call(null,new cljs.core.Keyword(null,"from","from",1815293044),expr__20747)))){
return (new shadow.animate.AnimationStep(self__.el,G__20681,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20746.cljs$core$IFn$_invoke$arity$2 ? pred__20746.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007),expr__20747) : pred__20746.call(null,new cljs.core.Keyword(null,"to","to",192099007),expr__20747)))){
return (new shadow.animate.AnimationStep(self__.el,self__.from,G__20681,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20746.cljs$core$IFn$_invoke$arity$2 ? pred__20746.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggles","toggles",1077909479),expr__20747) : pred__20746.call(null,new cljs.core.Keyword(null,"toggles","toggles",1077909479),expr__20747)))){
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,G__20681,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20746.cljs$core$IFn$_invoke$arity$2 ? pred__20746.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"transition","transition",765692007),expr__20747) : pred__20746.call(null,new cljs.core.Keyword(null,"transition","transition",765692007),expr__20747)))){
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,G__20681,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__20681),null));
}
}
}
}
}
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"el","el",-1618201118),self__.el,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"from","from",1815293044),self__.from,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"to","to",192099007),self__.to,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"toggles","toggles",1077909479),self__.toggles,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"transition","transition",765692007),self__.transition,null))], null),self__.__extmap));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__20681){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,G__20681,self__.__extmap,self__.__hash));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.animate.AnimationStep.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"el","el",22330409,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"toggles","toggles",-1576526290,null),new cljs.core.Symbol(null,"transition","transition",-1888743762,null)], null);
}));

(shadow.animate.AnimationStep.cljs$lang$type = true);

(shadow.animate.AnimationStep.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.animate/AnimationStep",null,(1),null));
}));

(shadow.animate.AnimationStep.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.animate/AnimationStep");
}));

/**
 * Positional factory function for shadow.animate/AnimationStep.
 */
shadow.animate.__GT_AnimationStep = (function shadow$animate$__GT_AnimationStep(el,from,to,toggles,transition){
return (new shadow.animate.AnimationStep(el,from,to,toggles,transition,null,null,null));
});

/**
 * Factory function for shadow.animate/AnimationStep, taking a map of keywords to field values.
 */
shadow.animate.map__GT_AnimationStep = (function shadow$animate$map__GT_AnimationStep(G__20685){
var extmap__5385__auto__ = (function (){var G__20768 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20685,new cljs.core.Keyword(null,"el","el",-1618201118),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"toggles","toggles",1077909479),new cljs.core.Keyword(null,"transition","transition",765692007)], 0));
if(cljs.core.record_QMARK_(G__20685)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20768);
} else {
return G__20768;
}
})();
return (new shadow.animate.AnimationStep(new cljs.core.Keyword(null,"el","el",-1618201118).cljs$core$IFn$_invoke$arity$1(G__20685),new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(G__20685),new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(G__20685),new cljs.core.Keyword(null,"toggles","toggles",1077909479).cljs$core$IFn$_invoke$arity$1(G__20685),new cljs.core.Keyword(null,"transition","transition",765692007).cljs$core$IFn$_invoke$arity$1(G__20685),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.animate.setup = (function shadow$animate$setup(duration,elements){
var items = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$animate$setup_$_iter__20792(s__20793){
return (new cljs.core.LazySeq(null,(function (){
var s__20793__$1 = s__20793;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__20793__$1);
if(temp__5804__auto__){
var s__20793__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20793__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__20793__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__20795 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__20794 = (0);
while(true){
if((i__20794 < size__5522__auto__)){
var vec__20797 = cljs.core._nth(c__5521__auto__,i__20794);
var el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20797,(0),null);
var adef = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20797,(1),null);
cljs.core.chunk_append(b__20795,(function (){
if((((!((adef == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === adef.shadow$animate$Animation$))))?true:(((!adef.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef):false)):cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid animation",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"el","el",-1618201118),el,new cljs.core.Keyword(null,"animation","animation",-1248293244),adef], null));
}

var from = shadow.animate._animate_from(adef);
var to = shadow.animate._animate_to(adef);
var toggles = shadow.animate._animate_toggles(adef);
return (new shadow.animate.AnimationStep(shadow.dom.dom_node(el),cljs.core.clj__GT_js(from),cljs.core.clj__GT_js(to),cljs.core.clj__GT_js(toggles),shadow.animate.transition_string(duration,adef),null,null,null));
})()
);

var G__20987 = (i__20794 + (1));
i__20794 = G__20987;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20795),shadow$animate$setup_$_iter__20792(cljs.core.chunk_rest(s__20793__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20795),null);
}
} else {
var vec__20813 = cljs.core.first(s__20793__$2);
var el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20813,(0),null);
var adef = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20813,(1),null);
return cljs.core.cons((function (){
if((((!((adef == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === adef.shadow$animate$Animation$))))?true:(((!adef.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef):false)):cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid animation",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"el","el",-1618201118),el,new cljs.core.Keyword(null,"animation","animation",-1248293244),adef], null));
}

var from = shadow.animate._animate_from(adef);
var to = shadow.animate._animate_to(adef);
var toggles = shadow.animate._animate_toggles(adef);
return (new shadow.animate.AnimationStep(shadow.dom.dom_node(el),cljs.core.clj__GT_js(from),cljs.core.clj__GT_js(to),cljs.core.clj__GT_js(toggles),shadow.animate.transition_string(duration,adef),null,null,null));
})()
,shadow$animate$setup_$_iter__20792(cljs.core.rest(s__20793__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(elements);
})());
return (new shadow.animate.Animator(duration,items));
});
shadow.animate.continue_BANG_ = (function shadow$animate$continue_BANG_(animator){
shadow.animate.start_BANG_(animator);

var c__13967__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13968__auto__ = (function (){var switch__12962__auto__ = (function (state_20864){
var state_val_20865 = (state_20864[(1)]);
if((state_val_20865 === (1))){
var inst_20858 = shadow.animate.get_duration(animator);
var inst_20859 = cljs.core.async.timeout(inst_20858);
var state_20864__$1 = state_20864;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20864__$1,(2),inst_20859);
} else {
if((state_val_20865 === (2))){
var inst_20861 = (state_20864[(2)]);
var inst_20862 = shadow.animate.finish_BANG_(animator);
var state_20864__$1 = (function (){var statearr_20882 = state_20864;
(statearr_20882[(7)] = inst_20862);

(statearr_20882[(8)] = inst_20861);

return statearr_20882;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20864__$1,new cljs.core.Keyword(null,"done","done",-889844188));
} else {
return null;
}
}
});
return (function() {
var shadow$animate$continue_BANG__$_state_machine__12963__auto__ = null;
var shadow$animate$continue_BANG__$_state_machine__12963__auto____0 = (function (){
var statearr_20896 = [null,null,null,null,null,null,null,null,null];
(statearr_20896[(0)] = shadow$animate$continue_BANG__$_state_machine__12963__auto__);

(statearr_20896[(1)] = (1));

return statearr_20896;
});
var shadow$animate$continue_BANG__$_state_machine__12963__auto____1 = (function (state_20864){
while(true){
var ret_value__12964__auto__ = (function (){try{while(true){
var result__12965__auto__ = switch__12962__auto__(state_20864);
if(cljs.core.keyword_identical_QMARK_(result__12965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12965__auto__;
}
break;
}
}catch (e20901){var ex__12966__auto__ = e20901;
var statearr_20902_20994 = state_20864;
(statearr_20902_20994[(2)] = ex__12966__auto__);


if(cljs.core.seq((state_20864[(4)]))){
var statearr_20903_20995 = state_20864;
(statearr_20903_20995[(1)] = cljs.core.first((state_20864[(4)])));

} else {
throw ex__12966__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20996 = state_20864;
state_20864 = G__20996;
continue;
} else {
return ret_value__12964__auto__;
}
break;
}
});
shadow$animate$continue_BANG__$_state_machine__12963__auto__ = function(state_20864){
switch(arguments.length){
case 0:
return shadow$animate$continue_BANG__$_state_machine__12963__auto____0.call(this);
case 1:
return shadow$animate$continue_BANG__$_state_machine__12963__auto____1.call(this,state_20864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$animate$continue_BANG__$_state_machine__12963__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$animate$continue_BANG__$_state_machine__12963__auto____0;
shadow$animate$continue_BANG__$_state_machine__12963__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$animate$continue_BANG__$_state_machine__12963__auto____1;
return shadow$animate$continue_BANG__$_state_machine__12963__auto__;
})()
})();
var state__13969__auto__ = (function (){var statearr_20904 = f__13968__auto__();
(statearr_20904[(6)] = c__13967__auto__);

return statearr_20904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13969__auto__);
}));

return c__13967__auto__;
});
shadow.animate.start = (function shadow$animate$start(duration,elements){
var animator = shadow.animate.setup(duration,elements);
animator.shadow$animate$IAnimator$init_BANG_$arity$1(null);

return shadow.animate.continue_BANG_(animator);
});

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate20907 = (function (attr,from,to,timing,delay,meta20908){
this.attr = attr;
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta20908 = meta20908;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate20907.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20909,meta20908__$1){
var self__ = this;
var _20909__$1 = this;
return (new shadow.animate.t_shadow$animate20907(self__.attr,self__.from,self__.to,self__.timing,self__.delay,meta20908__$1));
}));

(shadow.animate.t_shadow$animate20907.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20909){
var self__ = this;
var _20909__$1 = this;
return self__.meta20908;
}));

(shadow.animate.t_shadow$animate20907.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate20907.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.from]);
}));

(shadow.animate.t_shadow$animate20907.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.to]);
}));

(shadow.animate.t_shadow$animate20907.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate20907.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.timing]);
}));

(shadow.animate.t_shadow$animate20907.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.delay]);
}));

(shadow.animate.t_shadow$animate20907.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta20908","meta20908",297264547,null)], null);
}));

(shadow.animate.t_shadow$animate20907.cljs$lang$type = true);

(shadow.animate.t_shadow$animate20907.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate20907");

(shadow.animate.t_shadow$animate20907.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.animate/t_shadow$animate20907");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate20907.
 */
shadow.animate.__GT_t_shadow$animate20907 = (function shadow$animate$__GT_t_shadow$animate20907(attr,from,to,timing,delay,meta20908){
return (new shadow.animate.t_shadow$animate20907(attr,from,to,timing,delay,meta20908));
});


/**
 * transition the given attr from -> to using timing function and delay
 * timing defaults to ease, delay to 0
 */
shadow.animate.transition = (function shadow$animate$transition(var_args){
var G__20906 = arguments.length;
switch (G__20906) {
case 3:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.transition.cljs$core$IFn$_invoke$arity$3 = (function (attr,from,to){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5(attr,from,to,"ease",(0));
}));

(shadow.animate.transition.cljs$core$IFn$_invoke$arity$4 = (function (attr,from,to,timing){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5(attr,from,to,timing,(0));
}));

(shadow.animate.transition.cljs$core$IFn$_invoke$arity$5 = (function (attr,from,to,timing,delay){
return (new shadow.animate.t_shadow$animate20907(attr,from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
}));

(shadow.animate.transition.cljs$lang$maxFixedArity = 5);


/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate20910 = (function (attr,from,to,meta20911){
this.attr = attr;
this.from = from;
this.to = to;
this.meta20911 = meta20911;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate20910.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20912,meta20911__$1){
var self__ = this;
var _20912__$1 = this;
return (new shadow.animate.t_shadow$animate20910(self__.attr,self__.from,self__.to,meta20911__$1));
}));

(shadow.animate.t_shadow$animate20910.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20912){
var self__ = this;
var _20912__$1 = this;
return self__.meta20911;
}));

(shadow.animate.t_shadow$animate20910.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate20910.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate20910.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.from]);
}));

(shadow.animate.t_shadow$animate20910.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.to]);
}));

(shadow.animate.t_shadow$animate20910.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate20910.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate20910.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"meta20911","meta20911",-908918382,null)], null);
}));

(shadow.animate.t_shadow$animate20910.cljs$lang$type = true);

(shadow.animate.t_shadow$animate20910.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate20910");

(shadow.animate.t_shadow$animate20910.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.animate/t_shadow$animate20910");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate20910.
 */
shadow.animate.__GT_t_shadow$animate20910 = (function shadow$animate$__GT_t_shadow$animate20910(attr,from,to,meta20911){
return (new shadow.animate.t_shadow$animate20910(attr,from,to,meta20911));
});


shadow.animate.toggle = (function shadow$animate$toggle(attr,from,to){
return (new shadow.animate.t_shadow$animate20910(attr,from,to,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate20915 = (function (attrs,meta20916){
this.attrs = attrs;
this.meta20916 = meta20916;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate20915.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20917,meta20916__$1){
var self__ = this;
var _20917__$1 = this;
return (new shadow.animate.t_shadow$animate20915(self__.attrs,meta20916__$1));
}));

(shadow.animate.t_shadow$animate20915.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20917){
var self__ = this;
var _20917__$1 = this;
return self__.meta20916;
}));

(shadow.animate.t_shadow$animate20915.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate20915.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate20915.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.attrs;
}));

(shadow.animate.t_shadow$animate20915.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate20915.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate20915.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate20915.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta20916","meta20916",-1989608474,null)], null);
}));

(shadow.animate.t_shadow$animate20915.cljs$lang$type = true);

(shadow.animate.t_shadow$animate20915.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate20915");

(shadow.animate.t_shadow$animate20915.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.animate/t_shadow$animate20915");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate20915.
 */
shadow.animate.__GT_t_shadow$animate20915 = (function shadow$animate$__GT_t_shadow$animate20915(attrs,meta20916){
return (new shadow.animate.t_shadow$animate20915(attrs,meta20916));
});


/**
 * set attr to value when the animation starts
 */
shadow.animate.set_attr = (function shadow$animate$set_attr(var_args){
var G__20914 = arguments.length;
switch (G__20914) {
case 1:
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1 = (function (attrs){
return (new shadow.animate.t_shadow$animate20915(attrs,cljs.core.PersistentArrayMap.EMPTY));
}));

(shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$2 = (function (attr,value){
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.createAsIfByAssoc([attr,value]));
}));

(shadow.animate.set_attr.cljs$lang$maxFixedArity = 2);


/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate20918 = (function (attr,meta20919){
this.attr = attr;
this.meta20919 = meta20919;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate20918.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20920,meta20919__$1){
var self__ = this;
var _20920__$1 = this;
return (new shadow.animate.t_shadow$animate20918(self__.attr,meta20919__$1));
}));

(shadow.animate.t_shadow$animate20918.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20920){
var self__ = this;
var _20920__$1 = this;
return self__.meta20919;
}));

(shadow.animate.t_shadow$animate20918.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate20918.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate20918.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate20918.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,null]);
}));

(shadow.animate.t_shadow$animate20918.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate20918.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate20918.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"meta20919","meta20919",991822801,null)], null);
}));

(shadow.animate.t_shadow$animate20918.cljs$lang$type = true);

(shadow.animate.t_shadow$animate20918.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate20918");

(shadow.animate.t_shadow$animate20918.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.animate/t_shadow$animate20918");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate20918.
 */
shadow.animate.__GT_t_shadow$animate20918 = (function shadow$animate$__GT_t_shadow$animate20918(attr,meta20919){
return (new shadow.animate.t_shadow$animate20918(attr,meta20919));
});


/**
 * use to remove a given attribute style when the animation is finished
 * usually only needed to remove attributes we no longer need since they are probably
 * inherited and we only used for previous transitions
 */
shadow.animate.delete_attr = (function shadow$animate$delete_attr(attr){
return (new shadow.animate.t_shadow$animate20918(attr,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate20922 = (function (transitions,to,from,toggles,timings,delays,temp__5802__auto__,meta20923){
this.transitions = transitions;
this.to = to;
this.from = from;
this.toggles = toggles;
this.timings = timings;
this.delays = delays;
this.temp__5802__auto__ = temp__5802__auto__;
this.meta20923 = meta20923;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate20922.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20924,meta20923__$1){
var self__ = this;
var _20924__$1 = this;
return (new shadow.animate.t_shadow$animate20922(self__.transitions,self__.to,self__.from,self__.toggles,self__.timings,self__.delays,self__.temp__5802__auto__,meta20923__$1));
}));

(shadow.animate.t_shadow$animate20922.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20924){
var self__ = this;
var _20924__$1 = this;
return self__.meta20923;
}));

(shadow.animate.t_shadow$animate20922.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate20922.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.from;
}));

(shadow.animate.t_shadow$animate20922.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.to;
}));

(shadow.animate.t_shadow$animate20922.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.toggles;
}));

(shadow.animate.t_shadow$animate20922.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.timings;
}));

(shadow.animate.t_shadow$animate20922.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.delays;
}));

(shadow.animate.t_shadow$animate20922.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"transitions","transitions",-405684594,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"toggles","toggles",-1576526290,null),new cljs.core.Symbol(null,"timings","timings",-569636600,null),new cljs.core.Symbol(null,"delays","delays",-873843187,null),new cljs.core.Symbol(null,"temp__5802__auto__","temp__5802__auto__",-1659442335,null),new cljs.core.Symbol(null,"meta20923","meta20923",548478091,null)], null);
}));

(shadow.animate.t_shadow$animate20922.cljs$lang$type = true);

(shadow.animate.t_shadow$animate20922.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate20922");

(shadow.animate.t_shadow$animate20922.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.animate/t_shadow$animate20922");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate20922.
 */
shadow.animate.__GT_t_shadow$animate20922 = (function shadow$animate$__GT_t_shadow$animate20922(transitions,to,from,toggles,timings,delays,temp__5802__auto__,meta20923){
return (new shadow.animate.t_shadow$animate20922(transitions,to,from,toggles,timings,delays,temp__5802__auto__,meta20923));
});



/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate20925 = (function (transitions,to,from,toggles,timings,delays,temp__5802__auto__,meta20926){
this.transitions = transitions;
this.to = to;
this.from = from;
this.toggles = toggles;
this.timings = timings;
this.delays = delays;
this.temp__5802__auto__ = temp__5802__auto__;
this.meta20926 = meta20926;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate20925.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20927,meta20926__$1){
var self__ = this;
var _20927__$1 = this;
return (new shadow.animate.t_shadow$animate20925(self__.transitions,self__.to,self__.from,self__.toggles,self__.timings,self__.delays,self__.temp__5802__auto__,meta20926__$1));
}));

(shadow.animate.t_shadow$animate20925.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20927){
var self__ = this;
var _20927__$1 = this;
return self__.meta20926;
}));

(shadow.animate.t_shadow$animate20925.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate20925.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.from;
}));

(shadow.animate.t_shadow$animate20925.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.to;
}));

(shadow.animate.t_shadow$animate20925.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.toggles;
}));

(shadow.animate.t_shadow$animate20925.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.timings;
}));

(shadow.animate.t_shadow$animate20925.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.delays;
}));

(shadow.animate.t_shadow$animate20925.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"transitions","transitions",-405684594,null),cljs.core.with_meta(new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"toggles","toggles",-1576526290,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"timings","timings",-569636600,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"delays","delays",-873843187,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),new cljs.core.Symbol(null,"temp__5802__auto__","temp__5802__auto__",-1659442335,null),new cljs.core.Symbol(null,"meta20926","meta20926",-1786874399,null)], null);
}));

(shadow.animate.t_shadow$animate20925.cljs$lang$type = true);

(shadow.animate.t_shadow$animate20925.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate20925");

(shadow.animate.t_shadow$animate20925.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.animate/t_shadow$animate20925");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate20925.
 */
shadow.animate.__GT_t_shadow$animate20925 = (function shadow$animate$__GT_t_shadow$animate20925(transitions,to,from,toggles,timings,delays,temp__5802__auto__,meta20926){
return (new shadow.animate.t_shadow$animate20925(transitions,to,from,toggles,timings,delays,temp__5802__auto__,meta20926));
});


shadow.animate.combine = (function shadow$animate$combine(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21016 = arguments.length;
var i__5770__auto___21017 = (0);
while(true){
if((i__5770__auto___21017 < len__5769__auto___21016)){
args__5775__auto__.push((arguments[i__5770__auto___21017]));

var G__21018 = (i__5770__auto___21017 + (1));
i__5770__auto___21017 = G__21018;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.animate.combine.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.animate.combine.cljs$core$IFn$_invoke$arity$variadic = (function (transitions){
var to = cljs.core.PersistentArrayMap.EMPTY;
var from = cljs.core.PersistentArrayMap.EMPTY;
var toggles = cljs.core.PersistentArrayMap.EMPTY;
var timings = cljs.core.PersistentArrayMap.EMPTY;
var delays = cljs.core.PersistentArrayMap.EMPTY;
var transitions__$1 = transitions;
while(true){
var temp__5802__auto__ = cljs.core.first(transitions__$1);
if(cljs.core.truth_(temp__5802__auto__)){
var adef = temp__5802__auto__;
var G__21019 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([to,shadow.animate._animate_to(adef)], 0));
var G__21020 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([from,shadow.animate._animate_from(adef)], 0));
var G__21021 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([toggles,shadow.animate._animate_toggles(adef)], 0));
var G__21022 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([timings,shadow.animate._animate_timings(adef)], 0));
var G__21023 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([delays,shadow.animate._animate_delays(adef)], 0));
var G__21024 = cljs.core.rest(transitions__$1);
to = G__21019;
from = G__21020;
toggles = G__21021;
timings = G__21022;
delays = G__21023;
transitions__$1 = G__21024;
continue;
} else {
return (new shadow.animate.t_shadow$animate20925(transitions__$1,to,from,toggles,timings,delays,temp__5802__auto__,cljs.core.PersistentArrayMap.EMPTY));
}
break;
}
}));

(shadow.animate.combine.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.animate.combine.cljs$lang$applyTo = (function (seq20921){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20921));
}));

shadow.animate.fade_in = (function shadow$animate$fade_in(var_args){
var G__20929 = arguments.length;
switch (G__20929) {
case 0:
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1("ease-in");
}));

(shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1 = (function (timing_function){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"0","1",timing_function);
}));

(shadow.animate.fade_in.cljs$lang$maxFixedArity = 1);

shadow.animate.fade_out = (function shadow$animate$fade_out(var_args){
var G__20931 = arguments.length;
switch (G__20931) {
case 0:
return shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1("ease-out");
}));

(shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$1 = (function (timing_function){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"1","0",timing_function);
}));

(shadow.animate.fade_out.cljs$lang$maxFixedArity = 1);

shadow.animate.vendor_prefix = goog.dom.vendor.getVendorPrefix();
shadow.animate.vendor_transform = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.animate.vendor_prefix),"-transform"].join(''));

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate20934 = (function (from,to,timing,delay,meta20935){
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta20935 = meta20935;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate20934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20936,meta20935__$1){
var self__ = this;
var _20936__$1 = this;
return (new shadow.animate.t_shadow$animate20934(self__.from,self__.to,self__.timing,self__.delay,meta20935__$1));
}));

(shadow.animate.t_shadow$animate20934.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20936){
var self__ = this;
var _20936__$1 = this;
return self__.meta20935;
}));

(shadow.animate.t_shadow$animate20934.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate20934.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateY(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.from),")"].join('')], null);
}));

(shadow.animate.t_shadow$animate20934.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateY(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.to),")"].join('')], null);
}));

(shadow.animate.t_shadow$animate20934.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.timing]);
}));

(shadow.animate.t_shadow$animate20934.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate20934.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.delay]);
}));

(shadow.animate.t_shadow$animate20934.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta20935","meta20935",672331365,null)], null);
}));

(shadow.animate.t_shadow$animate20934.cljs$lang$type = true);

(shadow.animate.t_shadow$animate20934.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate20934");

(shadow.animate.t_shadow$animate20934.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.animate/t_shadow$animate20934");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate20934.
 */
shadow.animate.__GT_t_shadow$animate20934 = (function shadow$animate$__GT_t_shadow$animate20934(from,to,timing,delay,meta20935){
return (new shadow.animate.t_shadow$animate20934(from,to,timing,delay,meta20935));
});


shadow.animate.translate_y = (function shadow$animate$translate_y(var_args){
var G__20933 = arguments.length;
switch (G__20933) {
case 3:
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$3 = (function (from,to,timing){
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4(from,to,timing,(0));
}));

(shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4 = (function (from,to,timing,delay){
return (new shadow.animate.t_shadow$animate20934(from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
}));

(shadow.animate.translate_y.cljs$lang$maxFixedArity = 4);


/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate20939 = (function (from,to,timing,delay,meta20940){
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta20940 = meta20940;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate20939.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20941,meta20940__$1){
var self__ = this;
var _20941__$1 = this;
return (new shadow.animate.t_shadow$animate20939(self__.from,self__.to,self__.timing,self__.delay,meta20940__$1));
}));

(shadow.animate.t_shadow$animate20939.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20941){
var self__ = this;
var _20941__$1 = this;
return self__.meta20940;
}));

(shadow.animate.t_shadow$animate20939.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate20939.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateX(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.from),")"].join('')], null);
}));

(shadow.animate.t_shadow$animate20939.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateX(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.to),")"].join('')], null);
}));

(shadow.animate.t_shadow$animate20939.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.timing]);
}));

(shadow.animate.t_shadow$animate20939.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate20939.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.delay]);
}));

(shadow.animate.t_shadow$animate20939.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta20940","meta20940",-16535605,null)], null);
}));

(shadow.animate.t_shadow$animate20939.cljs$lang$type = true);

(shadow.animate.t_shadow$animate20939.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate20939");

(shadow.animate.t_shadow$animate20939.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.animate/t_shadow$animate20939");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate20939.
 */
shadow.animate.__GT_t_shadow$animate20939 = (function shadow$animate$__GT_t_shadow$animate20939(from,to,timing,delay,meta20940){
return (new shadow.animate.t_shadow$animate20939(from,to,timing,delay,meta20940));
});


shadow.animate.translate_x = (function shadow$animate$translate_x(var_args){
var G__20938 = arguments.length;
switch (G__20938) {
case 3:
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$3 = (function (from,to,timing){
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4(from,to,timing,(0));
}));

(shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4 = (function (from,to,timing,delay){
return (new shadow.animate.t_shadow$animate20939(from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
}));

(shadow.animate.translate_x.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.animate.js.map
