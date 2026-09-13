/* @ds-bundle: {"format":4,"namespace":"GreenInkDesignSystem_4f2d41","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"InlineLink","sourcePath":"components/core/InlineLink.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Byline","sourcePath":"components/editorial/Byline.jsx"},{"name":"Caption","sourcePath":"components/editorial/Caption.jsx"},{"name":"Clipping","sourcePath":"components/editorial/Clipping.jsx"},{"name":"Columns","sourcePath":"components/editorial/Columns.jsx"},{"name":"DropCap","sourcePath":"components/editorial/DropCap.jsx"},{"name":"Kicker","sourcePath":"components/editorial/Kicker.jsx"},{"name":"NewsPhoto","sourcePath":"components/editorial/NewsPhoto.jsx"},{"name":"PullQuote","sourcePath":"components/editorial/PullQuote.jsx"},{"name":"Dinkus","sourcePath":"components/press/Dinkus.jsx"},{"name":"Folio","sourcePath":"components/press/Folio.jsx"},{"name":"Masthead","sourcePath":"components/press/Masthead.jsx"},{"name":"Rule","sourcePath":"components/press/Rule.jsx"},{"name":"SectionHead","sourcePath":"components/press/SectionHead.jsx"},{"name":"About","sourcePath":"ui_kits/portfolio/About.jsx"},{"name":"CaseStudy","sourcePath":"ui_kits/portfolio/CaseStudy.jsx"},{"name":"Page","sourcePath":"ui_kits/portfolio/Chrome.jsx"},{"name":"Contact","sourcePath":"ui_kits/portfolio/Contact.jsx"},{"name":"FrontPage","sourcePath":"ui_kits/portfolio/FrontPage.jsx"},{"name":"WORKS","sourcePath":"ui_kits/portfolio/data.js"},{"name":"WORK_DETAIL","sourcePath":"ui_kits/portfolio/data.js"}],"sourceHashes":{"components/core/Button.jsx":"031b4f63c13c","components/core/InlineLink.jsx":"c7abd7806792","components/core/Tag.jsx":"68094db3aad8","components/editorial/Byline.jsx":"c6d1cbdd6cbf","components/editorial/Caption.jsx":"9f2e7a9a90bd","components/editorial/Clipping.jsx":"bf5c2b11f23e","components/editorial/Columns.jsx":"bd3953e0cc68","components/editorial/DropCap.jsx":"c66bb1c845ea","components/editorial/Kicker.jsx":"0501793d591c","components/editorial/NewsPhoto.jsx":"c2cc63c7984e","components/editorial/PullQuote.jsx":"5f30c324006b","components/press/Dinkus.jsx":"68ccea0c0c75","components/press/Folio.jsx":"b1fcb78efcd3","components/press/Masthead.jsx":"f925eb020acc","components/press/Rule.jsx":"24e613fc8e00","components/press/SectionHead.jsx":"2f4f5f4b91f9","ui_kits/portfolio/About.jsx":"c9e8a4a82e15","ui_kits/portfolio/CaseStudy.jsx":"cd2391f55fed","ui_kits/portfolio/Chrome.jsx":"f5f25cbbe775","ui_kits/portfolio/Contact.jsx":"f100729658f8","ui_kits/portfolio/FrontPage.jsx":"9b2a38b7f63a","ui_kits/portfolio/data.js":"5caabaed7dec"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.GreenInkDesignSystem_4f2d41 = window.GreenInkDesignSystem_4f2d41 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Press button: square, letterspaced small caps, lifts with a spot-ink offset. */
function Button({
  variant = 'primary',
  as = 'button',
  href,
  children,
  disabled,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const ghost = variant === 'ghost';
  const base = {
    display: 'inline-block',
    fontFamily: 'var(--font-display)',
    fontWeight: 'var(--fw-semibold)',
    fontSize: '.78rem',
    letterSpacing: 'var(--ls-button)',
    textTransform: 'uppercase',
    padding: '.7em 1.4em',
    border: 'var(--border-btn)',
    borderRadius: 'var(--radius)',
    background: ghost ? 'transparent' : 'var(--forest)',
    color: ghost ? 'var(--ink)' : 'var(--text-on-ink)',
    textDecoration: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'var(--transition-press)',
    opacity: disabled ? .4 : 1,
    transform: hover && !disabled ? 'var(--lift)' : 'none',
    boxShadow: hover && !disabled ? ghost ? 'var(--shadow-press-alt)' : 'var(--shadow-press)' : 'none',
    ...(hover && !disabled && !ghost ? {
      background: 'var(--ink)'
    } : null),
    ...style
  };
  const Tag = as === 'a' ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: as === 'a' ? href : undefined,
    disabled: Tag === 'button' ? disabled : undefined,
    onClick: disabled ? undefined : onClick,
    style: base,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/InlineLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Italic in-text link, deep forest, ochre underline on hover. */
function InlineLink({
  href = '#',
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: {
      fontStyle: 'italic',
      color: hover ? 'var(--text-link-hover)' : 'var(--text-link)',
      textDecorationColor: hover ? 'var(--spot)' : 'currentColor',
      textUnderlineOffset: '3px',
      textDecorationThickness: '1px',
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), children);
}
Object.assign(__ds_scope, { InlineLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/InlineLink.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Standing label — a category chip in outlined small caps, or the ochre spot version. */
function Tag({
  spot = false,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-micro)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--ls-byline)',
      textTransform: 'uppercase',
      color: spot ? 'var(--text-on-ink)' : 'var(--forest-strong)',
      background: spot ? 'var(--ochre)' : 'transparent',
      border: '1px solid ' + (spot ? 'var(--ochre)' : 'var(--forest-strong)'),
      padding: '.3em .7em',
      borderRadius: 'var(--radius)',
      display: 'inline-block',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/editorial/Byline.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** "By Name · Role" — small caps name, italic sage role. */
function Byline({
  name,
  role,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("p", _extends({
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '.8rem',
      fontWeight: 'var(--fw-medium)',
      letterSpacing: 'var(--ls-byline)',
      textTransform: 'uppercase',
      color: 'var(--ink)',
      margin: 0,
      ...style
    }
  }, rest), "By ", name, role ? /*#__PURE__*/React.createElement("em", {
    style: {
      color: 'var(--sage)',
      fontStyle: 'italic',
      textTransform: 'none',
      letterSpacing: 0,
      fontFamily: 'var(--font-body)'
    }
  }, " \xB7 ", role) : null);
}
Object.assign(__ds_scope, { Byline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/Byline.jsx", error: String((e && e.message) || e) }); }

// components/editorial/Caption.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Italic sage caption with an ochre tick on the left. */
function Caption({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("p", _extends({
    style: {
      fontFamily: 'var(--font-body)',
      fontStyle: 'italic',
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-caption)',
      marginTop: 'var(--s-2)',
      marginBottom: 0,
      paddingLeft: 'var(--s-3)',
      borderLeft: '2px solid var(--ochre)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Caption });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/Caption.jsx", error: String((e && e.message) || e) }); }

// components/editorial/Clipping.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Project card, printed on aged stock — the portfolio's basic unit. */
function Clipping({
  over,
  title,
  jump = 'Continued on page 4 →',
  href,
  onClick,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const interactive = Boolean(href || onClick);
  const Tag = href ? 'a' : 'article';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'block',
      background: 'var(--surface-inset)',
      border: 'var(--border-ink)',
      padding: 'var(--pad-inset)',
      textDecoration: 'none',
      color: 'var(--ink)',
      cursor: interactive ? 'pointer' : 'default',
      transition: 'var(--transition-press)',
      transform: interactive && hover ? 'var(--lift)' : 'none',
      boxShadow: interactive && hover ? 'var(--shadow-press)' : 'none',
      ...style
    }
  }, rest), over ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-micro)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      color: 'var(--ochre)'
    }
  }, over) : null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: '1.5rem',
      lineHeight: 'var(--lh-heading)',
      margin: 'var(--s-2) 0 var(--s-3)',
      color: 'var(--ink)'
    }
  }, title), children ? /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '0 0 var(--s-3)',
      fontSize: '.95rem'
    }
  }, children) : null, jump ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontStyle: 'italic',
      fontSize: 'var(--fs-caption)',
      color: 'var(--forest-strong)'
    }
  }, jump) : null);
}
Object.assign(__ds_scope, { Clipping });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/Clipping.jsx", error: String((e && e.message) || e) }); }

