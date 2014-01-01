Quick Money Edit - jQuery Plugin
================================

Input Box Currency Formatting

[Live Demo](http://websiteduck.github.io/jquery-quickMoneyEdit/)

Example Usage
-------------
```
<input type="text" id="price" name="price" value="1234.56">

$('#price').quickMoneyEdit();
```

Getting/Setting
---------------
```
//Set
$('#price').val('1234.56');
$('#price').val('$1,234.56'); //also works

//Get
$('#price').val(); // '1234.56'
$('#price').quickMoneyEdit('formatted'); // '$1,234.56'
```
