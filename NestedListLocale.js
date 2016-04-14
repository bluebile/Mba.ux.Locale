 Ext.define('Mba.ux.Locale.NestedListLocale', {
    override: 'Ext.NestedList',
    requires: [
        "Ext.NestedList"
    ],
    config: {
        backText: this.get('sencha.nestedlist.text.back'),
        loadingText: this.get('sencha.nestedlist.text.loading'),
        emptyText: this.get('sencha.nestedlist.text.empty')
    }
});