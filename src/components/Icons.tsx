import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export function Icon({ name, ...props }: { name: string } & IconProps) {
  const paths: Record<string, JSX.Element> = {
    shield: (
      <>
        <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
    users: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20a6 6 0 0 1 12 0" />
        <path d="M16 5.5a3 3 0 0 1 0 5.5M21 20a6 6 0 0 0-4-5.7" />
      </>
    ),
    flask: (
      <>
        <path d="M9 3h6M10 3v6l-4.5 8A2 2 0 0 0 7.3 20h9.4a2 2 0 0 0 1.8-3L14 9V3" />
        <path d="M7.5 14h9" />
      </>
    ),
    trending: (
      <>
        <path d="M3 17l6-6 4 4 7-7" />
        <path d="M17 7h4v4" />
      </>
    ),
    rocket: (
      <>
        <path d="M5 15c-1 1-1.5 4-1.5 4s3-.5 4-1.5" />
        <path d="M9 15l-3-3c1-5 5-9 11-9 0 6-4 10-9 11z" />
        <circle cx="14.5" cy="9.5" r="1.2" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    refresh: (
      <>
        <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
        <path d="M21 3v5h-5" />
        <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
        <path d="M3 21v-5h5" />
      </>
    ),
    check: <path d="M5 12l4 4 10-10" />,
    phone: (
      <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L19 12l2 5v3a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z" />
    ),
    whatsapp: (
      <path
        d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.7-1.2A9 9 0 1 0 12 3zm0 2a7 7 0 0 1 0 14 7 7 0 0 1-3.6-1l-.3-.2-2.5.7.7-2.4-.2-.3A7 7 0 0 1 12 5zm-2.3 3.3c-.2 0-.5 0-.7.4-.2.4-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.7 2.8 4.3 3.8 2.1.8 2.6.7 3 .6.6-.1 1.4-.6 1.6-1.2.2-.6.2-1 .1-1.2l-.7-.3c-.3-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1-.7-.3-1.3-.6-2-1.3-.5-.5-.9-1.1-1-1.3-.1-.2 0-.4.1-.5l.4-.4c.1-.2.2-.3.3-.5 0-.2 0-.4 0-.5l-.7-1.7c-.2-.4-.4-.4-.6-.4z"
        fill="currentColor"
        stroke="none"
      />
    ),
    star: (
      <path
        d="M12 3.5l2.5 5 5.5.8-4 3.9.9 5.5L12 16l-4.9 2.6.9-5.5-4-3.9 5.5-.8z"
        fill="currentColor"
        stroke="none"
      />
    ),
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
    map: (
      <>
        <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    spark: (
      <path
        d="M12 3l1.6 5L19 9.5 14 11l-2 5-2-5L5 9.5 10.4 8z"
        fill="currentColor"
        stroke="none"
      />
    ),
  };

  return (
    <svg {...base} {...props} aria-hidden="true">
      {paths[name] ?? paths.check}
    </svg>
  );
}
