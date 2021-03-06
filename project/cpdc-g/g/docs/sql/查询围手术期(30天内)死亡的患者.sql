-- 查询围手术期(30天内)死亡的患者

SELECT
	DISTINCT die.PATIENT_NO 
	INTO #tmp_die 
FROM
	(-- 院内死亡
	SELECT 
		a.PATIENT_NO 
	FROM
		[dbo].[PAT_SD_ITEM_RESULT] AS a 
	WHERE
		a.SD_ITEM_CODE = 'YXA_O_209' 
		AND a.SD_ITEM_VALUE= '1' 
		AND a.PATIENT_NO IN ( SELECT PATIENT_NO FROM [dbo].[PAT_VISIT] WHERE SD_GROUP = '1' AND SD_CODE = 'YXA_O' ) 
    
    UNION
    
    -- 死亡日期 减去 手术日期 小于等于30天
	SELECT
		a.PATIENT_NO 
	FROM
		[dbo].[PAT_SD_ITEM_RESULT] AS a
		LEFT JOIN [dbo].[PAT_FOLLOW_UP_RESULT] AS b ON b.SD_ITEM_CODE = 'YXA_O_257' -- 随访死亡日期
		
		AND b.SD_ITEM_VALUE != '' 
	WHERE
		a.SD_ITEM_CODE= 'YXA_O_161' -- 手术日期
		
		AND a.SD_ITEM_CODE!= '' 
		AND b.PATIENT_NO= a.PATIENT_NO 
		AND a.PATIENT_NO IN ( SELECT PATIENT_NO FROM [dbo].[PAT_VISIT] WHERE SD_GROUP = '1' AND SD_CODE = 'YXA_O' ) 
		AND DATEDIFF(
			mm,
			CONVERT ( VARCHAR ( 100 ), a.SD_ITEM_VALUE, 120 ),
			CONVERT ( VARCHAR ( 100 ), b.SD_ITEM_VALUE, 120 ) 
		) <= '1' 
	) AS die	
	
	SELECT * FROM #tmp_die 