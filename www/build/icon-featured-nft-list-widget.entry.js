import { h, r as registerInstance } from './index-358baade.js';
import { f as formatNumber, s as services, W as WidgetHeader } from './number-2f952f18.js';
import { p as prop } from './index-2a0a2690.js';

const FeaturedNftList = ({ collection }) => {
  return (h("div", { class: "inner" },
    h("div", { class: "nft-image" },
      h("img", { class: "nft-image", src: collection.imageUrl, alt: "nft icon" })),
    h("div", { class: "info-box" },
      h("span", { class: "text-box" }, collection.name),
      h("div", { class: "price-box" },
        h("p", null, "\u5E95\u50F9"),
        h("img", { class: "eth-icon", src: collection.paymentToken.imageUrl, alt: "ETH" }),
        h("span", null, formatNumber(collection.floorPrice, { nullPlaceholder: '--' }))))));
};

const indexCss = ".loading{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;width:100%;font-size:24px}.container{min-width:310px;max-width:1256px;font-size:16px}.nft-wrapper{display:inline-flex;width:100%;justify-content:start;margin-bottom:17px}.inner{display:block;margin:0 8px;max-width:233.6px;border-radius:5% 5% 5% 5%;box-shadow:0 0 10px rgb(200, 200, 200);border-collapse:collapse;text-decoration:none;font-family:\"PingFang HK\"}.inner:first-child{margin-left:12px}.inner:last-child{margin-right:12px}.nft-image{width:233.6px;height:224px;border-radius:5% 5% 0 0;margin-bottom:0}.info-box{padding:16px 0 16px 8px;margin-top:0;border-radius:0 0 10px 10px;color:black}.price-box{display:flex;font-size:14px;margin-top:3px;align-items:center}.text-box{display:-webkit-box;overflow:hidden;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow-wrap:break-word}.eth-icon{max-width:14px;max-height:9px;margin:0 4px}.scroll-wrapper{overflow-x:scroll;padding-right:4px}.scroll-wrapper::-webkit-scrollbar{display:none}";

const TrendingNftListWidget = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.limit = 5;
    this.isLoading = false;
    this.error = undefined;
    this.featuredNFTList = null;
  }
  connectedCallback() {
    this.isLoading = true;
  }
  async componentWillLoad() {
    try {
      const featuredNftData = (await services.fetchFeaturedNfts({
        limit: this.limit,
      }));
      this.featuredNFTList = featuredNftData;
    }
    catch (error) {
      console.error('error:', error);
      this.error = error;
    }
    this.isLoading = false;
  }
  render() {
    const collections = prop('collections', this.featuredNFTList);
    return (h("div", { class: "container" }, h(WidgetHeader, { title: '精選NFT', url: `${"https://dev.01icon.hk"}/crypto` }), this.isLoading && h("div", { class: "loading" }, "Loading..."), !this.isLoading && this.error && h("div", { class: "error" }, "Error"), !this.isLoading && collections.length === 0 && (h("div", { class: "empty" }, "No data")), !this.isLoading && collections.length > 0 && (h("div", { class: "scroll-wrapper" }, h("div", { class: "nft-wrapper" }, collections &&
      collections.map(collection => (h(FeaturedNftList, { collection: collection }))))))));
  }
};
TrendingNftListWidget.style = indexCss;

export { TrendingNftListWidget as icon_featured_nft_list_widget };

//# sourceMappingURL=icon-featured-nft-list-widget.entry.js.map