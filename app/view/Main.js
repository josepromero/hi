Ext.define('TP.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    id: 'my-tabs',
    config: {
    	activeItem: 2,
    	tabBar: {
    		ui: 'light',
            layout: {
                pack : 'center',
                align: 'center'
            },
            docked: 'bottom'
        },
        items: [
            {
                title: 'joe',
                  html : 'Tab Panel 1',
                
                iconCls: 'home',
                
                
            },
            {
                title: 'joe info',
                html : 'Tab Panel 2',
                iconCls: 'info',
                handler: function(){
                        	var view = Ext.getCmp('nav-view');
                            view.push({
                                title: 'New view\'s title',
                                              items: [
	        {
	            xtype: 'carousel',
	            id: 'my-carousel',
	            items: [
		            {
		                html: 'Content 1',
		                style: 'background:#aaa',
		                items:[
		                	{
		                		xtype: 'titlebar',
		                		title: 'Titlebar'
		                	}
		                ]
		            },
		            {
		                html: 'Content 2',
		                style: 'background:#ccc'
		            },
		            {
		                html: 'Content 3',
		                style: 'background:#eee'
		            }
	            ]
	        }, 
	        {
	            xtype: 'carousel',
	            ui: 'light',
	            direction: 'vertical',
	            items: [
		            {
		                html: 'Content 1',
		                style: 'background:#666'
		            },
		            {
		                html: 'Content 2',
		                style: 'background:#333'
		            },
		            {
		                html: 'Content 3',
		                style: 'background:#444'
		            }
	            ]
	        }
        ]
                                     });
                }
                
                                
            },                        
	    {  				

                title: 'Projects and links',
                html : 'Tab Panel 3',
                iconCls: 'favorites'
            }
        ]
    }
});
