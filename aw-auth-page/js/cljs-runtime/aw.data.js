goog.provide('aw.data');
aw.data.schema = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190),new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722),new cljs.core.Keyword("db","doc","db/doc",1913350069),"Unique Username"], null),new cljs.core.Keyword(null,"password-hash","password-hash",-704278294),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190)], null),new cljs.core.Keyword(null,"game-name","game-name",428581934),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190),new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null)], null);
aw.data.db_conn = (function (){var G__24955 = (function (){var G__24956 = datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1(aw.data.schema);
var G__24957 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),(1),new cljs.core.Keyword(null,"game-name","game-name",428581934),"Mai Chan Sweet Buns",new cljs.core.Keyword(null,"url","url",276297046),"/pico8/mai_chan_sweet_buns"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),(2),new cljs.core.Keyword(null,"game-name","game-name",428581934),"Breakout Hero",new cljs.core.Keyword(null,"url","url",276297046),"/pico8/breakout_hero"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),(3),new cljs.core.Keyword(null,"game-name","game-name",428581934),"Porklike",new cljs.core.Keyword(null,"url","url",276297046),"/pico8/porklike"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),(4),new cljs.core.Keyword(null,"game-name","game-name",428581934),"Willo",new cljs.core.Keyword(null,"url","url",276297046),"/pico8/willo"], null)], null);
return (datascript.core.db_with.cljs$core$IFn$_invoke$arity$2 ? datascript.core.db_with.cljs$core$IFn$_invoke$arity$2(G__24956,G__24957) : datascript.core.db_with.call(null,G__24956,G__24957));
})();
return (datascript.core.conn_from_db.cljs$core$IFn$_invoke$arity$1 ? datascript.core.conn_from_db.cljs$core$IFn$_invoke$arity$1(G__24955) : datascript.core.conn_from_db.call(null,G__24955));
})();
aw.data.user_exists_QMARK_ = (function aw$data$user_exists_QMARK_(var_args){
var G__24959 = arguments.length;
switch (G__24959) {
case 1:
return aw.data.user_exists_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return aw.data.user_exists_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(aw.data.user_exists_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (username){
return cljs.core.boolean$(cljs.core.seq((function (){var G__24960 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword(null,"username","username",1605666410),username], null)], null);
var G__24961 = cljs.core.deref(aw.data.db_conn);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__24960,G__24961) : datascript.core.q.call(null,G__24960,G__24961));
})()));
}));

(aw.data.user_exists_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (username,password){
return cljs.core.boolean$(cljs.core.seq((function (){var G__24962 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword(null,"username","username",1605666410),username], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword(null,"password-hash","password-hash",-704278294),(aw.crypto.calc_hash.cljs$core$IFn$_invoke$arity$1 ? aw.crypto.calc_hash.cljs$core$IFn$_invoke$arity$1(password) : aw.crypto.calc_hash.call(null,password))], null)], null);
var G__24963 = cljs.core.deref(aw.data.db_conn);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__24962,G__24963) : datascript.core.q.call(null,G__24962,G__24963));
})()));
}));

(aw.data.user_exists_QMARK_.cljs$lang$maxFixedArity = 2);

aw.data.register_user = (function aw$data$register_user(username,password){
var G__24964 = aw.data.db_conn;
var G__24965 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(-1),new cljs.core.Keyword(null,"username","username",1605666410),username], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(-1),new cljs.core.Keyword(null,"password-hash","password-hash",-704278294),(aw.crypto.calc_hash.cljs$core$IFn$_invoke$arity$1 ? aw.crypto.calc_hash.cljs$core$IFn$_invoke$arity$1(password) : aw.crypto.calc_hash.call(null,password))], null)], null);
return (datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(G__24964,G__24965) : datascript.core.transact_BANG_.call(null,G__24964,G__24965));
});
aw.data.find_games = (function aw$data$find_games(){
var G__24966 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"?game","?game",174835763,null),new cljs.core.Symbol(null,"?url","?url",-307798566,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword(null,"game-name","game-name",428581934),new cljs.core.Symbol(null,"?game","?game",174835763,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Symbol(null,"?url","?url",-307798566,null)], null)], null);
var G__24967 = cljs.core.deref(aw.data.db_conn);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__24966,G__24967) : datascript.core.q.call(null,G__24966,G__24967));
});
aw.data.find_game = (function aw$data$find_game(id){
var G__24968 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?game","?game",174835763,null),new cljs.core.Symbol(null,"?url","?url",-307798566,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"game-name","game-name",428581934),new cljs.core.Symbol(null,"?game","?game",174835763,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Symbol(null,"?url","?url",-307798566,null)], null)], null);
var G__24969 = cljs.core.deref(aw.data.db_conn);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__24968,G__24969) : datascript.core.q.call(null,G__24968,G__24969));
});
aw.data.min_password_legnth = (6);
aw.data.min_username_length = (2);
aw.data.check_password_length = (function aw$data$check_password_length(password){
return (((!(clojure.string.blank_QMARK_(password)))) && ((cljs.core.count(password) >= aw.data.min_password_legnth)));
});
aw.data.check_username_length = (function aw$data$check_username_length(username){
return (((!(clojure.string.blank_QMARK_(username)))) && ((cljs.core.count(username) >= aw.data.min_username_length)));
});

//# sourceMappingURL=aw.data.js.map
