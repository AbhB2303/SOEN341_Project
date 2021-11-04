import axios from "axios";

const QUESTIONS_API_BASE_URL = "http://localhost:8081/api/v1/question"
class QuestionsServices {
    getQuestions(){
        return axios.get(QUESTIONS_API_BASE_URL);
    }
    createQuestion(q){
        return axios.post(QUESTIONS_API_BASE_URL, q);
    }
}
export default new QuestionsServices();