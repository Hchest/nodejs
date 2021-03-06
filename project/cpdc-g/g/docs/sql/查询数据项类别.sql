
-- 查询数据项类别
SELECT
	title.ITEM_TYPE_NAME,
	title.ITEM_TYPE_CODE,
	title.DISPLAY_ORDER,
	title1.ITEM_TYPE_NAME,
	title1.ITEM_TYPE_CODE,
	title1.DISPLAY_ORDER
FROM
	[dbo].[SD_ITEM_TYPE_DICT] AS title 
	LEFT JOIN [dbo].[SD_ITEM_TYPE_DICT] AS title1 ON title1.PARENT_TYPE_CODE IS NOT NULL AND title.SD_CODE='YXA_O' AND title.ITEM_TYPE_CODE=title1.PARENT_TYPE_CODE
WHERE
	title.PARENT_TYPE_CODE IS NULL 
	AND title.SD_CODE= 'YXA_O'
	ORDER BY title.DISPLAY_ORDER