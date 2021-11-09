package soen341project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import soen341project.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, String>{

}
