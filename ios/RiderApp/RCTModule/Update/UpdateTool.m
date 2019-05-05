//
//  UpdateTool.m
//  xls_business_app
//
//  Created by xusj on 2019/4/24.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "UpdateTool.h"


@implementation UpdateTool

+ (BOOL)isUpdateVersion:(NSString *)appId {
  NSString *currentVersion = [self currentProjectVersion];
  NSString *appStoreVersion =  [self appStoreProjectVersion:appId];
  if ([currentVersion compare:appStoreVersion] == NSOrderedAscending) {
    return YES;
  }
  return NO;
}

// 获取当前项目的版本号
+ (NSString*)currentProjectVersion {
  NSString *currentVersion =@"";
  NSDictionary *infoDic=[[NSBundle mainBundle] infoDictionary];
  currentVersion= infoDic[@"CFBundleShortVersionString"];//currentVersion为当前工程项目版本号
  return currentVersion;
}
// 获取AppStore 版本号
+ (NSString *)appStoreProjectVersion:(NSString *)appId  {
  NSString * appStoreVersion =@"";
  NSError *error;
  NSURL *url = [NSURL URLWithString:[NSString stringWithFormat:@"http://itunes.apple.com/cn/lookup?id=%@",appId]];
  NSData *response = [NSData dataWithContentsOfURL:url];
  
  if (response == nil) {
    return nil;
  }
  NSDictionary *appInfoDic = [NSJSONSerialization JSONObjectWithData:response options:NSJSONReadingMutableLeaves error:&error];
  if (error) {
    return nil;
  }
  NSArray*array = appInfoDic[@"results"];
  if (array.count<1) {
    return nil;
  }
  NSDictionary*dic = array[0];
  //商店版本号
  appStoreVersion = dic[@"version"];
  return appStoreVersion;
}


@end
