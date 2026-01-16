import { moment } from 'obsidian';

type Lang = 'en' | 'zh' | 'zh-TW';

interface TranslationKeys {
	// Common
	'common.cancel': string;
	'common.yes': string;
	'common.no': string;
	'common.to': string;

	// Errors & Notices
	'error.noActiveFile': string;
	'error.renameFailed': string;
	'error.noActiveEditor': string;
	'notice.renamed': string;
	'error.batchRenameFailed': string;

	// Image Rename Modal
	'modal.rename.title': string;
	'modal.rename.newName': string;
	'modal.rename.newNameDesc': string;
	'modal.rename.originPath': string;
	'modal.rename.newPath': string;
	'modal.rename.button': string;
	'modal.rename.errorEmpty': string;

	// Batch Rename Modal
	'modal.batch.title': string;
	'modal.batch.namePattern': string;
	'modal.batch.namePatternDesc': string;
	'modal.batch.extPattern': string;
	'modal.batch.extPatternDesc': string;
	'modal.batch.nameReplace': string;
	'modal.batch.nameReplaceDesc': string;
	'modal.batch.tableOriginal': string;
	'modal.batch.tableRenamed': string;
	'modal.batch.renameAll': string;
	'modal.batch.errorEmpty': string;
	'modal.batch.confirmTitle': string;
	'modal.batch.confirmMessage': string;

	// Commands
	'command.batchRename': string;
	'command.batchRenameAll': string;

	// Settings
	'setting.imageNamePattern.name': string;
	'setting.imageNamePattern.desc': string;
	'setting.dupNumberAtStart.name': string;
	'setting.dupNumberAtStart.desc': string;
	'setting.dupNumberDelimiter.name': string;
	'setting.dupNumberDelimiter.desc': string;
	'setting.dupNumberAlways.name': string;
	'setting.dupNumberAlways.desc': string;
	'setting.autoRename.name': string;
	'setting.autoRename.desc': string;
	'setting.handleAllAttachments.name': string;
	'setting.handleAllAttachments.desc': string;
	'setting.excludeExtensionPattern.name': string;
	'setting.excludeExtensionPattern.desc': string;
	'setting.disableRenameNotice.name': string;
	'setting.disableRenameNotice.desc': string;
}

type Translations = {
	[K in Lang]: TranslationKeys;
};

