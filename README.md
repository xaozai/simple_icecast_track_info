# A simple script that displays track information on your html page.

A simple example of using this script:
```
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta name="description" content="My Radio">
        <script src="js/currently_playing.js"></script>
        <title>My Radio</title>
    </head>
    <body bgcolor="black" style="color: lightgray; text-align: center;">
        <h1>My Radio</h1>
        <!-- <img src="images/logo.jpg"><br> //-->
        <audio src="http://192.168.1.2:8000/mount_point" controls></audio>
        <div id="cp"></div>
        <script language="JavaScript">updateCP(); window.setInterval(updateCP, 5000);//update interval: 5s</script>
        <a href="my@email.com"><font color="lightgray" size="-1">Contact me!</font></a>
    </body>
</html>
```

Note: if you use ezstream, it must be compiled with the libtagc0 library in order to correctly display data from ID3v2 mp3 tags.
