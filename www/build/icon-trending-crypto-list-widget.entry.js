import { h, r as registerInstance, a as Host } from './index-358baade.js';
import { a as formatCurrency, s as services, W as WidgetHeader } from './number-2f952f18.js';
import { g as gt, l as lt } from './index-2a0a2690.js';

const TickerNumber = ({ val, diff = 0, showArrow = false, isPercentage = false, }) => {
  const [color, arrow] = gt(diff, 0)
    ? ['#0ad66c', '\u25B2']
    : lt(diff, 0)
      ? ['#dd4577', '\u25BC']
      : ['#98b0ba', null];
  return (h("div", { style: { color, display: 'flex', flexWrap: 'nowrap' } },
    showArrow && arrow,
    val,
    h("div", { style: { paddingRight: diff === 0 ? '8px' : '0' } }, diff === 0 ? '' : isPercentage && '%')));
};

const TrendingCryptoListItem = ({ item, idx, }) => {
  return (h("div", { class: "table-row", style: { padding: '10px 0' } },
    h("div", { class: "table-cell", style: { justifySelf: 'center' } }, idx + 1),
    h("div", { class: "table-cell", style: { flexShrink: '0', fontSize: '1rem' } },
      h("img", { src: item.logo.thumb, alt: item.name.en, "aria-label": item.name.en, height: 24, width: 24, style: { marginRight: '8px' } }),
      h("span", null,
        item.name.en !== item.name['zh-Hant'] ? item.name['zh-Hant'] : '',
        ' ',
        item.name.en,
        " ",
        item.symbol)),
    h("div", { class: "table-cell", style: { justifySelf: 'end' } },
      h("div", { style: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'end',
        } },
        h("span", null, formatCurrency(item.price.usd, {
          currencyConfig: { precision: 2 },
          nullPlaceholder: '--',
        })),
        h("span", { style: { fontSize: '0.75rem', color: 'rgba(0, 0, 0, 0.60)' } }, formatCurrency(item.price.hkd, {
          currencyConfig: { precision: 2 },
          nullPlaceholder: '--',
        }) + ' HKD'))),
    h("div", { class: "table-cell", style: { justifySelf: 'end' } },
      h(TickerNumber, { val: formatCurrency(Math.abs(item.pricePercentChange24h), {
          currencyConfig: { symbol: '', precision: 3 },
        }), diff: item.pricePercentChange24h, isPercentage: true, showArrow: true })),
    h("div", { class: "table-cell", style: { justifySelf: 'end' } },
      h(TickerNumber, { val: formatCurrency(Math.abs(item.pricePercentChange7d), {
          currencyConfig: { symbol: '', precision: 3 },
        }), diff: item.pricePercentChange7d, isPercentage: true, showArrow: true })),
    h("div", { class: "table-cell", style: { justifySelf: 'end' } }, (item === null || item === void 0 ? void 0 : item.marketCap.usd) === 0
      ? '--'
      : formatCurrency(item.marketCap.usd, {
        currencyConfig: { precision: 0 },
        nullPlaceholder: '--',
      })),
    h("div", { class: "table-cell", style: { justifySelf: 'end' } },
      h("div", { style: {
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'right',
        } },
        h("span", null, formatCurrency(item.volume24h.usd, {
          currencyConfig: { precision: 0 },
          nullPlaceholder: '--',
        })),
        h("span", { style: { fontSize: '0.75rem', color: 'rgba(0, 0, 0, 0.60)' } }, formatCurrency(item.volume24h.hkd, {
          currencyConfig: { precision: 0 },
          nullPlaceholder: '--',
        }) + ' HKD')))));
};

