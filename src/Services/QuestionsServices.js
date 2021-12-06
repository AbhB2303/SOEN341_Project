import axios from "axios";
const QUESTIONS_API_BASE_URL = "http://localhost:8080/api/v1/question"
const QUESTIONS_API_BEST_ANSWER = "http://localhost:8080/api/v1/best"


class QuestionsServices 
{
    getQuestions()
    {
        return axios.get(QUESTIONS_API_BASE_URL);
    }
    createQuestion(q)
    {
        return axios.post(QUESTIONS_API_BASE_URL, q);
    }
    getQuestionById(q_id)
    {
        return axios.get(QUESTIONS_API_BASE_URL + '/' + q_id);
    }
    setBestAnswer(q_and_a){
        return axios.post(QUESTIONS_API_BEST_ANSWER, q_and_a)
    }
}
export default new QuestionsServices();