// components/editorial/Columns.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Multi-column running text with a hairline column rule. Collapses to one column. */
function Columns({
  count = 2,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      columnCount: count,
      columnGap: 'var(--gap-column)',
      columnRule: 'var(--border-hair)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Columns });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/Columns.jsx", error: String((e && e.message) || e) }); }

// components/editorial/DropCap.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Opening paragraph with a raised forest initial. One per page — never two in view. */
function DropCap({
  children,
  style,
  ...rest
}) {
  const id = React.useId().replace(/[^a-zA-Z0-9]/g, '');
  return /*#__PURE__*/React.createElement("div", _extends({
    style: style
  }, rest), /*#__PURE__*/React.createElement("style", null, '#dc' + id + ' p::first-letter{font-family:var(--font-display);font-weight:var(--fw-semibold);float:left;font-size:4.2rem;line-height:.72;padding:.06em .12em .02em 0;color:var(--forest)}'), /*#__PURE__*/React.createElement("div", {
    id: 'dc' + id
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, children)));
}
Object.assign(__ds_scope, { DropCap });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/DropCap.jsx", error: String((e && e.message) || e) }); }

// components/editorial/Kicker.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Ochre small-caps overline above a headline. */
function Kicker({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-kicker)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--ls-kicker)',
      textTransform: 'uppercase',
      color: 'var(--text-kicker)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Kicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/Kicker.jsx", error: String((e && e.message) || e) }); }

// components/editorial/NewsPhoto.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Duotone image well with a halftone dot screen. Pass src for real imagery. */
function NewsPhoto({
  src,
  alt = '',
  ratio = '4 / 3',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: src ? undefined : 'img',
    "aria-label": src ? undefined : alt,
    style: {
      position: 'relative',
      aspectRatio: ratio,
      overflow: 'hidden',
      border: 'var(--border-ink)',
      background: 'linear-gradient(135deg, var(--forest), var(--ink))',
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'grayscale(1) contrast(1.1)',
      mixBlendMode: 'luminosity'
    }
  }) : null, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      opacity: .5,
      mixBlendMode: 'screen',
      backgroundImage: 'radial-gradient(var(--paper) 1px, transparent 1.4px)',
      backgroundSize: 'var(--halftone-size)'
    }
  }));
}
Object.assign(__ds_scope, { NewsPhoto });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/NewsPhoto.jsx", error: String((e && e.message) || e) }); }

