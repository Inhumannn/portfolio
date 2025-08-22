import "../styles/components/codeblock.scss";

import "../styles/components/codeblock.scss";

export function CodeBlock() {
  return (
    <pre className="json-block">
      <code>
        <span className="json-brace">{"{"}</span>
        {"\n  "}
        <span className="json-key">"name"</span>:{" "}
        <span className="json-string">"Thomas PENA--BERMOND"</span>,{"\n  "}
        <span className="json-key">"role"</span>:{" "}
        <span className="json-string">"Full Stack Developer"</span>,{"\n  "}
        <span className="json-key">"age"</span>:{" "}
        <span className="json-number">19</span>,{"\n  "}
        <span className="json-key">"Skills"</span>:{" "}
        <span className="json-bracket">[</span>
        <span className="json-string">'Html'</span>,{" "}
        <span className="json-string">'css'</span>,{" "}
        <span className="json-string">'js'</span>
        <span className="json-bracket">]</span>
        {"\n"}
        <span className="json-brace">{"}"}</span>
      </code>
    </pre>
  );
}
