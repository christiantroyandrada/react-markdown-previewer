import React, { useState, useEffect } from "react";
import { marked } from "marked";
import "./styles.css";

const DEFAULT_MARKDOWN = `
# Heading 1

## Heading 2

[Link](https://www.example.com)

Inline code: \`const x = 5;\`

Code block:

\`\`\`
function add(a, b) {
  return a + b;
}
\`\`\`

- List item 1
- List item 2

> Blockquote

![Image](https://via.placeholder.com/150)

**Bold text**

This is a paragraph  
with a line break.

This is another  
paragraph with  
multiple line breaks.
`;

function MarkdownPreviewer() {
  const [markdown, setMarkdown] = useState(DEFAULT_MARKDOWN);

  useEffect(() => {
    const preview = document.getElementById("preview");
    preview.innerHTML = marked(markdown, { breaks: true });
  }, [markdown]);

  function handleMarkdownChange(event) {
    setMarkdown(event.target.value);
  }

  return (
    <div>
      <div>
        <h1 className="header-title">MarkdownPreviewer</h1>
      </div>
      <textarea
        id="editor"
        value={markdown}
        onChange={handleMarkdownChange}
      ></textarea>
      <div>
        <h1 className="header-title">Preview</h1>
      </div>
      <div id="preview"></div>
    </div>
  );
}

export default MarkdownPreviewer;
