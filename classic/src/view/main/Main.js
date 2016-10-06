
Ext.define('HDNJ.view.main.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'HDNJ.view.main.MainController',
        'HDNJ.view.main.MainModel',
        'HDNJ.view.main.List'
    ],

    layout: 'border',
    controller: 'main',
    viewModel: 'main',

    items: [{
        region: 'north',
        hidden: true,
        title: 'TreeList',
        iconCls: 'x-fa fa-gears',

        items: [{
            xtype: 'button',
            text: 'Options',
            menu: [{
                text: 'Expander Only',
                checked: true,
                handler: 'onToggleConfig',
                config: 'expanderOnly'
            }, {
                text: 'Single Expand',
                checked: false,
                handler: 'onToggleConfig',
                config: 'singleExpand'
            }]
        },{
            xtype: 'button',
            text: 'Nav',
            enableToggle: true,
            reference: 'navBtn',
            toggleHandler: 'onToggleNav'
        },{
            xtype: 'button',
            text: 'Micro',
            enableToggle: true,
            toggleHandler: 'onToggleMicro'
        }]        

    }, {
        region: 'west',
        width: 250,
        split: true,
        reference: 'treelistContainer',
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        border: false,
        scrollable: 'y',
        items: [{
            xtype: 'treelist',
            reference: 'treelist',
            bind: '{navItems}'
        }]
    }, {
        region: 'center',
        bodyPadding: 10,
        bind: {
            html: '{selectionText}'
        }
    }]

});
