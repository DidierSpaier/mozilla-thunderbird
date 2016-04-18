// This forces Thunderbird UI language to switch to locale of machine
// if available, disable updates and enable all add-ons by default.
// TODO: enable only the language packs by default.
pref("intl.locale.matchOS", true);
pref("extensions.autoDisableScopes", 0);
pref("app.update.enabled", false);
pref("app.update.auto", false);
