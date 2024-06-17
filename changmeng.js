
// 注入全局方法（仅支持tvbox的js1以及c#版drpy的js0，暂不支持drpy官方py版的js0）
// 注入全局方法（仅支持tvbox的js1以及c#版drpy的js0，暂不支持drpy官方py版的js0）
globalThis.getHeaders = 函数（输入）{
    让 t = 新 Date().getTime().toString();
	让标题={
        ‘版本名称’：’1.0.6’，
        ‘版本代码’：’6’，
        ‘package_name’：‘com.app.nanguatv’，
        '签名'：md5（'c431ea542cee9679#uBFszdEM0oL0JRn@'+t）.toUpperCase（），
        ‘imei’：‘c431ea542cee9679’，
        ‘timeMillis’：t，
        ‘用户代理’：‘okhttp/4.6.0’
	};
	返回标题
}
	
var 规则 = {
	title:'畅梦影视',
	host:'http://ys.changmengyun.com',
	homeUrl:'/api.php/provide/vod_rank?app=ylys&sort_type=month&imei=c431ea542cee9679&id=2&page=1',
    url:'/api.php/provide/vod_list?app=ylys&id=fyclassfyfilter&page=fypage&imei=c431ea542cee9679',
    detailUrl:'/api.php/provide/vod_detail?app=ylys&imei=c431ea542cee9679&id=fyid',
    searchUrl:'/api.php/provide/search_result_more?app=ylys&video_name=**&pageSize=20&tid=0&imei=c431ea542cee9679&page=fypage',
	可搜索:2,
	快速搜索:0,
	可过滤：1，
	filter_url:'&area={{fl.area}}&year={{fl.year}}&type={{fl.class}}&total={{fl.total 或 "状态"}}&order={{fl.by 或 "新上线"}}',
    筛选：{
        “2022”，“v”：“2022”}，{“n”：“2021”，“v”：“2021”}，{“n”：“2020”，“v”：“2020”}，{“n”：“2019”，“v”：“2019”}，{“n”：“2018”，“v”：“2018”}，{“n”：“2017”，“v”：“2017”}，{“n”：“2016”，“v”：“2016”} ,{"n":"2015","v":"2015"},{"n":"10年代","v":"10年代"},{"n":"00年代","v":"00年代"},{"n":"90年代","v":"90年代"},{"n":"80年代","v":"80年代"}]},{"key":"by","name":"排序","value":[{"n":"
        2022 年”、“v”：“2022 年”},{“n”：“2021 年”、“v”：“2021 年”},{“n”：“2020 年”、“v”：“2020 年”},{“n”：“2019 年”、“v”：“2019 年”},{“n”：“2018 年”、“v”：“2018 年”},{“n”：“2017 年”、“v”：“2017 年”},{“n”：“2016 年”、“v”：“2016 年”} ,{"n":"2015","v":"2015"},{"n":"10年代","v":"10年代"},{"n":"00年代","v":"00年代"},{"n":"90年代","v":"90年代"},{"n":"80年代","v":"80年代"}]},{"key":"by","name":"排序","value":[{"n":"
        其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":"年份"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n" :"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"10年代","v":"10年代"},{"n":"00年代","v":"00年代"
        {"key":"year","name":"年份","value":[{"n":"全部","v":"年份"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"201 9","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"10年代","v":"10年代"},{"n":"00年代","v":"00年代"},{"
        新加坡"},{"n":"其他","v":"其他"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":"年份"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":" 2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"10年代","v":"10年代"},
    }，
	标题：{
		“用户代理”：“okhttp/4.6.0”
	}，
	超时：5000，
	class_name:'电视剧&电影&动漫&综艺&海外精选', // /api.php/provide/home_nav
	class_url:'2&1&4&3&46',
	限制：20，
	play_parse: true，播放解析
	懒惰：`js：
        尝试 {
            函数 getvideo (url) {
                让 jData = JSON.parse(request(url, {
                    标头：getHeaders（url）
                }））；
                如果 (jData.code == 1) {
                    返回 jData.data.url
                } 别的 {
                    返回 '​​http://43.154.104.152:1234/jhapi/cs.php?url=' + url.split('=')[1]
                }
            }
            如果（/，/.测试（输入））{
                让 mjurl = 输入.split('，')[1]
                让 videoUrl = getvideo(mjurl);
                输入 = {
                    jx: 0,
                    网址：视频网址，
                    解析：0，
                    标头：JSON.stringify（{
                        ‘用户代理’：‘Lavf/58.12.100’
                    }）
                }
            } 别的 {
                让 videoUrl = getvideo(输入);
                如果（/jhapi/.test（videoUrl））{
                    视频网址 = 获取视频（视频网址）；
                    输入 = {
                        jx: 0,
                        网址：视频网址，
                        解析：0，
                        标头：JSON.stringify（{
                            ‘用户代理’：‘Lavf/58.12.100’
                        }）
                    }
                } 别的 {
                    输入 = {
                        jx: 0,
                        网址：视频网址，
                        解析：0
                    }
                }
            }
        } 捕获（e）{
            日志（e.toString（））
        }
	`，
	推荐:`js:
        var d = [];
        让 html = 请求（输入，{
            标题：getHeaders（输入）
        });
        html = JSON.解析（html）；
        html.forEach（函数（它）{
            d.推（{
                标题：it.name，
                图片：it.img，
                描述：it.备注，
                网址：it.id
            }）
        });
        设置结果（d）；
    `，
	一级:`js:
		var d = [];
		让 html = 请求（输入，{
			标题：getHeaders（输入）
		});
		html = JSON.解析（html）；
		html.list.forEach（函数（它）{
			d.推（{
				标题：it.name，
				图片：it.img，
				描述：it.msg，
				网址：it.id
			}）
		});
		设置结果（d）；
	`，
	二级:`js:
        var d = [];
        视频点播 = {
            vod_id：输入.split（'id='）[1]
        };
        尝试 {
            让 html = 请求（输入，{
                标题：getHeaders（输入）
            });
            html = JSON.解析（html）；
            让节点=html.数据；
            视频点播 = {
                vod_name: 节点['名称']，
                vod_pic: 节点['img'],
                类型名称：节点['类型']，
                vod_year: 节点['year']，
                vod_remarks: '更新至: ' + node['msg'] + ' / 评分: ' + node['score'],
                vod_content: 节点['info'].strip()
            };
            让 episodes = node.player_info;
            让 playMap = {};
            如果 (play_url 类型 === '未定义') {
                var play_url = ''
            }
            剧集.forEach（函数（ep）{
                让 playurls = ep['video_info'];
                playurls.forEach（函数（playurl）{
                    让源 = ep['显示'];
                    如果 (!playMap.hasOwnProperty(source)) {
                        playMap[源] = []
                    }
                    playMap[source].append(playurl['name'].strip() + '$' + play_url + urlencode(playurl['url']))
                }）
            });
            让 playFrom = [];
            让 playList = [];
            对象.keys（playMap）
                .forEach(函数(键) {
                    播放来自.附加（键）；
                    playList.append(playMap[key].join('#'))
                });
            让 vod_play_from = playFrom.join('$$$');
            让 vod_play_url = playList.join('$$$');
            VOD['vod_play_from'] = vod_play_from;
            视频点播['vod_play_url'] = vod_play_url
        } 捕获（e）{
            log('获取二级详情页发生错误:' + e.message)
        }
	`，
	搜索:`js:
        var d = [];
        让 html = 请求（输入，{
            标题：getHeaders（输入）
        });
        html = JSON.解析（html）；
        html.data.forEach（函数（它）{
            d.推（{
                标题：it.video_name，
                图片：it.img，
                描述：it.qingxidu + '/' + it.category,
                网址：it.id，
                内容：it.blurb
            }）
        });
        设置结果（d）；
    `，
}