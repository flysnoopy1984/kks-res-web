import { useState, useCookie } from "nuxt/app";
import { hash } from "ohash";

import type {userToken, userInfo, pageSectionData, eventCalendarList, pageCommData} from '@/utils/models'

// 定义本地存储的keys
const lsKeys = {
  userInfo: 'userInfo',
  userToken: 'userToken',
  userOpenId: 'userOpenId',
  eventCalendarList: 'eventCalendarList',
  sectionData: 'sectionData',
  posterDataByEvent: 'posterDataByEvent',
  pageCommData: 'pageCommData'
};

//userInfo
export const useUserInfo = () => {
  const ui = useCookie<userInfo>(lsKeys.userInfo);
  return useState(lsKeys.userInfo, () => ui);
} 

//apiToken
export const useApiToken = () => {
  const lsVal: userToken = {
    "token": useCookie(lsKeys.userToken).value,
    "openId": useCookie(lsKeys.userOpenId).value
  };

  return useState(lsKeys.userToken, () => lsVal);
}

export const usePageCommData = () => {
  return useState<pageCommData>(lsKeys.pageCommData, () => {
    const data: pageCommData = {
      pageSectionEvent: new Map(),
      pageEventPoster: new Map(),
      curCalendarEventIndex: -1
    }
    return data;
  })
}

export const useEventCalendarList = () => {
  return useState<eventCalendarList>(lsKeys.eventCalendarList, () => {
    const data: eventCalendarList = {
      currentEventIndex: -1,
      calendarEventList: []
    }
    return data;
  })
}

export const useSectionData = () => {
  return useState<pageSectionData[]>(lsKeys.sectionData, () => {
    return [];
  })
}

export const usePosterData = () => {
  const h = hash({});
  return useState(lsKeys.posterDataByEvent, () => {
    return h;
  })
}
