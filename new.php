
<html>
<link rel="stylesheet" id="base" href="/css/default.css" type="text/css" media="screen" />
<title>DarkNet</title>
<body>
<div id="header">
<div id="logo">
<h1><a href="uploads.php">Administração do Banco da Coreia do Norte</a></h1>
</div>
<div id="menu">
<ul>
<li class="active">
<a href="/"> Home |</a>
</li>
<li>
<a href="/admin/">Manage pictures |</a>
</li>
<li>
<a href="/admin/new.php">New picture |</a>
</li>
<li>
<a href="/admin/logout.php">Logout</a>
</li>
</ul>
</div>
</div>
<form action="index.php" method="POST" enctype="multipart/form-data">
Title: <input type="text" name="title" /><br/>
File: <input type="file" name="image"><br/>
<select name="category"><option value="1">contato</option><option value="2">emprestimos</option><option value="3">historia</option></select><br/>
<input type="submit" name="Add" value="Add">
</form>
</body>
</html>