// components/editorial/PullQuote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Heavy rule over, hairline under, italic Fraunces, ochre quote mark. */
function PullQuote({
  cite,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("blockquote", _extends({
    style: {
      borderTop: 'var(--border-heavy)',
      borderBottom: 'var(--border-ink)',
      padding: 'var(--s-5) 0',
      margin: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontWeight: 'var(--fw-regular)',
      fontSize: '1.55rem',
      lineHeight: 'var(--lh-tight)',
      margin: 0,
      color: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: 'var(--ochre)',
      fontSize: '1.6em',
      lineHeight: 0,
      verticalAlign: '-.35em',
      marginRight: '.05em'
    }
  }, "\u201C"), children), cite ? /*#__PURE__*/React.createElement("cite", {
    style: {
      display: 'block',
      marginTop: 'var(--s-3)',
      fontFamily: 'var(--font-display)',
      fontStyle: 'normal',
      fontSize: '.72rem',
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      color: 'var(--sage)'
    }
  }, cite) : null);
}
Object.assign(__ds_scope, { PullQuote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/PullQuote.jsx", error: String((e && e.message) || e) }); }

// components/press/Dinkus.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** ⁂ — a soft break within a story, or a sign-off above the colophon. */
function Dinkus({
  mark = '⁂',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    "aria-hidden": "true",
    style: {
      textAlign: 'center',
      color: 'var(--forest)',
      fontSize: '1.3rem',
      letterSpacing: '.4em',
      ...style
    }
  }, rest), mark);
}
Object.assign(__ds_scope, { Dinkus });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/press/Dinkus.jsx", error: String((e && e.message) || e) }); }

// components/press/Folio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Running header of a real paper: publication, standing line, edition/date. */
function Folio({
  publication,
  middle,
  right,
  style,
  ...rest
}) {
  const cell = {
    whiteSpace: 'nowrap'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--s-4)',
      padding: 'var(--s-3) 0',
      borderTop: 'var(--border-ink)',
      borderBottom: 'var(--border-ink)',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-micro)',
      fontWeight: 'var(--fw-medium)',
      letterSpacing: 'var(--ls-folio)',
      textTransform: 'uppercase',
      color: 'var(--ink)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: cell
  }, publication), /*#__PURE__*/React.createElement("span", {
    style: {
      ...cell,
      color: 'var(--sage)',
      letterSpacing: '.28em'
    }
  }, middle), /*#__PURE__*/React.createElement("span", {
    style: cell
  }, right));
}
Object.assign(__ds_scope, { Folio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/press/Folio.jsx", error: String((e && e.message) || e) }); }

// components/press/Masthead.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** The nameplate. Off-register ochre ghost is the press signature — keep it. */
function Masthead({
  name,
  the = 'The',
  dateline = [],
  rule = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      textAlign: 'center',
      padding: 'var(--s-8) 0 var(--s-5)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("hr", {
    style: {
      border: 0,
      borderTop: 'var(--border-ink)',
      margin: '0 0 var(--s-2)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'inline-block',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 'var(--fs-nameplate)',
      lineHeight: 'var(--lh-nameplate)',
      letterSpacing: 'var(--ls-nameplate)',
      color: 'var(--text-display)',
      fontVariationSettings: 'var(--wonk-on)'
    }
  }, the ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: '.2em',
      letterSpacing: 'var(--ls-the)',
      fontWeight: 'var(--fw-regular)',
      color: 'var(--ink)',
      marginBottom: '.15em',
      paddingLeft: '.5em'
    }
  }, the) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-block'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: 2,
      top: 3,
      color: 'var(--ochre)',
      opacity: .32
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative'
    }
  }, name))), dateline.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '.75em',
      marginTop: 'var(--s-4)',
      paddingTop: 'var(--s-2)',
      fontFamily: 'var(--font-display)',
      fontSize: '.72rem',
      fontWeight: 'var(--fw-medium)',
      letterSpacing: '.2em',
      textTransform: 'uppercase'
    }
  }, dateline.map((d, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ochre)'
    }
  }, "\u2726") : null, /*#__PURE__*/React.createElement("span", null, d)))) : null, rule ? /*#__PURE__*/React.createElement("hr", {
    style: {
      border: 0,
      height: 0,
      borderTop: 'var(--border-heavy)',
      boxShadow: 'var(--shadow-oxford)',
      margin: 'var(--s-4) 0 0'
    }
  }) : null);
}
Object.assign(__ds_scope, { Masthead });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/press/Masthead.jsx", error: String((e && e.message) || e) }); }

