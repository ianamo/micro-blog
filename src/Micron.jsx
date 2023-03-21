import ReactMarkdown from "react-markdown";

export default function Micron(props) {
  return (
    <div className="micron-container">
      <ReactMarkdown>{props.content}</ReactMarkdown>
      <p className="date">{props.date}</p>
    </div>
  );
}
