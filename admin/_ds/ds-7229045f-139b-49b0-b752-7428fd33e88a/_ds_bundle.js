/* @ds-bundle: {"format":4,"namespace":"Ds_722904","components":[{"name":"AccountCard","sourcePath":"components/AccountCard/AccountCard.jsx"},{"name":"BarChart","sourcePath":"components/BarChart/BarChart.jsx"},{"name":"Button","sourcePath":"components/Button/Button.jsx"},{"name":"Dialog","sourcePath":"components/Dialog/Dialog.jsx"},{"name":"ListRow","sourcePath":"components/ListRow/ListRow.jsx"},{"name":"Logo","sourcePath":"components/Logo/Logo.jsx"},{"name":"NotificationCard","sourcePath":"components/NotificationCard/NotificationCard.jsx"},{"name":"OTPField","sourcePath":"components/OTPField/OTPField.jsx"},{"name":"ReadingInput","sourcePath":"components/ReadingInput/ReadingInput.jsx"},{"name":"StatusBanner","sourcePath":"components/StatusBanner/StatusBanner.jsx"},{"name":"TabBar","sourcePath":"components/TabBar/TabBar.jsx"},{"name":"TextField","sourcePath":"components/TextField/TextField.jsx"},{"name":"TopBar","sourcePath":"components/TopBar/TopBar.jsx"}],"sourceHashes":{"components/AccountCard/AccountCard.jsx":"4a947e690872","components/BarChart/BarChart.jsx":"38851638fcd9","components/Button/Button.jsx":"91f7ee6487a7","components/Dialog/Dialog.jsx":"93fd8effd351","components/ListRow/ListRow.jsx":"082c00613f95","components/Logo/Logo.jsx":"970f9b125092","components/NotificationCard/NotificationCard.jsx":"bd728f98da61","components/OTPField/OTPField.jsx":"e650d3ed1f64","components/ReadingInput/ReadingInput.jsx":"13cdabf9ce17","components/StatusBanner/StatusBanner.jsx":"bab480a45455","components/TabBar/TabBar.jsx":"8f49cafea1e2","components/TextField/TextField.jsx":"87cd07b5f3e5","components/TopBar/TopBar.jsx":"46eeace394c4","ui_kits/mobile-app/App.jsx":"9d1801c9ff74","ui_kits/mobile-app/Screens.jsx":"6c62472a7e7e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.Ds_722904 = window.Ds_722904 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/AccountCard/AccountCard.jsx
try { (() => {
function AccountCard({
  address,
  accountNumber,
  amount,
  noDebt = false,
  readingsStatus,
  readingsDeadline
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "uv-card"
  }, /*#__PURE__*/React.createElement("p", {
    className: "uv-card__meta"
  }, address), /*#__PURE__*/React.createElement("p", {
    className: "uv-card__meta",
    style: {
      color: "var(--text-primary)",
      fontWeight: 600
    }
  }, "\u041B\u0438\u0446\u0435\u0432\u043E\u0439 \u0441\u0447\u0451\u0442 ", accountNumber), noDebt ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "uv-card__meta"
  }, "\u041A \u043E\u043F\u043B\u0430\u0442\u0435"), /*#__PURE__*/React.createElement("span", {
    className: "uv-amount"
  }, "0,00 \u20BD \u2014 \u0434\u043E\u043B\u0433\u0430 \u043D\u0435\u0442")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "uv-card__meta"
  }, "\u041A \u043E\u043F\u043B\u0430\u0442\u0435"), /*#__PURE__*/React.createElement("span", {
    className: "uv-amount"
  }, amount)), readingsStatus === "missing" ? /*#__PURE__*/React.createElement("div", {
    className: "uv-banner uv-banner--warning"
  }, /*#__PURE__*/React.createElement("span", {
    className: "uv-icon uv-icon--fill",
    "aria-hidden": "true"
  }, "warning"), /*#__PURE__*/React.createElement("div", {
    className: "uv-banner__body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "uv-banner__title"
  }, "\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u0438\u044F \u0437\u0430 \u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044C \u043D\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u043D\u044B"), /*#__PURE__*/React.createElement("span", null, "\u041F\u0435\u0440\u0435\u0434\u0430\u0439\u0442\u0435 \u0434\u043E ", readingsDeadline))) : /*#__PURE__*/React.createElement("div", {
    className: "uv-banner uv-banner--success"
  }, /*#__PURE__*/React.createElement("span", {
    className: "uv-icon uv-icon--fill",
    "aria-hidden": "true"
  }, "check_circle"), /*#__PURE__*/React.createElement("div", {
    className: "uv-banner__body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "uv-banner__title"
  }, "\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u0438\u044F \u0437\u0430 \u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044C \u043F\u0435\u0440\u0435\u0434\u0430\u043D\u044B"))));
}
Object.assign(__ds_scope, { AccountCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/AccountCard/AccountCard.jsx", error: String((e && e.message) || e) }); }

// components/BarChart/BarChart.jsx
try { (() => {
function BarChart({
  title,
  data,
  currentMonth
}) {
  const max = Math.max(...data.map(d => d.value), 1);
  return /*#__PURE__*/React.createElement("div", {
    className: "uv-card"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "uv-card__title"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "uv-chart"
  }, data.slice(0, 6).map(d => /*#__PURE__*/React.createElement("div", {
    key: d.month,
    className: ["uv-bar", d.month === currentMonth ? "is-current" : ""].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("span", {
    className: "uv-bar__val"
  }, d.value), /*#__PURE__*/React.createElement("div", {
    className: "uv-bar__col",
    style: {
      height: `${Math.max(d.value / max * 100, 6)}%`
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "uv-bar__month"
  }, d.month)))));
}
Object.assign(__ds_scope, { BarChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/BarChart/BarChart.jsx", error: String((e && e.message) || e) }); }

// components/Button/Button.jsx
try { (() => {
function Button({
  variant = "primary",
  state = "default",
  icon,
  children,
  onClick,
  type = "button"
}) {
  const disabled = state === "disabled";
  const pressed = state === "pressed";
  const loading = state === "loading";
  const cls = ["uv-btn", `uv-btn--${variant}`, pressed ? "is-pressed" : ""].filter(Boolean).join(" ");
  const style = variant === "text-small" ? {
    display: "inline-flex"
  } : undefined;
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    className: cls,
    style: style,
    disabled: disabled,
    onClick: onClick,
    "aria-busy": loading || undefined
  }, loading ? /*#__PURE__*/React.createElement("span", {
    className: "uv-spinner",
    "aria-label": "\u041E\u0442\u043F\u0440\u0430\u0432\u043A\u0430"
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, icon ? /*#__PURE__*/React.createElement("span", {
    className: "uv-icon",
    "aria-hidden": "true"
  }, icon) : null, children));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Button/Button.jsx", error: String((e && e.message) || e) }); }

// components/Dialog/Dialog.jsx
try { (() => {
function Dialog({
  title,
  text,
  confirmLabel,
  cancelLabel = "Отмена",
  danger = true,
  onConfirm,
  onCancel
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "uv-scrim"
  }, /*#__PURE__*/React.createElement("div", {
    className: "uv-dialog"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "uv-dialog__title"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "uv-dialog__text"
  }, text), /*#__PURE__*/React.createElement("button", {
    className: `uv-btn uv-btn--${danger ? "danger" : "primary"}`,
    onClick: onConfirm
  }, confirmLabel), /*#__PURE__*/React.createElement("button", {
    className: "uv-btn uv-btn--secondary",
    onClick: onCancel
  }, cancelLabel)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Dialog/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/ListRow/ListRow.jsx
try { (() => {
function ListRow({
  icon,
  title,
  subtitle,
  trailing = "none",
  danger = false,
  onClick
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ["uv-listrow", danger ? "uv-listrow--danger" : ""].filter(Boolean).join(" "),
    onClick: onClick,
    role: onClick ? "button" : undefined
  }, icon ? /*#__PURE__*/React.createElement("span", {
    className: "uv-icon",
    "aria-hidden": "true"
  }, icon) : null, /*#__PURE__*/React.createElement("div", {
    className: "uv-listrow__body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "uv-listrow__title"
  }, title), subtitle ? /*#__PURE__*/React.createElement("span", {
    className: "uv-listrow__sub"
  }, subtitle) : null), trailing === "chevron" ? /*#__PURE__*/React.createElement("span", {
    className: "uv-icon uv-listrow__chev",
    "aria-hidden": "true"
  }, "chevron_right") : null, trailing === "switch" ? /*#__PURE__*/React.createElement("span", {
    className: "uv-switch"
  }) : null, trailing === "switch-off" ? /*#__PURE__*/React.createElement("span", {
    className: "uv-switch is-off"
  }) : null);
}
Object.assign(__ds_scope, { ListRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ListRow/ListRow.jsx", error: String((e && e.message) || e) }); }

// components/Logo/Logo.jsx
try { (() => {
function Logo({
  variant = "full"
}) {
  if (variant === "compact") {
    return /*#__PURE__*/React.createElement("img", {
      src: "../../assets/uv-mark.png",
      alt: "\u0423\u0441\u043F\u0435\u043D\u0441\u043A\u0438\u0439 \u0412\u043E\u0434\u043E\u043A\u0430\u043D\u0430\u043B",
      className: "uv-logo__mark uv-logo--compact",
      style: {
        height: 24
      }
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "uv-logo"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/uv-mark.png",
    alt: "",
    className: "uv-logo__mark"
  }), /*#__PURE__*/React.createElement("div", {
    className: "uv-logo__text"
  }, /*#__PURE__*/React.createElement("span", {
    className: "uv-logo__name"
  }, "\u0423\u0441\u043F\u0435\u043D\u0441\u043A\u0438\u0439 \u0412\u043E\u0434\u043E\u043A\u0430\u043D\u0430\u043B"), /*#__PURE__*/React.createElement("span", {
    className: "uv-logo__sub"
  }, "\u043C\u0443\u043D\u0438\u0446\u0438\u043F\u0430\u043B\u044C\u043D\u043E\u0435 \u0443\u043D\u0438\u0442\u0430\u0440\u043D\u043E\u0435 \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u044F\u0442\u0438\u0435")));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Logo/Logo.jsx", error: String((e && e.message) || e) }); }

// components/NotificationCard/NotificationCard.jsx
try { (() => {
const STATUS = {
  outage: {
    icon: "warning",
    label: "Отключение",
    cls: "warning"
  },
  reminder: {
    icon: "info",
    label: "Напоминание",
    cls: "info"
  },
  done: {
    icon: "check_circle",
    label: "Выполнено",
    cls: "success"
  }
};
function NotificationCard({
  type = "reminder",
  title,
  text,
  date,
  read = false
}) {
  const s = STATUS[type];
  return /*#__PURE__*/React.createElement("div", {
    className: ["uv-note", read ? "is-read" : ""].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("span", {
    className: `uv-note__status uv-note__status--${s.cls}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "uv-icon uv-icon--fill",
    "aria-hidden": "true"
  }, s.icon), s.label), /*#__PURE__*/React.createElement("p", {
    className: "uv-note__title"
  }, title), text ? /*#__PURE__*/React.createElement("p", {
    className: "uv-note__text"
  }, text) : null, /*#__PURE__*/React.createElement("p", {
    className: "uv-note__date"
  }, date));
}
Object.assign(__ds_scope, { NotificationCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/NotificationCard/NotificationCard.jsx", error: String((e && e.message) || e) }); }

// components/OTPField/OTPField.jsx
try { (() => {
function OTPField({
  phone,
  digits = ["", "", "", ""],
  focusIndex = -1,
  seconds = 59,
  onChangeNumber,
  onResend
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "uv-stack",
    style: {
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "uv-row",
    style: {
      justifyContent: "center",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "body"
  }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u043B\u0438 \u043D\u0430 ", phone), /*#__PURE__*/React.createElement("button", {
    className: "uv-btn--text",
    style: {
      background: "none",
      border: "none",
      padding: 0,
      font: "inherit",
      fontSize: 17,
      fontWeight: 600,
      color: "var(--primary)",
      cursor: "pointer"
    },
    onClick: onChangeNumber
  }, "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C")), /*#__PURE__*/React.createElement("div", {
    className: "uv-otp"
  }, digits.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: ["uv-otp__cell", i === focusIndex ? "is-focus" : ""].filter(Boolean).join(" ")
  }, d))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, seconds > 0 ? /*#__PURE__*/React.createElement("span", {
    className: "secondary",
    style: {
      color: "var(--text-secondary)"
    }
  }, `Отправить повторно через 0:${String(seconds).padStart(2, "0")}`) : /*#__PURE__*/React.createElement("span", {
    className: "uv-row",
    style: {
      gap: 6,
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "secondary",
    style: {
      color: "var(--text-secondary)"
    }
  }, "\u041D\u0435 \u043F\u0440\u0438\u0448\u0451\u043B \u043A\u043E\u0434?"), /*#__PURE__*/React.createElement("button", {
    className: "uv-btn--text-small",
    onClick: onResend
  }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0441\u043D\u043E\u0432\u0430"))));
}
Object.assign(__ds_scope, { OTPField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/OTPField/OTPField.jsx", error: String((e && e.message) || e) }); }

// components/ReadingInput/ReadingInput.jsx
try { (() => {
function ReadingInput({
  meterName,
  meterNumber,
  prevReading,
  prevDate,
  value,
  unit = "м³",
  usage,
  error,
  warning,
  hint,
  focused = false
}) {
  const cls = ["uv-reading__input", focused && !error ? "is-focus" : "", error ? "is-error" : ""].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", {
    className: "uv-card"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "uv-card__title"
  }, meterName), /*#__PURE__*/React.createElement("p", {
    className: "uv-card__meta"
  }, "\u2116 ", meterNumber, " \xB7 \u043F\u0440\u043E\u0448\u043B\u043E\u0435 \u043F\u043E\u043A\u0430\u0437\u0430\u043D\u0438\u0435 ", prevReading, " ", unit, " \u043E\u0442 ", prevDate), hint ? /*#__PURE__*/React.createElement("p", {
    className: "uv-card__meta",
    style: {
      margin: 0
    }
  }, hint) : null, /*#__PURE__*/React.createElement("div", {
    className: "uv-reading__wrap"
  }, /*#__PURE__*/React.createElement("input", {
    className: cls,
    defaultValue: value,
    inputMode: "numeric"
  }), /*#__PURE__*/React.createElement("span", {
    className: "uv-reading__unit"
  }, unit)), error ? /*#__PURE__*/React.createElement("span", {
    className: "uv-field__error"
  }, /*#__PURE__*/React.createElement("span", {
    className: "uv-icon uv-icon--fill",
    "aria-hidden": "true"
  }, "error"), error) : warning ? /*#__PURE__*/React.createElement("div", {
    className: "uv-banner uv-banner--warning"
  }, /*#__PURE__*/React.createElement("span", {
    className: "uv-icon uv-icon--fill",
    "aria-hidden": "true"
  }, "warning"), /*#__PURE__*/React.createElement("div", {
    className: "uv-banner__body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "uv-banner__title"
  }, warning))) : usage ? /*#__PURE__*/React.createElement("span", {
    className: "uv-reading__calc"
  }, "\u0420\u0430\u0441\u0445\u043E\u0434: ", usage, " ", unit) : null);
}
Object.assign(__ds_scope, { ReadingInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ReadingInput/ReadingInput.jsx", error: String((e && e.message) || e) }); }

// components/StatusBanner/StatusBanner.jsx
try { (() => {
const ICONS = {
  info: "info",
  success: "check_circle",
  warning: "warning",
  error: "error"
};
function StatusBanner({
  tone = "info",
  title,
  text,
  action,
  onAction
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `uv-banner uv-banner--${tone}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "uv-icon uv-icon--fill",
    "aria-hidden": "true"
  }, ICONS[tone]), /*#__PURE__*/React.createElement("div", {
    className: "uv-banner__body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "uv-banner__title"
  }, title), text ? /*#__PURE__*/React.createElement("span", null, text) : null, action ? /*#__PURE__*/React.createElement("button", {
    className: "uv-banner__action",
    style: {
      background: "none",
      border: "none",
      padding: 0,
      font: "inherit",
      cursor: "pointer"
    },
    onClick: onAction
  }, action) : null));
}
Object.assign(__ds_scope, { StatusBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/StatusBanner/StatusBanner.jsx", error: String((e && e.message) || e) }); }

// components/TabBar/TabBar.jsx
try { (() => {
const TABS = [{
  key: "home",
  icon: "home",
  label: "Главная"
}, {
  key: "readings",
  icon: "water_drop",
  label: "Показания"
}, {
  key: "payments",
  icon: "receipt_long",
  label: "Платежи"
}, {
  key: "more",
  icon: "menu",
  label: "Ещё"
}];
function TabBar({
  active = "home",
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "uv-tabbar"
  }, TABS.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.key,
    className: ["uv-tab", t.key === active ? "is-active" : ""].filter(Boolean).join(" "),
    onClick: () => onChange && onChange(t.key)
  }, /*#__PURE__*/React.createElement("span", {
    className: ["uv-icon", t.key === active ? "uv-icon--fill" : ""].filter(Boolean).join(" "),
    "aria-hidden": "true"
  }, t.icon), t.label)));
}
Object.assign(__ds_scope, { TabBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/TabBar/TabBar.jsx", error: String((e && e.message) || e) }); }

// components/TextField/TextField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function formatAccount(digits) {
  const d = digits.slice(0, 7);
  return d.length > 2 ? `${d.slice(0, 2)}-${d.slice(2)}` : d;
}
function TextField({
  label,
  value,
  hint,
  error,
  state = "default",
  inputMode = "text",
  mask,
  ...rest
}) {
  const isError = state === "error" || !!error;
  const isFocus = state === "focus";
  const cls = ["uv-field__input", isFocus ? "is-focus" : "", isError ? "is-error" : ""].filter(Boolean).join(" ");
  const [raw, setRaw] = React.useState(() => (value || "").replace(/\D/g, ""));
  const displayValue = mask === "account" ? formatAccount(raw) : value;
  const handleChange = mask === "account" ? e => setRaw(e.target.value.replace(/\D/g, "").slice(0, 7)) : rest.onChange;
  return /*#__PURE__*/React.createElement("div", {
    className: "uv-field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "uv-field__label"
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    className: cls,
    value: mask === "account" ? displayValue : undefined,
    defaultValue: mask === "account" ? undefined : value,
    inputMode: mask === "account" ? "numeric" : inputMode,
    onChange: handleChange
  }, rest)), isError ? /*#__PURE__*/React.createElement("span", {
    className: "uv-field__error"
  }, /*#__PURE__*/React.createElement("span", {
    className: "uv-icon uv-icon--fill",
    "aria-hidden": "true"
  }, "error"), error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "uv-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/TextField/TextField.jsx", error: String((e && e.message) || e) }); }

// components/TopBar/TopBar.jsx
try { (() => {
function TopBar({
  showBack = false,
  onBack,
  backLabel = "Назад",
  action,
  hasUnread = false,
  onAction
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "uv-topbar"
  }, showBack ? /*#__PURE__*/React.createElement("button", {
    className: "uv-topbar__back",
    onClick: onBack
  }, /*#__PURE__*/React.createElement("span", {
    className: "uv-icon",
    "aria-hidden": "true"
  }, "chevron_left"), backLabel) : null, /*#__PURE__*/React.createElement("span", {
    className: "uv-topbar__spacer"
  }), action === "notifications" ? /*#__PURE__*/React.createElement("button", {
    className: "uv-topbar__btn",
    "aria-label": hasUnread ? "Уведомления, есть новые" : "Уведомления",
    onClick: onAction
  }, /*#__PURE__*/React.createElement("span", {
    className: "uv-icon",
    "aria-hidden": "true"
  }, "notifications"), hasUnread ? /*#__PURE__*/React.createElement("span", {
    className: "uv-dot"
  }) : null) : null);
}
Object.assign(__ds_scope, { TopBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/TopBar/TopBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/App.jsx
try { (() => {
function App() {
  const {
    TabBar
  } = window.Ds_722904;
  const {
    Phone,
    Home,
    Readings,
    Payments,
    Notifications,
    More
  } = window.Screens;
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [tab, setTab] = React.useState("home");
  const [showNotifications, setShowNotifications] = React.useState(false);
  if (!loggedIn) {
    return /*#__PURE__*/React.createElement("div", {
      className: "uv",
      style: {
        maxWidth: 390,
        margin: "0 auto"
      },
      onClick: e => {
        if (e.target.closest("button")) setTimeout(() => setLoggedIn(true), 900);
      }
    }, /*#__PURE__*/React.createElement(Phone, null));
  }
  if (showNotifications) {
    return /*#__PURE__*/React.createElement("div", {
      className: "uv",
      style: {
        maxWidth: 390,
        margin: "0 auto"
      }
    }, /*#__PURE__*/React.createElement(Notifications, {
      onBack: () => setShowNotifications(false)
    }));
  }
  const screens = {
    home: /*#__PURE__*/React.createElement(Home, {
      onOpenNotifications: () => setShowNotifications(true)
    }),
    readings: /*#__PURE__*/React.createElement(Readings, null),
    payments: /*#__PURE__*/React.createElement(Payments, null),
    more: /*#__PURE__*/React.createElement(More, null)
  };
  const tabKeyMap = {
    home: "home",
    readings: "readings",
    payments: "payments",
    more: "more"
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "uv",
    style: {
      maxWidth: 390,
      margin: "0 auto",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, screens[tab]), /*#__PURE__*/React.createElement(TabBar, {
    active: tabKeyMap[tab],
    onChange: setTab
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/Screens.jsx
try { (() => {
function Phone() {
  const {
    Button,
    TextField,
    OTPField,
    Logo
  } = window.Ds_722904;
  const [step, setStep] = React.useState("phone");
  return /*#__PURE__*/React.createElement("div", {
    className: "uv-screen",
    style: {
      minHeight: 700,
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: "center"
    }
  }, /*#__PURE__*/React.createElement(Logo, null)), /*#__PURE__*/React.createElement("h1", {
    className: "uv-h1"
  }, "\u0412\u0445\u043E\u0434 \u0432 \u043B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442"), step === "phone" ? /*#__PURE__*/React.createElement("div", {
    className: "uv-stack"
  }, /*#__PURE__*/React.createElement(TextField, {
    label: "\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430",
    value: "+7 900 000-00-00",
    hint: "\u041D\u0430 \u044D\u0442\u043E\u0442 \u043D\u043E\u043C\u0435\u0440 \u043F\u0440\u0438\u0434\u0451\u0442 \u043A\u043E\u0434 \u0438\u0437 SMS",
    inputMode: "tel"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => setStep("otp")
  }, "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043A\u043E\u0434")) : /*#__PURE__*/React.createElement(OTPField, {
    phone: "+7 900 000-00-00",
    digits: ["4", "7", "3", ""],
    focusIndex: 3,
    seconds: 42,
    onChangeNumber: () => setStep("phone"),
    onResend: () => {}
  })), /*#__PURE__*/React.createElement("p", {
    className: "caption",
    style: {
      color: "var(--text-secondary)"
    }
  }, "\u0414\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F. \u0412\u0441\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0432\u044B\u043C\u044B\u0448\u043B\u0435\u043D\u044B."));
}
function Home({
  onOpenNotifications
}) {
  const {
    TopBar,
    AccountCard,
    Button,
    StatusBanner
  } = window.Ds_722904;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TopBar, {
    action: "notifications",
    hasUnread: true,
    onAction: onOpenNotifications
  }), /*#__PURE__*/React.createElement("div", {
    className: "uv-screen uv-sections"
  }, /*#__PURE__*/React.createElement("div", {
    className: "uv-stack"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "uv-h1 uv-h1--under-topbar"
  }, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F"), /*#__PURE__*/React.createElement(AccountCard, {
    address: "\u0441. \u0423\u0441\u043F\u0435\u043D\u0441\u043A\u043E\u0435, \u0443\u043B. \u0421\u0430\u0434\u043E\u0432\u0430\u044F, \u0434. 12",
    accountNumber: "12-34567",
    amount: "1 248,60 \u20BD",
    readingsStatus: "missing",
    readingsDeadline: "25 \u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044F"
  })), /*#__PURE__*/React.createElement("div", {
    className: "uv-stack"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "\u041F\u0435\u0440\u0435\u0434\u0430\u0442\u044C \u043F\u043E\u043A\u0430\u0437\u0430\u043D\u0438\u044F"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "\u041E\u043F\u043B\u0430\u0442\u0438\u0442\u044C"), /*#__PURE__*/React.createElement(StatusBanner, {
    tone: "info",
    title: "\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u0438\u044F \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u044E\u0442\u0441\u044F \u0434\u043E 25 \u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044F"
  }))));
}
function Readings() {
  const {
    TopBar,
    ReadingInput,
    BarChart,
    Button
  } = window.Ds_722904;
  const [step, setStep] = React.useState("input");
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TopBar, null), /*#__PURE__*/React.createElement("div", {
    className: "uv-screen"
  }, step === "input" ? /*#__PURE__*/React.createElement("div", {
    className: "uv-sections"
  }, /*#__PURE__*/React.createElement("div", {
    className: "uv-stack"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "uv-h1 uv-h1--under-topbar"
  }, "\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u0438\u044F"), /*#__PURE__*/React.createElement(ReadingInput, {
    meterName: "\u0421\u0447\u0451\u0442\u0447\u0438\u043A \xAB\u0414\u043E\u043C\xBB",
    meterNumber: "1234567",
    prevReading: "00123",
    prevDate: "24.08.2026",
    value: "00131",
    usage: "8",
    focused: true,
    hint: "\u0412\u0432\u043E\u0434\u0438\u0442\u0435 \u0446\u0435\u043B\u044B\u0435 \u043C\xB3, \u0431\u0435\u0437 \u0446\u0438\u0444\u0440 \u043F\u043E\u0441\u043B\u0435 \u0437\u0430\u043F\u044F\u0442\u043E\u0439"
  })), /*#__PURE__*/React.createElement(BarChart, {
    title: "\u0420\u0430\u0441\u0445\u043E\u0434, \u043C\xB3",
    currentMonth: "\u0441\u0435\u043D",
    data: [{
      month: "апр",
      value: 6
    }, {
      month: "май",
      value: 7
    }, {
      month: "июн",
      value: 9
    }, {
      month: "июл",
      value: 11
    }, {
      month: "авг",
      value: 10
    }, {
      month: "сен",
      value: 8
    }]
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => setStep("review")
  }, "\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u0438 \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C")) : /*#__PURE__*/React.createElement("div", {
    className: "uv-stack",
    style: {
      paddingTop: 48,
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "uv-icon uv-icon--fill",
    style: {
      fontSize: 48,
      width: 48,
      height: 48,
      color: "var(--success-text)"
    }
  }, "check_circle"), /*#__PURE__*/React.createElement("h1", {
    className: "uv-h1"
  }, "\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u0438\u044F \u043F\u0440\u0438\u043D\u044F\u0442\u044B"), /*#__PURE__*/React.createElement("p", {
    className: "body",
    style: {
      margin: 0,
      color: "var(--text-secondary)"
    }
  }, "24 \u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044F \u0432 10:42, \u043F\u0440\u0438\u0451\u043C \u2116 88213"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => setStep("input")
  }, "\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E"))));
}
function Payments() {
  const {
    TopBar,
    Button
  } = window.Ds_722904;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TopBar, null), /*#__PURE__*/React.createElement("div", {
    className: "uv-screen uv-sections"
  }, /*#__PURE__*/React.createElement("div", {
    className: "uv-stack"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "uv-h1 uv-h1--under-topbar"
  }, "\u041F\u043B\u0430\u0442\u0435\u0436\u0438"), /*#__PURE__*/React.createElement("div", {
    className: "uv-card"
  }, /*#__PURE__*/React.createElement("p", {
    className: "uv-card__meta"
  }, "\u041A \u043E\u043F\u043B\u0430\u0442\u0435"), /*#__PURE__*/React.createElement("span", {
    className: "uv-amount"
  }, "1 248,60 \u20BD"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "\u041E\u043F\u043B\u0430\u0442\u0438\u0442\u044C 1 248,60 \u20BD"))), /*#__PURE__*/React.createElement("div", {
    className: "uv-stack",
    style: {
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "uv-h2"
  }, "\u0418\u0441\u0442\u043E\u0440\u0438\u044F"), /*#__PURE__*/React.createElement("div", {
    className: "uv-list"
  }, /*#__PURE__*/React.createElement("div", {
    className: "uv-listrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "uv-listrow__body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "uv-listrow__title"
  }, "\u0410\u0432\u0433\u0443\u0441\u0442 2026"), /*#__PURE__*/React.createElement("span", {
    className: "uv-listrow__sub"
  }, "\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E 24.08.2026")), /*#__PURE__*/React.createElement("span", {
    className: "body-strong"
  }, "1 190,00 \u20BD")), /*#__PURE__*/React.createElement("div", {
    className: "uv-listrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "uv-listrow__body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "uv-listrow__title"
  }, "\u0418\u044E\u043B\u044C 2026"), /*#__PURE__*/React.createElement("span", {
    className: "uv-listrow__sub"
  }, "\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E 22.07.2026")), /*#__PURE__*/React.createElement("span", {
    className: "body-strong"
  }, "1 340,00 \u20BD"))))));
}
function Notifications({
  onBack
}) {
  const {
    TopBar,
    NotificationCard
  } = window.Ds_722904;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TopBar, {
    showBack: true,
    onBack: onBack
  }), /*#__PURE__*/React.createElement("div", {
    className: "uv-screen"
  }, /*#__PURE__*/React.createElement("div", {
    className: "uv-stack"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "uv-h1 uv-h1--under-topbar"
  }, "\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F"), /*#__PURE__*/React.createElement(NotificationCard, {
    type: "outage",
    title: "\u041F\u043B\u0430\u043D\u043E\u0432\u043E\u0435 \u043E\u0442\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u0432\u043E\u0434\u044B 23 \u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044F, 9:00\u201314:00",
    text: "\u0443\u043B. \u0421\u0430\u0434\u043E\u0432\u0430\u044F, \u0443\u043B. \u041B\u0435\u043D\u0438\u043D\u0430. \u041F\u0440\u0438\u0447\u0438\u043D\u0430 \u2014 \u0440\u0435\u043C\u043E\u043D\u0442 \u0432\u043E\u0434\u043E\u043F\u0440\u043E\u0432\u043E\u0434\u0430.",
    date: "\u0421\u0435\u0433\u043E\u0434\u043D\u044F, 08:15"
  }), /*#__PURE__*/React.createElement(NotificationCard, {
    type: "reminder",
    title: "\u041F\u0435\u0440\u0435\u0434\u0430\u0439\u0442\u0435 \u043F\u043E\u043A\u0430\u0437\u0430\u043D\u0438\u044F \u0434\u043E 25 \u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044F",
    date: "\u0412\u0447\u0435\u0440\u0430"
  }), /*#__PURE__*/React.createElement(NotificationCard, {
    type: "done",
    title: "\u0420\u0430\u0431\u043E\u0442\u044B \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u044B, \u0432\u043E\u0434\u043E\u0441\u043D\u0430\u0431\u0436\u0435\u043D\u0438\u0435 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043E",
    date: "12 \u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044F",
    read: true
  }))));
}
function More() {
  const {
    TopBar,
    ListRow,
    Dialog
  } = window.Ds_722904;
  const [confirm, setConfirm] = React.useState(false);
  const [largeText, setLargeText] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TopBar, null), /*#__PURE__*/React.createElement("div", {
    className: "uv-screen uv-sections",
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "uv-stack"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "uv-h1 uv-h1--under-topbar"
  }, "\u0415\u0449\u0451"), /*#__PURE__*/React.createElement("div", {
    className: "uv-list"
  }, /*#__PURE__*/React.createElement(ListRow, {
    icon: "text_increase",
    title: "\u041A\u0440\u0443\u043F\u043D\u044B\u0439 \u0442\u0435\u043A\u0441\u0442",
    subtitle: "\u0423\u0432\u0435\u043B\u0438\u0447\u0438\u0442 \u0432\u0435\u0441\u044C \u0442\u0435\u043A\u0441\u0442 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
    trailing: largeText ? "switch" : "switch-off",
    onClick: () => setLargeText(v => !v)
  }), /*#__PURE__*/React.createElement(ListRow, {
    icon: "call",
    title: "\u0413\u043E\u0440\u044F\u0447\u0430\u044F \u043B\u0438\u043D\u0438\u044F",
    subtitle: "+7 (86140) 57-301",
    trailing: "chevron"
  }), /*#__PURE__*/React.createElement(ListRow, {
    icon: "shield",
    title: "\u041A\u0430\u043A \u0440\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u0442\u044C \u043C\u043E\u0448\u0435\u043D\u043D\u0438\u043A\u0430",
    trailing: "chevron"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "uv-list"
  }, /*#__PURE__*/React.createElement(ListRow, {
    icon: "logout",
    title: "\u0412\u044B\u0439\u0442\u0438",
    danger: true,
    onClick: () => setConfirm(true)
  }))), confirm ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      display: "flex",
      alignItems: "center",
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(Dialog, {
    title: "\u0412\u044B\u0439\u0442\u0438?",
    text: "\u0412\u044B \u0441\u043C\u043E\u0436\u0435\u0442\u0435 \u0441\u043D\u043E\u0432\u0430 \u0432\u043E\u0439\u0442\u0438 \u043F\u043E \u043D\u043E\u043C\u0435\u0440\u0443 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430.",
    confirmLabel: "\u0412\u044B\u0439\u0442\u0438",
    cancelLabel: "\u041E\u0442\u043C\u0435\u043D\u0430",
    onConfirm: () => setConfirm(false),
    onCancel: () => setConfirm(false)
  })) : null);
}
window.Screens = {
  Phone,
  Home,
  Readings,
  Payments,
  Notifications,
  More
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/Screens.jsx", error: String((e && e.message) || e) }); }

__ds_ns.AccountCard = __ds_scope.AccountCard;

__ds_ns.BarChart = __ds_scope.BarChart;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.ListRow = __ds_scope.ListRow;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.NotificationCard = __ds_scope.NotificationCard;

__ds_ns.OTPField = __ds_scope.OTPField;

__ds_ns.ReadingInput = __ds_scope.ReadingInput;

__ds_ns.StatusBanner = __ds_scope.StatusBanner;

__ds_ns.TabBar = __ds_scope.TabBar;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.TopBar = __ds_scope.TopBar;

})();
