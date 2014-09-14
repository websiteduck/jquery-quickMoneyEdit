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
        init: function(element, valueAccessor, allBindingsAccessor) {
            var mask = valueAccessor();
            var observable = mask.value;
            if (ko.isObservable(observable)) {
                $(element).on('focusout change', function() {
                    observable($(element).val());
                });
            }
            $(element).quickMoneyEdit();
        },
        update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
            var mask = valueAccessor();
            var observable = mask.value;
            if (ko.isObservable(observable)) {
                var valuetoWrite = observable();
                $(element).val(valuetoWrite);
            }
        }
    }

```

Durandal Binding
---------------
```
    composition.addBindingHandler('quickMoneyEdit', {
        init: function(element, valueAccessor, allBindingsAccessor) {
            var mask = valueAccessor();
            var observable = mask.value;
            if (ko.isObservable(observable)) {
                $(element).on('focusout change', function() {
                    observable($(element).val());
                });
            }
            $(element).quickMoneyEdit();
        },
        update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
            var mask = valueAccessor();
            var observable = mask.value;
            if (ko.isObservable(observable)) {
                var valuetoWrite = observable();
                $(element).val(valuetoWrite);
            }
        }
    })

```
How to use the knockout binding

```
<input id="budget" class="form-control cpc-cost" type="text" data-bind="quickMoneyEdit:{value:yourObeservableHere}">

```
