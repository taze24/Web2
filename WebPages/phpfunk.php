<!DOCTYPE html>
<title>Naslov na Php.</title>
<head>
<?php declare(strict_types=1); 
function sum(int $x, int $y) {
  $z = $x + $y;
  return $z;
}

echo "5 + 10 = " . sum(5, 10) . "<br>";
echo "7 + 13 = " . sum(7, 13) . "<br>";
echo "2 + 4 = " . sum(2, 4);
?>
</head>


<body>

<?php
function familyName($fname, $year) {
  echo "$fname . Roden vo $year <br>";
}

familyName("Petko", "1975");
familyName("Stanko", "1978");
familyName("Bojan", "1983");
?>

</body>

