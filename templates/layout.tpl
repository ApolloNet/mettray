<!doctype html>
<html lang="fr" dir="ltr">
<head>
  <title>{{title}} - Mettray, Didier Morin</title>
  {{#description}}
  <meta name="description" content="{{{.}}}">
  {{/description}}
  <meta charset="UTF-8">
  <meta name="Robots" content="index,follow,all">
  <meta name="verify-v1" content="3xQ1oLDoT6ISF9unFMjV8y9tTJvjRo5seuUOY6hhm0M=">
  <meta name="viewport" content="initial-scale=1.0, width=device-width">
  <link href="https://fonts.googleapis.com/css?family=EB+Garamond:400,400i,600,600i" rel="stylesheet">
  {{#styles}}
  <link rel="stylesheet" href="{{{.}}}">
  {{/styles}}
  <link rel="shortcut icon" href="/favicon.ico" type="image/ico">
</head>
<body>
  <header>
    <div class="sitename"><a href="/">METTRAY</a></div>
    <nav class="main-nav">
      <ul>
        <li><a href="/revue">La revue</a></li>
        <li><a href="/livres">Les livres</a></li>
        <li><a href="/pages/contact">Contact</a></li>
      </ul>
    </nav>
  </header>
  <main class="wrapper">
    {{{content}}}
  </main>
  <footer>
    <nav class="footer-nav">
      <ul>
        <li><a href="/">Accueil</a></li>
        <li><a href="/revue">La revue</a></li>
        <li><a href="/livres">Les livres</a></li>
        <li><a href="/pages/contact">Contact</a></li>
        <li>© Didier Morin</li>
      </ul>
    </nav>
  </footer>
  {{#scripts}}
  <script defer src="{{{.}}}"></script>
  {{/scripts}}
</body>
</html>