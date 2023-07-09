import { h, r as registerInstance, a as Host, g as getElement } from './index-358baade.js';
import { f as formatNumber, s as services, W as WidgetHeader } from './number-2f952f18.js';
import './index-2a0a2690.js';

const TrendingNftListItem = ({ item, idx, }) => {
  var _a;
  return (h("div", { class: "table-row", style: { padding: '10px 0' } },
    h("div", { class: "table-cell", style: { justifySelf: 'center' } }, idx + 1),
    h("div", { class: "table-cell", style: { flexShrink: '0', fontSize: '1rem' } },
      h("img", { src: item.imageUrl, alt: item.name, "aria-label": item.name, style: {
          marginRight: '8px',
          maxWidth: '56px',
          border: '1px solid #0000001F',
          borderRadius: '100%',
          aspectRatio: '1 / 1',
        } }),
      h("span", null, (_a = item.name) !== null && _a !== void 0 ? _a : '')),
    h("div", { class: "table-cell", style: {
        flexShrink: '0',
        fontSize: '1rem',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
      } },
      h("span", { style: {
          display: 'inline-flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
        } },
        h("img", { src: item.paymentToken.imageUrl, alt: item.paymentToken.name, "aria-label": item.paymentToken.name, width: 10, style: {
            marginRight: '4px',
            maxWidth: '56px',
            borderRadius: '100%',
          } }),
        h("span", { style: { fontSize: '0.875rem' } }, formatNumber(item.floorPrice, {
          nullPlaceholder: '--',
        })))),
    h("div", { class: "table-cell", style: {
        flexShrink: '0',
        fontSize: '1rem',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
      } },
      h("span", { style: {
          display: 'inline-flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
        } },
        h("img", { src: item.paymentToken.imageUrl, alt: item.paymentToken.name, "aria-label": item.paymentToken.name, width: 10, style: {
            marginRight: '4px',
            maxWidth: '56px',
            borderRadius: '100%',
          } }),
        h("span", { style: { fontSize: '0.875rem' } }, formatNumber(item.oneDayVolume, {
          nullPlaceholder: '--',
        }))))));
};

const indexCss = ":host{width:100%}.container{min-width:310px;font-size:16px;margin-bottom:16px}.loading{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;width:100%;font-size:24px}.scroll-wrapper{overflow-x:scroll;padding-right:4px}.scroll-wrapper::-webkit-scrollbar{display:none}.table{display:flex;flex-direction:column;padding:4px 12px;min-width:min-content;max-width:100%}.table-header-wrapper{display:grid;grid-template-columns:auto auto;grid-column-gap:40px;margin-bottom:8px;padding:0 16px;font-size:0.875rem;line-height:1.125rem}.table-header{display:grid;grid-template-columns:34px auto 100px 100px}@media only screen and (max-width: 1023px){.table-header-wrapper{grid-template-columns:auto}.table-header{grid-template-columns:34px auto 100px 100px}}.table-head{font-size:0.75rem;color:rgba(0, 0, 0, 0.7803921569)}.table-body{border-radius:8px;box-shadow:0px 0px 10px 0px rgba(0, 0, 0, 0.15);color:rgba(0, 0, 0, 0.7803921569);min-width:min-content;max-width:100%;padding:0 16px;-webkit-column-count:2;-moz-column-count:2;column-count:2;-webkit-column-gap:40px;-moz-column-gap:40px;column-gap:40px}@media only screen and (max-width: 1023px){.table-body{display:flex;flex-flow:column wrap}}.table-row{display:grid;grid-template-columns:34px auto 100px 100px;font-size:0.875rem}.table-row:first-child{border-top-left-radius:8px;border-top-right-radius:8px}.table-row:last-child{border-bottom-left-radius:8px;border-bottom-right-radius:8px}.table-cell{font-weight:600;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:start;justify-content:start;border-bottom:1px solid rgba(255, 255, 255, 0.14)}.table-cell:first-child{border-bottom-width:0px}";

const IconTrendingNftListWidget = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.width = 0;
    this.isLoading = false;
    this.error = null;
    this.nftTrending = null;
  }
  getWidth() {
    return this.element.getBoundingClientRect().width;
  }
  handleResize() {
    this.width = this.getWidth();
  }
  connectedCallback() {
    this.isLoading = true;
  }
  async componentWillLoad() {
    try {
      const nftTrending = (await services.fetchTrendingNfts());
      this.nftTrending = nftTrending;
    }
    catch (error) {
      console.error(error);
      this.error = error;
    }
    this.isLoading = false;
  }
  render() {
    var _a;
    const { collections = [] } = (_a = this.nftTrending) !== null && _a !== void 0 ? _a : {};
    const collectionList = collections.slice(0, 10);
    return (h(Host, null, h("div", { class: "container" }, h(WidgetHeader, { title: "\u6BCF\u65E5\u71B1\u9580NFT", url: `${"https://dev.01icon.hk"}/crypto` }), this.isLoading && h("div", { class: "loading" }, "Loading..."), !this.isLoading && this.error && h("div", { class: "error" }, "Error"), !this.isLoading && collectionList.length === 0 && (h("div", { class: "empty" }, "No data")), !this.isLoading && collectionList.length > 0 && (h("div", { class: "scroll-wrapper", style: {} }, h("div", { class: "table" }, h("div", { class: "table-header-wrapper", color: "rgba(255, 255, 255, 0.6)" }, h("div", { class: "table-header" }, h("div", { class: "table-head", style: { textAlign: 'center' } }, "\u6392\u540D"), h("div", { class: "table-head" }, "\u540D\u7A31"), h("div", { class: "table-head", style: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
      } }, "\u5E95\u50F9"), h("div", { class: "table-head", style: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
      } }, "\u4EA4\u6613\u91CF")), this.width >= 1024 && (h("div", { class: "table-header" }, h("div", { class: "table-head", style: { textAlign: 'center' } }, "\u6392\u540D"), h("div", { class: "table-head" }, "\u540D\u7A31"), h("div", { class: "table-head", style: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
      } }, "\u5E95\u50F9"), h("div", { class: "table-head", style: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
      } }, "\u4EA4\u6613\u91CF")))), h("div", { class: "table-body" }, collectionList.map((item, idx) => (h(TrendingNftListItem, { item: item, idx: idx }))))))))));
  }
  get element() { return getElement(this); }
};
IconTrendingNftListWidget.style = indexCss;

export { IconTrendingNftListWidget as icon_trending_nft_list_widget };

//# sourceMappingURL=icon-trending-nft-list-widget.entry.js.map