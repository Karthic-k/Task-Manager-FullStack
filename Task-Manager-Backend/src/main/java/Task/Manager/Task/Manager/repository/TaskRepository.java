package Task.Manager.Task.Manager.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.taskmanager.entity.Task;
import java.util.List;

public interface TaskRepository extends JpaRepository<Task, Long> {
    List<Task> findByStatus(String status);
    List<Task> findByAssignedTo(String assignedTo);
    List<Task> findByStatusAndAssignedTo(String status, String assignedTo);
}