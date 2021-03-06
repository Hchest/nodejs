
-- 查询各医院的上报病例数
SELECT
	b.HOSPITAL_NAME,
	COUNT ( b.HOSPITAL_NAME ) AS num 
FROM
	[dbo].[PAT_VISIT] AS a
	LEFT JOIN [dbo].[HOSPITAL_DICT] AS b ON a.HOSPITAL_ID= b.HOSPITAL_ID 
WHERE
	a.SD_CODE = 'YXA_O' 
GROUP BY
	b.HOSPITAL_NAME 
ORDER BY
	num DESC

-- 查询各医院每月上报病例数
SELECT 
h.HOSPITAL_NAME,
	CONVERT ( VARCHAR ( 7 ), pat.DISCHARGE_DATE, 120 ) AS months,
	COUNT ( CONVERT ( VARCHAR ( 7 ), pat.DISCHARGE_DATE, 120 ) ) AS num 
FROM
	[dbo].[PAT_VISIT] AS pat 
	LEFT JOIN [dbo].[HOSPITAL_DICT] AS h ON pat.HOSPITAL_ID=h.HOSPITAL_ID
WHERE
	pat.SD_CODE = 'YXA_O' 
GROUP BY
	CONVERT ( VARCHAR ( 7 ), pat.DISCHARGE_DATE, 120 ) ,h.HOSPITAL_NAME
ORDER BY
	h.HOSPITAL_NAME

-- 查询各医院每月上报 随访病例数
SELECT
	h.HOSPITAL_NAME,
	CONVERT ( VARCHAR ( 7 ), pat.DISCHARGE_DATE, 120 ) AS fu_months,
	COUNT ( CONVERT ( VARCHAR ( 7 ), pat.DISCHARGE_DATE, 120 ) ) AS fu_num 
FROM
	[dbo].[PAT_FOLLOW_UP] AS fu
	LEFT JOIN [dbo].[PAT_VISIT] AS pat ON fu.PATIENT_NO = pat.PATIENT_NO
	LEFT JOIN [dbo].[HOSPITAL_DICT] AS h ON pat.HOSPITAL_ID= h.HOSPITAL_ID 
WHERE
	pat.SD_CODE = 'YXA_O' 
GROUP BY
	CONVERT ( VARCHAR ( 7 ), pat.DISCHARGE_DATE, 120 ),
	h.HOSPITAL_NAME 
ORDER BY
	h.HOSPITAL_NAME

-- 查询各医院每年上报病例数
SELECT 
h.HOSPITAL_NAME,
	DateName( YEAR, pat.DISCHARGE_DATE )AS months,
	COUNT ( DateName( YEAR, pat.DISCHARGE_DATE ) ) AS num 
FROM
	[dbo].[PAT_VISIT] AS pat 
	LEFT JOIN [dbo].[HOSPITAL_DICT] AS h ON pat.HOSPITAL_ID=h.HOSPITAL_ID
WHERE
	pat.SD_CODE = 'YXA_O' 
GROUP BY
	DateName( YEAR, pat.DISCHARGE_DATE ) ,h.HOSPITAL_NAME
ORDER BY
	h.HOSPITAL_NAME

-- 查询各医院每年上报 随访病例数
SELECT
	h.HOSPITAL_NAME,
	DateName( YEAR, pat.DISCHARGE_DATE ) AS fu_months,
	COUNT ( DateName( YEAR, pat.DISCHARGE_DATE ) ) AS fu_num 
FROM
	[dbo].[PAT_FOLLOW_UP] AS fu
	LEFT JOIN [dbo].[PAT_VISIT] AS pat ON fu.PATIENT_NO = pat.PATIENT_NO
	LEFT JOIN [dbo].[HOSPITAL_DICT] AS h ON pat.HOSPITAL_ID= h.HOSPITAL_ID 
WHERE
	pat.SD_CODE = 'YXA_O' 
GROUP BY
	DateName( YEAR, pat.DISCHARGE_DATE ),
	h.HOSPITAL_NAME 
ORDER BY
	h.HOSPITAL_NAME


-- 查数据库每年上报数量(根据出院日期)
SELECT
	DateName( YEAR, ADMISSION_DATE ) AS 'tmp_year',
	COUNT(PATIENT_NO) AS '患者数'
FROM
	[dbo].[PAT_VISIT] 
WHERE
    SD_CODE='YXA_O'
    AND	SD_GROUP = '1'
GROUP BY DateName( YEAR, ADMISSION_DATE )
ORDER BY tmp_year


-- 查询北京各个医院的病例
SELECT
	a.PATIENT_NO,
	a.NAME,
	a.DISCHARGE_DATE,
	b.HOSPITAL_ID,
	b.HOSPITAL_NAME 
FROM
	[dbo].[PAT_VISIT] AS a
	LEFT JOIN [dbo].[HOSPITAL_DICT] AS b ON a.HOSPITAL_ID= b.HOSPITAL_ID 
WHERE
	a.SD_CODE = 'YXA_O' 
	AND a.HOSPITAL_ID IN (
		'9a9d9e15796b3a8d',
		'12b2fd726e2f8a8d',
		'703034868f4eea8d',
		'e42df8e2237b8a8d',
		'e6b6133dd6518a8d',
		'8e91b6676d350a8d',
		'34d52b2d3c774a8d',
		'4456b5127cec8a8d',
		'37127accb1918a8d',
		'bab4d93b58698a8d',
		'df49613a52d18a8d',
		'a694149736118a8d',
		'28beb37d8c018a8d',
		'75fccd391df1ea8d',
		'53aefd7b76452a8d',
		'bdf2906bc6d18a8d',
		'd8823ba9be9b8a8d',
		'257a043c93028a8d',
		'8f1d6815d6618a8d',
		'3e162c637ca88a8d',
		'b307cc95cd9f8a8d',
		'5edc463fa828078d',
		'7fcb126c55918a8d',
		'3ab92297efa9aa8d',
		'c44d727c86454a8d',
		'e71f0fc9e4818a8d',
		'9c858253f9558a8d',
		'4cb0dbb153d18a8d',
		'82825591ac959a8d',
		'54bc034b46af0a8d',
		'8abc84d3a5601bcd',
		'77a8d6ce06310a8d',
		'a7d999487cb08a8d',
		'b6e0d079c5a98a8d',
		'ab77db2a6e42128d',
		'eaaa8731bbf18a8d',
		'9f22aa32f45eaa8d',
		'1a34d2a3ce30b28d' 
	) 
	AND a.DISCHARGE_DATE> '2016/01/01' 
	AND a.DISCHARGE_DATE< '2018/12/31'