        function do_google_search(type) {
            site = document.getElementById('sercHead').value;

            url1 = 'https://www.google.com/search?q=';
            url2 = url1 + 'site:' + site;
            switch (type) {
            case 1:
                url = url2 + '+intitle:index.of';
                break;
            case 2:
                url = url2 + '+ext:xml+|+ext:conf+|+ext:cnf+|+ext:reg+|+ext:inf+|+ext:rdp+|+ext:cfg+|+ext:txt+|+ext:ora+|+ext:ini';
                break;
            case 3:
                url = url2 + '+ext:sql+|+ext:dbf+|+ext:mdb';
                break;
            case 4:
                url = url2 + '+ext:log';
                break;
            case 5:
                url = url2 + '+ext:bkf+|+ext:bkp+|+ext:bak+|+ext:old+|+ext:backup';
                break;
            case 6:
                url = url2 + '+inurl:login+|+inurl:admin+|+intitle:登陆+|+intitle:后台+|+intitle:管理+|+intitle:认证';
                break;
            case 7:
                url = url2 + '+intext:"sql+syntax+near"+|+intext:"syntax+error+has+occurred"+|+intext:"incorrect+syntax+near"+|+intext:"unexpected+end+of+SQL+command"+|+intext:"Warning:+mysql_connect()"+|+intext:"Warning:+mysql_query()"+|+intext:"Warning:+pg_connect()"+|+intext:"You have an error in your SQL syntax"';
                break;
            case 8:
                url = url2 + '+ext:doc+|+ext:docx+|+ext:odt+|+ext:pdf+|+ext:rtf+|+ext:sxw+|+ext:psw+|+ext:ppt+|+ext:pptx+|+ext:pps+|+ext:csv';
                break;
            case 9:
                url = url2 + '+ext:php+intitle:phpinfo+"published+by+the+PHP+Group"';
                break;
            case 11:
                url = url1 + 'site:github.com+|+site:gitlab.com'+'+"'+site+'"';
                break;
            }
            window.open(url, '', 'scrollbars=yes,menubar=no,height=600,width=800,resizable=yes,toolbar=yes,menubar=no,location=no,status=no');

        }
