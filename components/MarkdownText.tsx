import DOMPurify from "isomorphic-dompurify";
import { marked } from "marked";

DOMPurify.addHook("afterSanitizeAttributes", function (node) {
  // set all elements owning target to target=_blank
  if ("target" in node) {
    node.setAttribute("target", "_blank");
    node.setAttribute("rel", "noopener");
  }
});

const MarkdownText = ({ markupText }: { markupText: string }) => {
  const markup = { __html: DOMPurify.sanitize(marked(markupText)) };

  return <div dangerouslySetInnerHTML={markup} />;
};

export default MarkdownText;
