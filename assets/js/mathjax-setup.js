window.MathJax = {
  tex: {
    tags: "ams",
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"],
    ],
  },
  chtml: {
    mtextInheritFont: true,
  },
  options: {
    renderActions: {
      addCss: [
        200,
        function (doc) {
          const style = document.createElement("style");
          style.innerHTML = `
          .mjx-container {
            color: inherit;
            font-size: 0.9em !important;
          }
        `;
          document.head.appendChild(style);
        },
        "",
      ],
    },
  },
};
