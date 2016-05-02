Ext.define('Mba.ux.Locale.Manager', {
	extend: 'Mba.ux.Locale.LocaleManager',
	alternateClassName: 'MbaLocale',
	singleton: true,
	requires: [
	    "Ext.DateExtras",
	    "Ext.picker.Picker",
	    "Ext.picker.Date",
	    "Ext.NestedList",
	    "Ext.util.Format",
	    "Ext.MessageBox"
	],
	
	
	
	constructor: function(config) {
		this.callParent(arguments);
		
		//if (this.getDeviceLanguage().indexOf("en") != 0) {
			this.configurarLinguagemComponentes();
		//}
		
	},
	
	configurarLinguagemComponentes: function() {
	Ext.Date.dayNames = [
             this.get('sencha.date.daynames.domingo'),
             this.get('sencha.date.daynames.segunda'),
             this.get('sencha.date.daynames.terca'),
             this.get('sencha.date.daynames.quarta'),
             this.get('sencha.date.daynames.quinta'),
             this.get('sencha.date.daynames.sexta'),
             this.get('sencha.date.daynames.sabado')
         ];

	Ext.Date.monthNames = [
             this.get('sencha.date.monthnames.janeiro'),
             this.get('sencha.date.monthnames.fevereiro'),
             this.get('sencha.date.monthnames.marco'),
             this.get('sencha.date.monthnames.abril'),
             this.get('sencha.date.monthnames.maio'),
             this.get('sencha.date.monthnames.junho'),
             this.get('sencha.date.monthnames.julho'),
             this.get('sencha.date.monthnames.agosto'),
             this.get('sencha.date.monthnames.setembro'),
             this.get('sencha.date.monthnames.outubro'),
             this.get('sencha.date.monthnames.novembro'),
             this.get('sencha.date.monthnames.dezembro')
         ];

	Ext.Date.monthNumbers = {
             'Jan': 0,
             'Fev': 1,
             'Mar': 2,
             'Abr': 3,
             'Mai': 4,
             'Jun': 5,
             'Jul': 6,
             'Ago': 7,
             'Set': 8,
             'Out': 9,
             'Nov': 10,
             'Dez': 11
         };

	Ext.Date.getShortMonthName = function(month) {
             return Date.monthNames[month].substring(0, 3);
         };

         Ext.Date.getShortDayName = function(day) {
             return Date.dayNames[day].substring(0, 3);
         };

         Ext.Date.getMonthNumber = function(name) {
           return Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
         };
 

         if(Ext.util.Format){
             Ext.util.Format.defaultDateFormat = this.get('sencha.date.format');
         }

         if(Ext.MessageBox){
             Ext.MessageBox.OK.text = this.get('sencha.messagebox.text.ok');
             Ext.MessageBox.CANCEL.text = this.get('sencha.messagebox.text.cancel');
             Ext.MessageBox.YES.text = this.get('sencha.messagebox.text.yes');
             Ext.MessageBox.NO.text = this.get('sencha.messagebox.text.no');
             Ext.MessageBox.OKCANCEL = [
                 {text: this.get('sencha.messagebox.text.cancel'), itemId: 'cancel'},
                 {text: this.get('sencha.messagebox.text.ok'),     itemId: 'ok',  ui : 'action'}
             ];
             Ext.MessageBox.YESNOCANCEL = [
                 {text: this.get('sencha.messagebox.text.cancel'), itemId: 'cancel'},
                 {text: this.get('sencha.messagebox.text.no'),     itemId: 'no'},
                 {text: this.get('sencha.messagebox.text.yes'),    itemId: 'yes', ui: 'action'}
             ];
             Ext.MessageBox.YESNO = [
                 {text: this.get('sencha.messagebox.text.no'),  itemId: 'no'},
                 {text: this.get('sencha.messagebox.text.yes'), itemId: 'yes', ui: 'action'}
             ];
         }
	}
	
});
