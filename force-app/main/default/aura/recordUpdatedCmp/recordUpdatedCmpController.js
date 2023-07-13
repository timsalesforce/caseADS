({
	handleRecordUpdated: function(component, event, helper) {
        var eventParams = event.getParams();
        
        if(eventParams.changeType === "LOADED" || eventParams.changeType === "CHANGED") {
            var msg = 'Change Type: '+eventParams.changeType+ ' Case in status ' + component.get("v.simpleRecord.Status") + ', IsClosed: ' + component.get("v.simpleRecord.IsClosed")
            console.log(msg);
            component.set('v.msg', msg);
        } 
        else if(eventParams.changeType === "ERROR") {
            alert('event: '+event);
            console.log('event: '+event);
        }
    }
})