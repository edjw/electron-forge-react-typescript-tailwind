export function Quote(props: { children: string }) {
  return (
    <blockquote className="text-2xl font-bold">{props.children}</blockquote>
  );
}
