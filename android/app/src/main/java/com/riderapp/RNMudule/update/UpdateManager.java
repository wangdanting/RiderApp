package com.riderapp.RNMudule.update;

import android.support.annotation.Nullable;
import android.util.Log;

import com.azhon.appupdate.config.UpdateConfiguration;
import com.azhon.appupdate.listener.OnDownloadListener;
import com.azhon.appupdate.manager.DownloadManager;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.riderapp.R;

import java.io.File;

import static android.content.ContentValues.TAG;


public class UpdateManager extends ReactContextBaseJavaModule {

    private static ReactContext context;
    public UpdateManager(ReactApplicationContext reactContext) {
        super(reactContext);
        context = reactContext;

    }

    public static ReactContext getContext() {
        return context;
    }
    public static void sendEvent(String eventName, @Nullable WritableMap params) {
        if (context == null) {
            Log.i(TAG, "reactContext==null");
        }else{
            context.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                    .emit(eventName, params);
        }
    }

    @Override
    public String getName() {
        return "UpdateManager";
    }

    @ReactMethod
    public void update(String url) {
        if (url.length() < 5) { return; } // 简单判断

        DownloadManager manager = DownloadManager.getInstance(getCurrentActivity());
        // 下载配置
        UpdateConfiguration configuration = new UpdateConfiguration();
        configuration.setOnDownloadListener(new OnDownloadListener() {
            @Override
            public void start() {

            }

            @Override
            public void downloading(int max, int progress) {
                WritableMap params = Arguments.createMap();
                params.putInt("total", max);
                params.putInt("current", progress);

                UpdateManager.sendEvent("DownloadApkProgress", params);
            }

            @Override
            public void done(File apk) {
                WritableMap params = Arguments.createMap();
                params.putInt("total", 100);
                params.putInt("current", 100);
                params.putBoolean("done", true);

                UpdateManager.sendEvent("DownloadApkProgress", params);
            }

            @Override
            public void cancel() {

            }

            @Override
            public void error(Exception e) {
                WritableMap params = Arguments.createMap();
                params.putInt("total", 0);
                params.putInt("current", 0);
                params.putBoolean("error", true);

                UpdateManager.sendEvent("DownloadApkProgress", params);
            }
        });

        manager.setApkName("update.apk")
                .setApkUrl(url)
                .setSmallIcon(R.mipmap.ic_launcher)
                //可设置，可不设置
                .setConfiguration(configuration)
                .download();



    }
}
