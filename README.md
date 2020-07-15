# A simple script that displays the artist and track name on your html page.

Example of use:
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
		<script language="JavaScript">updateCP(); window.setInterval(updateCP, 5000);</script>
		<a href="my@email.com"><font color="lightgray" size="-1">Contact me!</font></a>
	</body>
</html>
```
