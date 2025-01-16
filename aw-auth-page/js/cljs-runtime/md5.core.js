goog.provide('md5.core');
/**
 * String goes in, md5 hex string comes out.
 */
md5.core.string__GT_md5_hex = (function md5$core$string__GT_md5_hex(s){
if(typeof s === 'string'){
} else {
throw (new Error("Assert failed: (string? s)"));
}

var _PERCENT_ = goog.crypt.byteArrayToHex((function (){var md5__$1 = (new goog.crypt.Md5());
md5__$1.update(goog.crypt.stringToUtf8ByteArray(s));

return md5__$1.digest();
})());
if(typeof _PERCENT_ === 'string'){
} else {
throw (new Error("Assert failed: (string? %)"));
}

return _PERCENT_;
});

//# sourceMappingURL=md5.core.js.map
