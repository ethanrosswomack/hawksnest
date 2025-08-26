export const CONTENT_BASE = import.meta.env.PUBLIC_CONTENT_BASE || "https://s3.omniversalaether.app";
export const makeUrl = (path: string) => {
  if (!path) return CONTENT_BASE;
  return path.startsWith("http") ? path : `${CONTENT_BASE}${path.startsWith("/") ? "" : "/"}${path}`;
};
