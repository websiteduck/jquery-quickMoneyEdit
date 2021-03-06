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

Knockout Binding
---------------
```
ko.bindingHandlers.quickMoneyEdit = {
        init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
            var value = valueAccessor();
            var valueUnwrapped = ko.unwrap(value);
            var valueUpdate = allBindings.get('valueUpdate');
            var event = '';

            switch(valueUpdate) {
                case 'input': event = 'change'; break;
                case 'keypress': event = 'keypress'; break;
                case 'keyup': event = 'keyup'; break;
                case 'keydown': event = 'keydown'; break;
                case 'afterkeydown': event = 'keypress'; break;
                default: event = 'change'; break;
            }

            $(element).on(event, function() { 
                value($(this).val());
            });

            $(element).quickMoneyEdit();
        },
        update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
            var value = valueAccessor();
            var valueUnwrapped = ko.unwrap(value);
            if ($(element).is(':focus')) {
                if (valueUnwrapped === 0) $(element).val('');
                else $(element).val(valueUnwrapped);
            }
            else {
                $(element).val($.fn.quickMoneyEdit.formatCurrency(valueUnwrapped));
            }
        }
    }
```
Usage:

```
<input type="text" data-bind="quickMoneyEdit: yourObservableHere">
```
