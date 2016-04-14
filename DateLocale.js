 Ext.define('Mba.ux.Locale.DateLocale', {
    override: 'Ext.picker.Date',
    requires: [
        "Ext.DateExtras",
        "Ext.picker.Picker",
        "Ext.picker.Date"
        ],
    config: {
        doneButton: this.get('sencha.picker.text.done'),
        cancelButton: this.get('sencha.picker.text.cancel'),
        dayText: this.get('sencha.date.text.day'),
        monthText: this.get('sencha.date.text.month'),
        yearText: this.get('sencha.date.text.year'),
        slotOrder: this.get('sencha.date.slotorder')
    }
});