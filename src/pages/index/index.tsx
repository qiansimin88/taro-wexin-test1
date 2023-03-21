/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-03-17 23:03:10
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-03-20 02:33:36
 * @FilePath: /taro-wexin-test1/src/pages/index/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useCallback } from "react";
import { View, Text, Button, Image, Swiper, SwiperItem } from "@tarojs/components";
import { useEnv, useNavigationBar, useModal, useToast } from "taro-hooks";
import { useDidShow, useDidHide } from '@tarojs/taro'
import logo from "./hook.png";

import './index.less'

const Index = () => {
  useDidShow((options) => {
    console.log('did show', options)
  })
  
  useDidHide(() => {
    console.log('did hide')
  })

  // const env = useEnv();
  // const [_, { setTitle }] = useNavigationBar({ title: "Taro Hooks" });
  // const [show] = useModal({
  //   title: "Taro Hooks!",
  //   showCancel: false,
  //   confirmColor: "#8c2de9",
  //   confirmText: "支持一下",
  //   mask: true,
  // });
  // const [showToast] = useToast({ mask: true });

  // const handleModal = useCallback(() => {
  //   show({ content: "不如给一个star⭐️!" }).then(() => {
  //     showToast({ title: "点击了支持!" });
  //   });
  // }, [show, showToast]);

  return (
    <View className='wrapper'>
      111
      {/* <Image className='logo' src={logo} />
      <Text className='title'>为Taro而设计的Hooks Library</Text>
      <Text className='desc'>
        目前覆盖70%官方API. 抹平部分API在H5端短板. 提供近40+Hooks!
        并结合ahook适配Taro!
      </Text>
      <View className='list'>
        <Text className='label'>运行环境</Text>
        <Text className='note'>{env}</Text>
      </View>
      <Button className='button' onClick={() => setTitle("Taro Hooks Nice!")}>
        设置标题
      </Button>
      <Button className='button' onClick={handleModal}>
        使用Modal
      </Button> */}
    </View>
  );
};

export default Index;
