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
            	return selection.getData().content;

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
                            content: '雷公问于黄帝曰，禁脉之言，凡刺之理，经脉为始，营其所行，制其度量，内次五脏，外别六腑，愿尽闻其道。黄帝曰，人始生，先成精，精成而脑髓生，骨为干，脉为营，筋为刚，肉为墙，皮肤坚而毛发长。<br>谷入于胃，脉道以通，血气乃行。雷公曰：愿卒闻经脉之始生。黄帝曰：经脉者，所以能决死生，处百病，调虚实，不可不通。<br> <br>' +
                            '肺手太阴之脉，起于中焦下络大肠，环循胃口，上膈属肺，从肺系横出腋下，下循臑里，行少阴心主之前，下肘中，循臂内上骨下廉入寸口，上鱼，循鱼际，出大指之端。其支者，从腕后直出次之内廉，出其端。',

                            leaf: true
                        },{
                            text: '始终第二',
                            content: 'huang ding wen yu2',
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
