import {httpClientRequest} from "../../helpers/httpClientRequest" 
export const OtpService = {
  async sendVerification(phone) {
    return await httpClientRequest.post(`https://secure.riceup.store/ers/api/v1/subscriber/number_verification/${phone}`);
  },
  async verifyCode(phone, code) {
    return await httpClientRequest.post(`https://secure.riceup.store/ers/api/v1/subscriber/verify_code/${phone}/${code}`); 
  },
} 