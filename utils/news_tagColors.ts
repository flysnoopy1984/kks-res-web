interface SourceInfo {
  id: string
  name: string
  color: string
}

// 源站点配置
const sourceList: SourceInfo[] = [
  { id: 'v2ex', name: 'V2EX', color: '#1890ff' },
  { id: 'zhihu', name: '知乎', color: '#0066ff' },
  { id: 'weibo', name: '微博', color: '#ff3141' },
  { id: 'zaobao', name: '联合早报', color: '#f5222d' },
  { id: 'coolapk', name: '酷安', color: '#11c250' },
  { id: 'wallstreetcn', name: '华尔街见闻', color: '#2f54eb' },
  { id: '36kr', name: '36氪', color: '#13c2c2' },
  { id: 'douyin', name: '抖音', color: '#531dab' },
  { id: 'hupu', name: '虎扑', color: '#fa8c16' },
  { id: 'tieba', name: '百度贴吧', color: '#2196f3' },
  { id: 'toutiao', name: '今日头条', color: '#d4380d' },
  { id: 'ithome', name: 'IT之家', color: '#0960bd' },
  { id: 'thepaper', name: '澎湃新闻', color: '#cf1322' },
  { id: 'sputniknewscn', name: '卫星通讯社', color: '#08979c' },
  { id: 'cankaoxiaoxi', name: '参考消息', color: '#096dd9' },
  { id: 'pcbeta', name: '远景论坛', color: '#389e0d' },
  { id: 'cls', name: '财联社', color: '#d48806' },
  { id: 'xueqiu', name: '雪球', color: '#1d39c4' },
  { id: 'gelonghui', name: '格隆汇', color: '#d46b08' },
  { id: 'fastbull', name: '法布财经', color: '#7cb305' },
  { id: 'solidot', name: 'Solidot', color: '#c41d7f' },
  { id: 'hackernews', name: 'Hacker News', color: '#ff6b00' },
  { id: 'producthunt', name: 'Product Hunt', color: '#eb2f96' },
  { id: 'github', name: 'Github', color: '#333333' },
  { id: 'bilibili', name: '哔哩哔哩', color: '#ff6699' },
  { id: 'kuaishou', name: '快手', color: '#ff4d4f' },
  { id: 'kaopu', name: '靠谱新闻', color: '#9254de' },
  { id: 'jin10', name: '金十数据', color: '#ffa940' },
  { id: 'baidu', name: '百度热搜', color: '#2b85e4' },
  { id: 'linuxdo', name: 'LINUX DO', color: '#52c41a' },
  { id: 'ghxi', name: '果核剥壳', color: '#13c2c2' },
  { id: 'smzdm', name: '什么值得买', color: '#faad14' },
  { id: 'nowcoder', name: '牛客', color: '#722ed1' }
]

// 源站点查找映射
const sourceMap = new Map(sourceList.map(source => [source.id, source]))
const sourceNameMap = new Map(sourceList.map(source => [source.name, source]))

export class NewsTagColorManager {
  // 通过ID获取颜色
  static getColorById(sourceId: string): string {
    return sourceMap.get(sourceId)?.color || '#666666'
  }

  // 通过名称获取颜色
  static getColorByName(sourceName: string): string {
    return sourceNameMap.get(sourceName)?.color || '#666666'
  }

  // 获取所有源站点信息
  static getAllSources(): SourceInfo[] {
    return sourceList
  }

  // 通过ID获取完整信息
  static getSourceById(sourceId: string): SourceInfo | undefined {
    return sourceMap.get(sourceId)
  }

  // 通过名称获取完整信息
  static getSourceByName(sourceName: string): SourceInfo | undefined {
    return sourceNameMap.get(sourceName)
  }
}

export default NewsTagColorManager
