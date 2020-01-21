//统一接口
import qs from 'qs'
import { post, get } from './ajax'
//登录接口
export function login(reqData) {
  return post("/api/clerk/login", qs.stringify(reqData))
}
