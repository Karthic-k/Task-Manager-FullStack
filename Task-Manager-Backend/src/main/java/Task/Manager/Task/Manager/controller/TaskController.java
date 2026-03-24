// Add these imports if not already present
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import com.taskmanager.entity.Task;
import com.taskmanager.service.TaskService;

@RestController
@CrossOrigin
public class TaskController {

    @Autowired
    private TaskService taskService;

    // ===== YOUR MEMBER 2 WORK =====
    @GetMapping("/tasks")
    public List<Task> getTasks(
            @RequestParam(required = false) String status,
            @RequestParam(required = false) String assignedTo) {

        return taskService.getTasks(status, assignedTo);
    }
}