const indexCss = ":host{width:100%}.container{min-width:310px;font-size:16px;margin-bottom:16px;background:#FFFFFF}.loading{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;width:100%;font-size:24px}.scroll-wrapper{overflow-x:scroll;padding-right:4px}.scroll-wrapper::-webkit-scrollbar{display:none}.table{display:flex;flex-direction:column;padding:4px 12px;min-width:min-content;max-width:100%}.table-header{display:grid;grid-template-columns:42px minmax(170px, auto) minmax(110px, auto) 89px 107px 158px 143px;background:#FFFFFF;color:rgba(0, 0, 0, 0.7803921569);font-size:0.875rem;line-height:1.125rem;border-bottom:1px solid rgba(0, 0, 0, 0.12);background:transparent;margin-bottom:8px;border-bottom:none}.table-head{font-size:0.75rem}.table-body{border-radius:8px;box-shadow:0px 0px 10px 0px rgba(0, 0, 0, 0.15);display:flex;flex-direction:column;min-width:min-content;max-width:100%}.table-row{display:grid;grid-template-columns:42px minmax(170px, auto) minmax(110px, auto) 89px 107px 158px 143px;background:#FFFFFF;color:rgba(0, 0, 0, 0.7803921569);font-size:0.875rem;line-height:1.125rem;border-bottom:1px solid rgba(0, 0, 0, 0.12)}.table-row:first-child{border-top-left-radius:8px;border-top-right-radius:8px}.table-row:last-child{border-bottom-left-radius:8px;border-bottom-right-radius:8px}.table-cell{font-weight:600;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:start;justify-content:start;padding-top:0px;padding-right:8px;border-bottom:1px solid rgba(255, 255, 255, 0.14)}.table-cell:first-child{border-bottom-width:0px}";

const IconTrendingCryptoListWidget = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.limit = 5;
    this.isLoading = false;
    this.error = null;
    this.cryptoTrending = null;
  }
  connectedCallback() {
    this.isLoading = true;
  }
  async componentWillLoad() {
    try {
      const cryptoTrending = (await services.fetchTrendingCryptos());
      this.cryptoTrending = cryptoTrending;
    }
    catch (error) {
      console.error(error);
      this.error = error;
    }
    this.isLoading = false;
  }
  render() {
    var _a;
    const { cryptos = [] } = (_a = this.cryptoTrending) !== null && _a !== void 0 ? _a : {};
    const cryptoList = cryptos.slice(0, this.limit);
    return (h(Host, null, h("div", { class: "container" }, h(WidgetHeader, { title: "\u865B\u64EC\u8CA8\u5E63\u8D70\u52E2", url: `${"https://dev.01icon.hk"}/crypto` }), this.isLoading && h("div", { class: "loading" }, "Loading..."), !this.isLoading && this.error && h("div", { class: "error" }, "Error"), !this.isLoading && cryptoList.length === 0 && (h("div", { class: "empty" }, "No data")), !this.isLoading && cryptoList.length > 0 && (h("div", { class: "scroll-wrapper", style: {} }, h("div", { class: "table" }, h("div", { class: "table-header", color: "rgba(255, 255, 255, 0.6)" }, h("div", { class: "table-head" }, "\u6392\u540D"), h("div", { class: "table-head" }, "\u540D\u7A31"), h("div", { class: "table-head", style: {
        display: 'flex',
        justifyContent: 'flex-end',
        paddingRight: '8px',
      } }, "\u50F9\u683C"), h("div", { class: "table-head", style: {
        display: 'flex',
        justifyContent: 'flex-end',
        paddingRight: '8px',
      } }, "24h%"), h("div", { class: "table-head", style: {
        display: 'flex',
        justifyContent: 'flex-end',
        paddingRight: '8px',
      } }, "7d%"), h("div", { class: "table-head", style: {
        display: 'flex',
        justifyContent: 'flex-end',
        paddingRight: '8px',
      } }, "\u7E3D\u5E02\u503C"), h("div", { class: "table-head", style: {
        display: 'flex',
        justifyContent: 'flex-end',
        paddingRight: '8px',
      } }, "\u6210\u4EA4\u984D (24h)")), h("div", { class: "table-body" }, cryptoList.map((item, idx) => (h(TrendingCryptoListItem, { item: item, idx: idx }))))))))));
  }
};
IconTrendingCryptoListWidget.style = indexCss;

export { IconTrendingCryptoListWidget as icon_trending_crypto_list_widget };

//# sourceMappingURL=icon-trending-crypto-list-widget.entry.js.map