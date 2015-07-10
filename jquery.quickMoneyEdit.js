/**
 * Quick Money Edit - jQuery Input Box Currency Formatting
 * 
 * @copyright  Copyright 2013-2014, Website Duck LLC (http://www.websiteduck.com)
 * @link       https://github.com/websiteduck/jquery-quickMoneyEdit
 * @license    MIT License (http://www.opensource.org/licenses/mit-license.php)
 */
(function($) {
	
    $.fn.quickMoneyEdit = function(options) {
 
		if (typeof options === 'undefined' || typeof options === 'object') {
 
			var origGetHook;
			var origSetHook;

			if ($.valHooks.text) {
				if ($.valHooks.text.get) origGetHook = $.valHooks.text.get;
				if ($.valHooks.text.set) origSetHook = $.valHooks.text.set;
			}
			else $.valHooks.text = {};

			$.valHooks.text.get = function(el) {
				if (!$(el).attr('data-quickMoneyEdit')) {
					if (origGetHook) return origGetHook(el);
					else return undefined;
				}
				var ret = $.fn.quickMoneyEdit.unformatCurrency(el.value);
				if (ret === '') return 0;
				else return ret;
			};

			$.valHooks.text.set = function(el, value) {
				if (!$(el).attr('data-quickMoneyEdit')) {
					if (origGetHook) return origSetHook(el);
					else return undefined;
				}
				el.value = $.fn.quickMoneyEdit.formatCurrency(value);
			};

			return this.filter('input').each(function() {
				$(this).attr('data-quickMoneyEdit', '1');
				this.value = $.fn.quickMoneyEdit.formatCurrency(this.value);
				$(this).focus(function() {
					this.value = $.fn.quickMoneyEdit.unformatCurrency(this.value);
					if (this.value == '0.00') this.value = '';
				}).blur(function() {
					this.value = $.fn.quickMoneyEdit.formatCurrency(this.value);
				});
			});
			
		}
		else if (typeof options === 'string' && options === 'formatted') {
			return $.fn.quickMoneyEdit.formatCurrency(this.get(0).value);
		}
 
    };
 
 	$.fn.quickMoneyEdit.unformatCurrency = function(result) {
		return result.replace(/[^-0-9\.]/g, '');
	};

	$.fn.quickMoneyEdit.formatCurrency = function(result) {
		result = result.replace(/[^-0-9\.]/g, '');
		result = parseFloat(result);
		if (isNaN(result)) return '$0.00';
		var sign = result < 0 ? '-' : '';
		result = Math.abs(result);
		var integer = parseInt(result) + '';
		var firstComma = integer.length > 3 ? integer.length % 3 : 0;
		result = result.toFixed(2);
		return sign + '$' + (firstComma ? integer.substr(0, firstComma) + ',' : '') + integer.substr(firstComma).replace(/(\d{3})(?=\d)/g, '$1' + ',') + '.' + result.slice(-2);	
	};
 
}(jQuery));
