# Change log

## Version [5.0.0](https://github.com/nativescript-angular-jwt/tags/v5.0.0)

**Warning: this version has some breaking changes concerning the allowed domains and dissalowed routes!**

- Replace whitelistedDomains to allowedDomain[#668](https://github.com/nativescript-angular-jwt/pull/668)
- Replace blacklistedRoutes to disallowedRoutes[#668](https://github.com/nativescript-angular-jwt/pull/668)
- Removed the url dependency, as this is a Node module in the CommonJS format, and the Angular 10 CLI throws warnings when using dependencies in the CommonJS format. We're using the default URL interface, https://developer.mozilla.org/en-US/docs/Web/API/URL [#666](https://github.com/nativescript-angular-jwt/pull/666)

[Full Changelog](https://github.com/nativescript-angular-jwt/compare/v4.2.0..v5.0.0)

## Version [4.2.0](https://github.com/nativescript-angular-jwt/tags/v4.2.0)

[Full Changelog](https://github.com/nativescript-angular-jwt/compare/v4.1.2..v4.2.0)

- Allow the authScheme config parameter to be a getter function [#659](https://github.com/nativescript-angular-jwt/pull/659)

## Version [4.1.2](https://github.com/nativescript-angular-jwt/tags/v4.1.2) (2020-05-16)

[Full Changelog](https://github.com/nativescript-angular-jwt/compare/v4.1.1..v4.1.2)

- Support domains with a port other than the default HTTP ports (HTTP: 80, HTTPS: 443)
  [#656](https://github.com/nativescript-angular-jwt/pull/656)

## Version [4.1.1](https://github.com/nativescript-angular-jwt/tags/v4.1.1) (2020-05-15)

[Full Changelog](https://github.com/nativescript-angular-jwt/compare/v4.1.0..v4.1.1)

- Something went wrong pulishing `v4.1.0`, this version fixes that.

## Version [4.1.0](https://github.com/nativescript-angular-jwt/tags/v4.1.0) (2020-05-15)

[Full Changelog](https://github.com/nativescript-angular-jwt/compare/4.0.0..v4.1.0)

- Use blacklist domains regardless of their protocol [#644](https://github.com/nativescript-angular-jwt/pull/644)
- Pass the HttpRequest to the tokenGetter [#649](https://github.com/nativescript-angular-jwt/pull/649)

## Version [4.0.0](https://github.com/nativescript-angular-jwt/tags/v4.0.0) (2020-02-07)

[Full Changelog](https://github.com/nativescript-angular-jwt/compare/3.0.1..4.0.0)

From [\#622](https://github.com/nativescript-angular-jwt/pull/622) [avatsaev](https://github.com/avatsaev):

- Angular 9 compatibility
- Angular Ivy compatibility

## Version [3.0.1](https://github.com/nativescript-angular-jwt/tags/v3.0.1) (2019-10-28)

[Full Changelog](https://github.com/nativescript-angular-jwt/compare/3.0.0..3.0.1)

- Be sure to handle `undefined` tokens [\#626](https://github.com/nativescript-angular-jwt/pull/626) [@RobertRad](https://github.com/RobertRad)
- docs: corrected/rephrased a sentence in README.md [\#625](https://github.com/nativescript-angular-jwt/pull/625) [@noopur-tiwari](https://github.com/noopur-tiwari)

## Version [3.0.0](https://github.com/nativescript-angular-jwt/releases/tag/3.0.0) (2019-07-16)

[Full Changelog](https://github.com/nativescript-angular-jwt/compare/2.1.2..3.0.0)

- **Breaking change** `isTokenExpired` now returns `false` if no expiry date is found inside the token. This is a change to align with the [JWT spec](https://tools.ietf.org/html/rfc7519#section-4.1.4), but may break applications that rely on the previous behavior. [#562](https://github.com/nativescript-angular-jwt/pull/562) [@atom-morgan](https://github.com/atom-morgan)

## Version [2.1.2](https://github.com/nativescript-angular-jwt/releases/tag/2.1.2) (2019-07-15)

[Full Changelog](https://github.com/nativescript-angular-jwt/compare/2.1.1..2.1.2)

- Gracefully handle null/empty tokens [#586](https://github.com/nativescript-angular-jwt/pull/586)

## Version [2.1.1](https://github.com/nativescript-angular-jwt/releases/tag/2.1.1) (2019-07-01)

[Full Changelog](https://github.com/nativescript-angular-jwt/compare/2.1.0...2.1.1)

- Blacklist/Whitelist check fix [#538](https://github.com/nativescript-angular-jwt/pull/538)
- Refactor deep rxjs imports and use named define [#608](https://github.com/nativescript-angular-jwt/pull/608)
- fix(rxjs): remove imports from rxjs/internal [#542](https://github.com/nativescript-angular-jwt/pull/542)

> Note: historical changelog information has not been recorded in this format. Please see the [releases page](https://github.com/nativescript-angular-jwt/releases) for information on previous releases.
