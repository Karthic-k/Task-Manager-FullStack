package Task.Manager.Task.Manager.dto;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class CommentRequest {
    private Long taskId;
    private Long userId;
    private String message;

}
