import axios from "axios";

const ANSWERS_API_BASE_URL = "http://localhost:8080/api/v1/answers"
class AnswersServices {
    getAnswers(){
        return axios.get(ANSWERS_API_BASE_URL);
    }
    createAnswer(a){
        return axios.post(ANSWERS_API_BASE_URL, a);
    }
    getQuestionById(id){
        return axios.get(ANSWERS_API_BASE_URL + '/' + id);
    }
}
export default new AnswersServices();