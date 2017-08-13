var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one' : { 
        title : 'Article One | Ezhilavan',
        content : `<p> This is my First Article`
    },
    'article-two' : {
        title : 'Article two | Ezhilavan',
        content : `<p> This is my Second Article`
    },
    'article-three' : {
        title : 'Article One | Ezhilavan',
        content : `<p> This is my First Article`
    }
};

function createTemplate(data){
    var title = data.title;
    var content = data.content;
    
    var template = `<html>
    <head>
     <title>
      ${title}
     </title>
     <meta name="viewport" content="width=device-width, initial-scale=1" />
     <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
     <div class="container">
      <div>
       <p> ${content}
      </div> 
     </div>
    </body>
 </html>`;
 
 return template;
      
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/:articleName',function(req,res){
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
