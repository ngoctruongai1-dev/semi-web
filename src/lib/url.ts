const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

/** Ghép đường dẫn nội bộ (bắt đầu bằng "/") với base path đã cấu hình (vd. "/semi-web"). */
export function withBase(path: string): string {
	if (/^https?:\/\//.test(path)) return path;
	return `${BASE}${path.startsWith("/") ? path : `/${path}`}`;
}
