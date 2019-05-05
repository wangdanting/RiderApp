//
//  UpdateManager.m
//  Push
//
//  Created by 徐盛江 on 2018/10/15.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "UpdateManager.h"
#import <React/RCTBridge.h>
#import "UpdateTool.h"


@implementation UpdateManager

RCT_EXPORT_MODULE();

- (dispatch_queue_t)methodQueue {
  return dispatch_get_main_queue();
}

RCT_EXPORT_METHOD(update:(NSString *)appleid ) {
  if ([appleid isEqualToString:@""] || appleid.length < 8) {
    return;
  }
  NSURL *url = [NSURL URLWithString:[NSString stringWithFormat:@"https://itunes.apple.com/cn/app/id%@?mt=8", appleid]];
  [[UIApplication sharedApplication] openURL:url];
}


RCT_EXPORT_METHOD(appStoreNewVersion:(NSString *)appid callback:(RCTResponseSenderBlock)callback) {
  dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
    // 在这里执行长时间的操作
    BOOL result = [UpdateTool isUpdateVersion:appid];
    callback(@[@(result)]);
  });
}

@end
