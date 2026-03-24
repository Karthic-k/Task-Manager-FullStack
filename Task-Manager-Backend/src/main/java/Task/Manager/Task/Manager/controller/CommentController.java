package Task.Manager.Task.Manager.controller;

import Task.Manager.Task.Manager.dto.CommentRequest;
import Task.Manager.Task.Manager.entity.Comment;
import Task.Manager.Task.Manager.service.CommentService;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/comments")
public class CommentController {

    private final CommentService commentService;

    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @PostMapping
    public Comment addComment(@RequestBody CommentRequest request) {
        return commentService.addComment(request.getTaskId(), request.getUserId(), request.getMessage());
    }

    @GetMapping("/{taskId}")
    public List<Comment> getCommentsByTaskId(@PathVariable Long taskId) {
        return commentService.getCommentsByTaskId(taskId);
    }
}
