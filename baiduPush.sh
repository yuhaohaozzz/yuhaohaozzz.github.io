#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 百度链接推送
curl -H 'Content-Type:text/plain' --data-binary @urls.txt "http://data.zz.baidu.com/urls?site=https://yuhaohaozzz.github.io&token=E1DGYsPYcM8svN1I"

for i in `cat urls.txt`
do
    if [ $i == "https://yuhaohaozzz.github.io" ];then
        continue
    fi
    newi=`echo "$i" | tr -d '\n\r'`
    curl -X POST "https://ssl.bing.com/webmaster/api.svc/json/SubmitUrl?apikey=5442880bca524d11b94911d5e9b89a11" \
        -H "Content-Type: application/json" -H "charset:utf-8" \
        -d '{
                "siteUrl":"https://yuhaohaozzz.github.io",
                "url": "'"${newi}"'"
            }'
done

rm -rf urls.txt # 删除文件
