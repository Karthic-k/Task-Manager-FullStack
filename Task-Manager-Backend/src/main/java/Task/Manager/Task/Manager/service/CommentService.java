package Task.Manager.Task.Manager.service;

import Task.Manager.Task.Manager.entity.Comment;
import Task.Manager.Task.Manager.entity.Task;
import Task.Manager.Task.Manager.entity.User;
import Task.Manager.Task.Manager.repository.CommentRepository;
import Task.Manager.Task.Manager.repository.TaskRepository;
import Task.Manager.Task.Manager.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import java.time.LocalDateTime;
import java.util.List;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CommentService {

    private final CommentRepository commentRepository;
    private final TaskRepository taskRepository;
    private final UserRepository userRepository;

    public CommentService(CommentRepository commentRepository,
                          TaskRepository taskRepository,
                          UserRepository userRepository) {
        this.commentRepository = commentRepository;
        this.taskRepository = taskRepository;
        this.userRepository = userRepository;
    }

    @Transactional
    public Comment addComment(Long taskId, Long userId, String message) {
        Task task = taskRepository.findById(taskId)
                .orElseThrow(() -> new EntityNotFoundException("Task not found: " + taskId));
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new EntityNotFoundException("User not found: " + userId));

        Comment comment = new Comment();
        comment.setTask(task);
        comment.setUser(user);
        comment.setMessage(message);
        comment.setTimestamp(LocalDateTime.now());

        return commentRepository.save(comment);
    }

    @Transactional(readOnly = true)
    public List<Comment> getCommentsByTaskId(Long taskId) {
        return commentRepository.findByTaskId(taskId);
    }
}
