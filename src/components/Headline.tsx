import type { ReactNode } from "react";
export function Headline(props: { children: ReactNode }) {
  return <h1 className="text-3xl font-bold text-blue-500">{props.children}</h1>;
}
