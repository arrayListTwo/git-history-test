import _axios from '../common/js/axios'
// 获取学校列表
export async function schools () {
  return await _axios.get('/api/schools')
}

// 获取学校信息
export async function schoolInfo (id) {
  return await _axios.get(`/api/schools/${id}`)
}

// 办学指导思想--定位与发展目标
export async function schoolGuiding (code) {
  return await _axios.get(`/api/school_guiding/${code}`)
}

// 学校主要专业--不含排名
export async function schoolMajor (code) {
  return await _axios.get(`/api/school_major/${code}`)
}

// 学校主要专业--包含排名
export async function schoolMajorScore (code) {
  return await _axios.get(`/api/school_majorscore/${code}`)
}

// 含有某个专业的所有高校
export async function hasMajorInSchool (mCode) {
  return await _axios.get(`/api/major_schools/${mCode}`)
}
