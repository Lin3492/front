#HTTP
HTTP协议【超文本传输协议】
##请求报文
```
行        GET　/s?ie=utf-8 HTTP/1.1
头        Host:atguigu.com
         Cookie:name=guigu
         Content-type:application/x-www-form-urlencoded
         User-Agent:chrome 83
空行
体
```
##响应报文
```
行           HTTP/1.2 200 OK
头           Content-Type:text/html;charset=utf-8
             COntent-length:2048
             Content-encoding:gzip
空行
体           <html>
                <head>
                </head>
                <body></body>
            </html>
```