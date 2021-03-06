-- 更新手术时间格式
UPDATE [dbo].[PAT_SD_ITEM_RESULT] SET SD_ITEM_VALUE=CAST(SD_ITEM_VALUE AS date) WHERE SD_ITEM_CODE='YXA_O_161' AND SD_ITEM_VALUE!=''
-- 更新死亡时间格式
UPDATE [dbo].[PAT_FOLLOW_UP_RESULT] SET SD_ITEM_VALUE=CAST(SD_ITEM_VALUE AS date) WHERE SD_ITEM_CODE = 'YXA_O_257' AND SD_ITEM_VALUE!=''


SELECT
	pat_ret.PATIENT_NO,
	pat_ret.SD_ITEM_VALUE AS '手术日期',
	fu_ret.SD_ITEM_VALUE AS '死亡日期',
	CONVERT ( DATE, ISNULL( fu_ret.SD_ITEM_VALUE, GETDATE( ) ) ) AS '截止随访时间',
	DATEDIFF( MM, CONVERT ( DATE, pat_ret.SD_ITEM_VALUE ), CONVERT ( DATE, ISNULL( fu_ret.SD_ITEM_VALUE, GETDATE( ) ) ) )/12 AS '应随访次数' ,
	(SELECT COUNT(PATIENT_NO) FROM [dbo].[PAT_FOLLOW_UP] WHERE FOLLOW_UP_DATE!='1900-01-01 00:00:00.000' AND pat_ret.PATIENT_NO=PATIENT_NO) AS '实际随访次数'
FROM
	[dbo].[PAT_SD_ITEM_RESULT] AS pat_ret
	LEFT JOIN [dbo].[PAT_FOLLOW_UP_RESULT] AS fu_ret ON fu_ret.SD_ITEM_CODE = 'YXA_O_257' -- 死亡日期
	AND fu_ret.SD_ITEM_VALUE != '' 
	AND pat_ret.PATIENT_NO= fu_ret.PATIENT_NO 
WHERE
	pat_ret.SD_ITEM_CODE = 'YXA_O_161' -- 手术日期
	AND pat_ret.SD_ITEM_VALUE != ''
	AND pat_ret.SD_ITEM_VALUE != '1900-01-01'	
	AND pat_ret.PATIENT_NO NOT IN (
		-- 院内死亡
		SELECT PATIENT_NO FROM [dbo].[PAT_SD_ITEM_RESULT] WHERE SD_ITEM_CODE='YXA_O_209' AND SD_ITEM_VALUE='1' UNION
		-- 失访或死亡的患者
		SELECT PATIENT_NO FROM [dbo].[PAT_FOLLOW_UP] WHERE FU_REASON LIKE '%失访%' OR FU_REASON LIKE '%死亡%' 
	)