// components/press/Rule.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** The line library: hairline, heavy, Oxford (thick-over-thin), dotted. */
function Rule({
  variant = 'hair',
  style,
  ...rest
}) {
  const map = {
    hair: {
      border: 0,
      borderTop: 'var(--border-hair)'
    },
    heavy: {
      border: 0,
      borderTop: 'var(--border-heavy)'
    },
    oxford: {
      border: 0,
      height: 0,
      borderTop: 'var(--border-heavy)',
      boxShadow: 'var(--shadow-oxford)'
    },
    dotted: {
      border: 0,
      borderTop: 'var(--border-dot)'
    }
  };
  return /*#__PURE__*/React.createElement("hr", _extends({
    style: {
      ...(map[variant] || map.hair),
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Rule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/press/Rule.jsx", error: String((e && e.message) || e) }); }

// components/press/SectionHead.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Centred section opener: rule-flanked label, italic count line, Fraunces heading. */
function SectionHead({
  label,
  note,
  children,
  style,
  ...rest
}) {
  const bar = {
    content: '""',
    height: 1,
    background: 'var(--rule-strong)',
    flex: 1,
    maxWidth: 120
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: 'center',
      marginBottom: 'var(--s-8)',
      ...style
    }
  }, rest), label ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--s-4)',
      justifyContent: 'center',
      marginBottom: 'var(--s-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: bar
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '.72rem',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-label)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: bar
  })) : null, note ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontStyle: 'italic',
      color: 'var(--sage)',
      fontSize: '.9rem',
      letterSpacing: '.05em',
      marginBottom: 'var(--s-2)'
    }
  }, note) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-medium)',
      margin: 0,
      fontSize: 'clamp(1.5rem,4vw,2.4rem)',
      letterSpacing: '.02em',
      color: 'var(--text-heading)',
      display: 'inline-block',
      padding: '0 var(--s-5)'
    }
  }, children));
}
Object.assign(__ds_scope, { SectionHead });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/press/SectionHead.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/About.jsx
try { (() => {
const ENTRIES = [['2026', 'Design lead, Formula SAE drivetrain', 'Owned the two-stage reduction from concept through validation.'], ['2025', 'Manufacturing intern, Hollis Pumps', 'Ten weeks on the floor; wrote the fixture spec still in use on line 3.'], ['2024', 'Teaching assistant, Statics & Dynamics', 'Two sections, sixty students, one very tired whiteboard.'], ['2023', 'B.S. Mechanical Engineering begun', 'Class of 2027. GPA 3.8. Dean\'s list, four semesters.']];

/** About & CV — a standing feature page with a dated record column. */
function About({
  onNav
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--s-8) 0 var(--s-10)',
      borderBottom: 'var(--border-hair)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '.9fr 1.1fr',
      gap: 'var(--s-8)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.NewsPhoto, {
    ratio: "4 / 5",
    alt: "Portrait"
  }), /*#__PURE__*/React.createElement(__ds_scope.Caption, null, "Portrait \u2014 swap in a real photograph; duotone is applied automatically.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Kicker, null, "About the Author"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 'clamp(2rem,4.5vw,3rem)',
      lineHeight: 'var(--lh-headline)',
      letterSpacing: 'var(--ls-headline)',
      margin: 'var(--s-3) 0 var(--s-4)',
      fontVariationSettings: 'var(--wonk-off)'
    }
  }, "I make things that have to survive being used"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontStyle: 'italic',
      fontWeight: 'var(--fw-light)',
      fontSize: 'var(--fs-deck)',
      lineHeight: 'var(--lh-deck)',
      color: 'var(--forest-strong)',
      margin: '0 0 var(--s-5)'
    }
  }, "Mechanical engineering undergraduate. Drivetrains, thermal systems, and a stubborn preference for parts I can hold."), /*#__PURE__*/React.createElement(__ds_scope.Columns, {
    count: 2
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 var(--s-4)'
    }
  }, "I came to engineering through a broken pump in my father's shop and never really left. Most of what I know I learned by measuring something, being wrong about it, and measuring it again."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "I am looking for a summer 2027 internship in mechanical design or test engineering \u2014 ideally somewhere the prototype shop is close enough to walk to.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--s-2)',
      margin: 'var(--s-5) 0'
    }
  }, ['SolidWorks', 'ANSYS', 'GD&T', 'MATLAB', 'Python', 'Manual Machining', 'Welding (TIG)'].map(t => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: t
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--s-4)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, null, "Download CV (PDF)"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "ghost",
    as: "a",
    href: "#contact",
    onClick: e => {
      e.preventDefault();
      onNav('contact');
    }
  }, "Get in touch"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--s-10) 0'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SectionHead, {
    label: "The Record",
    note: "Reverse chronological, as a paper would run it"
  }, "Curriculum vitae"), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '52rem',
      margin: '0 auto'
    }
  }, ENTRIES.map(([year, title, note], i) => /*#__PURE__*/React.createElement("div", {
    key: year,
    style: {
      display: 'grid',
      gridTemplateColumns: '6rem 1fr',
      gap: 'var(--s-5)',
      padding: 'var(--s-4) 0',
      borderTop: i === 0 ? 'var(--border-heavy)' : 'var(--border-hair)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: '1.1rem',
      color: 'var(--forest)'
    }
  }, year), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-medium)',
      fontSize: '1.15rem'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--s-1) 0 0',
      color: 'var(--sage)',
      fontSize: '.95rem'
    }
  }, note)))), /*#__PURE__*/React.createElement(__ds_scope.Rule, null), /*#__PURE__*/React.createElement(__ds_scope.Dinkus, {
    style: {
      marginTop: 'var(--s-6)'
    }
  }))));
}
Object.assign(__ds_scope, { About });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Chrome.jsx
try { (() => {
const NAV = [['front', 'Front Page'], ['work', 'Selected Works'], ['about', 'About & CV'], ['contact', 'Contact']];

/** Standing page furniture: grain, sheet, folio, department nav, colophon. */
function Page({
  page,
  onNav,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: '100%',
      background: 'var(--paper)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 0,
      pointerEvents: 'none',
      opacity: 'var(--grain-opacity)',
      backgroundImage: 'var(--grain)',
      mixBlendMode: 'multiply'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      maxWidth: 'var(--maxw)',
      margin: '0 auto',
      padding: '0 var(--page-gutter)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Folio, {
    publication: "The Hartley Gazette",
    middle: "A Mechanical Engineering Portfolio",
    right: new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
    style: {
      marginTop: 'var(--s-3)'
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 'var(--s-6)',
      padding: 'var(--s-3) 0',
      borderBottom: 'var(--border-hair)'
    }
  }, NAV.map(([id, label]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    href: '#' + id,
    onClick: e => {
      e.preventDefault();
      onNav(id);
    },
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '.7rem',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      textDecoration: 'none',
      color: page === id ? 'var(--ochre)' : 'var(--ink)',
      borderBottom: page === id ? '2px solid var(--ochre)' : '2px solid transparent',
      paddingBottom: 2
    }
  }, label))), children, /*#__PURE__*/React.createElement("footer", {
    style: {
      textAlign: 'center',
      padding: 'var(--s-10) 0 var(--s-12)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Dinkus, {
    style: {
      marginBottom: 'var(--s-5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: '1.4rem',
      letterSpacing: '.02em',
      color: 'var(--forest)'
    }
  }, "The Hartley Gazette"), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '36rem',
      margin: 'var(--s-4) auto 0',
      fontStyle: 'italic',
      color: 'var(--sage)',
      fontSize: '.9rem'
    }
  }, "Set in Fraunces and Newsreader. Printed on newsprint. Written and built by hand between problem sets."), /*#__PURE__*/React.createElement(__ds_scope.Rule, {
    style: {
      margin: 'var(--s-6) auto 0',
      maxWidth: '20rem'
    }
  }))));
}
Object.assign(__ds_scope, { Page });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Contact.jsx
try { (() => {
const field = {
  width: '100%',
  fontFamily: 'var(--font-body)',
  fontSize: '1rem',
  color: 'var(--ink)',
  background: 'var(--paper)',
  border: 'var(--border-ink)',
  borderRadius: 'var(--radius)',
  padding: 'var(--s-3)',
  marginTop: 'var(--s-2)'
};
const label = {
  fontFamily: 'var(--font-display)',
  fontSize: '.68rem',
  fontWeight: 'var(--fw-semibold)',
  letterSpacing: '.2em',
  textTransform: 'uppercase',
  color: 'var(--sage)'
};

/** Contact — a classified-ad form on aged stock, with a standing details column. */
function Contact() {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--s-8) 0 var(--s-10)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SectionHead, {
    label: "Correspondence",
    note: "Replies within a day or two"
  }, "Write to the desk"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.2fr .8fr',
      gap: 'var(--s-8)',
      alignItems: 'start',
      maxWidth: '58rem',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      background: 'var(--surface-inset)',
      border: 'var(--border-ink)',
      padding: 'var(--pad-card)'
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: 'var(--s-6) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.6rem',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--forest)'
    }
  }, "Filed."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontStyle: 'italic',
      color: 'var(--sage)',
      margin: 'var(--s-3) 0 var(--s-5)'
    }
  }, "Your note has gone to the desk. Expect a reply in a day or two."), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "ghost",
    onClick: () => setSent(false)
  }, "Write another")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--s-4)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: label
  }, "Your name"), /*#__PURE__*/React.createElement("input", {
    style: field,
    defaultValue: "",
    placeholder: "A. Reader"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: label
  }, "Reply address"), /*#__PURE__*/React.createElement("input", {
    style: field,
    type: "email",
    placeholder: "you@company.com"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--s-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: label
  }, "Subject"), /*#__PURE__*/React.createElement("input", {
    style: field,
    placeholder: "Summer 2027 internship"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--s-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: label
  }, "Your note"), /*#__PURE__*/React.createElement("textarea", {
    rows: 6,
    style: {
      ...field,
      resize: 'vertical'
    },
    placeholder: "Tell me what you're building."
  })), /*#__PURE__*/React.createElement(__ds_scope.Rule, {
    style: {
      margin: 'var(--s-5) 0'
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, null, "Send to the desk"))), /*#__PURE__*/React.createElement("aside", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-micro)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      color: 'var(--ochre)'
    }
  }, "Standing Details"), /*#__PURE__*/React.createElement(__ds_scope.Rule, {
    style: {
      margin: 'var(--s-3) 0 var(--s-4)'
    }
  }), [['Email', 'j.hartley@university.edu'], ['LinkedIn', '/in/jhartley'], ['GitHub', '@jhartley'], ['Location', 'Austin, Texas']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      marginBottom: 'var(--s-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...label,
      marginBottom: 2
    }
  }, k), /*#__PURE__*/React.createElement(__ds_scope.InlineLink, {
    href: "#"
  }, v))), /*#__PURE__*/React.createElement(__ds_scope.Rule, {
    variant: "dotted",
    style: {
      margin: 'var(--s-5) 0 var(--s-4)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--s-2)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    spot: true
  }, "Open to Summer 2027"), /*#__PURE__*/React.createElement(__ds_scope.Tag, null, "Will relocate")))));
}
Object.assign(__ds_scope, { Contact });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/data.js
try { (() => {
const WORKS = [{
  id: 'gearbox',
  over: 'Case No. 01 · 2026',
  title: 'A two-stage gearbox, 40% quieter',
  dek: 'How a change in tooth profile took 6 dB out of a competition drivetrain.',
  jump: 'Continued on page 4 →'
}, {
  id: 'heatsink',
  over: 'Case No. 02 · 2025',
  title: 'A heat sink for a battery that would not sit still',
  dek: 'Skived fins, a 3D-printed manifold, and a thermal camera borrowed from the lab.',
  jump: 'Continued on page 6 →'
}, {
  id: 'bracket',
  over: 'Case No. 03 · 2025',
  title: 'Topology optimisation on a suspension bracket',
  dek: '38% lighter at the same factor of safety — and a lesson in what to ignore.',
  jump: 'Continued on page 7 →'
}, {
  id: 'testrig',
  over: 'Case No. 04 · 2024',
  title: 'A load rig built from scrap 80/20',
  dek: 'Two hundred dollars of extrusion, one load cell, and a semester of data.',
  jump: 'Continued on page 9 →'
}, {
  id: 'compliant',
  over: 'Case No. 05 · 2024',
  title: 'A compliant gripper with no hinges',
  dek: 'Printed in one piece, flexed ten thousand times, still holding.',
  jump: 'Continued on page 11 →'
}, {
  id: 'pump',
  over: 'Case No. 06 · 2023',
  title: 'Reverse-engineering a hand pump',
  dek: 'Calipers, a sketchbook, and a first real drawing package.',
  jump: 'Continued on page 12 →'
}];
const WORK_DETAIL = {
  role: 'Design lead · Drivetrain subteam',
  duration: 'Sept 2025 – Apr 2026',
  tools: ['SolidWorks', 'ANSYS Mechanical', 'Manual lathe & mill', 'Wire EDM (vendor)'],
  team: 'Four undergraduates, one faculty advisor'
};
Object.assign(__ds_scope, { WORKS, WORK_DETAIL });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/data.js", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/CaseStudy.jsx
try { (() => {
/** An inside page — one project, run as a full story with a spec rail. */
function CaseStudy({
  id,
  onNav
}) {
  const work = __ds_scope.WORKS.find(w => w.id === id) || __ds_scope.WORKS[0];
  return /*#__PURE__*/React.createElement("article", {
    style: {
      padding: 'var(--s-8) 0 var(--s-10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: '48rem',
      margin: '0 auto var(--s-6)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Kicker, null, work.over), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 'clamp(2.2rem,5vw,3.4rem)',
      lineHeight: 'var(--lh-headline)',
      letterSpacing: 'var(--ls-headline)',
      margin: 'var(--s-3) 0 var(--s-4)',
      fontVariationSettings: 'var(--wonk-off)'
    }
  }, work.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontStyle: 'italic',
      fontWeight: 'var(--fw-light)',
      fontSize: 'var(--fs-deck)',
      lineHeight: 'var(--lh-deck)',
      color: 'var(--forest-strong)',
      margin: '0 auto var(--s-4)',
      maxWidth: '38rem'
    }
  }, work.dek), /*#__PURE__*/React.createElement(__ds_scope.Byline, {
    name: "J. Hartley",
    role: __ds_scope.WORK_DETAIL.role,
    style: {
      display: 'inline-block'
    }
  })), /*#__PURE__*/React.createElement(__ds_scope.Rule, {
    variant: "oxford"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 17rem',
      gap: 'var(--s-8)',
      marginTop: 'var(--s-8)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.NewsPhoto, {
    ratio: "16 / 9",
    alt: "The assembled unit on the bench"
  }), /*#__PURE__*/React.createElement(__ds_scope.Caption, null, "The assembled unit on the bench, minutes before the first run."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--s-6)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.DropCap, null, "The first prototype howled. At 6,000 rpm the housing sang loudly enough that the team could hear the car two corners away, and a gearbox that announces itself is a gearbox losing energy.")), /*#__PURE__*/React.createElement(__ds_scope.Columns, {
    count: 2,
    style: {
      marginTop: 'var(--s-5)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 var(--s-4)'
    }
  }, "We started where the noise was loudest. A modal sweep of the housing put the first bending mode at 1.4 kHz \u2014 uncomfortably close to the mesh frequency at race speed \u2014 so the case earned a single longitudinal rib and 240 grams."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 var(--s-4)'
    }
  }, "The second change was the reduction itself. Raising the contact ratio above two meant a tooth was always entering before the last one left, which smoothed the transmission error curve and, more usefully, stopped the whine from having anywhere to start."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 var(--s-4)'
    }
  }, "The third change was a deletion. An idler bearing had been carrying almost nothing and fighting the shaft's thermal growth; removing it cost nothing in stiffness and returned half a decibel on its own. See the ", /*#__PURE__*/React.createElement(__ds_scope.InlineLink, {
    href: "#"
  }, "full drawing package"), " for the final stack-up."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Measured at the same 6,000 rpm and one metre, the rebuilt unit read 6.1 dB(A) quieter and ran nine degrees cooler over a twenty-minute endurance sim.")), /*#__PURE__*/React.createElement(__ds_scope.PullQuote, {
    cite: "\u2014 Advisor, Senior Design Review",
    style: {
      margin: 'var(--s-8) 0'
    }
  }, "The gearbox got quieter when we stopped adding parts."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--s-5)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.NewsPhoto, {
    alt: "FEA contour of the ribbed housing"
  }), /*#__PURE__*/React.createElement(__ds_scope.Caption, null, "FEA contour of the ribbed housing \u2014 first mode pushed to 2.1 kHz.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.NewsPhoto, {
    alt: "Cut teeth, second stage"
  }), /*#__PURE__*/React.createElement(__ds_scope.Caption, null, "Second-stage teeth, cut on a borrowed hobbing head.")))), /*#__PURE__*/React.createElement("aside", {
    style: {
      background: 'var(--surface-inset)',
      border: 'var(--border-ink)',
      padding: 'var(--pad-inset)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-micro)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      color: 'var(--ochre)'
    }
  }, "The Particulars"), /*#__PURE__*/React.createElement(__ds_scope.Rule, {
    style: {
      margin: 'var(--s-3) 0'
    }
  }), [['Role', __ds_scope.WORK_DETAIL.role], ['Dates', __ds_scope.WORK_DETAIL.duration], ['Team', __ds_scope.WORK_DETAIL.team]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      marginBottom: 'var(--s-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '.66rem',
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      color: 'var(--sage)'
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '.92rem'
    }
  }, v))), /*#__PURE__*/React.createElement(__ds_scope.Rule, {
    variant: "dotted",
    style: {
      margin: 'var(--s-4) 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '.66rem',
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      color: 'var(--sage)',
      marginBottom: 'var(--s-3)'
    }
  }, "Tools"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--s-2)'
    }
  }, __ds_scope.WORK_DETAIL.tools.map(t => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: t
  }, t))), /*#__PURE__*/React.createElement(__ds_scope.Rule, {
    style: {
      margin: 'var(--s-5) 0 var(--s-4)'
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "ghost",
    as: "a",
    href: "#front",
    onClick: e => {
      e.preventDefault();
      onNav('front');
    },
    style: {
      width: '100%',
      textAlign: 'center'
    }
  }, "\u2190 Back to page one"))));
}
Object.assign(__ds_scope, { CaseStudy });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/CaseStudy.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/FrontPage.jsx
try { (() => {
/** The front page — masthead, lead story, works grid, standing notes. */
function FrontPage({
  onOpen,
  onNav
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(__ds_scope.Masthead, {
    name: "Hartley",
    dateline: ['Est. 2026', 'Portfolio Edition', 'Mechanical Engineering']
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--s-8) 0',
      borderBottom: 'var(--border-hair)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.15fr .85fr',
      gap: 'var(--s-8)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Kicker, null, "Lead Story \xB7 Senior Design"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 'clamp(2.4rem,5vw,3.6rem)',
      lineHeight: 'var(--lh-headline)',
      letterSpacing: 'var(--ls-headline)',
      margin: 'var(--s-3) 0 var(--s-4)',
      fontVariationSettings: 'var(--wonk-off)'
    }
  }, "A two-stage gearbox, forty per cent quieter"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontStyle: 'italic',
      fontWeight: 'var(--fw-light)',
      fontSize: 'var(--fs-deck)',
      lineHeight: 'var(--lh-deck)',
      color: 'var(--forest-strong)',
      margin: '0 0 var(--s-4)'
    }
  }, "A tooth-profile change, a stiffer housing and one fewer bearing took six decibels out of a Formula SAE drivetrain."), /*#__PURE__*/React.createElement(__ds_scope.Byline, {
    name: "J. Hartley",
    role: "Mechanical Engineering, Class of 2027"
  }), /*#__PURE__*/React.createElement(__ds_scope.Rule, {
    style: {
      margin: 'var(--s-4) 0'
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.DropCap, null, "The first prototype howled. At 6,000 rpm the housing sang loudly enough that the team could hear the car two corners away, and a gearbox that announces itself is a gearbox losing energy. Over one semester we rebuilt the reduction around a higher contact ratio, stiffened the case with a single rib, and deleted the idler bearing that had been fighting the shaft all along."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--s-4)',
      marginTop: 'var(--s-5)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    as: "a",
    href: "#work",
    onClick: e => {
      e.preventDefault();
      onOpen('gearbox');
    }
  }, "Read the case study"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "ghost",
    as: "a",
    href: "#about",
    onClick: e => {
      e.preventDefault();
      onNav('about');
    }
  }, "Download CV"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.NewsPhoto, {
    ratio: "4 / 5",
    alt: "Cutaway of the two-stage reduction"
  }), /*#__PURE__*/React.createElement(__ds_scope.Caption, null, "Cutaway of the two-stage reduction, machined in the student shop over spring break."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--s-2)',
      marginTop: 'var(--s-5)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Tag, null, "SolidWorks"), /*#__PURE__*/React.createElement(__ds_scope.Tag, null, "FEA"), /*#__PURE__*/React.createElement(__ds_scope.Tag, null, "GD&T"), /*#__PURE__*/React.createElement(__ds_scope.Tag, null, "Manual Machining"), /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    spot: true
  }, "Open to Summer 2027"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--s-10) 0',
      borderBottom: 'var(--border-hair)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SectionHead, {
    label: "Selected Works",
    note: "Six projects, 2023\u20132026"
  }, "Things I designed, built and broke"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--gap-grid)'
    }
  }, __ds_scope.WORKS.map(w => /*#__PURE__*/React.createElement(__ds_scope.Clipping, {
    key: w.id,
    over: w.over,
    title: w.title,
    href: '#' + w.id,
    jump: w.jump,
    onClick: e => {
      e.preventDefault();
      onOpen(w.id);
    }
  }, w.dek)))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--s-10) 0',
      borderBottom: 'var(--border-hair)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--measure)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.PullQuote, {
    cite: "\u2014 Advisor, Senior Design Review"
  }, "The gearbox got quieter when we stopped adding parts."))));
}
Object.assign(__ds_scope, { FrontPage });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/FrontPage.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.InlineLink = __ds_scope.InlineLink;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Byline = __ds_scope.Byline;

__ds_ns.Caption = __ds_scope.Caption;

__ds_ns.Clipping = __ds_scope.Clipping;

__ds_ns.Columns = __ds_scope.Columns;

__ds_ns.DropCap = __ds_scope.DropCap;

__ds_ns.Kicker = __ds_scope.Kicker;

__ds_ns.NewsPhoto = __ds_scope.NewsPhoto;

__ds_ns.PullQuote = __ds_scope.PullQuote;

__ds_ns.Dinkus = __ds_scope.Dinkus;

__ds_ns.Folio = __ds_scope.Folio;

__ds_ns.Masthead = __ds_scope.Masthead;

__ds_ns.Rule = __ds_scope.Rule;

__ds_ns.SectionHead = __ds_scope.SectionHead;

__ds_ns.About = __ds_scope.About;

__ds_ns.CaseStudy = __ds_scope.CaseStudy;

__ds_ns.Page = __ds_scope.Page;

__ds_ns.Contact = __ds_scope.Contact;

__ds_ns.FrontPage = __ds_scope.FrontPage;

__ds_ns.WORKS = __ds_scope.WORKS;

__ds_ns.WORK_DETAIL = __ds_scope.WORK_DETAIL;

})();
