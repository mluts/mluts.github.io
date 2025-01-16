goog.provide('aw.db');
aw.db.schema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190),new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722),new cljs.core.Keyword("db","doc","db/doc",1913350069),"Unique Username"], null),new cljs.core.Keyword(null,"password-hash","password-hash",-704278294),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190)], null)], null);
if((typeof aw !== 'undefined') && (typeof aw.db !== 'undefined') && (typeof aw.db.db_conn !== 'undefined')){
} else {
aw.db.db_conn = (datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1 ? datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1(aw.db.schema) : datascript.core.create_conn.call(null,aw.db.schema));
}
aw.db.user_exists_QMARK_ = (function aw$db$user_exists_QMARK_(var_args){
var G__24908 = arguments.length;
switch (G__24908) {
case 1:
return aw.db.user_exists_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return aw.db.user_exists_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(aw.db.user_exists_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (username){
return cljs.core.boolean$(cljs.core.seq((function (){var G__24909 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword(null,"username","username",1605666410),username], null)], null);
var G__24910 = cljs.core.deref(aw.db.db_conn);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__24909,G__24910) : datascript.core.q.call(null,G__24909,G__24910));
})()));
}));

(aw.db.user_exists_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (username,password){
return cljs.core.boolean$(cljs.core.seq((function (){var G__24911 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword(null,"username","username",1605666410),username], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword(null,"password-hash","password-hash",-704278294),(aw.crypto.calc_hash.cljs$core$IFn$_invoke$arity$1 ? aw.crypto.calc_hash.cljs$core$IFn$_invoke$arity$1(password) : aw.crypto.calc_hash.call(null,password))], null)], null);
var G__24912 = cljs.core.deref(aw.db.db_conn);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__24911,G__24912) : datascript.core.q.call(null,G__24911,G__24912));
})()));
}));

(aw.db.user_exists_QMARK_.cljs$lang$maxFixedArity = 2);

aw.db.register_user = (function aw$db$register_user(username,password){
var G__24913 = aw.db.db_conn;
var G__24914 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(-1),new cljs.core.Keyword(null,"username","username",1605666410),username], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(-1),new cljs.core.Keyword(null,"password-hash","password-hash",-704278294),(aw.crypto.calc_hash.cljs$core$IFn$_invoke$arity$1 ? aw.crypto.calc_hash.cljs$core$IFn$_invoke$arity$1(password) : aw.crypto.calc_hash.call(null,password))], null)], null);
return (datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(G__24913,G__24914) : datascript.core.transact_BANG_.call(null,G__24913,G__24914));
});
aw.db.min_password_legnth = (6);
aw.db.min_username_length = (2);
aw.db.check_password_length = (function aw$db$check_password_length(password){
return (((!(clojure.string.blank_QMARK_(password)))) && ((cljs.core.count(password) >= aw.db.min_password_legnth)));
});
aw.db.check_username_length = (function aw$db$check_username_length(username){
return (((!(clojure.string.blank_QMARK_(username)))) && ((cljs.core.count(username) >= aw.db.min_username_length)));
});

//# sourceMappingURL=aw.db.js.map
