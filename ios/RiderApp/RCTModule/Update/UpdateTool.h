//
//  UpdateTool.h
//  xls_business_app
//
//  Created by xusj on 2019/4/24.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface UpdateTool : NSObject

// 根据 app store 判断是否有更新版本
+ (BOOL)isUpdateVersion:(NSString *)appId;

@end

NS_ASSUME_NONNULL_END
