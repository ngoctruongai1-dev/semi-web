// Loại bỏ chữ Nhật (Kanji/Hiragana/Katakana + dấu câu full-width liên quan) khỏi text,
// và dọn dẹp các dấu ngoặc/phẩy/gạch ngang còn sót lại sau khi xóa.
const JP_RANGE = /[　-〿぀-ゟ゠-ヿｦ-ﾟ一-鿿㐀-䶿]+/g;

export function stripJapanese(text) {
	let out = text.replace(JP_RANGE, "");

	// dọn dấu câu mồ côi còn sót lại quanh chỗ vừa xóa
	out = out.replace(/\(\s*[-,]\s*/g, "("); // "( - " hoặc "(, " -> "("
	out = out.replace(/\s*[-,]\s*\)/g, ")"); // " - )" hoặc " ,)" -> ")"
	out = out.replace(/,\s*,/g, ","); // ", ," -> ","
	out = out.replace(/\(\s*\)/g, ""); // "()" rỗng -> xóa
	out = out.replace(/\s+\(\)/g, ""); // " ()" -> xóa
	out = out.replace(/[ \t]{2,}/g, " "); // gộp khoảng trắng thừa
	out = out.replace(/[ \t]+\n/g, "\n"); // xóa khoảng trắng cuối dòng
	out = out.replace(/[ \t]+$/gm, "");

	return out;
}

/**
 * Tìm từ in nghiêng Latin đứng NGAY SAU chữ Nhật trong text GỐC (chưa strip) — vd "(半導体メモリ, *handoutai memory*)".
 * Đây là tín hiệu đáng tin cậy hơn nhiều so với việc bắt mọi từ in nghiêng (đa số là thuật ngữ tiếng Anh hợp lệ).
 * Phải gọi hàm này TRƯỚC khi stripJapanese(), vì cần chữ Nhật gốc để xác định vị trí liền kề.
 */
export function findRomanizedJapaneseCandidates(originalText) {
	const pattern = /[　-〿぀-ゟ゠-ヿｦ-ﾟ一-鿿㐀-䶿]+[,、]\s*\*([a-zA-Z][a-zA-Z '-]*)\*/g;
	return [...originalText.matchAll(pattern)].map((m) => m[1]);
}