const translations: Translations = {
	en: {
		// Common
		'common.cancel': 'Cancel',
		'common.yes': 'Yes',
		'common.no': 'No',
		'common.to': 'to',

		// Errors & Notices
		'error.noActiveFile': 'Error: No active file found.',
		'error.renameFailed': 'Failed to rename',
		'error.noActiveEditor': 'no active editor',
		'notice.renamed': 'Renamed',
		'error.batchRenameFailed': 'Failed to batch rename images: the generated name is not meaningful',

		// Image Rename Modal
		'modal.rename.title': 'Rename image',
		'modal.rename.newName': 'New name',
		'modal.rename.newNameDesc': 'Please input the new name for the image (without extension)',
		'modal.rename.originPath': 'Origin path',
		'modal.rename.newPath': 'New path',
		'modal.rename.button': 'Rename',
		'modal.rename.errorEmpty': 'Error: "New name" could not be empty',

		// Batch Rename Modal
		'modal.batch.title': 'Batch rename embeded files',
		'modal.batch.namePattern': 'Name pattern',
		'modal.batch.namePatternDesc': 'Please input the name pattern to match files (regex)',
		'modal.batch.extPattern': 'Extension pattern',
		'modal.batch.extPatternDesc': 'Please input the extension pattern to match files (regex)',
		'modal.batch.nameReplace': 'Name replace',
		'modal.batch.nameReplaceDesc': 'Please input the string to replace the matched name (use $1, $2 for regex groups)',
		'modal.batch.tableOriginal': 'Original path',
		'modal.batch.tableRenamed': 'Renamed Name',
		'modal.batch.renameAll': 'Rename all',
		'modal.batch.errorEmpty': 'Error: "Name pattern" could not be empty',
		'modal.batch.confirmTitle': 'Confirm rename all',
		'modal.batch.confirmMessage': 'Are you sure? This will rename all the {count} images matched the pattern.',

		// Commands
		'command.batchRename': 'Batch rename embeded files (in the current file)',
		'command.batchRenameAll': 'Batch rename all images instantly (in the current file)',

		// Settings
		'setting.imageNamePattern.name': 'Image name pattern',
		'setting.imageNamePattern.desc': `The pattern indicates how the new name should be generated.

Available variables:
- {{fileName}}: name of the active file, without ".md" extension.
- {{dirName}}: name of the directory which contains the document (the root directory of vault results in an empty variable).
- {{imageNameKey}}: this variable is read from the markdown file's frontmatter, from the same key "imageNameKey".
- {{DATE:$FORMAT}}: use "$FORMAT" to format the current date, "$FORMAT" must be a Moment.js format string, e.g. {{DATE:YYYY-MM-DD}}.

Here are some examples from pattern to image names (repeat in sequence), variables: fileName = "My note", imageNameKey = "foo":
- {{fileName}}: My note, My note-1, My note-2
- {{imageNameKey}}: foo, foo-1, foo-2
- {{imageNameKey}}-{{DATE:YYYYMMDD}}: foo-20220408, foo-20220408-1, foo-20220408-2`,
		'setting.dupNumberAtStart.name': 'Duplicate number at start (or end)',
		'setting.dupNumberAtStart.desc': 'If enabled, duplicate number will be added at the start as prefix for the image name, otherwise it will be added at the end as suffix for the image name.',
		'setting.dupNumberDelimiter.name': 'Duplicate number delimiter',
		'setting.dupNumberDelimiter.desc': 'The delimiter to generate the number prefix/suffix for duplicated names. For example, if the value is "-", the suffix will be like "-1", "-2", "-3", and the prefix will be like "1-", "2-", "3-". Only characters that are valid in file names are allowed.',
		'setting.dupNumberAlways.name': 'Always add duplicate number',
		'setting.dupNumberAlways.desc': 'If enabled, duplicate number will always be added to the image name. Otherwise, it will only be added when the name is duplicated.',
		'setting.autoRename.name': 'Auto rename',
		'setting.autoRename.desc': 'By default, the rename modal will always be shown to confirm before renaming, if this option is set, the image will be auto renamed after pasting.',
		'setting.handleAllAttachments.name': 'Handle all attachments',
		'setting.handleAllAttachments.desc': `By default, the plugin only handles images that starts with "Pasted image " in name,
which is the prefix Obsidian uses to create images from pasted content.
If this option is set, the plugin will handle all attachments that are created in the vault.`,
		'setting.excludeExtensionPattern.name': 'Exclude extension pattern',
		'setting.excludeExtensionPattern.desc': `This option is only useful when "Handle all attachments" is enabled.
Write a Regex pattern to exclude certain extensions from being handled. Only the first line will be used.`,
		'setting.disableRenameNotice.name': 'Disable rename notice',
		'setting.disableRenameNotice.desc': `Turn off this option if you don't want to see the notice when renaming images.
Note that Obsidian may display a notice when a link has changed, this option cannot disable that.`,
	},
	zh: {
		// Common
		'common.cancel': '取消',
		'common.yes': '确定',
		'common.no': '取消',
		'common.to': '到',

		// Errors & Notices
		'error.noActiveFile': '错误：未找到活动文件。',
		'error.renameFailed': '重命名失败',
		'error.noActiveEditor': '没有活动的编辑器',
		'notice.renamed': '已重命名',
		'error.batchRenameFailed': '批量重命名图片失败：生成的名称无意义',

		// Image Rename Modal
		'modal.rename.title': '重命名图片',
		'modal.rename.newName': '新名称',
		'modal.rename.newNameDesc': '请输入图片的新名称（不含扩展名）',
		'modal.rename.originPath': '原路径',
		'modal.rename.newPath': '新路径',
		'modal.rename.button': '重命名',
		'modal.rename.errorEmpty': '错误："新名称"不能为空',

		// Batch Rename Modal
		'modal.batch.title': '批量重命名嵌入文件',
		'modal.batch.namePattern': '名称模式',
		'modal.batch.namePatternDesc': '请输入匹配文件的名称模式（正则表达式）',
		'modal.batch.extPattern': '扩展名模式',
		'modal.batch.extPatternDesc': '请输入匹配文件的扩展名模式（正则表达式）',
		'modal.batch.nameReplace': '名称替换',
		'modal.batch.nameReplaceDesc': '请输入用于替换匹配名称的字符串（使用 $1、$2 表示正则分组）',
		'modal.batch.tableOriginal': '原路径',
		'modal.batch.tableRenamed': '重命名后的名称',
		'modal.batch.renameAll': '全部重命名',
		'modal.batch.errorEmpty': '错误："名称模式"不能为空',
		'modal.batch.confirmTitle': '确认全部重命名',
		'modal.batch.confirmMessage': '确定要继续吗？这将重命名所有匹配的 {count} 个图片。',

		// Commands
		'command.batchRename': '批量重命名嵌入文件（当前文件）',
		'command.batchRenameAll': '立即批量重命名所有图片（当前文件）',

		// Settings
		'setting.imageNamePattern.name': '图片名称模式',
		'setting.imageNamePattern.desc': `此模式指定如何生成新名称。

可用变量：
- {{fileName}}：活动文件的名称，不含 ".md" 扩展名。
- {{dirName}}：包含文档的目录名称（根目录结果为空变量）。
- {{imageNameKey}}：此变量从 markdown 文件的 frontmatter 中读取，键名为 "imageNameKey"。
- {{DATE:$FORMAT}}：使用 "$FORMAT" 格式化当前日期，"$FORMAT" 必须是 Moment.js 格式字符串，例如 {{DATE:YYYY-MM-DD}}。

示例（变量：fileName = "我的笔记", imageNameKey = "foo"）：
- {{fileName}}：我的笔记, 我的笔记-1, 我的笔记-2
- {{imageNameKey}}：foo, foo-1, foo-2
- {{imageNameKey}}-{{DATE:YYYYMMDD}}：foo-20220408, foo-20220408-1, foo-20220408-2`,
		'setting.dupNumberAtStart.name': '重复编号在开头（或末尾）',
		'setting.dupNumberAtStart.desc': '如果启用，重复编号将作为前缀添加在图片名称开头，否则将作为后缀添加在末尾。',
		'setting.dupNumberDelimiter.name': '重复编号分隔符',
		'setting.dupNumberDelimiter.desc': '用于生成重复名称的编号前缀/后缀的分隔符。例如，如果值为 "-"，后缀将是 "-1"、"-2"、"-3"，前缀将是 "1-"、"2-"、"3-"。只允许使用文件名中有效的字符。',
		'setting.dupNumberAlways.name': '始终添加重复编号',
		'setting.dupNumberAlways.desc': '如果启用，将始终为图片名称添加编号。否则，仅在名称重复时添加。',
		'setting.autoRename.name': '自动重命名',
		'setting.autoRename.desc': '默认情况下，重命名前总是显示确认对话框。如果启用此选项，粘贴后将自动重命名图片。',
		'setting.handleAllAttachments.name': '处理所有附件',
		'setting.handleAllAttachments.desc': `默认情况下，插件仅处理名称以 "Pasted image " 开头的图片，
这是 Obsidian 用于从粘贴内容创建图片的前缀。
如果启用此选项，插件将处理保管库中创建的所有附件。`,
		'setting.excludeExtensionPattern.name': '排除扩展名模式',
		'setting.excludeExtensionPattern.desc': `仅当启用"处理所有附件"时此选项才有用。
编写正则表达式模式以排除某些扩展名。仅使用第一行。`,
		'setting.disableRenameNotice.name': '禁用重命名通知',
		'setting.disableRenameNotice.desc': `如果不想在重命名图片时看到通知，请关闭此选项。
注意，当链接更改时 Obsidian 可能显示通知，此选项无法禁用该通知。`,
	},
	'zh-TW': {
		// Common
		'common.cancel': '取消',
		'common.yes': '確定',
		'common.no': '取消',
		'common.to': '到',

		// Errors & Notices
		'error.noActiveFile': '錯誤：未找到活動檔案。',
		'error.renameFailed': '重新命名失敗',
		'error.noActiveEditor': '沒有活動的編輯器',
		'notice.renamed': '已重新命名',
		'error.batchRenameFailed': '批次重新命名圖片失敗：生成的名稱無意義',

		// Image Rename Modal
		'modal.rename.title': '重新命名圖片',
		'modal.rename.newName': '新名稱',
		'modal.rename.newNameDesc': '請輸入圖片的新名稱（不含副檔名）',
		'modal.rename.originPath': '原路徑',
		'modal.rename.newPath': '新路徑',
		'modal.rename.button': '重新命名',
		'modal.rename.errorEmpty': '錯誤：「新名稱」不能為空',

		// Batch Rename Modal
		'modal.batch.title': '批次重新命名嵌入檔案',
		'modal.batch.namePattern': '名稱模式',
		'modal.batch.namePatternDesc': '請輸入匹配檔案的名稱模式（正規表示式）',
		'modal.batch.extPattern': '副檔名模式',
		'modal.batch.extPatternDesc': '請輸入匹配檔案的副檔名模式（正規表示式）',
		'modal.batch.nameReplace': '名稱替換',
		'modal.batch.nameReplaceDesc': '請輸入用於替換匹配名稱的字串（使用 $1、$2 表示正規分組）',
		'modal.batch.tableOriginal': '原路徑',
		'modal.batch.tableRenamed': '重新命名後的名稱',
		'modal.batch.renameAll': '全部重新命名',
		'modal.batch.errorEmpty': '錯誤：「名稱模式」不能為空',
		'modal.batch.confirmTitle': '確認全部重新命名',
		'modal.batch.confirmMessage': '確定要繼續嗎？這將重新命名所有符合的 {count} 個圖片。',

		// Commands
		'command.batchRename': '批次重新命名嵌入檔案（目前檔案）',
		'command.batchRenameAll': '立即批次重新命名所有圖片（目前檔案）',

		// Settings
		'setting.imageNamePattern.name': '圖片名稱模式',
		'setting.imageNamePattern.desc': `此模式指定如何生成新名稱。

可用變數：
- {{fileName}}：活動檔案的名稱，不含 ".md" 副檔名。
- {{dirName}}：包含文件的目錄名稱（根目錄結果為空變數）。
- {{imageNameKey}}：此變數從 markdown 檔案的 frontmatter 中讀取，鍵名為 "imageNameKey"。
- {{DATE:$FORMAT}}：使用 "$FORMAT" 格式化目前日期，"$FORMAT" 必須是 Moment.js 格式字串，例如 {{DATE:YYYY-MM-DD}}。

範例（變數：fileName = "我的筆記", imageNameKey = "foo"）：
- {{fileName}}：我的筆記, 我的筆記-1, 我的筆記-2
- {{imageNameKey}}：foo, foo-1, foo-2
- {{imageNameKey}}-{{DATE:YYYYMMDD}}：foo-20220408, foo-20220408-1, foo-20220408-2`,
		'setting.dupNumberAtStart.name': '重複編號在開頭（或末尾）',
		'setting.dupNumberAtStart.desc': '如果啟用，重複編號將作為前綴新增在圖片名稱開頭，否則將作為後綴新增在末尾。',
		'setting.dupNumberDelimiter.name': '重複編號分隔符',
		'setting.dupNumberDelimiter.desc': '用於生成重複名稱的編號前綴/後綴的分隔符。例如，如果值為 "-"，後綴將是 "-1"、"-2"、"-3"，前綴將是 "1-"、"2-"、"3-"。只允許使用檔案名稱中有效的字元。',
		'setting.dupNumberAlways.name': '始終新增重複編號',
		'setting.dupNumberAlways.desc': '如果啟用，將始終為圖片名稱新增編號。否則，僅在名稱重複時新增。',
		'setting.autoRename.name': '自動重新命名',
		'setting.autoRename.desc': '預設情況下，重新命名前總是顯示確認對話框。如果啟用此選項，貼上後將自動重新命名圖片。',
		'setting.handleAllAttachments.name': '處理所有附件',
		'setting.handleAllAttachments.desc': `預設情況下，外掛僅處理名稱以 "Pasted image " 開頭的圖片，
這是 Obsidian 用於從貼上內容建立圖片的前綴。
如果啟用此選項，外掛將處理保管庫中建立的所有附件。`,
		'setting.excludeExtensionPattern.name': '排除副檔名模式',
		'setting.excludeExtensionPattern.desc': `僅當啟用「處理所有附件」時此選項才有用。
編寫正規表示式模式以排除某些副檔名。僅使用第一行。`,
		'setting.disableRenameNotice.name': '停用重新命名通知',
		'setting.disableRenameNotice.desc': `如果不想在重新命名圖片時看到通知，請關閉此選項。
注意，當連結更改時 Obsidian 可能顯示通知，此選項無法停用該通知。`,
	},
};

let currentLang: Lang = 'en';

/**
 * Detect and set language based on Obsidian's locale
 */
export function detectLanguage(): Lang {
	const locale = moment.locale();

	if (locale.startsWith('zh-TW') || locale.startsWith('zh-HK')) {
		return 'zh-TW';
	} else if (locale.startsWith('zh')) {
		return 'zh';
	}

	return 'en';
}

/**
 * Initialize i18n system
 */
export function initI18n(): void {
	currentLang = detectLanguage();
}

/**
 * Get translated text
 */
export function t(key: keyof TranslationKeys, replacements?: Record<string, string | number>): string {
	let text = translations[currentLang][key] || translations['en'][key] || key;

	// Replace placeholders like {count} with actual values
	if (replacements) {
		Object.keys(replacements).forEach(k => {
			text = text.replace(new RegExp(`\\{${k}\\}`, 'g'), String(replacements[k]));
		});
	}

	return text;
}

/**
 * Get current language
 */
export function getCurrentLang(): Lang {
	return currentLang;
}

/**
 * Set language manually (for testing)
 */
export function setLanguage(lang: Lang): void {
	currentLang = lang;
}
