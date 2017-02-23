/*
 * @Author: Marte
 * @Date:   2017-01-07 09:37:57
 * @Last Modified by:   Marte
 * @Last Modified time: 2017-01-07 15:39:55
 */

var http = require("http"); // http ��·

var cheerio = require("cheerio"); //html ����

var fs = require("fs"); //��

// Ŀ����ַ���ٶ��������ȸ赥��
// http://music.baidu.com/songlist/tag/%E5%85%A8%E9%83%A8?orderType=1&offset=0&third_type=
var startHref = "http://music.baidu.com/songlist/tag/%E5%85%A8%E9%83%A8?orderType=1&offset=";

// �赥·��
var urls = [];
// �������������
var song = [];
/**
 * ��ȡ��վ��Ϣ
 * @param res.setEncoding('utf8');
 */
function getHtml(href, page) {
    var html = ""; //html
    var req = http.get(href + page + '&third_type=', function(res) {
        res.setEncoding('utf8');
        res.on('data', function(chunk) {
            html += chunk;
        });
        res.on('end', function() {
            // ����html
            var $ = cheerio.load(html);
            //��ÿҳ�赥��url��������
            var songListData = $('.main-body .songlist-list ul li').find('.text-title>a').toArray();
            for (var i = 0; i < songListData.length; i++) {
                var link = songListData[i].attribs.href;
                urls.push(songListData[i].attribs.href);
            };
            if (page == maxPage) {
                console.log("�赥·����ȡ��ɣ�" + urls.length);
                console.log("�赥������" + urls.length);
                if (urls.length > 0) {
                    getSongInfo(urls.shift());
                } else {
                    console.leg("����ɣ�")
                }
            }

        })
    })
};
/**
 *��ȡÿҳ�赥��ϸ��Ϣ
 *@param {int}�� songUrl
 */
function getSongInfo(songUrl) {
    var html = "";
    var req = http.get("http://music.baidu.com" + songUrl, function(res) {
        res.setEncoding('utf8');
        res.on('data', function(chunk) {
            html += chunk;
        });
        res.on("end", function() {
            var $ = cheerio.load(html);
            // �赥����
            var songTitle = $(".songlist-left .songlist-info-box").find("h1").html(),
                songlistData = $(".song-list .song-item");
            for (var i = 0; i < songlistData.length; i++) {
                var songData = {
                    /* ������   trimΪ��ȥ���ո�*/
                    songName: $(songlistData[i]).children('.song-title').find('a').text().trim(),
                    /* ���� */
                    songSinger: $(songlistData[i]).children('.singer').find('span').text().trim(),
                    /* ר���� */
                    songAlbum: $(songlistData[i]).children('.album-title').find('a').text().trim(),
                };
                song.push(songData);
                console.log(songData.songName)
            };
            if (urls.length > 0) {
                getSongInfo(urls.shift());
            } else {
                console.log("����ɣ�������Ŀ" + song.length);

                //song �����и����ļ��ϣ��������������֡�ר��
                //���������ֻ����Ὣ����ʾ��ҳ���ϣ�ֻ����ʾ����������
                // console.log(song)
            }
        });

    });
};

/**
 * ��ʼִ��
 * ǰ��ҳ�ĸ赥
 * ��������ҳ��ÿ�ζ�20����i+=20
 */
var maxPage = 40;

function start() {
    console.log("��ʼ��ȡ�赥��");
    for (var i = 0; i <= maxPage; i += 20) {
        getHtml(startHref, i);
    }
};
start()