import java.util.concurrent.*;
import java.util.*;

public class CallableExample {
    public static void main(String[] args) {
        // Create a fixed thread pool with 3 threads
        ExecutorService executor = Executors.newFixedThreadPool(3);

        // Create a list of Callable tasks
        List<Callable<String>> callables = new ArrayList<>();
        for (int i = 1; i <= 5; i++) {
            final int taskId = i;
            callables.add(() -> {
                Thread.sleep(1000); // Simulate some work
                return "Result from Task " + taskId;
            });
        }

        try {
            // Submit all tasks and collect futures
            List<Future<String>> futures = executor.invokeAll(callables);

            // Retrieve and print results from each future
            for (Future<String> future : futures) {
                System.out.println(future.get());
            }
        } catch (InterruptedException | ExecutionException e) {
            e.printStackTrace();
        } finally {
            // Shutdown the executor
            executor.shutdown();
        }
    }
}
