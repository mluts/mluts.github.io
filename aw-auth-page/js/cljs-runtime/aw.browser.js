goog.provide('aw.browser');
aw.browser.start = (function aw$browser$start(){
console.log("start");

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aw.app.app], null),document.getElementById("app"));
});
aw.browser.init = (function aw$browser$init(){
console.log("init");

aw.router.init_BANG_();

return aw.browser.start();
});
aw.browser.stop = (function aw$browser$stop(){
return console.log("stop");
});

//# sourceMappingURL=aw.browser.js.map
