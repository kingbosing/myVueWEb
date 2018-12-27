import request from '@/utils/request'
// /api/v2/atdStatis/GetAtdRecordDetail web 获取考勤明细列表(打卡明细)
export function GetAtdRecordDetail(token, pageIndex, pageSize, status, begin, end, deptId, profileId) {
  return request({
    url: 'apix/v2/atdStatis/GetAtdRecordDetail',
    method: 'get',
    params: { token, pageIndex, pageSize, status, begin, end, deptId, profileId }
  })
}

// /api/v2/atdStatis/GetMyAtdMonth web 我的考勤-月统计
export function GetMyAtdMonth(token, year, month) {
  return request({
    url: 'apix/v2/atdStatis/GetMyAtdMonth',
    method: 'get',
    params: { token, year, month }
  })
}

// /api/v2/atdStatis/CheckAtdRecord web 获取校验考勤列表(只显示异常的考勤)
export function CheckAtdRecord(token, pageIndex, pageSize, deptId, profileId, begin, end) {
  console.log(token, pageIndex, pageSize, deptId, profileId, begin, end)
  return request({
    url: 'apix/v2/atdStatis/CheckAtdRecord',
    method: 'get',
    params: { token, pageIndex, pageSize, deptId, profileId, begin, end }
  })
}

// /api/v2/atdStatis/CorrectAtdSign web 校验单个考勤(只显示异常的考勤)
export function CorrectAtdSign(token, deptId, profileId, model) {
  return request({
    url: 'apix/v2/atdStatis/CorrectAtdSign',
    method: 'post',
    params: { token, deptId, profileId },
    data: model
  })
}

// /api/v2/atdStatis/CorrectBatchAtdSign web 批量校验考勤(只显示异常的考勤)
export function CorrectBatchAtdSign(token, model) {
  return request({
    url: 'apix/v2/atdStatis/CorrectBatchAtdSign',
    method: 'post',
    params: { token },
    data: model
  })
}

// GET /api/v2/atdStatis/GetAtdRecordMonth 月度汇总
export function GetAtdRecordMonth(token, pageIndex, pageSize, deptId, profileId, begin, end) {
  return request({
    url: 'apix/v2/atdStatis/GetAtdRecordMonth',
    method: 'get',
    params: { token, pageIndex, pageSize, deptId, profileId, begin, end }
  })
}

// /api/v2/atdStatis/GetRanking 考勤排行榜列表
export function GetRanking(token, pageIndex, pageSize, date, status, profileId, deptId) {
  console.log(token, pageIndex, pageSize, date, status, profileId, deptId)
  return request({
    url: 'apix/v2/atdStatis/GetRanking',
    method: 'get',
    params: { token, pageIndex, pageSize, date, status, profileId, deptId }
  })
}
