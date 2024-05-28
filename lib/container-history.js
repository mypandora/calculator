import { h, Element } from "./element.js";
import IconHistory from "./icon-history.js";

class Tooltip extends Element {
  constructor() {
    super(
      "div",
      "table h-full w-full text-center leading-5 text-[#70757a] dark:text-[#9aa0a6]",
    );
    this.child(
      h("div", "table-cell p-10 align-middle").html(
        "您做过的计算及其结果将会显示在此处，以便您重复使用",
      ),
    );
  }
}

class HistoryItem extends Element {
  constructor() {
    super("div", "");

    this.children(
      h("div", "h-[54px] w-full"),
      h("div", "relative max-h-80 overflow-auto p-4 pt-0"),
    ).hide();
  }
}

class ContainerHistory extends Element {
  constructor() {
    super(
      "div",
      "absolute -left-[1px] -left-px top-3 z-[3] box-border w-[448px] max-w-full border-separate rounded-lg bg-white shadow-sm outline-0 dark:bg-[#202124]",
    );

    this.iconHistory = new IconHistory(
      "relative float-left box-content inline-block fill-current p-4 text-[#1a73e8] dark:text-[#8ab4f8]",
    );
    this.tooltip = new Tooltip();
    this.HistoryItem = new HistoryItem();

    this.children(
      h("div", "absolute w-full outline-0").child(this.iconHistory.el),
      this.tooltip,
      this.HistoryItem.el,
    );

    this.attr("tabindex", "-1").hide();
  }
}

export default ContainerHistory;
