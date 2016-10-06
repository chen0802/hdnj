/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('HDNJ.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    formulas: {
        selectionText: function(get) {
            var selection = get('treelist.selection'),
                path;
            if (selection) {
                path = selection.getPath('text');
                path = path.replace(/^\/Root/, '');
                return 'Selected: ' + path;
            } else {
                return 'No node selected';
            }
        }
    },

    stores: {
        navItems: {
            type: 'tree',
            root: {
                expanded: true,
                children: [{
                    text: '灵枢九卷',
                    iconCls: 'fa fa-folder-o',
                    children: [{
                        text: '第一卷',
                        iconCls: 'x-fa fa-inbox',
                        children: [{
                            text: '经脉第一',
                            iconCls: 'fa fa-folder-o',
                            leaf: true
                        },{
                            text: '始终第二',
                            iconCls: 'fa fa-folder-o',
                            leaf: true
                        }]
                    },{
                        text: '第一卷',
                        iconCls: 'x-fa fa-inbox',
                        leaf: true
                    },{
                        text: '第二卷',
                        iconCls: 'x-fa fa-inbox',
                        leaf: true
                    },{
                        text: '第三卷',
                        iconCls: 'x-fa fa-inbox',
                        leaf: true
                    },{
                        text: '第四卷',
                        iconCls: 'x-fa fa-inbox',
                        leaf: true
                    },{
                        text: '第五卷',
                        iconCls: 'x-fa fa-inbox',
                        leaf: true
                    },{
                        text: '第六卷',
                        iconCls: 'x-fa fa-inbox',
                        leaf: true
                    },{
                        text: '第七卷',
                        iconCls: 'x-fa fa-inbox',
                        leaf: true
                    },{
                        text: '第八卷',
                        iconCls: 'x-fa fa-inbox',
                        leaf: true
                    },{
                        text: '第九卷',
                        iconCls: 'x-fa fa-inbox',
                        leaf: true
                    }]
                }]
            }
        }
    }
});
