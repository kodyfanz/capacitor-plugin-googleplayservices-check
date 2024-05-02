package link.wlabs.capacitor.plugins.googleplayservices.check;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "GooglePlayServicesCheck")
public class GooglePlayServicesCheckPlugin extends Plugin {

    private GooglePlayServicesCheck googlePlayServicesCheck;

    @Override
    public void load() {
        googlePlayServicesCheck = new GooglePlayServicesCheck(getContext());
    }

    @PluginMethod
    public void checkAvailability(PluginCall call) {
        boolean isAvailable = googlePlayServicesCheck.isGooglePlayServicesAvailable();
        int version = googlePlayServicesCheck.getGooglePlayServicesVersion();
        JSObject ret = new JSObject();
        ret.put("available", isAvailable);
        if(isAvailable) {
            ret.put("version", version);
        }
        else if (!isAvailable) {
            int errorCode = googlePlayServicesCheck.getErrorCode();
            ret.put("error", googlePlayServicesCheck.getErrorString(errorCode));
            ret.put("errorCode", errorCode);
        }
        call.resolve(ret);
    }
}
