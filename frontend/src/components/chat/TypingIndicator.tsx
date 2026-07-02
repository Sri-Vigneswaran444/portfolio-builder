export default function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="flex gap-2 rounded-2xl border border-zinc-700 bg-zinc-900 px-6 py-4">
        <span className="h-2 w-2 animate-bounce rounded-full bg-blue-500"></span>
        <span
          className="h-2 w-2 animate-bounce rounded-full bg-blue-500"
          style={{ animationDelay: "0.15s" }}
        ></span>
        <span
          className="h-2 w-2 animate-bounce rounded-full bg-blue-500"
          style={{ animationDelay: "0.3s" }}
        ></span>
      </div>
    </div>
  );
}