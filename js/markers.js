function markerEventAction(el) {
    var marker = el;

    marker.addEventListener('markerFound', function() 
    {
        var markerId = marker.id;
        console.log('markerFound', markerId);
    });

    marker.addEventListener('markerLost', function() 
    {
        var markerId = marker.id;
        console.log('markerLost', markerId);
    });
}

AFRAME.registerComponent('markerhandler_zero', 
{
    init: function () 
    {
        markerEventAction(this.el);
    }
});

AFRAME.registerComponent('markerhandler_six', 
{
    init: function () 
    {
        markerEventAction(this.el);
    }
});

AFRAME.registerComponent('markerhandler_nine', 
{
    init: function () 
    {
        markerEventAction(this.el);
    }
});

AFRAME.registerComponent('markerhandler_twelve', 
{
    init: function () 
    {
        markerEventAction(this.el);
    }
});

AFRAME.registerComponent('markerhandler_fifteen', 
{
    init: function () 
    {
        markerEventAction(this.el);
    }
});

AFRAME.registerComponent('markerhandler_seventeen', 
{
    init: function () 
    {
        markerEventAction(this.el);
    }
});

AFRAME.registerComponent('markerhandler_eighteen', 
{
    init: function () 
    {
        markerEventAction(this.el);
    }
});

AFRAME.registerComponent('markerhandler_twenty', 
{
    init: function () 
    {
        markerEventAction(this.el);
    }
});

AFRAME.registerComponent('markerhandler_twentythree', 
{
    init: function () 
    {
        markerEventAction(this.el);
    }
});

AFRAME.registerComponent('markerhandler_twentyfour', 
{
    init: function () 
    {
        markerEventAction(this.el);
    }
});

AFRAME.registerComponent('markerhandler_twentyseven', 
{
    init: function () 
    {
        markerEventAction(this.el);
    }
});

AFRAME.registerComponent('markerhandler_twentynine', 
{
    init: function () 
    {
        markerEventAction(this.el);
    }
});

AFRAME.registerComponent('markerhandler_thirty', 
{
    init: function () 
    {
        markerEventAction(this.el);
    }
});
