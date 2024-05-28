import { h } from "./element.js";

class HistorySvg {
  constructor(className) {
    this.className = className;
    this.el = this.element();
  }

  element() {
    return h(
      "span",
      this.className ||
        "float-left inline-block fill-current text-[#70757a] outline-0 dark:text-[#9aa0a6]",
    )
      .attr({
        role: "button",
        tabindex: 0,
        "aria-label": "计算历史记录",
      })
      .attr("style", "height: 22px; line-height: 22px; width: 22px").html(`
      <svg class="block h-full w-full" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M13 3a9 9 0 0 0-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path>
      </svg>
      `);
  }
}

export default HistorySvg;
