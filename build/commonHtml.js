const Header=(title)=>(`

<!DOCTYPE html>
<html lang="cn">
<head>
    <meta charset="UTF-8">
    <meta name="keywords" content="your tags"/>
    <meta name="description" content="150 words"/>
    <meta name="robots" content="index,follow"/>
    <meta name="author" content="yaojun"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no"/>
    <meta content="telephone=no" name="format-detection"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <meta http-equiv="Pragma" content="no-cache">
    
    <link href="/static/normalize.css" rel="stylesheet" />
    <title>${title}</title>
    <style>
        [v-cloak]{
            display: none;
        }
    </style>
</head>
<body>

<div v-cloak class="app-root-container" id="app-root">
`);


const Footer =()=>(
    `
</div>
</body>
</html>`
)

module.exports={
    Footer,Header
}