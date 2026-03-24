import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import com.taskmanager.repository.TaskRepository;
import com.taskmanager.entity.Task;
import java.util.List;

@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    // ===== YOUR MEMBER 2 WORK =====
    public List<Task> getTasks(String status, String assignedTo) {
        if (status != null && assignedTo != null) {
            return taskRepository.findByStatusAndAssignedTo(status, assignedTo);
        } else if (status != null) {
            return taskRepository.findByStatus(status);
        } else if (assignedTo != null) {
            return taskRepository.findByAssignedTo(assignedTo);
        } else {
            return taskRepository.findAll();
        }
    }
}