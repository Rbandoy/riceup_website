import {httpClientRequest} from "../../helpers/httpClientRequest" 
export const OtpService = {
  async sendVerification(phone) {
    return await httpClientRequest.post(`http://10.0.0.62:8000/ers/api/v1/subscriber/number_verification/${phone}`);
  },
  async verifyCode(phone, code) {
    return await httpClientRequest.post(`http://10.0.0.62:8000/ers/api/v1/subscriber/verify_code/${phone}/${code}`); 
  },
} 