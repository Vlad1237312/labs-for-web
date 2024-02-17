<!DOCTYPE html>
<html>
<head>
    <title>Пример страницы</title>
</head>
<body>

<h1>
<?php $newTitle = "Привет, мир!";
echo $newTitle;
$var1 = "111";
$var2 = "333";
$var3 = "777";?>
</h1>

<h1> <?php echo "Переменная 1: " . $var1 . " ";?>
<p> <?php echo "Переменная 2: " . $var2 . " ";?> </p>
<p> <?php echo "Переменная 3: " . $var3 . " ";?> </p>
</h1> 
    <script>
            window.addEventListener('DOMContentLoaded', function() {
            const h2 = document.createElement('h2');
            h2.textContent = 'Привет, JavaScript!';
            document.body.appendChild(h2);
        });
    </script>
</body>
</html>