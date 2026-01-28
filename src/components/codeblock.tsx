export function CodeBlock() {
  return (
    <pre className="json-block">
      <code>
        <span className="json-brace">{"{"}</span>
        {"\n  "}
        <span className="json-key">"name"</span>:{" "}
        <span className="json-string">"Thomas PENA--BERMOND"</span>,{"\n  "}
        <span className="json-key">"role"</span>:{" "}
        <span className="json-string">"Web & Mobile Developer"</span>,{"\n  "}
        <span className="json-key">"Status"</span>:{" "}
        <span className="json-string">"Seeking Apprenticeship"</span>,{"\n  "}
        <span className="json-key">"Skills"</span>:{" "}
        <span className="json-bracket">[</span>
        <span className="json-string">'Html'</span>,{" "}
        <span className="json-string">'css'</span>,{" "}
        <span className="json-string">'js'</span>
        <span className="json-bracket">]</span>,{"\n  "}
        <span className="json-key">"Passions"</span>:{" "}
        <span className="json-bracket">[</span>
        <span className="json-string">'Chess'</span>,{" "}
        <span className="json-string">'Piano'</span>
        <span className="json-bracket">]</span>,{"\n  "}
        <span className="json-key">"Coffee"</span>:{" "}
        <span className="json-boolean">true</span>,{"\n  "}
        <span className="json-key">"Age"</span>:{" "}
        <span className="json-number">19</span>
        {"\n"}
        <span className="json-brace">{"}"}</span>
      </code>
    </pre>
  );
}
