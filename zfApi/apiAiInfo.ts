import zfhttp from '@/utils/zfhttp';

// 定义API返回的数据结构
export interface PushNewsLatest {
    sourceId: string;       // 渠道ID
    sourceName: string;     // 渠道名
    newsInfoId: string;     // news_infos表主键ID
    createDateTime: string; // 创建时间
    title: string;          // 新闻标题（关联自news_infos表）
    url: string;            // 新闻URL（关联自news_infos表）
}

/**
 * AI信息API类
 */
const apiAiInfo = class apiAiInfo extends zfhttp {
    /**
     * 获取最新推送新闻
     * 返回pushinfo_latest和关联的news_infos数据
     * 数据按创建时间排序，并有10分钟缓存
     */
    public queryLatestPushNews() {
        return this.post<PushNewsLatest[]>("/aiInfo/push/news", 
            {}, 
            {"content-Type": "application/json"}
        );
    }
}

export default new apiAiInfo;
