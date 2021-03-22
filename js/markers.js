function markerEventAction(el) {
    let marker = el;

    marker.addEventListener('markerFound', function() 
    {
        let markerID = marker.id;
        console.log('markerFound', markerID);
        
        let div = window.parent.document.querySelector("#info");
        let button = window.parent.document.createElement("button");
        button.type = "button";
        button.innerHTML = "info";
        div.appendChild(button);
    });

    marker.addEventListener('markerLost', function() 
    {
        let markerID = marker.id;
        console.log('markerLost', markerID);

        let div = window.parent.document.querySelector("#info");
        div.innerHTML = "";
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
