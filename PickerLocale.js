 Ext.define('Mba.ux.Locale.PickerLocale', {
    override: 'Ext.picker.Picker',
    requires: [
        "Ext.DateExtras",
        "Ext.picker.Picker",
        "Ext.picker.Date"
     ],
    config: {
        doneButton: this.get('sencha.picker.text.done'),
        cancelButton: this.get('sencha.picker.text.cancel')
    }
});
         
     	
         
     	