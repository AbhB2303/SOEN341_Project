package soen341project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import soen341project.model.Answer;

@Repository
public interface AnswerRepository extends JpaRepository<Answer, Long>{

}
