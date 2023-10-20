/*\
title: $:/plugins/author/pluginname/widget.js
type: application/javascript
module-type: widget

plugin summary
\*/
const Widget = require("$:/core/modules/widgets/widget.js").widget;

class FooWidget extends Widget {
  constructor(parseTreeNode, options) {
    super(parseTreeNode, options);
  }

  render(parent, nextSibling) {
    if (!$tw.browser) return;

    this.parentDomNode = parent;
    this.computeAttributes();
    this.execute();

    const domNode = $tw.utils.domMaker("div", {
      text: "foo plugin",
      attributes: {},
      children: [],
    });

    parent.insertBefore(domNode, nextSibling);
    this.domNodes.push(domNode);
  }
}

exports.foo = FooWidget;
