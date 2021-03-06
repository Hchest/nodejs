SELECT
	b.HOSPITAL_NAME,
	COUNT ( b.HOSPITAL_NAME ) AS '病例数' 
FROM
	[dbo].[PAT_VISIT] AS a
	LEFT JOIN [dbo].[HOSPITAL_DICT] AS b ON a.HOSPITAL_ID= b.HOSPITAL_ID 
WHERE
	a.SD_CODE= 'YXA_O' 
	AND a.SD_GROUP = 1
	AND a.DISCHARGE_DATE> '2016-01-01 00:00:00.000' 
	AND a.DISCHARGE_DATE< '2016-12-31 00:00:00.000' 
GROUP BY -- 分组
	b.HOSPITAL_NAME 
ORDER BY -- 排序
	b.HOSPITAL_NAME