	SELECT
		PATIENT_NO,
		MAX ( FOLLOW_UP_MONTHS ) AS '随访月份'
	FROM
		[dbo].[PAT_FOLLOW_UP] 
	WHERE
		FOLLOW_UP_DATE != '1900-01-01 00:00:00.000' 
		AND FOLLOW_UP_MONTHS!=''
		AND PATIENT_NO IN ( SELECT PATIENT_NO FROM [dbo].[PAT_VISIT] WHERE SD_GROUP = '1' AND SD_CODE = 'YXA_O' ) 
-- 		AND FOLLOW_UP_MONTHS > 12 -- 大于等于12个月
	GROUP BY
		PATIENT_NO