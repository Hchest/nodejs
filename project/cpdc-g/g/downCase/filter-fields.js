
// 默认除了身份证号和患者联系方式，其他都导出
module.exports = `AND NOT dist.ITEM_CODE IN ('YXA_O_001','YXA_O_004')`

// 过滤字段
// module.exports = `AND NOT b.ITEM_CODE IN ('YXA_O_001','YXA_O_004') AND b.ITEM_CODE IN (${fields_item_yang})`

// 百济要的字段
const fields_item_baiji = `'YXA_O_003',
        'YXA_O_036',
        -- 手术日期
        'YXA_O_161'`
// 楼文辉要的字段
const fields_item_lou = `'YXA_O_036',
        'YXA_O_047',
        'YXA_O_050',
        'YXA_O_062',
        'YXA_O_063',
        'YXA_O_064',
        'YXA_O_065',
        'YXA_O_074',
        'YXA_O_908',
        'YXA_O_054',
        'YXA_O_055',
        'YXA_O_096',
        'YXA_O_097',
        'YXA_O_099',
        'YXA_O_100',
        'YXA_O_092',
        'YXA_O_093',
        'YXA_O_909',
        'YXA_O_020',
        'YXA_O_021',
        'YXA_O_024',
        'YXA_O_032',
        'YXA_O_033',
        'YXA_O_101',
        'YXA_O_102',
        'YXA_O_103',
        'YXA_O_104',
        'YXA_O_105',
        'YXA_O_106',
        'YXA_O_107',
        'YXA_O_108',
        'YXA_O_109',
        'YXA_O_151',
        'YXA_O_211',
        'YXA_O_222',
        'YXA_O_223',
        'YXA_O_117',
        'YXA_O_918'`
// 杨院要的字段
const fields_item_yang = `'YXA_O_021',
        'YXA_O_047',
        'YXA_O_048',
        'YXA_O_049',
        'YXA_O_056',
        'YXA_O_096',
        'YXA_O_101',
        'YXA_O_102',
        'YXA_O_103',
        'YXA_O_111',
        'YXA_O_112',
        'YXA_O_113',
        'YXA_O_151',
        'YXA_O_152',
        'YXA_O_153',
        'YXA_O_154',
        'YXA_O_155',
        'YXA_O_156',
        'YXA_O_157',
        'YXA_O_158',
        'YXA_O_159',
        'YXA_O_160',
        'YXA_O_162',
        'YXA_O_163',
        'YXA_O_164',
        'YXA_O_167',
        'YXA_O_168',
        'YXA_O_169',
        'YXA_O_170',
        'YXA_O_171',
        'YXA_O_172',
        'YXA_O_173',
        'YXA_O_174',
        -- 缺少引流管
        'YXA_O_180',
        'YXA_O_181',
        'YXA_O_182',
        'YXA_O_183',
        'YXA_O_184',
        'YXA_O_185',
        'YXA_O_186',
        'YXA_O_187',
        'YXA_O_188',
        'YXA_O_189',
        'YXA_O_190',
        'YXA_O_191',
        'YXA_O_192',
        'YXA_O_193',
        'YXA_O_194',
        'YXA_O_195',
        'YXA_O_196',
        'YXA_O_197',
        'YXA_O_198',
        'YXA_O_199',
        'YXA_O_207',
        'YXA_O_208',
        'YXA_O_209',
        'YXA_O_216',
        'YXA_O_217',
        'YXA_O_218',
        'YXA_O_219',
        'YXA_O_225',
        'YXA_O_226',
        'YXA_O_227',
        'YXA_O_228',
        'YXA_O_229',
        'YXA_O_230',
        'YXA_O_243',
        'YXA_O_244',
        'YXA_O_245',
        'YXA_O_246',
        'YXA_O_306',
        'YXA_O_315',
        'YXA_O_307',
        'YXA_O_308'`