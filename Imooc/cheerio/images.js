//����ģ��
var fs = require('fs');
var request = require("request");
var cheerio = require("cheerio");
var mkdirp = require('mkdirp');
 
//Ŀ����ַ
var url = 'http://me2-sex.lofter.com/tag/��Ů��Ӱ?page=';
 
//���ش洢Ŀ¼
var dir = './images';
 
//����Ŀ¼
mkdirp(dir, function(err) {
    if(err){
        console.log(err);
    }
});
 
//��������
request(url, function(error, response, body) {
    if(!error && response.statusCode == 200) {
        var $ = cheerio.load(body);
        $('.img img').each(function() {
            var src = $(this).attr('src');
            console.log('��������' + src);
            download(src, dir, Math.floor(Math.random()*100000) + src.substr(-4,4));
            console.log('�������');
        });
    }
});
 
//���ط���
var download = function(url, dir, filename){
    request.head(url, function(err, res, body){
        request(url).pipe(fs.createWriteStream(dir + "/" + filename));
    });
};